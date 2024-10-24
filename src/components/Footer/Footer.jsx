import footer from '../../assets/logo-footer.png'

const Footer = () => {
    return (
        <div>
            <section className="bg-[#050b2c] py-12 space-y-5">
                <footer className="flex flex-col justify-center items-center gap-5 border-b border-stone-500">
                    <div>
                        <img src={footer} alt="" />
                    </div>
        
                    <div className="flex flex-col md:flex-row lg:flex-row justify-between space-y-12 md:space-y-0 lg:space-y-0 p-4 container mx-auto w-11/12">
                        <nav className="space-y-3">
                            <h1 className="text-white text-xl font-bold">About Us</h1>
                            <p className="text-stone-400">We are a passionate team dedicated <br /> to providing the best services to <br /> our customers.</p>
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

                        <nav className="flex flex-col space-y-3">
                            <h6 className="text-white text-xl font-bold">Subscribe</h6>
                            <p className="text-stone-400">Subscribe to our newsletter for the latest updates.</p>
                            <div>
                                <input className="px-4 py-3 rounded-l-lg" type="text" placeholder="Enter your email" />
                                <button className="btn bg-primary rounded-l-none border-none text-lg text-white">Subscribe</button>
                            </div>
                        </nav>
                    </div>
                </footer>
                <div className="text-stone-400 text-center">
                    <p>@2024 Your Company All Rights Reserved.</p>
                </div>
            </section>
        </div>
    );
};

export default Footer;