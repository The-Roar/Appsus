import { emailService } from '../services/email-service.js'
import { EmailSideBar } from '../cmps/EmailSideBar.jsx'
import { EmailList } from '../cmps/EmailList.jsx'

export class EmailApp extends React.Component {
    state = {
        emails: null,
        filterBy: null,
        selectedEmail: null
    }

    componentDidMount() {
        this.loadEmails()
    }

    loadEmails() {
        emailService.query(this.state.filterBy)
            .then(emails => {
                this.setState({ emails })
            })
    }

    setFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadEmails)
    }

    render() {
        const { emails, selectedEmail } = this.state;
        if (!emails) return <div>Loading...</div>
        return (
            <section className="email-grid">
                <EmailSideBar />
                <EmailList emails={emails} setfilter={this.setFilter} />
                {/* {selectedEmail && <EmailDetails email={selectedEmail}/>} */}
            </section>
        )
    }
}
