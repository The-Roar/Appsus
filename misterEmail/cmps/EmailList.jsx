import { EmailFilter } from './EmailFilter.jsx'
import { EmailPreview } from './EmailPreview.jsx'

export function EmailList({ emails, selectedEmail, onSelectPreview, sendEmail, onRemoveEmail, setFilter}) {
    if (!emails) return <div>Loading...</div>
    return (
        <section className="email-list-container">
            <EmailFilter setFilter={setFilter} />
            {emails.map(email => <EmailPreview
                email={email}
                selectedEmail={selectedEmail}
                onSelectPreview={onSelectPreview}
                sendEmail={sendEmail}
                onRemoveEmail={onRemoveEmail}
                key={email.id}
            />)}
        </section>
    )
}