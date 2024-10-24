const Player = () => {
    return (
        <div className="flex justify-between items-center">
            <div>
                <p>Available Players</p>
            </div>
            <div className="flex gap-3">
                <button className="btn btn-sm">Available</button>
                <button className="btn btn-sm">Selected</button>
            </div>
        </div>
    );
};

export default Player;