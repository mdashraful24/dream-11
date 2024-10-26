import icon from '../../assets/player.png'
import PropTypes from "prop-types"

const Player = ({ player, handleSelectPlayer }) => {
    const {image, name, country, role, rating, battingType, bowlingType, biddingPrice } = player;

    return (
        <div className='px-5 lg:px-0'>
            <div className="card border text-lg">
            <img
                className="w-full h-[400px] lg:object-cover p-5 rounded-[34px] -mb-7"
                src={image}
                alt="player image"
            />
            <div className="card-body">
                <h2 className="card-title text-2xl mb-1">
                <img src={icon} alt="" />
                {name}
                </h2>
                <div className="flex items-center justify-between text-lg mb-2">
                <div className="flex items-center gap-3 text-gray-500">
                    <i className="fa-solid fa-flag"></i>
                    {country}
                </div>
                <span className="bg-gray-100 px-3 rounded-lg">{role}</span>
                </div>
                <hr />
                <div className="flex items-center justify-between">
                    <p className="font-semibold">Rating:</p>
                    {rating}
                </div>
                <div className="flex items-center justify-between text-lg">
                <div className="flex items-center gap-3">
                    <p className="font-semibold">{battingType}</p>
                </div>
                <span className="text-gray-500">{bowlingType}</span>
                </div>
                <div className="card-actions items-center justify-between">
                <p className="text-lg font-semibold">Price: ${biddingPrice}</p>
                <button onClick={() => handleSelectPlayer(player)} className="btn btn-md text-lg text-gray-600 bg-white hover:bg-[#E7FE29] hover:text-black hover:border-none">Choose Player</button>
                </div>
            </div>
            </div>
        </div>
    );
};

Player.propTypes = {
    player: PropTypes.object.isRequired,
    handleSelectPlayer: PropTypes.func.isRequired
};

export default Player;
