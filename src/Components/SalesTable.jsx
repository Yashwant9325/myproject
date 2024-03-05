import React, { useEffect, useState } from 'react'
import axios from 'axios';


export default function Salestable() {
  const [getdata, setgetdata] = useState([])

  function getLoaddata() {
    axios.get("https://658a9cffba789a96223768fb.mockapi.io/sales")
      .then((res) => {
        console.log(res.data);
        setgetdata(res.data)
      })
  }
  function handleDelete(e, id) {
    e.preventDefault()
    axios.delete("https://658a9cffba789a96223768fb.mockapi.io/sales/" + id)
      .then((res) => {
        console.log(res.data);
        getLoaddata()
      })
  }
  useEffect(() => {
    getLoaddata();
  }, [])


  return (
    <>
      <div className="container">
        <div className="col-lg-12" style={{ marginTop: "20px" }}>
          <h4>SalesTable:-</h4>
          <table class="table" >
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Customer Name</th>
                <th scope="col">Mobile No</th>
                <th scope="col">Date</th>
                <th scope="col">GST%</th>
                <th scope='col'>GST Price</th>
                <th scope="col">TotalPrice</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                getdata.map((eachData, i) => {


                  return (


                    <tr key={i} >
                      <th scope="row">{i + 1}</th>
                      <td>{eachData.personal.Custmer_Name}</td>
                      <td>{eachData.personal.Mobile_No}</td>
                      <td>{eachData.personal.Date}</td>
                      <td>{eachData.totalgst}</td>
                      <td>{eachData.totalGSTApplies}</td>
                      <td>{eachData.totalPrice}</td>
                      <td>
                        <button className='btn btn-danger' onClick={(e) => handleDelete(e,eachData.id)}>Remove</button>
                      </td>



                    </tr>
                  )

                })
              }


            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}