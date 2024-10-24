import { useEffect } from "react";
import { useState } from "react";
// import icon from '../../assets/player.png'
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