

import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardPage.css'; // Import your CSS file
import Navbar from '../Navbar';
import bg2 from './bg2.png';



function DashboardPage() {
  return (
    <div className='dash'>
      <Navbar></Navbar>
      
        <main>
        <img  className='bg2' src={bg2} alt="Background Image2" />
      </main> 
       
    </div>
  );
}

export default DashboardPage;






























// import React from 'react';
// import { Link } from 'react-router-dom';
// import './DashboardPage.css';
// import Navbar from '../Navbar';

// function DashboardPage() {
//   return (
//     <div className='dash'>
//     <h1>Welcome to dashboard</h1><br/>
//       <Navbar></Navbar>
//       <main>
//         {/* Your dashboard content goes here */}
//       </main>
//     </div>
//   );
// }

// export default DashboardPage;
