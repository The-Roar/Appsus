export function NoteVideo({ note, color }) {
  const videoUrl = note.content.video;
  let urlType = videoUrl.includes('https://www.youtube.com/watch?v=')
    ? 'long'
    : videoUrl.includes('https://youtu.be/')
    ? 'short'
    : false;

  let embedId = '';
  switch (urlType) {
    case 'short':
      embedId = videoUrl.split('https://youtu.be/')[1];
      break;
    case 'long':
      embedId = videoUrl.split('https://www.youtube.com/watch?v=')[1];
      break;
    default:
      embedId = videoUrl.split('https://www.youtube.com/watch?v=')[1];
  }

  return (
    <div className='video-note' style={{ color }}>
      <h3>{note.content.title}</h3>
      {urlType ? (
        <iframe
          width='853'
          height='480'
          src={`https://www.youtube.com/embed/${embedId}?controls=0`}
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          title='Embedded youtube'
        />
      ) : (
        <p>Couldn't load video</p>
      )}
    </div>
  );
}
