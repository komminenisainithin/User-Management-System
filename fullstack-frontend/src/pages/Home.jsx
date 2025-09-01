import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

export default function Home() {

    const [Users, setUser]= React.useState([])

    const {id}= useParams();

    useEffect(()=>{
        console.log("users called")
        loadUsers();
    },[])

    const loadUsers = async()=>{
       const result = await  axios.get("http://localhost:8081/user");
       setUser(result.data);
    }

    const delecteUser = async (id)=>{
        await axios.delete(`http://localhost:8081/user/${id}`);
        loadUsers();
    }
   

    return (
        <div className='container'>
            <div className='py-4'>
                <table className="table table-striped border shadow">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">User Name</th>
                            <th scope="col">E-Mail</th>
                            <th scope="col">Password</th>
                            <th scope="col text-center">Action</th>
                            
                        </tr>
                    </thead>
                    <tbody>

                        {
                            Users.map((user, index)=>(

                                <tr key={user.id}>
                                    <th scope="row " >{index+1}</th>
                                    <td >{user.name}</td>
                                    <td>{user.userName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.password}</td>
                                    <td >
                                        <Link className='btn btn-primary mx-2 ' to={`/viewuser/${user.id}`} >View</Link>
                                        <Link className='btn btn-outline-primary mx-2' to={`/edituser/${user.id}`}>Edit</Link>
                                        <button className='btn btn-danger mx-2' onClick={()=> delecteUser(user.id)}>Delete</button>

                                    </td>
                                </tr>
                                
                            ))
                        }

                        
                
                    </tbody>
                </table>

            </div>

        </div>
    )
}

