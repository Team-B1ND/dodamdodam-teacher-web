import { B1ndToast } from '@b1nd/b1nd-toastify'
import {
  useFileUploadMutation,
  useNoticeWriteMutation,
} from 'queries/Notice/notice.query'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { DodamDialog } from '@b1nd/dds-web'
import { Form, useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { FileData, NoticeWriteData } from 'repositories/Notice/noticeRepository'
import {
  SelectCategoryListAtom,
  SelectCategoryAtom,
} from 'stores/Division/division.store'
import { Notice } from 'types/Notice/notice.type'
import { useQueryClient } from 'react-query'
import { QUERY_KEYS } from 'queries/queryKey'

export const useNotice = () => {
  const queryClient = useQueryClient()
  //detail과 main이동 hook
  const [section, setSection] = useState<'main' | 'detail'>('main')
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null)

  const openDetail = (notice: Notice) => {
    setSelectedNotice(notice)
    setSection('detail')
  }

  const goBackToMain = () => {
    setSelectedNotice(null)
    setSection('main')
  }

  //
  const [isNotice, setNotice] = useState(false)
  const detailModal = () => {
    setNotice((prev) => !prev)
  }

  const searchRef = useRef<HTMLInputElement>(null)

  const selectCategory = useRecoilValue(SelectCategoryAtom)

  const navigate = useNavigate()
  const [files, setFiles] = useState<string[]>([])
  const [image, setImage] = useState<string[]>([])
  const [, setImageLink] = useState<string>('');
  const [, setFileLink] = useState<string>('');

  const [writeData, setWriteData] = useState<NoticeWriteData>({
    title: '',
    content: '',
    divisions: [],
  })
  const selectedCategoryList = useRecoilValue(SelectCategoryListAtom)

  useEffect(() => {
    setWriteData({
      ...writeData,
      divisions: selectedCategoryList,
    })
  }, [files, selectedCategoryList])

  const handleWriteDataChange = useCallback(
    (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
      const { name, value } = e.target
      setWriteData((prev) => ({ ...prev, [name]: value }))
    },
    [setWriteData]
  )

  const imageRef = useRef<HTMLInputElement>(null)
  const fileRef = useRef<HTMLInputElement>(null)

  const handleImageClick = () => {
    imageRef.current?.click()
  }

  const handleFileClick = () => {
    fileRef.current?.click()
  }

  // local file url trnasformer
  const blobToBase64 = (blob: Blob) => {
    return new Promise((resolve) => {
      const reader = new FileReader()
      reader.onloadend = () => {
        resolve(reader.result as string)
      }
      reader.readAsDataURL(blob)
    })
  }

  const formData = new FormData()
  const fileUploadMutation = useFileUploadMutation()

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files: FileList | null = e.target.files
    if (!files) return

    const fileArray: File[] = Array.from(files)
    const fileUrls: string[] = []

    for (let i = 0; i < fileArray.length; i++) {
      const currentFile = fileArray[i]
      const imageUrl = URL.createObjectURL(currentFile)
      fileUrls.push(imageUrl)
    }

    setImage((prev) => [...prev, ...fileUrls])

    fileArray.forEach((file) => {
      formData.append('files', file)
    })

    fileUploadMutation.mutate(formData.get('files')!, {
      onSuccess: (data) => {
        setImageLink(data.data.data)
      },
      onError: () => {
        B1ndToast.showError('이미지 업로드 실패!')
      },
    })
  }

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files: FileList | null = e.target.files
    if (!files) return

    const fileArray: File[] = Array.from(files)
    const fileUrls: string[] = []

    for (let i = 0; i < fileArray.length; i++) {
      const currentFile = fileArray[i]
      const fileUrl = URL.createObjectURL(currentFile)
      fileUrls.push(fileUrl)
    }

    setFiles((prev) => [...prev, ...fileUrls])

    fileArray.forEach((file) => {
      formData.append('files', file)
    })

    fileUploadMutation.mutate(formData.get('files')!, {
      onSuccess: (data) => {
        setFiles((prev) => [...prev, data.data.data])
      },
      onError: () => {
        B1ndToast.showError('파일 업로드 실패!')
      },
    })
  }

  const downloadFile = (url: string, fileName: string) => {
    // axios는 blob을 지원하지 않아 fetch로 대체
    fetch(url, { method: 'GET' })
      .then((res) => {
        return res.blob()
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = fileName
        document.body.appendChild(a)
        a.click()
        setTimeout(() => {
          window.URL.revokeObjectURL(url)
        }, 60000)
        a.remove()
      })
      .catch((err) => {
        B1ndToast.showError('파일 다운로드 실패')
      })
  }

  const noticeWriteMutation = useNoticeWriteMutation()
  const submitWrite = () => {
    if (selectedCategoryList.length < 0) {
      B1ndToast.showInfo('카테고리를 정해주세요')
      return
    }

    noticeWriteMutation.mutate(
      {
        title: writeData.title,
        content: writeData.content,
        divisions: selectedCategoryList,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(QUERY_KEYS.notice.notice)
          navigate('/notice')
          DodamDialog.alert('공지사항 작성 완료')
        },
        onError: () => {
          DodamDialog.alert('공지사항 작성 실패')
        },
      }
    )
  }

  return {
    selectedNotice,
    section,
    selectCategory,
    searchRef,
    writeData,
    isNotice,
    detailModal,
    openDetail,
    goBackToMain,
    handleWriteDataChange,
    imageRef,
    handleImageClick,
    fileRef,
    handleFileClick,
    handleImageChange,
    handleFileChange,
    files,
    submitWrite,
    downloadFile,
  }
}
