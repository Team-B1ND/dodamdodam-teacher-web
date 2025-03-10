import { Dispatch, SetStateAction } from 'react'
import * as S from './style'
import {
  DodamDatePicker,
  DodamFilledButton,
  DodamTextField,
} from '@b1nd/dds-web'
import { useRegistBus } from 'hooks/Bus/useRegistBus'

interface BusAddProps {
  setSection: Dispatch<SetStateAction<string>>
  title: string
  onCreateBus: () => void
  section?: string
}

const BusRegisterTemplate = ({
  setSection,
  title,
  onCreateBus,
  section,
}: BusAddProps) => {
  const { busData, handleBusData, handleLeaveDataDate } = useRegistBus()

  return (
    <S.BusAddContainer>
      <S.BusAddTitleWrap>
        <h1>{title}</h1>
      </S.BusAddTitleWrap>
      <S.BusAddForm>
        <DodamTextField
          id='busName'
          label='버스 이름'
          name='busName'
          type='text'
          value={busData.busName}
          onChange={handleBusData}
        />
        <DodamTextField
          id='description'
          label='버스 설명'
          name='description'
          type='text'
          value={busData.description}
          onChange={handleBusData}
        />
        <S.BusDateWrap>
          <p>출발 시간</p>
          <div>
            <DodamDatePicker
              itemKey='leaveTimeDatePicker'
              onChange={(e) => handleLeaveDataDate(e)}
              value={busData.leaveTime}
              title='출발 시간'
              typography={['Headline', 'Regular']}
              color='primaryNormal'
              iconSize={20}
            />
            <input type='time' />
          </div>
        </S.BusDateWrap>
        <S.BusTimeWrap>
          <p>소요 시간</p>
          <input type='time' />
        </S.BusTimeWrap>
        <DodamTextField
          id='peopleLimit'
          label='인원 제한'
          type='text'
          name='peopleLimit'
          value={
            busData.peopleLimit === 0 ? '' : busData.peopleLimit.toString()
          }
          onChange={handleBusData}
        />
      </S.BusAddForm>
      <S.BusButtonWrap>
        <DodamFilledButton
          size='Large'
          text={section === 'presetAdd' ? '버스 등록' : '프리셋'}
          textTheme='staticBlack'
          typography={['Body1', 'Bold']}
          backgroundColorType='Assistive'
          width={section === 'presetAdd' ? 100 : 120}
          onClick={() =>
            setSection(section === 'presetAdd' ? 'add' : 'presetAdd')
          }
        />
        <DodamFilledButton
          size='Large'
          text='등록'
          textTheme='staticWhite'
          typography={['Body1', 'Bold']}
          backgroundColorType='Primary'
          width={100}
          onClick={onCreateBus}
        />
      </S.BusButtonWrap>
    </S.BusAddContainer>
  )
}

export default BusRegisterTemplate
