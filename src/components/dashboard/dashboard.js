import React from 'react';
import './dashboard.css';
import image from '../../waether-icons-pack-1/iconfinder_0_22833.png';
const Dashboard = () => {
 return (
     <div className="Dashboard">
        <h1>Sumy</h1>
        <p>Tuesday, 9:00 AM</p>
        <img src={image} alt="weather"/>
        <p className="Dashboard-temperature">
            55°C
            <span className="Dashboard-temperature">
            RAIN SHOWER
            </span>
        </p>
      
     </div>
 );
}

export default Dashboard;