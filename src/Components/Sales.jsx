
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default function Sales() {
  const [newData, setNewData] = useState([]);
  const [rows, setRows] = useState([{ quantity: 1 }]);
  const [total, setTotal] = useState();
  const[personal ,setpersonal] =useState ({
    Date:"",
    Custmer_Name:"",
    Mobile_No:"",

  })
  let totalPrice = 0;
  let totalGST=0;
  let totalGSTApplies = 0;

  function handleChange(id, index) {
    console.log(id);
    const dropdown = newData.find((e) => e.id === id);

    let copyRows = [...rows];
    copyRows[index].selectedproduct = dropdown;
    setRows(copyRows);

    // setData(dropdown)
    console.log(dropdown);
  }
  console.log(rows);

  const addrow = () => {
    let copyrows = [...rows];
    copyrows.push({ quantity: 1 });
    setRows(copyrows);

    console.log(rows);
  };

  function loadData() {

    axios.get("https://658a9cffba789a96223768fb.mockapi.io/products")
      .then((res) => {
        console.log(res.data);
        setNewData(res.data);
      });
  }

  const quantitychange = (value, i) => {
    // console.log(value);
    let copyRows = [...rows];
    copyRows[i].quantity = value;
    setRows(copyRows);
  };
  useEffect(() => {
    loadData();
  }, []);

  function handelSubmit(){
    const postdata = {
      row: rows,
      personal:personal,
      totalPrice:totalPrice,
      totalgst:totalGST,
      totalGSTApplies:totalGSTApplies,

    }
    axios.post("https://658a9cffba789a96223768fb.mockapi.io/sales",postdata)
    .then((res)=>{
      setpersonal(res.data)
      
    })
  }

    function handleData(e){
      // e.preventdefault()
      setpersonal({...personal,[e.target.id]:e.target.value}) 
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="ms-1" style={{ marginTop: "100px" }}>
              Sales:-
            </h2>

            <div className="card">

              <div class="card-body">
                <div className="d-flex">
                  <div className="ms-4 me-3">
                    <h5 className="card-title">--Select Date--</h5>
                    <input type="date" onChange={((e)=>handleData(e))} id='Date' />
                  </div>

                  <div className="ms-4 me-3">
                    <h5 className="card-title ">--Customer Name--</h5>
                    <input type="text" onChange={((e)=>handleData(e))} id='Custmer_Name' />
                  </div>

                  <div className="ms-4 me-3">
                    <h5 className="card-title ">--Mobile Number--</h5>
                    <input type="number" onChange={((e)=>handleData(e))} id='Mobile_No' />
                  </div>
                </div>
                <br />
              </div>
            </div>
            <br />
            <button className="btn btn-primary mt-2" onClick={addrow}>
              Add Row
            </button>
            <br />
            <br />

            <div className="card mb-5">
              <div className="card-body">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">Product</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">GST%</th>
                      <th scope="col">Price</th>
                      <th scope="col">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row, i) => {
                      if (row.selectedproduct) {
                        // totalPrice += row.quantity * row.selectedproduct.price;
                        totalPrice += row.selectedproduct.price*row.selectedproduct.GST/100*row.quantity+row.selectedproduct.price*row.quantity
                        totalGST=row.selectedproduct.GST
                        totalGSTApplies+= row.selectedproduct.price*row.selectedproduct.GST/100*row.quantity
                      }
                      return (
                        <tr key={i}>
                          <th scope="row">{i + 1}</th>
                          <td>
                            <select
                              onChange={(e) => handleChange(e.target.value, i)}
                              className="form-control"
                            >
                              <option value="">--Select Product--</option>
                              {newData.map((eachData, i) => {
                                return (
                                  <option key={i} value={eachData.id}>
                                    {eachData.Product_Name}
                                  </option>
                                );
                              })}
                            </select>
                          </td>
                          <td>
                            <input
                              className="form-control"
                              type="number"
                              value={row.quantity}
                              onChange={(e) =>
                                quantitychange(e.target.value, i)
                              }
                            />
                          </td>
                          <td>
                            <input type="text" className="form-control"
                              value={
                                row.selectedproduct
                                  ? row.selectedproduct.GST
                               : ""
                              }
                            />
                          </td>
                          <td>
                            <input
                              className="form-control"
                              type="number"
                              value={
                                row.selectedproduct
                                ? row.selectedproduct.price 
                                  : ""
                              }
                            />
                          </td>
                      
                          <td>
                            <input
                              className="form-control"
                              type="text"
                              value={
                                row.selectedproduct
                                ? row.selectedproduct.price*row.selectedproduct.GST/100*row.quantity+row.selectedproduct.price*row.quantity
                                  : ""
                              }
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>

                <div className="d-flex justify-content-between">
                  <Link to={"/home/SalesTable"}>
                  <button className="btn btn-primary" onClick={((e)=>handelSubmit(e))}>Submit</button>
                
                  </Link>
                  <span><b> Total Price With GST:{totalPrice}</b></span>
                  <span><b>totalGST:{totalGST}</b></span>
                  <span><b>totalGST Applies:{totalGSTApplies}</b></span>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
