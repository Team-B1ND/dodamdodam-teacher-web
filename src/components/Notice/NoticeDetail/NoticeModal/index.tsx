import { DodamModal } from "@b1nd/dds-web";


interface NoticeModal {
    isOpen: boolean;
    onClose: () => void;
}


const NoticeModal = ({ isOpen, onClose }:NoticeModal) => {
    return(
        <DodamModal isOpen={isOpen} close={onClose} background={false}>
            <div></div>
        </DodamModal>
    )
}

export default NoticeModal