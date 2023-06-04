import React, { useContext } from 'react'
import "./Login.scss"
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/authContext';

const Login = () => {
 
  const currentUser = true;

  return (
    <div className='login'>
        <div className="card">
          <div className="left">
             <h1>Hello World.</h1>
             <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit recusandae explicabo deleniti nisi quaerat laborum quam sit ullam expedita. Voluptatum laborum incidunt sequi corrupti iure culpa neque velit non perferendis?
             </p>
             <span>Don't you have an account</span>
             <Link to="/register"> 
             <button>Register</button>
             </Link>
          </div>
          <div className="right">
              <h1>Login</h1>
              <form action="">
                 <input type="text" name="" id="" placeholder='Username' />
                 <input type="password" name="" placeholder='Password' />
                 <button>Login</button>
              </form>
          </div>
        </div>
    </div>
  )
}

export default Login