import InfiniteScroll from "react-infinite-scroller";
import * as S from "../style";
import { CheckmarkCircle, ChevronDown, ChevronUp, Person } from "@b1nd/dds-web";
import { useGroup } from "queries/Group/group.query";
import SkeletonComponent from "components/common/Skeleton";
import { GroupMemberResponse } from "repositories/Group/group.repository";
import { Suspense, useState } from "react";

interface AddMemberItemProps {
  id: number;
  handleClickGroup: (id: number) => void;
  groupMemberData: GroupMemberResponse;
}

const AddMemberItem = ({
  id,
  groupMemberData,
  handleClickGroup,
}: AddMemberItemProps) => {
  const { data, fetchNextPage, hasNextPage } = useGroup(false, "");
  const [filteredGroups, setFilteredGroups] = useState(
    data?.pages
      .flatMap((page) => page.data)
      .filter((group) => group.id !== id)
      .map((item) => ({ ...item, isAtv: false })) || []
  );

  const handleChangeSelectGroup = (id: number) => {
    setFilteredGroups((prev) =>
      prev.map((item) => ({
        ...item,
        isAtv: item.id === id ? !item.isAtv : false,
      }))
    );
  };

  console.log(filteredGroups)

  return (
    <InfiniteScroll
      loadMore={() => fetchNextPage()}
      hasMore={hasNextPage}
      loader={<SkeletonComponent length={5} height={48} />}>
      {filteredGroups.map((group) => {
        return (
          <S.AddMemberItemWrap key={group.id} isSelect={group.isAtv}>
            <S.AddMemberItemBox
              onClick={() => {
                handleClickGroup(group.id);
                handleChangeSelectGroup(group.id);
              }}>
              <p>{group.name}</p>
              {group.isAtv ? (
                <ChevronUp size={18} color="labelAssisitive" />
              ) : (
                <ChevronDown size={18} color="labelAssisitive" />
              )}
            </S.AddMemberItemBox>

            {group.isAtv && (
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
        );
      })}
    </InfiniteScroll>
  );
};

export default AddMemberItem;
