import InfiniteScroll from 'react-infinite-scroller';
import { ItemBox } from '../style';
import { ChevronRight } from '@b1nd/dds-web';
import { useGroup } from 'queries/Group/group.query';
import SkeletonComponent from 'components/common/Skeleton';
import { Dispatch, SetStateAction } from 'react';

const GroupItem = ({
  keyword,
  isAtv,
  setSection,
  setGroupId,
}: {
  keyword: string;
  isAtv: boolean;
  setSection: Dispatch<SetStateAction<string>>;
  setGroupId: Dispatch<SetStateAction<number | null>>;
}) => {
  const { data, fetchNextPage, hasNextPage } = useGroup(isAtv, keyword);

  return (
    <InfiniteScroll
      loadMore={() => fetchNextPage()}
      hasMore={hasNextPage}
      loader={<SkeletonComponent length={5} height={48} />}
    >
      {data?.pages.map((page) =>
        page.data.map((group: { id: number; name: string }) => (
          <ItemBox
            key={group.id}
            onClick={() => {
              setSection('groupDetail');
              setGroupId(group.id);
            }}
          >
            <p>{group.name}</p>
            <ChevronRight size={16} color="labelAssisitive" />
          </ItemBox>
        ))
      )}
    </InfiniteScroll>
  );
};

export default GroupItem;
