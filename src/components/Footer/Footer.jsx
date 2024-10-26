import footer from '../../assets/logo-footer.png'

const Footer = () => {
    return (
        <div>
            <section className="bg-[#030720] pt-64 pb-5 space-y-3">
                <footer className="flex flex-col justify-center items-center gap-5 mb-7">
                    <div>
                        <img src={footer} alt="" />
                    </div>
                    <div className="flex flex-col md:flex-row lg:flex-row justify-between space-y-12 md:space-y-0 lg:space-y-0 p-4 container mx-auto w-11/12">
                        <nav className="space-y-3">
                            <h1 className="text-white text-xl font-bold">About Us</h1>
                            <p className="text-stone-400">We are a dedicated team focused on providing  <br /> outstanding service and surpassing customer <br /> expectations through commitment, creativity, <br /> and ongoing enhancement.</p>
                        </nav>
                        <nav className="space-y-3">
                            <h6 className="text-white text-xl font-bold">Quick Links</h6>
                            <div className="flex flex-col space-y-2 text-stone-400">
                                <li><a className="link link-hover">Home</a></li>
                                <li><a className="link link-hover">Services</a></li>
                                <li><a className="link link-hover">About</a></li>
                                <li><a className="link link-hover">Contact</a></li>
                            </div>
                        </nav>
                        <nav className="flex flex-col space-y-2">
                            <h6 className="text-white text-xl font-bold">Subscribe</h6>
                            <p className="text-stone-400">Subscribe to our newsletter for the latest updates.</p>
                            <div className='flex items-center'>
                                <input className="px-4 py-[12px] rounded-l-lg outline-none w-40 md:w-48 lg:w-52" type="text" placeholder="Enter your email" />
                                <button 
                                    className="btn rounded-l-none text-black border-none text-xl px-5" 
                                    style={{ background: 'linear-gradient(to right, #ff99ff 0%, #ffcc00 100%)' }}>
                                    Subscribe</button>
                            </div>
                        </nav>
                    </div>
                </footer>
                <div className='border-b border-stone-500'></div>
                <div className="text-stone-400 text-center">
                    <p>@2024 Your Company All Rights Reserved.</p>
                </div>
            </section>
        </div>
    );
};

export default Footer;