import { ReactNode } from 'react';
import AddGroup from 'components/Group/AddGroup';
import GroupDetail from 'components/Group/GroupDetail';
import GroupMain from 'components/Group/GroupMain';
import { useGroup } from 'hooks/Group/useGroup';
import { GROUP_SECTION_NAME } from 'constants/Group/group.constants';
import {GroupContainer} from "./style";

const GroupPage = () => {
    const {...group} = useGroup();
    const GroupComponents: ReactNode[] =[
        <GroupMain/>,
        <AddGroup/>,
        <GroupDetail/>,

    ]
  return (
    <GroupContainer>
     {GroupComponents.map((component, idx)=>{
        return group.section === GROUP_SECTION_NAME[idx].title && component;
     })}
    </GroupContainer>
  );
};
export default GroupPage;
