import SongBar from './SongBar';

const RelatedSongs = ({ data, isPlaying, activeSong, handlePause, handlePlay, artistId }) => (
  <div className='flex flex-col '>
    <h1 className='font-bold text-3xl text-white'>Related Songs:</h1>
    <div clasName='mt-6 w-full flex flex-col '>
      {data?.map((song, i) => (
        <SongBar
          song={song}
          key={`${song.key}-${artistId}`}
          i={i}
          artistId={artistId}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePlay={handlePlay}
          handlePause={handlePause}
        />
      ))}
    </div>
  </div>
);
export default RelatedSongs;
