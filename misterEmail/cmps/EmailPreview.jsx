const { Link } = ReactRouterDOM

export function EmailPreview({ email }) {
    const subject = (email.subject) ? email.subject : '[no subject]';
    const time = email.date;
    // const body = email.body;
    const body = (email.body.length > 200) ? email.body.slice(0, 200) + '...': email.body;

    return (
        <div className="email-preview">
            <h6 className="email-subject">Subject: {subject}</h6>
            <h6 className="email-time">{time}</h6>
            <h6 className="email-body">{body}</h6>
        </div>
    )
}