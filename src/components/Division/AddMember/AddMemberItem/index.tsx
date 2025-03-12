import { useState } from 'react'
import * as S from '../style'
import InfiniteScroll from 'react-infinite-scroller'
import { CheckmarkCircle, ChevronDown, ChevronUp, Person } from '@b1nd/dds-web'
import { useDivision } from 'queries/Division/division.query'
import SkeletonComponent from 'components/common/Skeleton'
import { DivisionMemberType } from 'repositories/Division/division.repository'

interface AddMemberItemProps {
  id: number
  divisionMemberList: DivisionMemberType[]
  handleClickDivision: (id: number) => void
  handleClickAllMember: () => void
  handleClickMember: (id: string) => void
}

const AddMemberItem = ({
  id,
  divisionMemberList,
  handleClickDivision,
  handleClickAllMember,
  handleClickMember,
}: AddMemberItemProps) => {
  const { data, fetchNextPage, hasNextPage } = useDivision(false, '')
  const [filteredDivision, setFilteredDivision] = useState(
    data?.pages
      .flatMap((page) => page.data)
      .filter((division) => division.id !== id)
      .map((item) => ({ ...item, isAtv: false })) || []
  )

  const handleChangeSelectDivision = (id: number) => {
    setFilteredDivision((prev) =>
      prev.map((item) => ({
        ...item,
        isAtv: item.id === id ? !item.isAtv : false,
      }))
    )
  }

  return (
    <InfiniteScroll
      loadMore={() => fetchNextPage()}
      hasMore={hasNextPage}
      loader={<SkeletonComponent length={5} height={48} />}
    >
      {filteredDivision.map((division) => {
        return (
          <S.AddMemberItemWrap key={division.id} isSelect={division.isAtv}>
            <S.AddMemberItemBox
              onClick={() => {
                handleClickDivision(division.id)
                handleChangeSelectDivision(division.id)
              }}
            >
              <p>{division.name}</p>
              {division.isAtv ? (
                <ChevronUp size={18} color='labelAssistive' />
              ) : (
                <ChevronDown size={18} color='labelAssistive' />
              )}
            </S.AddMemberItemBox>

            {division.isAtv && divisionMemberList.length !== 0 && (
              <S.AddMemberItem>
                <S.MemberAllSelectButton onClick={handleClickAllMember}>
                  <CheckmarkCircle
                    size={24}
                    color={
                      divisionMemberList.every((item) => item.isAtv)
                        ? 'primaryNormal'
                        : 'lineNormal'
                    }
                  />
                  <p>전체</p>
                </S.MemberAllSelectButton>

                {divisionMemberList?.map((item) => (
                  <S.AddMember
                    key={item.id}
                    onClick={() => handleClickMember(item.memberId)}
                  >
                    <S.AddMemberInfo>
                      {item.profileImage ? (
                        <img src={item.profileImage} />
                      ) : (
                        <S.AddMemberIconWrap>
                          <Person size={15} color='fillAlternative' />
                        </S.AddMemberIconWrap>
                      )}
                      <p>{item.memberName}</p>
                    </S.AddMemberInfo>
                    <CheckmarkCircle
                      size={24}
                      color={item.isAtv ? 'primaryNormal' : 'lineNormal'}
                      $svgStyle={{ margin: '4px' }}
                    />
                  </S.AddMember>
                ))}
              </S.AddMemberItem>
            )}
          </S.AddMemberItemWrap>
        )
      })}
    </InfiniteScroll>
  )
}

export default AddMemberItem
