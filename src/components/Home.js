
import banner from '../assets/banner.jpg'
import Banner from '../shared/Banner.js'

const Home = () => {
    return(
        <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24 bg-amber-200" id='home'>
            <Banner banner={banner} heading={"Improve your future in Tech"} 
            subheading={"learn more about your bright future let us become your steps into your future."}
            btn1={"Interested"} btn2={"Discount"}/>
        </div>
    );
};

export default Home; 