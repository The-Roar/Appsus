import { AnimatedTitle } from '../cmps/AnimatedTitle.jsx';
const { Link } = ReactRouterDOM;

export function Home() {
  return (
    <section className='home-page center-margin'>
      <AnimatedTitle title='WELCOME' />
      <p>
        AppSus gives you a set of apps for your everyday use, all in one spot!
      </p>
      <section className='home-links'>
        <Link to='/book' className='blue'>
          <div>
            <h2>MissBooks</h2>
            <span>Your books manager</span>
            <div className='logo'>
              <img src='missBooks/assets/img/books-logo.png' alt='missBooks' />
            </div>
          </div>
        </Link>
        <Link to='/keep' className='green'>
          <div>
            <h2>MissKeep</h2>
            <span>Your notes manager</span>
            <div className='logo'>
              <img src='missKeep/assets/img/keep-logo.png' alt='missKeep' />
            </div>
          </div>
        </Link>
        <Link to='/email' className='yellow'>
          <div>
            <h2>MisterEmail</h2>
            <span>Your email manager</span>
            <div className='logo'>
              <img
                src='misterEmail/assets/img/email-logo.png'
                alt='misterEmail'
              />
            </div>
          </div>
        </Link>
        <Link to='/about' className='red'>
          <div>
            <h2>About Us</h2>
            <span>Yours truely</span>
            <i className='far fa-smile-wink'></i>
          </div>
        </Link>
      </section>
    </section>
  );
}
