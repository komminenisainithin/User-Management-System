import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function EditUser() {

  let navigate = useNavigate();
  const{id} = useParams();

  const [user, setUser] = useState({
    name: '',
    userName: '',
    email: '',
    password: ''
  })
  const { name, userName, email, password } = user

  const onInputChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value })

  }

  useEffect(()=>{
    loadUsers();
  },[]);

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!name || !userName || !email || !password) {
    alert("All fields are required!");
    return;
    }
    await axios.put(`http://localhost:8081/user/${id}`,user)
    
    navigate('/')

  };

  const loadUsers = async ()=>{
    const result = await axios.get(`http://localhost:8081/user/${id}`,user)
    setUser(result.data);
    
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>Edit User</h2>
          <form action="" onSubmit={(event)=> onSubmit(event)}>
            <div className='mb-3'>
              <label htmlFor="Name" className='form-lable mb-1'>Name :</label>
              <input type="text" className='form-control' placeholder='Enter your Name' name='name' value={name} onChange={(e => onInputChange(e))} />
            </div>
            <div className='mb-3'>
              <label htmlFor="UserName" className='form-lable mb-1'>User Name :</label>
              <input type="text" className='form-control' placeholder='Enter your User Name' name='userName' value={userName} onChange={(e => onInputChange(e))} />
            </div>
            <div className='mb-3'>
              <label htmlFor="Email" className='form-lable mb-1'>Email :</label>
              <input type="email" className='form-control' placeholder='Enter your Email' name='email' value={email} onChange={(e => onInputChange(e))} />
            </div>
            <div className='mb-3'>
              <label htmlFor="Password" className='form-lable mb-1'>Password :</label>
              <input type="password" className='form-control' placeholder='Enter your Password' name='password' value={password} onChange={(e => onInputChange(e))} />
            </div>
            <div className='text-center'>
              <button className='btn btn-outline-primary' type='submit'>Submit</button>
              <Link className='btn btn-outline-danger mx-3' to={'/'} >Cancel </Link>
            </div>
          </form>
        </div>

      </div>


    </div>
  )
}
