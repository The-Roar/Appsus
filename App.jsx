const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
import { AppHeader } from './cmps/AppHeader.jsx'
import { About } from './pages/About.jsx'
import { BookApp } from './pages/BookApp.jsx'
import { KeepApp } from './pages/KeepApp.jsx'
import { EmailApp } from './pages/EmailApp.jsx'
import { BookDetails } from './pages/BookDetails.jsx'
import { Home } from './pages/Home.jsx'

export function App() {
    return <Router>
        <header>
            <AppHeader />
        </header>
        <main>
            <Switch>
                <Route component={BookDetails} path="/book/:bookId" />
                <Route component={BookApp} path="/book" />
                <Route component={KeepApp} path="/keep" />
                <Route component={EmailApp} path="/email" />
                <Route component={About} path="/about" />
                <Route component={Home} path="/" />
            </Switch>
        </main>
    </Router>
}