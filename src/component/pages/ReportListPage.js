


// import React, { useState, useEffect } from 'react';
// import './ReportListPage.css';
// import Navbar from '../Navbar';

// const ReportListPage = (props) => {
//   const data = props.ds;

//   console.warn(data);

//   const [reportsData, setReportsData] = useState(); 
//   const [currentPage, setCurrentPage] = useState(1);
//   const [reportsPerPage] = useState(10);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredReports, setFilteredReports] = useState([]);
//   const [currentReports, setCurrentReports] = useState([]);

//   useEffect(() => {
//     const filtered = reportsData.filter(
//       (report) =>
//         report.date.includes(searchTerm) || report.projectName.includes(searchTerm)
//     );
//     setFilteredReports(filtered);
    
//     const indexOfLastReport = currentPage * reportsPerPage;
//     const indexOfFirstReport = indexOfLastReport - reportsPerPage;
//     setCurrentReports(filtered.slice(indexOfFirstReport, indexOfLastReport));
//   }, [searchTerm, reportsData, currentPage, reportsPerPage]);

//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="report-list">
//         <h2>Report List</h2>
//         <input
//           type="text"
//           placeholder="Search by Date or Project Name"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <table>
//           <thead>
//             <tr>
//               <th>Date</th>
//               <th>Name</th>
//               <th>Project Name</th>
//               <th>Hours Worked</th>
//               <th>Comments</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentReports.map((info, index) => (
//               <tr key={index}>
//                 <td>{info.date}</td>
//                 <td>{info.name}</td>
//                 <td>{info.projectName}</td>
//                 <td>{info.hoursWorked}</td>
//                 <td>{info.comments}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <div className="pagination">
//           {Array.from({ length: Math.ceil(filteredReports.length / reportsPerPage) }).map(
//             (_, index) => (
//               <button key={index} onClick={() => paginate(index + 1)}>
//                 {index + 1}
//               </button>
//             )
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default ReportListPage;















// // import React, { useState, useEffect } from 'react';
// // import './ReportListPage.css';
// // import Navbar from '../Navbar';


// // const ReportListPage = ( props ) => {
// //    const data = props.ds;
   
// //      console.warn(data);
// //   const [reportsData, setReportsData] = useState([]);
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const [reportsPerPage] = useState(10);
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [filteredReports, setFilteredReports] = useState([]);
  
// //   useEffect(() => {
    
// //     const filtered = reportsData.filter(
// //       (report) =>
// //         report.date.includes(searchTerm) || report.projectName.includes(searchTerm)
// //     );
// //     setFilteredReports(filtered);
// //   }, [searchTerm, reportsData]);

// //   // Pagination logic here
// //   const indexOfLastReport = currentPage * reportsPerPage;
// //   const indexOfFirstReport = indexOfLastReport - reportsPerPage;
// //   const currentReports = filteredReports.slice(
// //     indexOfFirstReport,
// //     indexOfLastReport
// //   );

// //   const paginate = (pageNumber) => {
// //     setCurrentPage(pageNumber);
// //   };
    
// //   return (
// //     <>
// //     <Navbar/>
// //     <div className="report-list">
// //       <h2>Report List</h2>
// //       <input
// //         type="text"
// //         placeholder="Search by Date or Project Name"
// //         value={searchTerm}
// //         onChange={(e) => setSearchTerm(e.target.value)}
// //       />
// //       <table>
// //         <thead>
// //           <tr>
// //             <th>Date</th>
// //             <th>Name</th>
// //             <th>Project Name</th>
// //             <th>Hours Worked</th>
// //             <th>Comments</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //         {reportsData.map((info, index) => (
// //        <tr key={index}>
// //       <td>{info.date}</td>
// //       <td>{info.name}</td>
// //       <td>{info.projectName}</td>
// //       <td>{info.hoursWorked}</td>
// //       <td>{info.comments}</td>
// //     </tr>
// //   ))}

// //         </tbody>
// //       </table>
// //       <div className="pagination">
// //         {Array.from({ length: Math.ceil(filteredReports.length / reportsPerPage) }).map(
// //           (_, index) => (
// //             <button key={index} onClick={() => paginate(index + 1)}>
// //               {index + 1}
// //             </button>
// //           )
// //         )}
// //       </div>
// //     </div>
// //     </>
// //   );
// // };

// // export default ReportListPage;




import React, { useState, useEffect } from 'react';
import './ReportListPage.css';
import Navbar from '../Navbar';

const ReportListPage = (props) => {
  const data = props.ds;

  console.warn(data);

  const [reportsData, setReportsData] = useState([]); // Initialize with an empty array
  const [currentPage, setCurrentPage] = useState(1);
  const [reportsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredReports, setFilteredReports] = useState([]);
  const [currentReports, setCurrentReports] = useState([]);

  useEffect(() => {
    // Ensure reportsData is not undefined before filtering
    if (reportsData) {
      const filtered = reportsData.filter(
        (report) =>
          report.date.includes(searchTerm) || report.projectName.includes(searchTerm)
      );
      setFilteredReports(filtered);

      const indexOfLastReport = currentPage * reportsPerPage;
      const indexOfFirstReport = indexOfLastReport - reportsPerPage;
      setCurrentReports(filtered.slice(indexOfFirstReport, indexOfLastReport));
    }
  }, [searchTerm, reportsData, currentPage, reportsPerPage]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Navbar />
      <div className="report-list">
        <h2>Report List</h2>
        <input
          type="text"
          placeholder="Search by Date or Project Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Project Name</th>
              <th>Hours Worked</th>
              <th>Comments</th>
            </tr>
          </thead>
          <tbody>
            {currentReports.map((info, index) => (
              <tr key={index}>
                <td>{info.date}</td>
                <td>{info.name}</td>
                <td>{info.projectName}</td>
                <td>{info.hoursWorked}</td>
                <td>{info.comments}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          {Array.from({ length: Math.ceil(filteredReports.length / reportsPerPage) }).map(
            (_, index) => (
              <button key={index} onClick={() => paginate(index + 1)}>
                {index + 1}
              </button>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default ReportListPage;
