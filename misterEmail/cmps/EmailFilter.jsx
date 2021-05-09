export class EmailFilter extends React.Component {
    state = {
        filterBy: {
            txt: '',
            read: ''
        }
    }

    handleChange = (ev) => {
        const field = ev.target.name;
        const value = ev.target.value;
        this.setState(
            { filterBy: { ...this.state.filterBy, [field]: value } },
            () => {
                this.props.setFilter(this.state.filterBy);
            }
        )
    }

    render() {
        const { txt, read } = this.state.filterBy;
        return (
            <div className="main-filter-container">
                <input className="filter-txt" type="search" name="txt" value={txt} onChange={this.handleChange} placeholder="Search email" />
                <select className="filter-read" name="read" value={read} onChange={this.handleChange}>
                    <option value="all">Filter all</option>
                    <option value="unread">Filter unread</option>
                    <option value="read">Filter read</option>
                </select>
            </div>
        )
    }
}