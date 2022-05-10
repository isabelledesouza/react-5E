import logo from "../images/Logo.svg"
import cama from "../images/cama.jpg"



const Hero = () => {
    return (
    <>
        <div className="bg-p-bl">
            <div className="w-4/5 container">
                <div>
                    <nav className="flex flex-row justify-between border-4 border-sky-500">
                        <ul className="flex flex-row border-4 border-sky-500 flex-grow">
                            <li className="text-bege"><a href="#0">Rooms</a></li>
                            <li className="text-bege"><a href="#0">Restaurant</a></li>
                            <li className="text-bege"><a href="#0">Contact-us</a></li>
                        </ul>
                        <div className="border-4 border-indigo-500 flex justify-center ">
                            <img className="" src={logo} alt="logo-5e"/>
                        </div>
                        <div className="flex-grow"></div>
                    </nav>
                </div>
                <div className= "w-4/5">
                    <div>
                        <p>WELCOME TO<span>Casa Hotel<span>Restaurant</span></span></p>
                    </div>
                    <div>
                        <img src={cama}  alt="cama"/>

                    </div>
                </div>
            </div>
        </div>
        
        
    </>
    )

}

export default Hero