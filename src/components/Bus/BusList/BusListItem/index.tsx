import * as S from './style';
import { ChevronRight } from '@b1nd/dds-web';
import { Dispatch, SetStateAction } from 'react';
import { useSetRecoilState } from 'recoil';
import { SelectBusDataAtom } from 'stores/Bus/bus.store';

interface BusItemProps {
  id: number;
  name: string;
}

interface BusListItemProps {
  data: {
    data: BusItemProps[];
  };
  setSection: Dispatch<SetStateAction<string>>;
}


const BusListItem = ({ data, setSection }: BusListItemProps) => {
  const setBusData = useSetRecoilState(SelectBusDataAtom);

  return (
    <>
      {data.data.map((bus) => (
        <S.ItemBox
          key={bus.id}
          onClick={() => {
            setBusData({bus});       
            setSection('info');    
          }}
        >
          <span>{bus.name}</span>
          <ChevronRight />
        </S.ItemBox>
      ))}
    </>
  );
};

export default BusListItem;
