import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../src/Signup.css';
import Swal from "sweetalert2"


const Signup = ({setIsAuth,getAuthDetails}) => {
    const [formData, setFormData] = useState({ name: 'admin', password: '1234' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {   
        e.preventDefault();
        if( formData.name == "admin" && formData.password == 1234){
            localStorage.setItem('auth',JSON.stringify({isAuth:true}))
            getAuthDetails()
            alert(`Name: ${formData.name}\nPassword: ${formData.password}`);
            navigate('/'); // Navigate to the dashboard after signup
        }
        else if( formData.name == "employee" && formData.password == 7890){
            localStorage.setItem('auth',JSON.stringify({isAuth:true}))
            getAuthDetails()
            alert(`Name: ${formData.name}\nPassword: ${formData.password}`);
            navigate('/'); // Navigate to the dashboard after signup
        }
        else{
            Swal.fire({
                title:'error',
                text:'Invid Login Credentials',
                icon:'error'
            })
        }
       
    };

    return (
      
        <div  className='signup'>
            <form onSubmit={handleSubmit}>
               <h1>Sign Up</h1>
                    <div >
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name"   name="name" style={{margin:"20px"}}  placeholder="Enter your name"     onChange={handleChange}   required  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input    type="password"     id="password"
                            name="password"     placeholder="Enter your password"  onChange={handleChange} required
                        />
                    </div>
                    <button type="submit" className="submit-button">
                        Submit
                    </button>
                   
            </form>
        </div>
       
    );
};

export default Signup;
