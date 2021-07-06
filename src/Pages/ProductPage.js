import React,{useParams} from 'react';
import ItemCard from '../components/ItemCard'

function Products() {

    const {ProductPage} = useParams();

    return (
        <div>
            {ProductPage}
            <ItemCard/>
        </div>
    )
}

export default Products
