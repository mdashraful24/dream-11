import sub from '../../assets/bg-shadow.png'

const Subscribe = () => {
    return (
        <div className='border p-4 rounded-xl relative top-48 hero-overlay bg-white bg-opacity-20'>
            <div className="hero hero-overlay bg-white bg-opacity-100 rounded-xl py-20" style={{backgroundImage: `url(${sub})`}}>
                <div className="hero-content text-neutral-content text-center">
                    <div className='text-black'>
                        <h1 className="mb-5 text-5xl font-bold">Subscribe to our Newsletter</h1>
                        <p className="mb-5 text-2xl">Get the latest updates and news right in your inbox!</p>
                        <div className='space-x-3 items-center'>
                            <input className="px-4 py-[12px] rounded-lg border border-stone-300 w-40 md:w-60 lg:w-80" type="text" placeholder="Enter your email" />
                            <button 
                                className="btn border-none text-xl px-5" 
                                style={{ background: 'linear-gradient(to right, #ff99ff 0%, #ffcc00 100%)' }}>
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;