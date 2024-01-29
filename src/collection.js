import { useState } from "react";
import menswear from "./menswear.png";
import jacket from "./jacket.png";
import hoodie from "./hoodie.png";
import formal from "./formal.png";
import casual from "./casual.png";
import tshirt from "./tshirt.png";




const Menswear=[
    {
        img:menswear,
        name:"MENSWEAR",
        price:"Rs. 999"
    },
    {
        img:menswear,
        name:"MENSWEAR",
        price:"Rs. 999"
    },
    {
        img:menswear,
        name:"MENSWEAR",
        price:"Rs. 999"
    },
    {
        img:menswear,
        name:"MENSWEAR",
        price:"Rs. 999"
    },
    {
        img:menswear,
        name:"MENSWEAR",
        price:"Rs. 999"
    },
    {
        img:menswear,
        name:"MENSWEAR",
        price:"Rs. 999"
    },
    {
        img:menswear,
        name:"MENSWEAR",
        price:"Rs. 999"
    },
    {
        img:menswear,
        name:"MENSWEAR",
        price:"Rs. 999"
    },
    {
        img:menswear,
        name:"MENSWEAR",
        price:"Rs. 999"
    },
    {
        img:menswear,
        name:"MENSWEAR",
        price:"Rs. 999"
    },
]


const Formal=[
    {
        img:formal,
        name:"FORMAL",
        price:"Rs. 999"
    },
    {
        img:formal,
        name:"FORMAL",
        price:"Rs. 999"
    },
    {
        img:formal,
        name:"FORMAL",
        price:"Rs. 999"
    },
    {
        img:formal,
        name:"FORMAL",
        price:"Rs. 999"
    },
    {
        img:formal,
        name:"FORMAL",
        price:"Rs. 999"
    },
    {
        img:formal,
        name:"FORMAL",
        price:"Rs. 999"
    },
    {
        img:formal,
        name:"FORMAL",
        price:"Rs. 999"
    },
    {
        img:formal,
        name:"FORMAL",
        price:"Rs. 999"
    },
    {
        img:formal,
        name:"FORMAL",
        price:"Rs. 999"
    },
    {
        img:formal,
        name:"FORMAL",
        price:"Rs. 999"
    },
]


const Casual=[
    {
        img:casual,
        name:"CASUAL",
        price:"Rs. 999"
    },
    {
        img:casual,
        name:"CASUAL",
        price:"Rs. 999"
    },
    {
        img:casual,
        name:"CASUAL",
        price:"Rs. 999"
    },
    {
        img:casual,
        name:"CASUAL",
        price:"Rs. 999"
    },
    {
        img:casual,
        name:"CASUAL",
        price:"Rs. 999"
    },
    {
        img:casual,
        name:"CASUAL",
        price:"Rs. 999"
    },
    {
        img:casual,
        name:"CASUAL",
        price:"Rs. 999"
    },
    {
        img:casual,
        name:"CASUAL",
        price:"Rs. 999"
    },
    {
        img:casual,
        name:"CASUAL",
        price:"Rs. 999"
    },
    {
        img:casual,
        name:"CASUAL",
        price:"Rs. 999"
    },
]



const Hoodie=[
    {
        img:hoodie,
        name:"HOODIE",
        price:"Rs. 999"
    },
    {
        img:hoodie,
        name:"HOODIE",
        price:"Rs. 999"
    },
    {
        img:hoodie,
        name:"HOODIE",
        price:"Rs. 999"
    },
    {
        img:hoodie,
        name:"HOODIE",
        price:"Rs. 999"
    },
    {
        img:hoodie,
        name:"HOODIE",
        price:"Rs. 999"
    },
    {
        img:hoodie,
        name:"HOODIE",
        price:"Rs. 999"
    },
    {
        img:hoodie,
        name:"HOODIE",
        price:"Rs. 999"
    },
    {
        img:hoodie,
        name:"HOODIE",
        price:"Rs. 999"
    },
    {
        img:hoodie,
        name:"HOODIE",
        price:"Rs. 999"
    },
    {
        img:hoodie,
        name:"HOODIE",
        price:"Rs. 999"
    },
]



const Tshirt=[
    {
        img:tshirt,
        name:"TSHIRT",
        price:"Rs. 999"
    },
    {
        img:tshirt,
        name:"TSHIRT",
        price:"Rs. 999"
    },
    {
        img:tshirt,
        name:"TSHIRT",
        price:"Rs. 999"
    },
    {
        img:tshirt,
        name:"TSHIRT",
        price:"Rs. 999"
    },
    {
        img:tshirt,
        name:"TSHIRT",
        price:"Rs. 999"
    },
    {
        img:tshirt,
        name:"TSHIRT",
        price:"Rs. 999"
    },
    {
        img:tshirt,
        name:"TSHIRT",
        price:"Rs. 999"
    },
    {
        img:tshirt,
        name:"TSHIRT",
        price:"Rs. 999"
    },
    {
        img:tshirt,
        name:"TSHIRT",
        price:"Rs. 999"
    },
    {
        img:tshirt,
        name:"TSHIRT",
        price:"Rs. 999"
    },
]

const Jacket=[
    {
        img:jacket,
        name:"JACKET",
        price:"Rs. 999"
    },
    {
        img:jacket,
        name:"JACKET",
        price:"Rs. 999"
    },
    {
        img:jacket,
        name:"JACKET",
        price:"Rs. 999"
    },
    {
        img:jacket,
        name:"JACKET",
        price:"Rs. 999"
    },
    {
        img:jacket,
        name:"JACKET",
        price:"Rs. 999"
    },
    {
        img:jacket,
        name:"JACKET",
        price:"Rs. 999"
    },
    {
        img:jacket,
        name:"JACKET",
        price:"Rs. 999"
    },
    {
        img:jacket,
        name:"MENSWEAR",
        price:"Rs. 999"
    },
    {
        img:jacket,
        name:"JACKET",
        price:"Rs. 999"
    },
    {
        img:jacket,
        name:"JACKET",
        price:"Rs. 999"
    },

]








function Collection(){

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

                <Collectionbox data={data}/>

                

            </div>
        </div>




    );

}







function Collectionbox({data}){
    return(
    data.map((data)=>
        
            <div className="collection-blk">
                    <img className="collection-blk-img" src={data.img} alt="blk"/>
                    <p className="collection-blk-p" >{data.name}</p>
                    <p >{data.price}</p>
                    


            </div>

        
    )
    
    );
}



export default Collection;