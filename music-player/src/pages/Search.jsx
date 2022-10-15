import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Error, Loader, SongCard } from '../components';
import { useGetSongsBySearchQuery } from '../redux/services/shazamCore';

const Search = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { searchTerm } = useParams();

  const { data, isFetching, error } = useGetSongsBySearchQuery(searchTerm);

  const songs = data?.tracks?.hits?.map((song) => song.track);
  console.log(songs);

  if (isFetching) return <Loader title="Loading Top Charts" />;

  if (error) return <Error />;
  console.log(error);
  return (
    <div className="flex flex-col ">
      <h2 className="font-bold text-3xl text-left text-white mt-4 mb-10">Results for: <span>{searchTerm}</span></h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {songs?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
