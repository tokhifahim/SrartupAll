
import Aaro from "./Logo/ayroui.svg";
import Gray from "./Logo/graygrids.svg";
import Uldeck from "./Logo/uideck.svg";
import HeroImg from "./Logo/hero-image-01.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
    return (
        <section className="container mx-auto flex flex-col lg:flex-row items-center  gap-8 px-4 py-20">
            <div className="lg:w-1/2">
                <h1 className="text-3xl  sm:text-4xl lg:text-5xl font-semibold leading-tight">
                    Startup Site Template Built with TailGrids Components
                </h1>
                <p className="mt-4 text-base text-gray-500 leading-6">
                    With TailGrids, business and students thrive together. Business can perfectly match their staffing to changing demand throughout the day.
                </p>
                <div className="flex items-center mt-6 space-x-2">
                    <button className="w-full sm:w-48 h-12 rounded text-white bg-blue-600 hover:bg-blue-400">
                        Get Started
                    </button>
                    <button className="flex items-center text-lg text-blue-600">
                        <FontAwesomeIcon className="h-6 mr-2" icon={faArrowCircleDown} />
                        Download App
                    </button>
                </div>

                <div className="mt-4">
                    <p className="text-gray-400">Used by Thriving Brands</p>
                </div>

                <div className="flex gap-2 mt-4">
                    <img className="w-25" src={Aaro} alt="Aaro Logo" />
                    <img className="w-25" src={Gray} alt="Gray Logo" />
                    <img className="w-25" src={Uldeck} alt="Uldeck Logo" />
                </div>
            </div>

            <div className="flex justify-end  lg:w-1/2">
                <img className="" src={HeroImg} alt="Hero" />
            </div>




        </section>



    );
}

export default Hero;
 