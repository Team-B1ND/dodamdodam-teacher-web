import { ReactNode } from 'react'
import AddDivision from 'components/Division/AddDivision'
import DivisionDetail from 'components/Division/DivisionDetail'
import DivisionMain from 'components/Division/DivisionMain'
import { useDivision } from 'hooks/Division/useDivision'
import { DivisionContainer } from './style'
import AddMember from 'components/Division/AddMember'
import WaitingMember from 'components/Division/WaitingMember'

const DivisionPage = () => {
  const { ...division } = useDivision()

  const DivisionComponent: Record<string, ReactNode> = {
    main: (
      <DivisionMain
        keyword={division.keyword}
        searchRef={division.searchRef}
        searchSubmit={division.searchSubmit}
        isAtv={division.isAtv}
        setIsAtv={division.setIsAtv}
        setSection={division.setSection}
        setdivisionId={division.setdivisionId}
      />
    ),
    createDivision: <AddDivision />,
    divisionDetail: (
      <DivisionDetail setSection={division.setSection} id={division.divisionId!} />
    ),
    waitingMember: (
      <WaitingMember
        divisonId={division.divisionId!}
        setSection={division.setSection}
        patchDivisionMemberStatus={division.patchDivisionMemberStatus}
      />
    ),
    addMember: (
      <AddMember divisionId={division.divisionId!} setSection={division.setSection} />
    ),
  }
  return (
    <DivisionContainer>
      {DivisionComponent[division.section!] || <DivisionMain {...division} />}
    </DivisionContainer>
  )
}
export default DivisionPage
