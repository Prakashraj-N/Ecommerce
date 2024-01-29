import avatar from "./avatar.png";
import { IoNotifications } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import {RxAvatar} from "react-icons/rx"


function Navbar() {
    return(
        <div className="nav">
            <p className="logo"> RUNWAY </p>
            <div className="nav-ul-l">
                <li className="nav-li">PRODUCT</li>
                <li className="nav-li">OOTD</li>
                <li className="nav-li">DELIVERY</li>
                <li className="nav-li">PROMO</li>
            </div>
            <div className="nav-right">
                <input type="input" placeholder="search your outfit"></input>
                <div className="nav-ul-r" >
                    <li className="nav-not"><FaSearch/></li>
                    <li className="nav-not"><IoNotifications /></li>
                    <li className="nav-not"><RxAvatar /></li>

                </div>
            </div>

            
            

        </div>

    );






}

export default Navbar;