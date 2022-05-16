import logo from "../images/Logo.svg"
import { FaAirbnb } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa"

const Footer = () => {
   return (
      
      <footer className=" bg-p-bl md:container  flex flex-col justify-between items-center md:flex-row  py-3.5 text-body-text">
         
         <div>
            <img src= {logo} alt ="logo"/>
         </div>
         <div>
            <ul>
               <li><a href="https://github.com/isabelledesouza" className="text-bege text-xl">Room</a></li>
               <li><a href="https://github.com/isabelledesouza" className="text-bege text-xl">Restaurant</a></li>
               <li><a href="https://github.com/isabelledesouza" className="text-bege text-xl">Reservas</a></li>
            </ul>
         </div>
         <div>
            <ul className="flex space-x-3 items-center mt-8 mb-8">
               <li className="rounded-full bg-dark-yellow p-2 "><a href="https://github.com/isabelledesouza" className="text-bege text-4xl">< FaAirbnb/></a></li>
               <li className="rounded-full bg-dark-yellow p-2 "><a href="https://github.com/isabelledesouza" className="text-bege text-4xl"><FaInstagram/></a></li>
               <li className="rounded-full bg-dark-yellow p-2"><a href="https://github.com/isabelledesouza" className="text-bege text-4xl"><FaWhatsapp/></a></li>
            </ul>
         </div>
         <div className=" ">
            <a href="#0" className="text-bege bg-dark-yellow hover:bg-gray-200  font-bold py-2 px-4 rounded-full   hover:text-p-bl duration-300">Book Now</a>
         </div>
         
         
      </footer>

   )
  
} 

export default Footer