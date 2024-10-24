import banner from '../../assets/bg-shadow.png';
import bgimage from '../../assets/banner-main.png'

const Banner = () => {
    return (
        <div
            className="hero rounded-2xl"
            style={{backgroundImage: `url(${banner})`}}>
            <div className="hero-overlay bg-black bg-opacity-60 rounded-2xl"></div>
            <div className="hero-content text-neutral-content text-center flex-col p-16">
                <img src={bgimage} alt="" />
                <h1 className="mb-5 text-5xl text-white font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className="mb-5 text-3xl">Beyond Boundaries Beyond Limits</p>
                <div className='border border-[#E7FE29] bg-black p-2 rounded-xl'>
                    <button className="btn border-none text-lg bg-[#E7FE29]">Claim Free Credit</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
