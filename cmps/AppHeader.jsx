
const { NavLink } = ReactRouterDOM
export function AppHeader(){
    const pathname = window.location.pathname; 
    console.log(pathname);
    // const logo =
    return <div className="header-content container">
        <div className="logo">
            <img src="../assets/img/logo.png" alt="logo"/> 
        </div>
        <nav>
            <ul className="clean-list">
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink exact to="/book">Books</NavLink></li>
                <li><NavLink exact to="/email">Email</NavLink></li>
                <li><NavLink exact to="/keep">Keep</NavLink></li>
                <li><NavLink exact to ="/about">About Us</NavLink></li>
            </ul>
        </nav>
    </div>
}
