
import './App.css';
import Navbar from './navbar';
import Main from './main';
import Collection from './collection';
import Section from "./section"
import Footer from "./footer"
import Preview from './preview';

import menswear from "./menswear.png";
import jacket from "./jacket.png";
import hoodie from "./hoodie.png";
import formal from "./formal.png";
import casual from "./casual.png";
import tshirt from "./tshirt.png";



import { useState } from 'react';

function App() {
  const Menswear=[
    {
        
        img:menswear,
        name:"MENSWEAR",
        price:"Rs. 499"
    },
    {
        
        img:menswear,
        name:"MENSWEAR",
        price:"Rs. 399"
    },
    {
        
        img:menswear,
        name:"MENSWEAR",
        price:"Rs. 299"
    },
    {
        
        img:menswear,
        name:"MENSWEAR",
        price:"Rs. 399"
    },
    {
        
        img:menswear,
        name:"MENSWEAR",
        price:"Rs. 799"
    },
    {
        
        img:menswear,
        name:"MENSWEAR",
        price:"Rs. 899"
    },
    {
       
        img:menswear,
        name:"MENSWEAR",
        price:"Rs. 699"
    },
    {
        
        img:menswear,
        name:"MENSWEAR",
        price:"Rs. 499"
    },
    {
        
        img:menswear,
        name:"MENSWEAR",
        price:"Rs. 599"
    },
    {
        
        img:menswear,
        name:"MENSWEAR",
        price:"Rs. 899"
    },
]


const Formal=[
    {
        img:formal,
        name:"FORMAL",
        price:"Rs. 499"
    },
    {
        img:formal,
        name:"FORMAL",
        price:"Rs. 699"
    },
    {
        img:formal,
        name:"FORMAL",
        price:"Rs. 599"
    },
    {
        img:formal,
        name:"FORMAL",
        price:"Rs. 899"
    },
    {
        img:formal,
        name:"FORMAL",
        price:"Rs. 799"
    },
    {
        img:formal,
        name:"FORMAL",
        price:"Rs. 399"
    },
    {
        img:formal,
        name:"FORMAL",
        price:"Rs. 299"
    },
    {
        img:formal,
        name:"FORMAL",
        price:"Rs. 499"
    },
    {
        img:formal,
        name:"FORMAL",
        price:"Rs. 599"
    },
    {
        img:formal,
        name:"FORMAL",
        price:"Rs. 799"
    },
]


const Casual=[
    {
        img:casual,
        name:"CASUAL",
        price:"Rs. 499"
    },
    {
        img:casual,
        name:"CASUAL",
        price:"Rs. 399"
    },
    {
        img:casual,
        name:"CASUAL",
        price:"Rs. 299"
    },
    {
        img:casual,
        name:"CASUAL",
        price:"Rs. 799"
    },
    {
        img:casual,
        name:"CASUAL",
        price:"Rs. 699"
    },
    {
        img:casual,
        name:"CASUAL",
        price:"Rs. 899"
    },
    {
        img:casual,
        name:"CASUAL",
        price:"Rs. 599"
    },
    {
        img:casual,
        name:"CASUAL",
        price:"Rs. 799"
    },
    {
        img:casual,
        name:"CASUAL",
        price:"Rs. 899"
    },
    {
        img:casual,
        name:"CASUAL",
        price:"Rs. 699"
    },
]



const Hoodie=[
    {
        img:hoodie,
        name:"HOODIE",
        price:"Rs. 499"
    },
    {
        img:hoodie,
        name:"HOODIE",
        price:"Rs. 399"
    },
    {
        img:hoodie,
        name:"HOODIE",
        price:"Rs. 599"
    },
    {
        img:hoodie,
        name:"HOODIE",
        price:"Rs. 699"
    },
    {
        img:hoodie,
        name:"HOODIE",
        price:"Rs. 799"
    },
    {
        img:hoodie,
        name:"HOODIE",
        price:"Rs. 899"
    },
    {
        img:hoodie,
        name:"HOODIE",
        price:"Rs. 399"
    },
    {
        img:hoodie,
        name:"HOODIE",
        price:"Rs. 299"
    },
    {
        img:hoodie,
        name:"HOODIE",
        price:"Rs. 499"
    },
    {
        img:hoodie,
        name:"HOODIE",
        price:"Rs. 699"
    },
]



const Tshirt=[
    {
        img:tshirt,
        name:"TSHIRT",
        price:"Rs. 499"
    },
    {
        img:tshirt,
        name:"TSHIRT",
        price:"Rs. 599"
    },
    {
        img:tshirt,
        name:"TSHIRT",
        price:"Rs. 899"
    },
    {
        img:tshirt,
        name:"TSHIRT",
        price:"Rs. 799"
    },
    {
        img:tshirt,
        name:"TSHIRT",
        price:"Rs. 699"
    },
    {
        img:tshirt,
        name:"TSHIRT",
        price:"Rs. 899"
    },
    {
        img:tshirt,
        name:"TSHIRT",
        price:"Rs. 399"
    },
    {
        img:tshirt,
        name:"TSHIRT",
        price:"Rs. 299"
    },
    {
        img:tshirt,
        name:"TSHIRT",
        price:"Rs. 599"
    },
    {
        img:tshirt,
        name:"TSHIRT",
        price:"Rs. 499"
    },
]

const Jacket=[
    {
        img:jacket,
        name:"JACKET",
        price:"Rs. 299"
    },
    {
        img:jacket,
        name:"JACKET",
        price:"Rs. 799"
    },
    {
        img:jacket,
        name:"JACKET",
        price:"Rs. 499"
    },
    {
        img:jacket,
        name:"JACKET",
        price:"Rs. 899"
    },
    {
        img:jacket,
        name:"JACKET",
        price:"Rs. 399"
    },
    {
        img:jacket,
        name:"JACKET",
        price:"Rs. 599"
    },
    {
        img:jacket,
        name:"JACKET",
        price:"Rs. 499"
    },
    {
        img:jacket,
        name:"MENSWEAR",
        price:"Rs. 799"
    },
    {
        img:jacket,
        name:"JACKET",
        price:"Rs. 699"
    },
    {
        img:jacket,
        name:"JACKET",
        price:"Rs. 899"
    },

]



const[id,setid] = useState(false);
const[preview,setpreview] = useState(null);




function handlePreview(...details){
  
  setid(true);
  setpreview(details)
  

  
}


console.log(preview)



























  return (
    <div className="App">
      
          <Navbar/>
          <Main/>
          { id ? <Preview  preview={preview}/> :
          <Collection 
          Menswear={Menswear} Formal={Formal}
          Casual={Casual} Hoodie={Hoodie}
          Tshirt={Tshirt} Jacket={Jacket}
          handlePreview={handlePreview}
          />}
          
          <Section/>
          <Footer/>
      
    </div>
  );
}

export default App;
