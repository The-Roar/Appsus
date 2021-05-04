import { emailService } from "../../services/email-service"

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
            <section>
                <EmailList emails={emails} />
                {selectedEmail && <EmailDetails email={selectedEmail}/>}
            </section>
        )
    }
}