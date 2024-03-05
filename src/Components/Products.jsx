
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import Navbar from './Navbar';
import axios from 'axios';


export default function Product() {


  const [data, setData] = useState({
    Product_Name: "",
    price: "",
    GST: "",
    // Gst_Percentage:""

  })

  const [newData, setnewData] = useState([])
  const [id, setId] = useState(undefined)

  function Handlechange(e) {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  function Handlesubmit(e) {
    e.preventDefault();
    loadData()
    // console.log(data);
    if (id === undefined) {
      axios.post("https://658a9cffba789a96223768fb.mockapi.io/products", data)
        .then((res) => {
          console.log(res.data);
          loadData()
        })
      setData({
        Product_Name: "",
        price: "",
        GST: "",
        // Gst_Percentage:""
      })
    }
    else {
      axios.put("https://658a9cffba789a96223768fb.mockapi.io/products/" + id, data)
        .then((res) => {
          console.log(res.data);
          loadData()
        })
      setData({
        Product_Name: "",
        price: "",
        GST: "",
        // Gst_Percentage:""
      })
    }
  }
  function loadData() {
    axios.get("https://658a9cffba789a96223768fb.mockapi.io/products")
      .then((res) => {
        console.log(res.data);
        setnewData(res.data);
      })
  }
  useEffect(() => {
    loadData();

  }, [])

  function handleDelete(e, id) {
    e.preventDefault();
    axios.delete("https://658a9cffba789a96223768fb.mockapi.io/products/" + id)
      .then((res) => {
        console.log(res.data);
        loadData();
      })

  }

  function handleUpdate(e, id) {
    e.preventDefault();
    setId(id);
    axios.get("https://658a9cffba789a96223768fb.mockapi.io/products/" + id)
      .then((res) => {
        console.log(res.data);
        setData({
          Product_Name: res.data.Product_Name,
          price: res.data.price,
          GST: res.data.GST,
          // Gst_Percentage: res.data.Gst_Percentage

        })
      })
  }

  return (
    <>

      {/* <Navbar /> */}



      <div className=' mt-4'>

        <div className='row'>

          <div className='col-lg-12'>

          
          </div>

          <div className='col-lg-12'>
            <div className='d-flex justify-content-between'>
              <h1>Products:-</h1>
              <button className='btn btn-primary m-2 me-5' data-bs-toggle="modal" data-bs-target="#exampleModal">Add To Product</button>



              {/* <!-- Button trigger modal --> */}
              {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Add
              </button> */}

              {/* <!-- Modal --> */}
              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="modal-body">
                      <input name='Product_Name' value={data.Product_Name} onChange={Handlechange} className='form-control' type="text" placeholder='Product_Name' /><br /><br />

                      <input name='price' value={data.price} onChange={Handlechange} className='form-control' type="text" placeholder='Price' /><br /><br />

                      {/* <input name='GST' value={data.GST} onChange={Handlechange} className='form-control' type="text" placeholder='Price' aria-label="Default select example" /><br /><br /> */}
                      


                      <select  name='GST'value={data.GST} onChange={Handlechange} placeholder="GST" className='form-control' aria-label="Default select example"  >
                                                <option selected>GST</option>
                                                <option >12</option>
                                                <option >18</option>
                                               
                                            </select>

                      {/* <input name='Gst_Percentage' value={data.Gst_Percentage} onChange={Handlechange} className='form-control' type="text" placeholder='Gst_Percentage' /><br /><br /> */}
                    </div>

                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                      <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={(e) => Handlesubmit(e)}>Add</button>
                    </div>
                  </div>
                </div>
              </div>




            </div><br />



            <table className="table table-hover">
              <thead className=' table-danger'>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Product_Name</th>
                  <th scope="col">price</th>
                  <th scope="col">GST%</th>
                  {/* <th scope="col">Gst_Percentage</th> */}
                  <th scope="col">Button</th>
                </tr>
              </thead>


              <tbody className=' table-info'>
                {
                  newData.map((eachData, i) => {
                    return (
                      <tr key={i}>
                        <th scope="row">{i + 1 + "."}</th>
                        <td >{eachData.Product_Name}</td>
                        <td>{eachData.price + "/-"}</td>
                        <td>{eachData.GST}</td>
                        {/* <td>{eachData.Gst_Percentage +"%"}</td> */}


                        <td>
                          <button onClick={(e) => handleUpdate(e, eachData.id)} data-bs-toggle="modal" data-bs-target="#exampleModal" className='btn btn-primary me-2'>Edit</button>

                          <button onClick={(e) => handleDelete(e, eachData.id)} className='btn btn-danger'>Delete</button>
                        </td>
                      </tr>

                    )
                  })
                }

               
              </tbody>
            </table>

          </div>
        </div>
      </div>


    </>
  )
}