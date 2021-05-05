// import { EmailFilter } from './EmailFilter.jsx'
import {EmailPreview} from './EmailPreview.jsx'

export function EmailList({ emails, setfilter }) {
    return (
        <section className="email-list-container">
            {/* <EmailFilter setfilter={setfilter} /> */}
            {emails.map(email => <EmailPreview email={email} key={email.id}/>)}
        </section>
    )
}