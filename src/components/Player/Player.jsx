import icon from '../../assets/player.png'

import PropTypes from "prop-types"

const Player = ({ player, handleSelectPlayer }) => {
    const {image, name, country, role, rating, battingType, biddingPrice } = player;

    return (
    <div>
        <div className="card border text-lg">
        <img
            className="w-full h-[400px] object-fill p-5 rounded-[34px]"
            src={image}
            alt=""
        />
        <div className="card-body">
            <h2 className="card-title text-2xl">
            <img src={icon} alt="" />
            {name}
            </h2>
            <div className="flex items-center justify-between text-lg">
            <div className="flex items-center gap-3 text-gray-500">
                <i className="fa-solid fa-flag"></i>
                {country}
            </div>
            <span className="bg-gray-100 px-3 rounded-lg">{role}</span>
            </div>
            <hr />
            <p className="font-semibold">Rating: {rating}</p>
            <div className="flex items-center justify-between text-lg">
            <div className="flex items-center gap-3">
                <p className="font-semibold">Left-Hand-Bat</p>
            </div>
            <span className="text-gray-500">{battingType}</span>
            </div>
            <div className="card-actions items-center justify-between">
            <p className="font-semibold">Price: ${biddingPrice}</p>
            <button onClick={() => handleSelectPlayer(biddingPrice, player.id)} className="btn btn-sm text-lg">Choose Player</button>
            </div>
        </div>
        </div>
    </div>
    );
};

Player.propTypes = {
    player: PropTypes.object.isRequired,
    handleSelectPlayer: PropTypes.func.isRequired,
};

export default Player;
