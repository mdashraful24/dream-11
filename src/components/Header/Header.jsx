import header from '../../assets/logo.png'
import coin from '../../assets/coin.png'

import PropTypes from "prop-types"

const Header = ({ balance }) => {
    return (
        <div className="navbar">
            <div className="flex-1">
                <img src={header} alt="" />
            </div>
            <div className="flex-none gap-12">
                <p className='font-semibold font-sora text-gray-500 cursor-default'>Home</p>
                <p className='font-semibold font-sora text-gray-500 cursor-default'>Fixture</p>
                <p className='font-semibold font-sora text-gray-500 cursor-default'>Teams</p>
                <p className='font-semibold font-sora text-gray-500 cursor-default'>Schedules</p>
                <a className="btn bg-white rounded-xl text-lg">${balance} Coin <img src={coin} alt="" /></a>
            </div>
        </div>
    );
};

Header.propTypes = {
    balance: PropTypes.func
}

export default Header;