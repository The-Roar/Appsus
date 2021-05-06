export function EmailPreview({ email, selectedEmail, toggleSelectedEmail, onRemoveEmail }) {
    const subject = (email.subject) ? email.subject : '[no subject]';

    return (
        <div className={`email-preview ${(!email.isRead) ? "unread" : ""}`} onClick={() => { toggleSelectedEmail(email.id) }}>
        {/* <div className="email-preview" onClick={() => { toggleSelectedEmail(email.id) }}> */}
            <div className="email-details-grid">
                <h6 className="email-time">{email.date}</h6>
                <h6 className="email-subject">Subject: {subject}</h6>
                <img className="btn-remove" src="misterEmail\assets\img\dustbin.png" onClick={() => onRemoveEmail(email.id)} />
            </div>
            {selectedEmail === email.id && <h6 className="email-body">{email.body}</h6>}
        </div>
    )
}