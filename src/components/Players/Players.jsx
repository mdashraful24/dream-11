import { useEffect } from "react";
import { useState } from "react";
import icon from '../../assets/player.png'

const Players = () => {

    const [players, setPlayers] = useState([]);

    useEffect( () => {
        fetch('./players.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    }, [])

    console.log(players);

    return (
        <div>
            <div className="grid grid-cols-3 gap-6">
            {
                players.map(players => (
                    <div key={players.id} className="card border text-lg">
                            <img className="w-full h-[400px] object-fill p-5 rounded-[34px]"
                                    src={players.image}
                                    alt="" />
                            <div className="card-body">
                                <h2 className="card-title text-2xl"><img src={icon} alt="" />{players.name}</h2>
                                <div className="flex items-center justify-between text-lg">
                                    <div className="flex items-center gap-3 text-gray-500">
                                        <i class="fa-solid fa-flag"></i>
                                        {players.country}
                                    </div>
                                    <span className="bg-gray-100 px-3 rounded-lg">{players.role}</span>
                                </div>
                                <hr />
                                <p className="font-semibold">Rating: {players.rating}</p>
                                <div className="flex items-center justify-between text-lg">
                                    <div className="flex items-center gap-3">
                                        <p className="font-semibold">Left-Hand-Bat</p>
                                    </div>
                                    <span className="text-gray-500">{players.battingType}</span>
                                </div>
                                <div className="card-actions items-center justify-between">
                                    <p className="font-semibold">Price: ${players.biddingPrice}</p>
                                    <button className="btn btn-sm text-lg">Choose Player</button>
                                </div>
                            </div>
                    </div>
                ))
            }
            </div>
        </div>
    );
};

export default Players;