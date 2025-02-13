import InfiniteScroll from "react-infinite-scroller";
import { ItemBox } from "../style";
import { ChevronRight } from "@b1nd/dds-web";
import { useGroup } from "queries/Group/group.query";
import SkeletonComponent from "components/common/Skeleton";

const GroupItem = ({ isAtv }: { isAtv: boolean }) => {
  const { data, fetchNextPage, hasNextPage } = useGroup(isAtv);


  return (
    <InfiniteScroll
      loadMore={() => fetchNextPage()}
      hasMore={hasNextPage}
      loader={<SkeletonComponent length={5} height={48}/>}
    >
      {data?.pages.map((page) =>
        page.data.map((group: { id: number; name: string }) => (
          <ItemBox key={group.id}>
            <p>{group.name}</p>
            <ChevronRight size={16} color="labelAssisitive" />
          </ItemBox>
        ))
      )}
    </InfiniteScroll>
  );
};

export default GroupItem;
