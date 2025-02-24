import BusList from 'components/Bus/BusList'
import SectionHeaderProvider from 'components/common/SectionHeaderProvider'
import styled from 'styled-components'

const BusListPage = () => {
  return (
    <BusContainer>
      <BusList />
    </BusContainer>
  )
}

export default BusListPage

const BusContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  
  padding: 1rem 2.5rem;
  background-color: ${({ theme }) => theme.backgroundAlternative};
`
