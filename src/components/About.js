
import aboutImg1 from '../assets/about.jpg'
import aboutImg2 from '../assets/about2.jpg' 

const About = () => {

    return(
        <div className="md:px-14 p-4 max-w-s mx-auto space-y-10" id='about'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                <div className='md:w-1/2'>
                    <img src={aboutImg1} alt="" />
                </div>
                <div className='md:w-2/5'>
                    <h2 className='md:text-5xl text-3xl font-bold text-orange-300 mb-5 leading-nomarl'>
                        We have been exectended our partneship <span className='text-pink'>with other companies.</span>
                    </h2>
                    <p className='text-tartiary text-lg mb-7'>
                        We are loking companies that will partner with us so you wont face problems finding internships.
                    </p>
                    <button className='btnPrimary'>Interested</button>
                </div>
            </div>
            <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-8'>
                <div className='md:w-1/2'>
                    <img src={aboutImg2} alt="" />
                </div>
                <div className='md:w-2/5'>
                    <h2 className='md:text-5xl text-3xl font-bold text-orange-300 mb-5 leading-nomarl'>
                        You can practice at any <span className='text-pink'>time convinent for you.</span>
                    </h2>
                    <p className='text-tartiary text-lg mb-7'>
                        You can practice on your own time but make sure you submit our project on time.
                    </p>
                    <button className='btnPrimary'>Interested</button>
                </div>
            </div>
        </div>
    );
}

export default About;