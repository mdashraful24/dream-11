import header from '../../assets/logo.png'
import coin from '../../assets/coin.png'
import PropTypes from "prop-types"

const Header = ({balance}) => {
    return (
        <div className="navbar py-7">
            <div className="flex-1">
                <img src={header} alt="" />
            </div>
            <div className="flex-none gap-12">
                <p className='text-lg font-sora text-gray-500 cursor-default hidden md:block lg:block'>Home</p>
                <p className='text-lg font-sora text-gray-500 cursor-default hidden md:block lg:block'>Fixture</p>
                <p className='text-lg font-sora text-gray-500 cursor-default hidden md:block lg:block'>Teams</p>
                <p className='text-lg font-sora text-gray-500 cursor-default hidden md:block lg:block'>Schedules</p>
                <div className='flex items-center gap-1 border rounded-lg px-3 py-2 cursor-default text-xl font-bold'>
                    <p>{balance}</p>
                    <p>Coin</p>
                    <p><img className='w-5' src={coin} alt="" /></p>
                </div>
            </div>
        </div>
    );
};

Header.propTypes = {
    balance: PropTypes.number.isRequired
}

export default Header;