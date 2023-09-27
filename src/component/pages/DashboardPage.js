import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardPage.css';
import Navbar from '../Navbar';
function DashboardPage() {
  return (
    <div className='dash'>
    <h1>Welcome to dashboard</h1><br/>
      <Navbar></Navbar>
      <main>
        {/* Your dashboard content goes here */}
      </main>
    </div>
  );
}

export default DashboardPage;
