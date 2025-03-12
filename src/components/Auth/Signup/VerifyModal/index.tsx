import {
  DodamFilledButton,
  DodamFilledTextField,
  DodamModal,
} from '@b1nd/dds-web'
import { ModalBox, ButtonBox } from './style'
import { Dispatch, SetStateAction } from 'react'

interface ModalProps {
  isOpen: boolean
  handleClose: () => void
  isAuthCode: string
  setAuthCode: Dispatch<SetStateAction<string>>
  onSubmit: () => void
  sendLoading: boolean
  reqLoading: boolean
}

const VerifieModal = ({
  isOpen,
  handleClose,
  isAuthCode,
  setAuthCode,
  onSubmit,
  sendLoading,
  reqLoading,
}: ModalProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthCode(e.target.value)
  }

  return (
    <DodamModal isOpen={isOpen} background={true}>
      <ModalBox>
        <p>인증코드를 입력해주세요</p>
        <DodamFilledTextField
          type='text'
          label='인증코드'
          value={isAuthCode}
          placeholder='인증코드를 입력하세요'
          onChange={handleChange}
          showIcon={false}
          
        />
        <ButtonBox>
          <DodamFilledButton
            backgroundColorType='Assisitive'
            enabled={true}
            size='Small'
            onClick={handleClose}
          >
            취소
          </DodamFilledButton>
          <DodamFilledButton
            size='Small'
            enabled={true}
            textTheme='staticWhite'
            onClick={!sendLoading && !reqLoading ? onSubmit : undefined}
          >
            {reqLoading
              ? '인증코드 전송중...'
              : sendLoading
              ? '로딩중..'
              : '확인'}
          </DodamFilledButton>
        </ButtonBox>
      </ModalBox>
    </DodamModal>
  )
}

export default VerifieModal
