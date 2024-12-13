import React, { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { IoIosAdd } from "react-icons/io";
import { FaUsersViewfinder } from "react-icons/fa6";

const Dashboard = ({ isAuth }) => {
  let navigate = useNavigate()
  useEffect(() => {

    if (isAuth != true)
      navigate('/signup')
  }, [isAuth])
  return (
    <>
      <div className='dashboard' >
        <div className='button-container'>
          <Link to='wcr' style={{ display: 'flex', backgroundColor: '#0295B6', padding: '10px', borderRadius: '10px', textDecoration:'none' }}>
            <div style={{ color: '#fff', margin: '10px' }}><i class="fa-solid fa-user fa-4x" style={{ margin: '5px' }}></i></div>
            <div style={{ color: '#fff', margin: '10px', display: 'flex', alignItems: 'center', fontWeight: 'bold', fontFamily: 'serif', fontSize: '30px' }}>
              <div style={{ margin: '5px' }}>
                <div style={{ textDecoration: "none", color: "white" }}>+Add User</div>
              </div>
            </div>
          </Link>
          <Link to='details' style={{ display: 'flex', backgroundColor: '#0295B6', padding: '10px', borderRadius: '10px', textDecoration:'none' }}>
            <div style={{ color: '#fff', margin: '10px' }}><i class="fa-solid fa-users fa-4x" style={{ margin: '5px' }}></i></div>
            <div style={{ color: '#fff', margin: '10px', display: 'flex', alignItems: 'center', fontWeight: 'bold', fontFamily: 'serif', fontSize: '30px' }}>
              <div style={{ margin: '5px' }}>
                <div style={{ textDecoration: "none", color: "white" }}> View User</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Dashboard
