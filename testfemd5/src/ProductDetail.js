import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";


export default function ProductDetail (){
    const {id} = useParams()
    const [product,setProduct] = useState({})

    useEffect(()=>{
        axios.get("http://localhost:3000/products/"+id).then(res => {
            setProduct(res.data)
        }).catch(Error => console.log(Error))
    }, [])

    return(
        <>
            <h1>Product Detail</h1>
            <table className='table table-hover'>
                <thead>
                <tr>
                    <th>Name</th>
                    <td>{product.title}</td>
                </tr>
                <tr>
                    <th>Price</th>
                    <td>{product.price}</td>
                </tr>
                <tr>
                    <th>Description</th>
                    <td>{product.description}</td>
                </tr>
                </thead>
            </table>
            <Link className='btn btn-outline-primary'  to={'/'}>Back Home</Link>
        </>
    )
}