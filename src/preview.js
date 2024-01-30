import {FaStar} from "react-icons/fa"

function Preview({preview}){
    return(
        <div className="preview">
            
                <div className="prev-img">
                    <img className="p-img" src={preview[2]} alter="prev"/>

                </div>
                <div className="prev-det">
                    <div className="prev-p">
                        <p className="prev-p-a">{preview[0]}</p>
                        <p className="prev-p-b">Trending collections from our runway</p>
                        
                        <p className="prev-p-b">Rated - 4 &nbsp; <span className="star"><FaStar/><FaStar/><FaStar/><FaStar/></span></p>
                        <p className="prev-p-c">{preview[1]}</p>
                    </div>
                    <div className="prev-buttons">
                        
                        <button className="prev-but">BUY NOW</button>

                    </div>


                </div>
            

        </div>

    )
}


export default Preview;