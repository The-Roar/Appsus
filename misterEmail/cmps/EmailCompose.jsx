export class EmailCompose extends React.Component {
    state = {
        subject: '',
        body: ''
    }

    handleChange = (ev) => {
        const field = ev.target.name;
        this.setState({ [field]: ev.target.value })
    }

    onSendEmail = () => {
        if (this.state.subject || this.state.body) {
            this.props.sendEmail(this.state.subject, this.state.body, Date.now())
            this.onCloseModal()
        }
    }

    onCloseModal = () => {
        this.props.toggleCompose(false);
    }

    render() {
        return (
            <div className="compose-modal">
                <div className="compose-header"></div>
                <button className="compose-x" onClick={this.onCloseModal}>✖</button>
                <h3 className="compose-title">New Email</h3>
                <form className="compose-form" onSubmit={this.onSendEmail}>
                    <input className="compose-subject" type="text" name="subject" onChange={this.handleChange} placeholder="Subject" />
                    <textarea className="compose-body" name="body" cols="30" rows="20" onChange={this.handleChange} />
                    <button type="submit" className="compose-send">Send</button>
                </form>
            </div>
        )
    }
}