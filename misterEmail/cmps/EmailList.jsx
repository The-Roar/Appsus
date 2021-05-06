// import { EmailFilter } from './EmailFilter.jsx'
import { EmailPreview } from './EmailPreview.jsx'

export function EmailList({emails, selectedEmail, toggleSelectedEmail, sendEmail, onRemoveEmail}) {
    if (!emails) return <div>Loading...</div>
    return (
        <section className="email-list-container">
            {/* <EmailFilter setfilter={setfilter} /> */}
            {emails.map(email => <EmailPreview email={email} selectedEmail={selectedEmail} toggleSelectedEmail={toggleSelectedEmail} sendEmail={sendEmail} onRemoveEmail={onRemoveEmail} key={email.id} />)}
        </section>
    )
}