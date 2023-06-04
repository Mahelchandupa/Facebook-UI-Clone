import React from 'react'
import "./Register.scss"
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div>
       <div className='register'>
        <div className="card">
          <div className="left">
             <h1>Lama Social.</h1>
             <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit recusandae explicabo deleniti nisi quaerat laborum quam sit ullam expedita. Voluptatum laborum incidunt sequi corrupti iure culpa neque velit non perferendis?
             </p>
             <span>Do you have an account</span>
             <Link to="/login">
                <button>Login</button>
             </Link>
          </div>
          <div className="right">
              <h1>Register</h1>
              <form action="">
                 <input type="text" name="" id="" placeholder='Username' />
                 <input type="email" placeholder='Email' />
                 <input type="password" name="" placeholder='Password' />
                 <input type="text" placeholder='Name' />
                 <button>Register</button>
              </form>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Register