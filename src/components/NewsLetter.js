
import Banner from '../shared/Banner'
import BannerImg from '../assets/banner2.jpg'

const NewsLatter = () => {

    return(
        <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-12 bg-amber-200">
            <Banner banner={BannerImg} heading="Student can use PR for learn more"
            subheading={"All student can discus group project in the Presentation Room (PR) "} btn1={"I have code"} btn2={"Discount"}/>
        </div>
    );
}

export default NewsLatter;