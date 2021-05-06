import { emailService } from '../services/email-service.js'
import { EmailSideBar } from '../cmps/EmailSideBar.jsx'
import { EmailList } from '../cmps/EmailList.jsx'
import { EmailCompose } from '../cmps/EmailCompose.jsx'

export class EmailApp extends React.Component {
    state = {
        emails: null,
        filterBy: null,
        selectedEmail: null,
        compose: false
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

    toggleSelectedEmail = (selectedEmail) => {
        this.setState({ selectedEmail })
        // if (!selectedEmail === this.state.selectedEmail) this.setState({ selectedEmail })
        // else (null) => {this.setState({ selectedEmail })}
    }

    
    setFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadEmails)
    }
    
    toggleCompose = (compose) => {
        this.setState({ compose })
    }

    sendEmail = (subject, body, time) => {
        emailService.addEmail(subject, body, time)
            .then(() => {
                this.loadEmails()
            })
    }

    onRemoveEmail = (emailId) => {
        emailService.removeEmail(emailId)
            .then(() => {
                this.loadEmails()
            })
    }

    render() {
        const { emails, selectedEmail } = this.state;
        return (
            <section>
                <section className="email-grid">
                    <EmailSideBar toggleCompose={this.toggleCompose} />
                    <EmailList emails={emails} selectedEmail={selectedEmail} toggleSelectedEmail={this.toggleSelectedEmail} sendEmail={this.sendEmail} onRemoveEmail={this.onRemoveEmail} />
                </section>
                {this.state.compose && <EmailCompose sendEmail={this.sendEmail} toggleCompose={this.toggleCompose}/>}
            </section>
        )
    }
}
