import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './component/pages/Home'
import Register from './component/pages/Register'

import DashboardPage from './component/pages/DashboardPage'
import ReportSubmissionForm from './component/pages/ReportSubmissionForm'
import ReportListPage from './/component/pages/ReportListPage'
import Login from './component/pages/Login'
//import React, { useState } from 'react';


function App() {
  // const [reports, setReports] = useState([]);

  // const addReport = (reportData) => {
  //   setReports([...reports, reportData]);
  // };

  return (
    <div>
      
      {/* <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path='/register/login' element={<Register/>}></Route>
        <Route path='/login/dashboard' element={<Login/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/login/dashboard' element={<DashboardPage/>}></Route>
        <Route path='dashboard/list' element={<ReportListPage/>}></Route>
        <Route path='dashboard/reportsub' element={<ReportSubmissionForm/>}></Route>
        </Routes>
      </BrowserRouter> */}

      <BrowserRouter>
                    <Routes>
                            <Route index element={<Home />} />
                            <Route path='/register' element={<Register />} />
                            <Route path='/login/dashboard' element={<DashboardPage />} />
                              <Route path='/login' element={<Home/>}></Route>
                            <Route path='dashboard/list' element={<ReportListPage />} />
                            <Route path='dashboard/reportsub' element={<ReportSubmissionForm />} />
                  </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App







