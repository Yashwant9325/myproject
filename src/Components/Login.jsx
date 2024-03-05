
import React, {useState} from "react"
import { Link, useNavigate,} from "react-router-dom"


export default function Login()
{
  const [user,setUser] = useState();
  const [pass,setPass] = useState();


  let navigate = useNavigate();
  function handleSubmit(){
    if(user === "admin" && pass === "admin"){
      localStorage.setItem("username",user);
      localStorage.setItem("password",pass);
      navigate("/home")

    }
    else{
      alert("Invalid")
    }
  }
 
    return(
      <>
<section className=" gradient-custom">
  <div className=" py-5 h-20  "style={{backgroundColor:"orange"}}>
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white" style={{borderRadius:'1rem'}}>
          <div className="card-body p-5 text-center">

            <div className="mb-md-5 mt-md-4 pb-5">

              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>

              <div className="form-outline form-white mb-4">
                <input  type="email" onChange={(e)=> setUser(e.target.value)} id="typeEmailX" className="form-control form-control-lg" />
                <label className="form-label" for="typeEmailX">Email</label>
              </div>

              <div className="form-outline form-white mb-4">
                <input type="password" onChange={(e)=> setPass(e.target.value)} id="typePasswordX" className="form-control form-control-lg" />
                <label className="form-label" for="typePasswordX">Password</label>
              </div>

              <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

              <button className="btn btn-outline-light btn-lg px-5" type="submit" onClick={(e)=>handleSubmit(e.target.value)}>Login</button>
  
              <div className="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
              </div>

            </div>

            <div>
              <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>


</>
)
}

