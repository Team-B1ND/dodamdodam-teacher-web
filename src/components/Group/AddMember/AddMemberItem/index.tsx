import InfiniteScroll from "react-infinite-scroller";
import * as S from "../style";
import { CheckmarkCircle, ChevronDown, ChevronUp, Person } from "@b1nd/dds-web";
import { useGroup } from "queries/Group/group.query";
import SkeletonComponent from "components/common/Skeleton";
import { GroupMemberResponse } from "repositories/Group/group.repository";
import { Suspense } from "react";

interface AddMemberItemProps {
  id: number;
  selectGroupId: number;
  handleClickGroup: (id: number) => void;
  groupMemberData: GroupMemberResponse;
}

const AddMemberItem = ({
  id,
  selectGroupId,
  groupMemberData,
  handleClickGroup,
}: AddMemberItemProps) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useGroup(false, "");
  const filteredGroups = data?.pages.flatMap((page) => page.data).filter((group) => group.id !== id) || [];

  return (
    <InfiniteScroll
      loadMore={() => fetchNextPage()}
      hasMore={hasNextPage}
      loader={<SkeletonComponent length={5} height={48} />}>
      {filteredGroups.map((group) => (
        <S.AddMemberItemWrap
          key={group.id}
          isSelect={group.id === selectGroupId}>
          <S.AddMemberItemBox onClick={() => handleClickGroup(group.id)}>
            <p>{group.name}</p>
            {group.id === selectGroupId ? (
              <ChevronUp size={18} color="labelAssisitive" />
            ) : (
              <ChevronDown size={18} color="labelAssisitive" />
            )}
          </S.AddMemberItemBox>

          {group.id === selectGroupId && (
            <S.AddMemberItem>
              <S.MemberAllSelectButton>
                <CheckmarkCircle size={24} color="primaryNormal" />
                <p>전체</p>
              </S.MemberAllSelectButton>

              {groupMemberData?.data.map((item) => (
                <S.AddMember key={item.id}>
                  <S.AddMemberInfo>
                    {item.profileImage ? (
                      <img src={item.profileImage} />
                    ) : (
                      <S.AddMemberIconWrap>
                        <Person size={15} color="fillAlternative" />
                      </S.AddMemberIconWrap>
                    )}
                    <p>{item.memberName}</p>
                  </S.AddMemberInfo>
                  <CheckmarkCircle
                    size={24}
                    color="primaryNormal"
                    $svgStyle={{ margin: "4px" }}
                  />
                </S.AddMember>
              ))}
            </S.AddMemberItem>
          )}
        </S.AddMemberItemWrap>
      ))}
    </InfiniteScroll>
  );
};

export default AddMemberItem;
