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

    onRead = (emailId) => {
        emailService.setRead(emailId)
            .then(() => {
                this.loadEmails()
            })
    }

    toggleSelectedEmail = (selectedEmail) => {
        const toggle = (selectedEmail === this.state.selectedEmail) ? null : selectedEmail
        this.setSelectedEmail(toggle)
    }

    setSelectedEmail = (selectedEmail) => {
        this.setState({ selectedEmail })
    }

    render() {
        const { emails, selectedEmail } = this.state;
        return (
            <section>
                <section className="email-grid">
                    <EmailSideBar toggleCompose={this.toggleCompose} />
                    <EmailList
                        emails={emails}
                        selectedEmail={selectedEmail}
                        onSelectPreview={this.onSelectPreview}
                        sendEmail={this.sendEmail}
                        onRemoveEmail={this.onRemoveEmail}
                        setFilter={this.setFilter}
                    />
                </section>
                {this.state.compose && <EmailCompose
                    sendEmail={this.sendEmail}
                    toggleCompose={this.toggleCompose}
                />}
            </section>
        )
    }
}
