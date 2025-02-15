import { useState } from "react";
import * as S from "../style";
import InfiniteScroll from "react-infinite-scroller";
import { CheckmarkCircle, ChevronDown, ChevronUp, Person } from "@b1nd/dds-web";
import { useGroup } from "queries/Group/group.query";
import SkeletonComponent from "components/common/Skeleton";
import { GroupMemberType } from "repositories/Group/group.repository";

interface AddMemberItemProps {
  id: number;
  groupMemberList: GroupMemberType[];
  handleClickGroup: (id: number) => void;
  handleClickAllMember: () => void;
  handleClickMember: (id: number) => void;
}

const AddMemberItem = ({
  id,
  groupMemberList,
  handleClickGroup,
  handleClickAllMember,
  handleClickMember,
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
                <S.MemberAllSelectButton onClick={handleClickAllMember}>
                  <CheckmarkCircle
                    size={24}
                    color={groupMemberList.every((item) => item.isAtv) ? "primaryNormal" : "lineNormal"}/>
                  <p>전체</p>
                </S.MemberAllSelectButton>

                {groupMemberList?.map((item) => (
                  <S.AddMember
                    key={item.id}
                    onClick={() => handleClickMember(item.id)}>
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
                      color={item.isAtv ? "primaryNormal" : "lineNormal"}
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
