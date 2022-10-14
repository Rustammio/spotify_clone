import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { useGetSongsByCountryQuery } from '../redux/services/shazamCore';

const AroundYou = () => {
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(true);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  console.log(country);

  const { data, isFetching, error } = useGetSongsByCountryQuery(country);
  useEffect(() => {
    axios.get('https://geo.ipify.org/api/v2/country?apiKey=at_8uEs7LU1wef1gRPFHVG1wOutpaxoQ')
      .then((res) => setCountry(res?.data?.location?.country))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));

    // at_8uEs7LU1wef1gRPFHVG1wOutpaxoQ
  }, [country]);
  if (isFetching && loading) return <Loader title="Loading songs around you" />;

  if (error && country) return <Error title="Error loading songs" />;
  console.log(error)
  return (
    <div className="flex flex-col ">
      <h2 className="font-bold text-3xl text-left text-white mt-4 mb-10">Around you: <span>{country}</span></h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => (
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

export default AroundYou;
