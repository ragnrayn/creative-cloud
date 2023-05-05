import "./FollowModal.css";

function FollowModal({ isOpen, setIsOpen }: any) {
    return (
        <>
            <div style={{ display: isOpen ? "block" : "none" }}>
                <div className="follow-modal" onClick={() => setIsOpen(false)}>
                    <div className="follow-content">
                        <div className="content-email">email@gmail.com</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FollowModal;