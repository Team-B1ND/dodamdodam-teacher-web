import InfiniteScroll from 'react-infinite-scroller';
import { AddMemberItemBox } from '../style';
import { ChevronDown } from '@b1nd/dds-web';
import { useGroup } from 'queries/Group/group.query';
import SkeletonComponent from 'components/common/Skeleton';
import { Suspense } from 'react';

interface AddMemberItemProps {
  id: number;
}

const AddMemberItem = ({ id }: AddMemberItemProps) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useGroup(false);
  const filteredGroups = data?.pages.flatMap((page) => page.data).filter((group) => group.id !== id) || [];

  return (
    <Suspense>
      <InfiniteScroll
        loadMore={() => fetchNextPage()}
        hasMore={hasNextPage}
        loader={<SkeletonComponent length={5} height={48} />}
      >
        {filteredGroups.map((group, idx) => (
          <AddMemberItemBox key={group.id}>
            <p>{group.name}</p>
            <ChevronDown size={16} color="labelAssisitive" />
          </AddMemberItemBox>
        ))}
      </InfiniteScroll>
    </Suspense>
  );
};

export default AddMemberItem;
