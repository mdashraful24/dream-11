import header from '../../assets/logo.png'
import coin from '../../assets/coin.png'

const Header = () => {
    return (
        <div className="navbar">
            <div className="flex-1">
                <img src={header} alt="" />
            </div>
            <div className="flex-none gap-12">
                <p className='font-semibold font-sora text-gray-400 cursor-default'>Home</p>
                <p className='font-semibold font-sora text-gray-400 cursor-default'>Fixture</p>
                <p className='font-semibold font-sora text-gray-400 cursor-default'>Teams</p>
                <p className='font-semibold font-sora text-gray-400 cursor-default'>Schedules</p>
                <a className="btn bg-white rounded-xl text-lg">0 Button <img src={coin} alt="" /></a>
            </div>
        </div>
    );
};

export default Header;