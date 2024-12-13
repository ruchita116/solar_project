import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';



const Layout = ({ isAuth }) => {
    let navigate = useNavigate()
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownVisible(isDropdownVisible ? false : true);
    };

    const logout=()=>{
        localStorage.removeItem('auth')
        navigate('/signup')
    }

    return (
        <>
            <div className="sidebar">
                <div className="sidebar-wrapper">
                    <Link to="/" className='dash-a'><li className='dash-board'><b>Samarth Energy Solutions</b></li></Link>
                    <ul className="nav">
                        <Link to="/wcr"><li>Wcr</li></Link>
                        <Link to="/Annexure1"><li>Annexure-1</li></Link>
                        <Link to="/ProfomaA"><li>Profoma A</li></Link>
                        <Link to="/SelfDecleration"><li>Self Declaration</li></Link>
                        <Link to="/ConnectionAggrement"><li>Connection Agreement</li></Link>
                        <Link to="/ModelAgreement"><li>Model Agreement</li></Link>
                        <Link to="/Details"><li>Details</li></Link>
                    </ul>
                </div>
                <div><button onClick={logout}>logout</button></div>
            </div>
            <a className="toggle-btn" onClick={toggleDropdown}>
                {isDropdownVisible ? <i class="fa-solid fa-bars fa-1x toogleicon" ></i> : <i class="fa-solid fa-bars fa-1x toogleicon" ></i>}
            </a>
            {isDropdownVisible && (
                <div className="toggle">
                    <div className="toggle-wrapper">
                        <ul className="toggleNav">
                            <a href="/wcr"><li>Wcr</li></a>
                            <a href="/Annexure1"><li>Annexure-1</li></a>
                            <a href="/ProfomaA"><li>Profoma A</li></a>
                            <a href="/SelfDecleration"><li>Self Declaration</li></a>
                            <a href="/ConnectionAggrement"><li>Connection Agreement</li></a>
                            <a href="/ModelAgreement"><li>Model Agreement</li></a>
                            <a href="/Details"><li>Details</li></a>
                            <button onClick={logout}>logout</button>
                        </ul>
                    </div>
                  
                </div>
            )}
            <Outlet />
        </>
    );
};

export default Layout;
