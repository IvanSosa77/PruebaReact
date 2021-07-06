import React,{useState,useEffect} from 'react';
import ItemCard from './ItemCard';

function Products() {

  const [valor,setValor]=useState([])

  useEffect(()=>{
    fetch("https://api.mercadolibre.com/sites/MLA/search?category=MLA1648")
    .then((res)=>
      res.json()
    )
    .then((res)=>{
      setValor(res.results);
    });
  })


  return (
    <div>
      {valor.map((value)=>{
        return(
          <ItemCard title={value.title} price={value.price} img={value.thumbnail}/>
        )
      })}
    </div>
  )
}

export default Products;