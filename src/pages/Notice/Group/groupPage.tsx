import { ReactNode } from 'react';
import AddGroup from 'components/Group/AddGroup';
import GroupDetail from 'components/Group/GroupDetail';
import GroupMain from 'components/Group/GroupMain';
import { useGroup } from 'hooks/Group/useGroup';
import { GROUP_SECTION_NAME } from 'constants/Group/group.constants';
import {GroupContainer} from "./style";

const GroupPage = () => {
    const {...group} = useGroup();
    
    const GroupComponents: Record<string, ReactNode> ={
        main: <GroupMain
        searchRef={group.searchRef}
        searchSubmit={group.searchSubmit}
        isAtv={group.isAtv}
        setAtv={group.setAtv}
        setSection={group.setSection}
        />,
        createGroup: <AddGroup />,
        groupDetail: <GroupDetail />,

    }
  return (
    <GroupContainer>
       {GroupComponents[group.section] || <GroupMain {...group} />}
    </GroupContainer>
  );
};
export default GroupPage;
