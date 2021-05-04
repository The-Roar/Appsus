import { bookService } from '../services/book-service.js'
import { BookList } from '../../missBooks/cmps/BookList.jsx'
import { BookFilter } from '../../missBooks/cmps/BookFilter.jsx'

export class BooksApp extends React.Component {

    state = {
        books: null,
        filterBy: null
    }
    componentDidMount() {
        this.loadBooks()
    }
    loadBooks() {
        bookService.query(this.state.filterBy)
            .then(books => {
                this.setState({ books })
            })
    }
    setFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadBooks)
    }
    render() {
        const { books } = this.state
        if (!books) return <div>loading...</div>
        return (
            <section>
                <BookFilter setFilter={this.setFilter} />
                <BookList books={books} />
            </section>
        )
    }
}