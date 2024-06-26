
import featureImg from '../assets/feature.jpg'

const Features = () => {
    return(
        <div className="my-24 md:px-14 px-4 mx-w-screen-2xl mx-auto" id='feature'>
            <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
                <div className="lg:w-1/4">
                    <h3 className="text-3xl text-orange-300 font-bold lg:1/2 mb-3">
                        What can make you put your trust on  us ?
                    </h3>
                    <p className="text-base text-tartiary">
                        When you are a final year we give you the opportunity to do internship where ever you like.
                    </p>
                </div>
                <div className="w-full lg:w-3/4">
                    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8 '>
                        <div className='bg-[rgba(255, 255, 0,04)] rounded-[35px] h-96 shadow-3xl p-0
                        items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer'>
                            <div>
                                <img src={featureImg} alt=""/>
                                <h5 className='text-2xl font-semibold text-orange-300 px-5 text-center
                                mt-5'>Study Time
                                </h5>
                                <h6 className="text-base text-tartiary text-center">See More</h6>
                            </div>
                        </div>
                        <div className='bg-[rgba(255, 255, 0,04)] rounded-[35px] h-96 shadow-3xl p-0
                        items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer
                        md:mt-16'>
                            <div>
                                <img src={featureImg} alt=""/>
                                <h5 className='text-2xl font-semibold text-orange-300 px-5 text-center
                                mt-5'>Provided Metirial</h5>
                                <h6 className="text-base text-tartiary text-center">See More</h6>
                            </div>
                        </div>
                        <div className='bg-[rgba(255, 255, 0,04)] rounded-[35px] h-96 shadow-3xl p-0
                        items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer'>
                            <div>
                                <img src={featureImg} alt=""/>
                                <h5 className='text-2xl font-semibold text-orange-300 px-5 text-center
                                mt-5'>Code Languages</h5>
                                <h6 className="text-base text-tartiary text-center">See More</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;