import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App';
import { toast } from 'react-toastify';

const List = ({token}) => {
  const [list, setList] = useState([]);
  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        setList(response.data.products);
      } else {
        console.log("Error listing products", response.data.message);
        toast.error("Error listing products: "+response.data.message);
      }
    } catch (error) {
      console.error("Error fetching products: "+error);
      toast.error("Error fetching products: "+error.message);      
    }
  }

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(backendUrl + "/api/product/remove", {id}, {headers: {token}} );
      if (response.data.success) {
        toast.success("Product removed successfully: ", response.data.message);
        await fetchList();
      } else {
        console.log("Error removing product", response.data.message);
        toast.error("Error removing product: "+response.data.message);
      }
    } catch (error) {
      console.error("Error removing product: "+error);
      toast.error("Error removing product: "+error.message);      
    }
  }

  useEffect(() => {
    fetchList();
  }, []);
  return (
    <>
     <p className='mb-2'>All Products List</p> 
     <div className="flex flex-col gap-2">
      {/* List Table title */}
      <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm">
        <b>Image</b>
        <b>Name</b>
        <b>Price</b>
        <b>Category</b>
        <b className='text-center'>Action</b>
      </div>
      {/* List table attributes */}
      {
        list.map((product, index) => (
          <div key={index} className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm'>
            <img className='w-12' src={product.image[0]} alt="" />
            <p>{product.name}</p>
            <p>{product.category}</p>
            <p>{currency}{product.price}</p>
            <p className='text-right md:text-center cursor-pointer text-lg' onClick={() => removeProduct(product._id)}>X</p>
          </div>
        ))
      }
     </div>
    </>
  )
}

export default List
