import { useState } from "react";














function Collection({Menswear,Formal,Casual,Tshirt,Jacket,Hoodie,handlePreview}){

    const [data,setdata]= useState(Menswear);

    function handleButton1(){
        setdata(Menswear)
    }

    function handleButton2(){
        setdata(Formal)
    }

    function handleButton3(){
        setdata(Casual)
    }

    function handleButton4(){
        setdata(Hoodie)
    }

    function handleButton5(){
        setdata(Tshirt)
    }

    


    function handleButton6(){
        setdata(Jacket)
    }


    

    







    return(
        <div className="collection-btn">
            <div className="buttons">
                <button onClick={handleButton1} className="button">MENS</button>
                <button onClick={handleButton2} className="button">FORMAL</button>
                <button onClick={handleButton3} className="button">CASUAL</button>
                <button onClick={handleButton4} className="button">HOOODIE</button>
                <button onClick={handleButton5} className="button">T-SHIRT</button>
                <button onClick={handleButton6} className="button">JACKET</button>
            </div>

            <div className="collections">

                <Collectionbox handlePreview={handlePreview} data={data}/>

                

            </div>
        </div>




    );

}







function Collectionbox({data,handlePreview}){

    





    return(
    data.map((data)=>
        
            <div role="button" onClick={()=>handlePreview(data.name,data.price,data.img)} className="collection-blk">
                    <img className="collection-blk-img" src={data.img} alt="blk"/>
                    <p className="collection-blk-p" >{data.name}</p>
                    <p >{data.price}</p>
                    


            </div>

        
    )
    
    );
}



export default Collection;