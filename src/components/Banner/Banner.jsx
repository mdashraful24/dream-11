import banner from '../../assets/bg-shadow.png';
import bgimage from '../../assets/banner-main.png'

import PropTypes from "prop-types"

const Banner = ({ handleMoney }) => {
    return (
        <div
            className="hero rounded-2xl hero-overlay bg-black bg-opacity-100"
            style={{backgroundImage: `url(${banner})`}}>
            <div className="rounded-2xl"></div>
            <div className="hero-content text-neutral-content text-center flex-col p-16">
                <img src={bgimage} alt="" />
                <h1 className="mb-5 text-5xl text-white font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className="mb-5 text-3xl">Beyond Boundaries Beyond Limits</p>
                <div className='border border-[#E7FE29] p-2 rounded-xl'>
                    <button onClick={handleMoney} className="btn border-none text-lg bg-[#E7FE29]">Claim Free Credit</button>
                </div>
            </div>
        </div>
    );
};

Banner.propTypes = {
    handleMoney: PropTypes.func
}

export default Banner;
