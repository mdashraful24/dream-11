import { useEffect } from "react";
import { useState } from "react";
import Player from "../Player/Player";
import PropTypes from "prop-types"

const Players = ({ handleSelectPlayer }) => {

    const [players, setPlayers] = useState([]);

    useEffect( () => {
        fetch('./players.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    }, [])

    // console.log(players);

    return (
        <div>
            <div className="flex items-center justify-between mb-5">
                <p className="text-2xl font-bold">Available Players (0 / 6)</p>
                <div className="flex items-center gap-5">
                <button className="btn btn-md text-lg">Available</button>
                <button className="btn btn-md text-lg">Selected (0)</button>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
            {
                players.map(player => 
                    <Player 
                        key={player.id} 
                        player={player} 
                        handleSelectPlayer={handleSelectPlayer}></Player>)
            }
            </div>
        </div>
    );
};

Players.propTypes = {
    handleSelectPlayer: PropTypes.func
}

export default Players;