const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
import { AppHeader } from './main/cmps/AppHeader.jsx'
import { About } from './main/pages/About.jsx'
import { BooksApp } from './missBooks/pages/BooksApp.jsx'
import { KeepApp } from './missKeep/pages/KeepApp.jsx'
import { EmailApp } from './misterEmail/pages/EmailApp.jsx'
import { BookDetails } from './missBooks/pages/BookDetails.jsx'
import { Home } from './main/pages/Home.jsx'

export function App() {
    return <Router>
        <header>
            <AppHeader />
        </header>
        <main>
            <Switch>
                <Route component={BookDetails} path="/book/:bookId" />
                <Route component={BooksApp} path="/book" />
                <Route component={KeepApp} path="/keep" />
                <Route component={EmailApp} path="/email" />
                <Route component={About} path="/about" />
                <Route component={Home} path="/" />
            </Switch>
        </main>
    </Router>
}
