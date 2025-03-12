import { startTransition, useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import {
  SelectCategoryAtom,
  SelectCategoryListAtom,
} from 'stores/Division/division.store'
import { useDivision } from 'queries/Division/division.query'
import { PageDataType } from 'types/Notice/notice.type'
import { Division } from 'types/Division/division.type'

interface DivisionType extends Division {
  isAtv: boolean
}

export const useNoticeSidebar = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [keyword, setKeyword] = useState<string>('')
  const {
    data: CategoryData,
    fetchNextPage,
    hasNextPage,
    isLoading,
  } = useDivision(false, keyword)
  const [categoryList, setCategoryList] = useState<DivisionType[]>([])

  const [, setSelectCategory] = useRecoilState<number>(SelectCategoryAtom)
  const [, setSelectCategoryList] = useRecoilState<number[]>(
    SelectCategoryListAtom
  )
  const [pageData, setPageData] = useState<PageDataType[]>([
    { text: '공지', isAtv: false },
    { text: '공지 작성', isAtv: false },
    { text: '그룹', isAtv: false },
  ])

  const handleClickPageButton = (text?: string) => {
    switch (text) {
      case '공지':
        navigate('/notice')
        break
      case '공지 작성':
        navigate('/notice/write')
        break
      case '그룹':
        navigate('/notice/division')
        break
    }
  }

  const handleChangeCategory = (isWrite: boolean, id: number) => {
    if (isWrite) {
      setSelectCategoryList((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      )
      setCategoryList((prev) =>
        prev.map((item) => ({
          ...item,
          isAtv: item.id === id ? !item.isAtv : item.isAtv,
        }))
      )
    } else {
      setSelectCategory(id)
      setCategoryList((prev) =>
        prev.map((item) => ({ ...item, isAtv: item.id === id }))
      )
    }
  }

  useEffect(() => {
    if (CategoryData?.pages) {
      const newList = CategoryData.pages.flatMap((page) =>
        page.data.map((item) => ({ ...item, isAtv: false }))
      )
      setCategoryList(newList)
    }
  }, [CategoryData])

  useEffect(() => {
    setPageData((prevData) =>
      prevData.map((item) => {
        if (
          (pathname === '/notice' && item.text === '공지') ||
          (pathname === '/notice/write' && item.text === '공지 작성') ||
          (pathname !== '/notice' &&
            pathname !== '/notice/write' &&
            item.text === '그룹')
        ) {
          return { ...item, isAtv: true }
        }
        return { ...item, isAtv: false }
      })
    )
  }, [pathname])

  return {
    isLoading,
    pageData,
    categoryList,
    fetchNextPage,
    hasNextPage,
    handleClickPageButton,
    handleChangeCategory,
  }
}
