export function NoteVideo({ note }) {
  const embedId = note.content.video.split('https://youtu.be/')[1];
  return (
    <div className='video-note'>
      <h3>{note.content.title}</h3>
      <iframe
        width='853'
        height='480'
        src={`https://www.youtube.com/embed/${embedId}?controls=0`}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        title='Embedded youtube'
      />
    </div>
  );
}
