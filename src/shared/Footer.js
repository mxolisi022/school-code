


const Footer = () => {
    return(
        <div className="bg-[rgb(73,81,1)] md:px-14 p-4 max-w-screen-2xl mx-auto text-white">
            <div className="my-12 flex flex-col md:flex-row gap-10">
                <div className="md:w-1/2 space-y-8">
                    <a href="/" className="texet-2xl font-semibold flex items-center space-x-3 text-primary">
                        <span className="text-white">School Code</span>
                    </a>
                    <p className="md:1/2">We can all work together to bright our future.</p>
                </div>
                <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start">
                    <div className="space-y-4 mt-5">
                        <h4 className="text-xl">Platform</h4>
                        <ul className="space-y-3">
                            <a herf="/" className="block hover:text-gray-300">Overview</a>
                            <a herf="/" className="block hover:text-gray-300">Feature</a>
                            <a herf="/" className="block hover:text-gray-300">About</a>
                            <a herf="/" className="block hover:text-gray-300">Pricing</a>
                        </ul>
                    </div>
                    <div className="space-y-4 mt-5">
                        <h4 className="text-xl">Help</h4>
                        <ul className="space-y-3">
                            <a herf="/" className="block hover:text-gray-300">How does it works?</a>
                            <a herf="/" className="block hover:text-gray-300">Where to ask questions?</a>
                            <a herf="/" className="block hover:text-gray-300">How to play?</a>
                            <a herf="/" className="block hover:text-gray-300">What is needed for this?</a>
                        </ul>
                    </div>
                    <div className="space-y-4 mt-5">
                        <h4 className="text-xl">Contact</h4>
                        <ul className="space-y-3">
                            <p className="hover:text-gray-300">+276-523-4890</p>
                            <p className="hover:text-gray-300">user2@gmail.co.za</p>
                            <p className="hover:text-gray-300">http//linkedin097</p>
                            <p className="hover:text-gray-300">320 street Newcastle</p>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Footer;