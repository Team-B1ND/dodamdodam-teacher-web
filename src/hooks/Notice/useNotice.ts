import { B1ndToast } from '@b1nd/b1nd-toastify'
import {
  useDeleteNoticeMutation,
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

  const [isNotice, setNotice] = useState(false)
  const detailModal = () => {
    setNotice((prev) => !prev)
  }

  const searchRef = useRef<HTMLInputElement>(null)

  const selectCategory = useRecoilValue(SelectCategoryAtom)

  const navigate = useNavigate()
  const [files, setFiles] = useState<FileData[]>([])
  const [image, setImage] = useState<string[]>([])
  const [, setImageLink] = useState<string>('')
  const [, setFileLink] = useState<string>('')

  const [writeData, setWriteData] = useState<NoticeWriteData>({
    title: '',
    content: '',
    files: [],
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

  const formData = new FormData()
  const fileUploadMutation = useFileUploadMutation()

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files: FileList | null = e.target.files
    if (!files) return

    const fileArray: File[] = Array.from(files)

    fileArray.forEach((file) => {
      formData.append('file', file)
    })

    const fileDataArray: FileData[] = await Promise.all(
      fileArray.map(async (file) => {
        const result = await fileUploadMutation.mutateAsync(
          formData.get('file')!
        )
        console.log(result)

        return {
          url: result.data,
          name: file.name,
          fileType: 'IMAGE',
        }
      })
    )

    setImage((prev) => [...prev, ...fileDataArray.map((data) => data.url)])
    setFiles((prev) => [...prev, ...fileDataArray]) // FileData 배열로 상태 업데이트
  }

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files: FileList | null = e.target.files
    if (!files) return

    const fileArray: File[] = Array.from(files)

    const fileDataArray: FileData[] = await Promise.all(
      fileArray.map(async (file) => {
        formData.append('file', file)
        const result = await fileUploadMutation.mutateAsync(
          formData.get('file')!
        )

        return {
          url: result.data,
          name: file.name,
          fileType: 'FILE ',
        }
      })
    )

    setFiles((prev) => [...prev, ...fileDataArray])
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
    if (selectedCategoryList.length < 1) {
      B1ndToast.showInfo('카테고리를 정해주세요')
      return
    }

    noticeWriteMutation.mutate(
      {
        title: writeData.title,
        content: writeData.content,
        files: files,
        divisions: selectedCategoryList,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(QUERY_KEYS.notice.notice)
          navigate('/notice')
          DodamDialog.alert('공지 작성 완료')
        },
        onError: () => {
          DodamDialog.alert('공지 작성 실패')
        },
      }
    )
  }

  const deleteNoticeMutation = useDeleteNoticeMutation()
  const deleteNotice = (id: string) => {
    deleteNoticeMutation.mutate(id, {
      onSuccess: () => {
        setSection('main')
        queryClient.invalidateQueries(QUERY_KEYS.notice.notice)
        DodamDialog.alert('공지 삭제 완료')
      },
      onError: () => {
        DodamDialog.alert('공지 삭제 실패')
      },
    })
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
    image,
    downloadFile,
    submitWrite,
    deleteNotice,
  }
}
