

const Banner = ({banner, heading, subheading, btn1, btn2}) => {
    return(
        <div className='gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9'>
        <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>
            <div>
                <img src={banner} alt="" className='lg:h-[386px]'/>
            </div>
            <div className="md:w-3/5 ">
                <h2 className='md:text-7xl text-4xl font-bond text-amber-700 mb-6 leading-relaxed'>{heading}</h2>
                <p className='text-amber-400 text-2xl mb-8'>{subheading}
                </p>
                <div className='space-x-5 space-y-4'>
                    <button className='btnPrimary'>{btn1}</button>
                    <button className='btnPrimary'>{btn2}</button>
                </div>
            </div>
                
        </div>
    </div>
    );
};

export default Banner;