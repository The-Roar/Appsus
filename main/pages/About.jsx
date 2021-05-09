import { AnimatedTitle } from '../cmps/AnimatedTitle.jsx';

export function About() {
  return (
    <section className='about-page center-margin'>
      <AnimatedTitle title='About Us' />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim odit
        cupiditate error consequuntur iste, aliquid natus praesentium vero quos
        quas pariatur dolore! Minus consectetur sint et, dolorem tenetur placeat
        voluptatum? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </p>
      <section className='developers'>
        <div>
          <h2>Gal Golikov</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
            debitis ipsam molestias quasi tempora vero corrupti qui natus, quos
            minima saepe ratione!
          </p>
          <img src='/main/assets/img/avatar.png' alt='avatar'></img>
        </div>
        <div>
          <h2>Dror Ringer</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            nobis error doloremque ratione inventore, enim, dolore aspernatur
            distinctio voluptate quam porro.
          </p>
          <img src='/main/assets/img/avatar.png' alt='avatar'></img>
        </div>
      </section>
    </section>
  );
}
