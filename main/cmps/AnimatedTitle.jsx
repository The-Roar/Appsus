export function AnimatedTitle({ title }) {
  return (
    <section className='animated-title'>
      <svg width='100%' height='100%'>
        <text x='50%' y='60%' text-anchor='middle'>
          {title}
        </text>
      </svg>
    </section>
  );
}
