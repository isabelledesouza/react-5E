
import logo from "../images/Logo.svg"

const NavBar = () => {
    return (
        <div className=" md:container border-4 bg-p-bl border-indigo-500">
                <div className="flex items-center justify-between">
                <div className="  border-4 border-indigo-500  ">
                        <img className="" src={logo} alt="logo-5e"/>
                    </div>
                    <nav className="border-4 border-sky-500 ">
                        <ul className="flex flex-row   space-x-3 border-4 border-sky-500 flex-grow">
                            <li className="text-bege text-2xl"><a href="#0">Rooms</a></li>
                            <li className="text-bege text-2xl"><a href="#0">Restaurant</a></li>
                            <li className="text-bege text-2xl"><a href="#0">Contact-us</a></li>
                        </ul>
                    </nav>
                    
                </div>
            </div>
    )
}

export default NavBar