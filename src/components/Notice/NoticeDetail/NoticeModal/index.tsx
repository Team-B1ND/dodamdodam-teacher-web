import { DodamModal } from "@b1nd/dds-web";
import { NoticeModalBox } from "./style";
import { DodamDivider } from "@b1nd/dds-web";
interface NoticeModal {
    isOpen: boolean;
    onClose: () => void;
}


const NoticeModal = ({ isOpen, onClose }:NoticeModal) => {
    return(
        <DodamModal 
            isOpen={isOpen} 
            close={onClose} 
            background={false} 
            customStyle={{ top: '-25%', left: '13%' }}
            >
            <NoticeModalBox>
            <span>수정</span>
            <DodamDivider type="Small"/>
            <span>삭제</span>
            </NoticeModalBox>
        </DodamModal>
    )
}

export default NoticeModal