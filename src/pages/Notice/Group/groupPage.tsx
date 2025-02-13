import { ReactNode } from 'react';
import AddGroup from 'components/Group/AddGroup';
import GroupDetail from 'components/Group/GroupDetail';
import GroupMain from 'components/Group/GroupMain';
import { useGroup } from 'hooks/Group/useGroup';
import { GroupContainer } from './style';
import WaitingMember from 'components/Group/WaitingMember';

const GroupPage = () => {
  const { ...group } = useGroup();

  const GroupComponents: Record<string, ReactNode> = {
    main: (
      <GroupMain
        keyword={group.keyword}
        searchRef={group.searchRef}
        searchSubmit={group.searchSubmit}
        isAtv={group.isAtv}
        setAtv={group.setAtv}
        setSection={group.setSection}
        setGroupId={group.setGroupId}
      />
    ),
    createGroup: <AddGroup />,
    groupDetail: <GroupDetail setSection={group.setSection} id={group.groupId!} />,
    waitingMember: (
      <WaitingMember
        groupId={group.groupId!}
        setSection={group.setSection}
        patchGroupMemberStatus={group.patchGroupMemberStatus}
      />
    ),
  };
  return <GroupContainer>{GroupComponents[group.section] || <GroupMain {...group} />}</GroupContainer>;
};
export default GroupPage;
