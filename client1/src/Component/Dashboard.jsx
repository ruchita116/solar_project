import React, { useEffect } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import { IoIosAdd } from "react-icons/io";
import { FaUsersViewfinder } from "react-icons/fa6";

const Dashboard = ({isAuth}) => {
  let navigate = useNavigate()
  useEffect(() => {

    if (!isAuth)
        navigate('/signup')
}, [isAuth])
  return (
    <>
    <div className='dashboard' >
    <div className='button-container'>
      
      <div style={{ display: 'flex', backgroundColor: '#0295B6', padding: '10px', borderRadius: '10px' }}>
        <div style={{ color: '#fff', margin: '10px' }}><i class="fa-solid fa-user fa-4x" style={{ margin: '5px' }}></i></div>
        <div style={{ color: '#fff', margin: '10px', display: 'flex', alignItems: 'center', fontWeight: 'bold', fontFamily: 'serif', fontSize: '30px' }}>
          <div style={{ margin: '5px' }}>
           <Link to="wcr" style={{textDecoration:"none",color:"white"}}>+Add User</Link> 
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', backgroundColor: '#0295B6', padding: '10px', borderRadius: '10px' }}>
        <div style={{ color: '#fff', margin: '10px' }}><i class="fa-solid fa-users fa-4x" style={{ margin: '5px' }}></i></div>
        <div style={{ color: '#fff', margin: '10px', display: 'flex', alignItems: 'center', fontWeight: 'bold', fontFamily: 'serif', fontSize: '30px' }}>
          <div style={{ margin: '5px' }}>
          <Link to="details" style={{textDecoration:"none",color:"white"}}> View User</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Dashboard
