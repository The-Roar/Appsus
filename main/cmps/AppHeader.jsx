const { NavLink, withRouter } = ReactRouterDOM;
class _AppHeader extends React.Component {
  state = {
    logo: 'main/assets/img/main-logo.png',
  };

  changeLogo = (pathname) => {
    if (pathname.includes('/book'))
      this.setState({ logo: '../../missBooks/assets/img/books-logo.png' });
    else if (pathname.includes('/keep'))
      this.setState({ logo: '../../missKeep/assets/img/keep-logo.png' });
    else if (pathname.includes('/email'))
      this.setState({ logo: '../../misterEmail/assets/img/email-logo.png' });
    else this.setState({ logo: 'main/assets/img/main-logo.png' });
  };

  componentDidMount() {
    this.changeLogo(this.props.location.pathname);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.changeLogo(this.props.location.pathname);
    }
  }

  render() {
    return (
      <div className='header-content container'>
        <div className='logo'>
          <img src={this.state.logo} alt='logo' />
        </div>
        <nav>
          <ul className='clean-list'>
            <li>
              <NavLink exact to='/'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact to='/book'>
                Books
              </NavLink>
            </li>
            <li>
              <NavLink exact to='/email'>
                Email
              </NavLink>
            </li>
            <li>
              <NavLink exact to='/keep'>
                Keep
              </NavLink>
            </li>
            <li>
              <NavLink exact to='/about'>
                About Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export const AppHeader = withRouter(_AppHeader);
