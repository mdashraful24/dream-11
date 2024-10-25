import sub from '../../assets/bg-shadow.png'

const Subscribe = () => {
    return (
        <div className='w-10/12 mx-auto border p-4 rounded-xl relative top-52 hero-overlay bg-white bg-opacity-20'>
            <div className="hero hero-overlay bg-white bg-opacity-100 rounded-xl py-20" style={{backgroundImage: `url(${sub})`}}>
                <div className="hero-content text-neutral-content text-center">
                    <div className='text-black'>
                        <h1 className="mb-5 text-5xl font-bold">Subscribe to our Newsletter</h1>
                        <p className="mb-5 text-2xl">Get the latest updates and news right in your inbox!</p>
                        <div className='space-x-5'>
                            <input className="px-4 py-3 rounded-lg border border-stone-400" type="text" placeholder="Enter your email" />
                            <button className="btn bg-primary border-none text-lg">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;