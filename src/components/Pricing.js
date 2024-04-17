
import { useState } from "react";


const Pricing = () => {

    const [isYearly, setIsYearly] = useState(false);

    const packeges = [
        {name: "Start", monthlyPrice: 19, yearlyPrice: 199, description: "A common form of lorem ipsum Lorem ipsum dolor sit amet."},
        {name: "Advance", monthlyPrice: 39, yearlyPrice: 399, description: "A common form of lorem ipsum Lorem ipsum dolor sit amet."},
        {name: "Premium", monthlyPrice: 59, yearlyPrice: 599, description: "A common form of lorem ipsum Lorem ipsum dolor sit amet."},
    ]

    return(
        <div className="md:px-14 p-4 max-w-s mx-auto py-10" id="pricing">
            <div className="text-center">
                <h2 className="md:text-5xl text-3xl font-extrabold text-amber-400 mb-2">
                    Schedule
                </h2>
                <p className="text-tartiary md:w-1/3 mx-auto px-4">
                    It is a plan for month and year.
                </p>
                <div className="mt-16">
                    <label htmlFor="toggle" className="inline-flex items-center cursor-pointer">
                        <span className="mr-8 text-2xl font-semibold text-pink">Monthly</span>
                        <div className="w-14 h-6 bg-gray-300 rounded-full transition duration-200 ease-in-out">
                            <div className={`w-6 h-6 rounded-full transition duration-200 ease-in-out ${isYearly ? "bg-green-300 ml-8" : "bg-gray-500"}`}></div>
                        </div>
                        <span className="ml-8 text-2xl font-semibold text-pink">Yearly</span>
                    </label>
                    <input type="checkbox" id="toggle" className="hidden" checked={isYearly} onChange={() => setIsYearly(!isYearly)}  />
                </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto">
                {
                    packeges.map((pkg, index) => <div key={index} className="boder py-10 md:px-6 px-4 rounded-lg shadow-3xl">
                        <h3 className="text-3xl font-bold text-center text-amber-300">{pkg.name}</h3>
                        <p className="text-tartiary text-center my-5">{pkg.description}</p>
                        <p className="mt-5 text-center text-green-400 text-4xl font-bold">
                            {isYearly ? `$${pkg.yearlyPrice}` : `$${pkg.monthlyPrice}`}<span className="text-base 
                            text-tartiary font-medium">/{isYearly ? 'year' : 'month'}</span>
                        </p>
                        <ul className="mt-4 space-y-2 px-4">
                            <li className="flex gap-3 items-center">Use Interation</li>
                            <li className="flex gap-3 items-center">Review Project</li>
                            <li className="flex gap-3 items-center">Addtional practice task</li>
                            <li className="flex gap-3 items-center">Week Stand Up Meeting</li>
                            <li className="flex gap-3 items-center">Ask Perfomence Team for Help</li>
                        </ul>
                        <div className="w-full mx-auto mt-8 flex items-center justify-center">
                            <button className="btnPrimary">Interested</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
}

export default Pricing;