import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const TopCharts = () => {

    const { activeSong, isPlaying } = useSelector((state) => state.player);

    const { data, isFetching, error } = useGetTopChartsQuery();

    if (isFetching) return <Loader title="Loading Top Charts" />;

    if (error ) return <Error />;
    console.log(error)
    return (
            <div className="flex flex-col ">
                <h2 className="font-bold text-3xl text-left text-white mt-4 mb-10">Discover Top Charts</h2>
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

export default TopCharts;
