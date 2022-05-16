
import cama from "../images/cama.jpg"
import { IoCalendarOutline } from 'react-icons/io5';
import { RiUser3Line  } from 'react-icons/ri';
import { BsSearch } from 'react-icons/bs';





const Hero = () => {
    return (
    <>
        <div className="bg-p-bl">
            <div className=" md:container border-4 border-indigo-500">
                
                {/* */}
                <div className= "grid grid-cols-8 mt-8">
                    <div className="text-bege col-start-1 col-end-4 mt-16 row-start-1 row-end-2 ">
                        <p className="text-8xl">WELCOME TO <span className="text-2xl">Casa Hotel</span><span className="text-4xl">Restaurant</span></p>
                    </div>
                    <div className="col-start-5 col-end-9  row-start-1 row-end-2  ">
                        <img src={cama}  alt="cama"/>

                    </div>
                    <div className="col-span-full row-start-1 row-end-2 bg-bege py-3 self-end ">
                        <ul className="flex  ">
                            <li className="flex ">
                                <span><IoCalendarOutline/></span>
                                <div>
                                    <p>Check-in</p>
                                    <p>Selector your date</p>
                                </div>
                            </li>
                                
                            <li className="flex ">
                                <span><IoCalendarOutline/></span>
                                <div>
                                    <p>Check-out</p>
                                    <p>Selector your date</p>
                                </div>
                            </li>
                            <li className="flex ">
                                <span><RiUser3Line/></span>
                                <div>
                                    <p>Travelers</p>
                                    <p>Add Guest </p>
                                </div>
                            </li>
                            <li><span><BsSearch/></span></li>

                        </ul>
                    </div>

                </div>
            </div>
           
        </div>
        
        
    </>
    )

}

export default Hero