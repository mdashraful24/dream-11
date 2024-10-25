import banner from '../../assets/bg-shadow.png';
import backImage from '../../assets/banner-main.png'
import PropTypes from "prop-types"

const Banner = ({handleMoney}) => {
    return (
        <div className='px-5 lg:px-0'>
            <div
            className="hero rounded-2xl hero-overlay bg-black bg-opacity-100"
            style={{backgroundImage: `url(${banner})`}}>
            <div className="rounded-2xl"></div>
            <div className="hero-content text-neutral-content text-center flex-col p-16 space-y-3">
                <img src={backImage} alt="" />
                <h1 className="text-5xl text-white font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className="text-3xl text-stone-400">Beyond Boundaries Beyond Limits</p>
                <div className='border border-[#E7FE29] p-2 rounded-xl hover:bg-[#53562b]'>
                    <button onClick={handleMoney} className="btn border-none text-xl text-black bg-[#E7FE29] hover:bg-[#E7FE29]">Claim Free Credit</button>
                </div>
            </div>
        </div>
        </div>
    );
};

Banner.propTypes = {
    handleMoney: PropTypes.func.isRequired
}

export default Banner;
