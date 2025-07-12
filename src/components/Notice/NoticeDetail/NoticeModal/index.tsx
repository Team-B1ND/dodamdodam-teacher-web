import { DodamModal } from '@b1nd/dds-web'
import { NoticeModalBox } from './style'
import { DodamDivider } from '@b1nd/dds-web'
import { useNotice } from 'hooks/Notice/useNotice'
interface NoticeModal {
  isOpen: boolean
  onClose: () => void
  noticeId: string
}

const NoticeModal = ({ isOpen, onClose, noticeId }: NoticeModal) => {
  const { deleteNotice } = useNotice()
  return (
    <DodamModal
      isOpen={isOpen}
      close={onClose}
      customStyle={{ top: '-25%', left: '13%' }}
      $background={true}
    >
      <NoticeModalBox>
        <span>수정</span>
        <DodamDivider type='Small' />
        <span onClick={() => deleteNotice(noticeId)}>삭제</span>
      </NoticeModalBox>
    </DodamModal>
  )
}

export default NoticeModal
