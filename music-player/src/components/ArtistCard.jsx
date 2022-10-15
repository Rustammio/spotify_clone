import { useNavigate } from 'react-router-dom';

const ArtistCard = ({ track }) => {
    const navigate = useNavigate();
    console.log(track);
    const path = track?.images?.coverart
    return (
        <div onClick={()=> navigate(`/artists/${track.artists[0].adamid}`)} className="flex flex-col w-[250px] p-4 bg-white/5 bg-opasity-80 backdrop-blur-sm aminate-slideup rounded-lg cursor-pointer">
            <img src={path} className="w-full h-56 rounded-lg" />
            <p className='mt-4 font-semibold text-lg text-white trancate'>{track?.subtitle}</p>
        </div>
    );
};

export default ArtistCard;
