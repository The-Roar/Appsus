const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;
import { AppHeader } from './main/cmps/AppHeader.jsx';
import { About } from './main/pages/About.jsx';
import { BooksApp } from './missBooks/pages/BooksApp.jsx';
import { KeepApp } from './missKeep/pages/KeepApp.jsx';
import { EmailApp } from './misterEmail/pages/EmailApp.jsx';
import { BookDetails } from './missBooks/pages/BookDetails.jsx';
import { Home } from './main/pages/Home.jsx';
import { KeepDetails } from './missKeep/pages/KeepDetails.jsx';
import { UserMsg } from './main/cmps/util/UserMsg.jsx';

export class App extends React.Component {
  state = {
    userMsg: {
      msg: null,
      type: null,
      isShown: false,
    },
  };

  showModal = (type, msg) => {
    this.setState({ userMsg: { isShown: true, type, msg } });
  };

  hideModal = () => {
    this.setState({ userMsg: { isShown: false, msg: null, type: null } });
  };

  render() {
    const { msg, type, isShown } = this.state.userMsg;
    return (
      <Router>
        <header>
          <AppHeader />
        </header>
        <main>
          <Switch>
            <Route component={BookDetails} path='/book/:bookId' />
            <Route component={BooksApp} path='/book' />
            <Route
              component={() => <KeepApp showUserMsg={this.showModal} />}
              exact
              path='/keep'
            />
            <Route
              component={(props) => (
                <KeepDetails {...props} showUserMsg={this.showModal} />
              )}
              exact
              path='/keep/:noteId'
            />
            <Route component={EmailApp} path='/email' />
            <Route component={About} path='/about' />
            <Route component={Home} path='/' />
          </Switch>
        </main>
        {isShown ? (
          <UserMsg msg={msg} msgType={type} hideModal={this.hideModal} />
        ) : (
          <React.Fragment />
        )}
      </Router>
    );
  }
}
