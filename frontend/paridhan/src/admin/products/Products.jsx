import React, { useState } from 'react'
import Nav from '../nav/Nav'
import style from './products.module.css'
import axios from 'axios'
import { useEffect } from 'react'
import {BiEdit} from 'react-icons/bi'
import {RiDeleteBin2Line} from 'react-icons/ri'
import {AiOutlineEye} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useDisclosure } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button
  } from '@chakra-ui/react'
import AddProductsForm from '../../components/addProductsForm/AddProductsForm'

const Products = () => {

    const initState = {
        name: "",
        img: "",
        price: null,
        discPrice: null,
        color: "",
        category: "",
        tags: "",
        stocks: null,
      };

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [prod, setProd]= useState("");
    const [product, setProduct]= useState(initState);
    const [edit, setEdit]= useState(initState);

    

    const addProduct=(e)=>{
        e.preventDefault();
        axios
        .post("http://localhost:8080/products/add", product)
        .then((res)=> console.log(res.data))
        .catch((err)=>{
            console.log(err)
        })
      }


      const data = (e) => {
        const { name, value } = e.target;
        setProduct((prev) => {
          return { ...prev, [name]: value };
        });
      };

      const editData = (e) => {
        const { name, value } = e.target;
        setEdit((prev) => {
          return { ...prev, [name]: value };
        });
      };


    useEffect(()=>{
        axios
        .get("https://odd-lime-crayfish-hat.cyclic.app/products")
        .then((res)=>{
            setProd(res.data)})
        .catch((err)=> {
            console.log(err)})
    },[])

          const handleDelete=(id)=>{
                axios
                .delete(`http://localhost:8080/products/${id}`)
          }

          const handleEdit=(e,id)=>{
            e.preventDefault();
            const payload=editData;
                axios
                .patch(`http://localhost:8080/products/${id}`, payload)
                .then((res)=> console.log(res.data))
                .catch((err)=>{
                    console.log(err)
                })
          }

          
  return (
    <>
        <Nav/>
        <div className={style.main}>
            <div className={style.addProd}>
                <div className={style.container}>
                    <div className={style.addProdForm}>
                        
                    <form onSubmit={addProduct}>
                    {/* <h3>Add Products</h3> */}
                            {/* <label>Product Name</label> */}
                            <input
                                name="name"
                                value={product.name}
                                onChange={(e) => data(e)}
                                type="text"
                                placeholder="Product Name"
                            />

                            {/* <label>Product Category</label> */}
                            <input
                                name="img"
                                value={product.img}
                                onChange={(e) => data(e)}
                                type="text"
                                placeholder="Enter image link"
                            />

                            {/* <label>Product Price</label> */}
                            <input
                                name="price"
                                value={product.price}
                                onChange={(e) => data(e)}
                                type="number"
                                placeholder="Enter Price"
                            />

                            {/* <label>Product Price</label> */}
                            <input
                                name="discPrice"
                                value={product.discPrice}
                                onChange={(e) => data(e)}
                                type="number"
                                placeholder="Enter Discounted Price"
                            />

                            {/* <label>Product Category</label> */}
                            <input
                                name="color"
                                value={product.color}
                                onChange={(e) => data(e)}
                                type="text"
                                placeholder="Product Color"
                            />

                            {/* <label>Product Category</label> */}
                            <input
                                name="category"
                                value={product.category}
                                onChange={(e) => data(e)}
                                type="text"
                                placeholder="Category Name"
                            />

                            {/* <label>Product Tags</label> */}
                            <input
                                value={product.tags}
                                onChange={(e) => data(e)}
                                name="tags"
                                type="text"
                                placeholder="Enter tag"
                            />

                            {/* <label>Size</label> */}
                            <input
                                value={product.stocks}
                                onChange={(e) => data(e)}
                                name="stocks"
                                type="number"
                                placeholder="Enter item stock"
                            />
                            <input type="submit" value="Submit" />
                    </form>
                    </div>
                    
                    <div className={style.list}>
                        <table className={style.userTable}>
                        <thead>
                            <tr>
                                <td>Image</td>
                                <td>Name</td>
                                <td>Price</td>
                                <td>Discounted Price</td>
                                <td>Stock</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                prod && prod.map((ele)=>{
                                    return(
                                        <>
                                        <tr key={ele._id}>
                                            <td><img src={ele.img} style={{width:"50px"}} alt="profile" /></td>
                                            <td>{ele.name}</td>
                                            <td>₹{ele.price}</td>
                                            <td>₹{ele.discPrice}</td>
                                            <td>{ele.stocks}</td>
                                            <td className={style.action}>
                                                <div>
                                                <BiEdit onClick={onOpen} />
                                                <RiDeleteBin2Line onClick={()=>handleDelete(ele._id)}/>
                                                <Link to={`/singleproduct/${ele._id}`}><AiOutlineEye/></Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <Modal isOpen={isOpen} onClose={onClose}>
                                        <ModalOverlay />
                                        <ModalContent>
                                            <ModalHeader>Modal Title</ModalHeader>
                                            <ModalCloseButton />
                                            <ModalBody>
                                                <form onSubmit={addProduct}>
                                                        {/* <label>Product Name</label> */}
                                                        <input
                                                            name="name"
                                                            value={ele.name}
                                                            onChange={(e) => editData(e)}
                                                            type="text"
                                                            placeholder="Product Name"
                                                        />

                                                        {/* <label>Product Category</label> */}
                                                        <input
                                                            name="img"
                                                            value={ele.img}
                                                            onChange={(e) => editData(e)}
                                                            type="text"
                                                            placeholder="Enter image link"
                                                        />

                                                        {/* <label>Product Price</label> */}
                                                        <input
                                                            name="price"
                                                            value={ele.price}
                                                            onChange={(e) => editData(e)}
                                                            type="number"
                                                            placeholder="Enter Price"
                                                        />

                                                        {/* <label>Product Price</label> */}
                                                        <input
                                                            name="discPrice"
                                                            value={ele.discPrice}
                                                            onChange={(e) => editData(e)}
                                                            type="number"
                                                            placeholder="Enter Discounted Price"
                                                        />

                                                        {/* <label>Product Category</label> */}
                                                        <input
                                                            name="color"
                                                            value={ele.color}
                                                            onChange={(e) => editData(e)}
                                                            type="text"
                                                            placeholder="Product Color"
                                                        />

                                                        {/* <label>Product Category</label> */}
                                                        <input
                                                            name="category"
                                                            value={ele.category}
                                                            onChange={(e) => editData(e)}
                                                            type="text"
                                                            placeholder="Category Name"
                                                        />

                                                        {/* <label>Product Tags</label> */}
                                                        <input
                                                            value={ele.tags}
                                                            onChange={(e) => editData(e)}
                                                            name="tags"
                                                            type="text"
                                                            placeholder="Enter tag"
                                                        />

                                                        {/* <label>Size</label> */}
                                                        <input
                                                            value={ele.stocks}
                                                            onChange={(e) => editData(e)}
                                                            name="stocks"
                                                            type="number"
                                                            placeholder="Enter item stock"
                                                        />
                                                </form>
                                            </ModalBody>
                        
                                            <ModalFooter>
                                            <Button colorScheme='red' mr={3} onClick={onClose}>
                                                Close
                                            </Button>
                                            <Button colorScheme='green' onClick={()=>handleEdit(ele._id)} >Edit</Button>
                                            </ModalFooter>
                                        </ModalContent>
                                        </Modal>
                                    </>
                                    )
                                })
                            }
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className={style.editPop}>
                                       
            </div>
        </div>
    </>
    
  )
}

export default Products
