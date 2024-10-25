import { useEffect } from "react";
import { useState } from "react";
import Player from "../Player/Player";
import PropTypes from "prop-types"

const Players = ({handleSelectPlayer, selectPlayer, handleRemoveSelectPlayer}) => {

    const [players, setPlayers] = useState([]);
    const [showPlayer, setShowPlayer] = useState(true);
    const [activeButton, setActiveButton] = useState('available');

    useEffect( () => {
        fetch('./players.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    }, [])

    const handleClickButton = (type) => {
        setShowPlayer(type === 'available');
        setActiveButton(type);
    };

    return (
        <div className="mt-12">
        <div className="flex justify-between items-center mb-8">
        <h3 className="text-2xl font-bold">
                {showPlayer ? "Available Players" : `Selected Players (${selectPlayer.length}/6)`}
            </h3>
        <div className="flex border rounded-lg font-semibold">
            <button onClick={() => handleClickButton ('available')} className={`px-4 py-2 text-xl rounded-l-lg ${activeButton === 'available' ? 'bg-[#E7FE29] text-black' : ''}`}>
            Available
            </button>
            <button onClick={() => handleClickButton ('selected')} className={`px-4 py-2 text-xl rounded-r-lg ${activeButton === 'selected' ? 'bg-[#E7FE29] text-black' : ''}`}>
            Selected ({selectPlayer.length})
            </button>
        </div>
        </div>
        {showPlayer ? (
            <div>
                <div className="grid grid-cols-3 gap-5">
                    {players.map((player) => (
                        <Player
                            key={player.playerId}
                            player={player}
                            handleSelectPlayer={handleSelectPlayer}
                        />
                    ))}
                </div>
            </div>
        ) : selectPlayer.length > 0 ? (
        <div className="space-y-5">
            {selectPlayer.map((player) => (
                <div key={player.playerId} className="flex justify-between items-center border rounded-2xl p-5">
                    <div>
                        <div className="flex items-center gap-5">
                            <div>
                                <img className="w-16 h-16 rounded-2xl object-cover" src={player.image} alt="" />
                            </div>
                            <div className="">
                                <h1 className="font-bold text-2xl">{player.name}</h1>
                                <p className="text-lg">{player.battingType}</p>
                            </div>
                        </div>
                    </div>
                    <button onClick={() => handleRemoveSelectPlayer(player)} className="p-2"><i className="fa-regular fa-trash-can text-[#F14749] text-lg"></i></button>
                </div>
            ))}
            <button onClick={() => {
                        setShowPlayer(true);
                        setActiveButton('available');
                    }} className="btn text-lg bg-[#E7FE29] text-black">Add More Player</button>
        </div>
            ) : (
                <h1 className="text-center text-3xl">No selected player is available.</h1>
            )}
        </div>
    );
};

Players.propTypes = {
    handleSelectPlayer: PropTypes.func.isRequired,
    selectPlayer: PropTypes.array.isRequired,
    handleRemoveSelectPlayer: PropTypes.func.isRequired
}

export default Players;