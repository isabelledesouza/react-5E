import  LineWhite from "../images/title-line-white.svg"
import { ImStarFull } from "react-icons/im"

const Testemonials = () => {
        return (
    <>
    <div className="container ">
    <div className= "mb-8 flex flex-col justify-between items-center ">
        <h3 className= "text-title-text   text-6xl text-dark-yellow ">Testemonials</h3>
        <span className=""><img src={LineWhite} alt=""/></span>
    </div>
    <div>
        <p className="text-bege">“Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem."</p>
        <div className="flex">
            <span ><ImStarFull className="text-dark-yellow"/></span>
            <span ><ImStarFull className="text-dark-yellow"/></span>
            <span ><ImStarFull className="text-dark-yellow"/></span>
            <span ><ImStarFull className="text-dark-yellow"/></span>
            <span ><ImStarFull className="text-dark-yellow"/></span>
            
        </div>
    </div>
    </div>
    </>
        )

}


export default  Testemonials