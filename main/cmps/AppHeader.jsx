const { NavLink } = ReactRouterDOM;
export function AppHeader() {
  const pathname = window.location.href;
  let logo = '..assetsimgmain-logo.png';
  if (pathname.includes('/book'))
    logo = '../../missBooks/assets/img/books-logo.png';
  else if (pathname.includes('/keep'))
    logo = '../../missKeep/assets/img/keep-logo.png';
  else if (pathname.includes('/email'))
    logo = '../../misterEmail/assets/img/email-logo.png';
  else logo = '..assetsimgmain-logo.png';

  return (
    <div className='header-content container'>
      <div className='logo'>
        <img src={logo} alt='logo' />
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
