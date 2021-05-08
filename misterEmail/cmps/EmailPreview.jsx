export function EmailPreview({ email, selectedEmail, onSelectPreview, onRemoveEmail }) {
    const subject = (email.subject) ? email.subject : '[no subject]';
    const subBody = ((selectedEmail === email.id || !email.body) ? '' : ' - ' + email.body);

    return (
        <div className={`email-preview ${(selectedEmail === email.id) ? "selected" : ""} ${(!email.isRead) ? "unread" : ""}`} onClick={() => { onSelectPreview(email.id) }}>
            <div className="email-details-grid">
                <h6 className="email-time">{email.date}</h6>
                <div className="email-subject">{selectedEmail === email.id && "Subject: "}{subject}<span className="sub-body">{subBody}</span></div>
                <img className="btn-remove" src="misterEmail\assets\img\dustbin.png" onClick={() => onRemoveEmail(email.id)} />
            </div>
            {selectedEmail === email.id && email.body && <h6 className="email-body">{email.body}</h6>}
        </div>
    )
}