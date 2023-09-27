import React, { useState } from 'react';
import './ReportSubmissionForm.css';
// import Navbar from '../Navbar';
import ReportListPage from './ReportListPage';



const ReportSubmissionForm = () => {
  
    const [formData, setFormData] = useState({
        date: '',
        name: '',
        projectName: '',
        hoursWorked: '',
        comments: '',
    });
 const[fdata, setFdata] = useState({})
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
     const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};

        if (!formData.date) {
            validationErrors.date = 'Date is required.';
        }

        if (!formData.name) {
            validationErrors.name = 'Name is required.';
        }

        if (!formData.projectName) {
            validationErrors.projectName = 'Project Name is required.';
        }

        if (!formData.hoursWorked) {
            validationErrors.hoursWorked = 'Hours Worked is required.';
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);

        } else {

            console.log('Form submitted:', formData);
            
          setFdata({
            date: formData.date,
            name: formData.name,
            projectName: formData.projectName,
            hoursWorked: formData.hoursWorked,
            comments: formData.comments,
          })
            setFormData({
                date: '',
                name: '',
                projectName: '',
                hoursWorked: '',
                comments: '',
            });

        }

    };
   
    return (
        <>
        
        <ReportListPage ds={fdata} />
         
        <div className="report-submission">
            <h2 className='h1'>Report Submission</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Date</label>
                    <input
                        type="text"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                    />
                    {errors.date && <div className="error">{errors.date}</div>}
                </div>

                
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    {errors.name && <div className="error">{errors.name}</div>}
                </div>
                <div className="form-group">
                    <label>Project Name</label>
                    <input
                        type="text"
                        name="projectName"
                        value={formData.projectName}
                        onChange={handleInputChange}
                    />

                    {errors.projectName && <div className="error">{errors.projectName}</div>}
                </div>

                <div className="form-group">
                    <label>Hours Worked</label>
                    <input
                        type="text"
                        name="hoursWorked"
                        value={formData.hoursWorked}
                        onChange={handleInputChange}
                    />
                    {errors.hoursWorked && <div className="error">{errors.hoursWorked}</div>}
                </div>
                <div className="form-group">
                    <label>Comments</label>
                    <textarea
                        name="comments"
                        value={formData.comments}
                        onChange={handleInputChange}
                    />
                </div>

                <button id="btn" type="submit">Submit</button>
            </form>
        </div>
        </>
    );

};
export default ReportSubmissionForm;


// ReportSubmissionForm.js


// function ReportSubmissionForm({ onReportSubmit }) {
//   const [formData, setFormData] = useState({
//     date: '',
//     name: '',
//     projectName: '',
//     hoursWorked: '',
//     comments: '',
//   });

//   const [errors, setErrors] = useState({});

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = {};

//     if (!formData.date) {
//       validationErrors.date = 'Date is required.';
//     }

//     if (!formData.name) {
//       validationErrors.name = 'Name is required.';
//     }

//     if (!formData.projectName) {
//       validationErrors.projectName = 'Project Name is required.';
//     }

//     if (!formData.hoursWorked) {
//       validationErrors.hoursWorked = 'Hours Worked is required.';
//     }

//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {
//       console.log('Form submitted:', formData);
//       onReportSubmit(formData); // Add the report to the parent component's state or perform any desired action
//       setFormData({
//         date: '',
//         name: '',
//         projectName: '',
//         hoursWorked: '',
//         comments: '',
//       });
//     }
//   };

//   return (
//     <div className="report-submission">
//       <h2 className="h1">Report Submission</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Date</label>
//           <input
//             type="text"
//             name="date"
//             value={formData.date}
//             onChange={handleInputChange}
//           />
//           {errors.date && <div className="error">{errors.date}</div>}
//         </div>

//         <div className="form-group">
//           <label>Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//           />
//           {errors.name && <div className="error">{errors.name}</div>}
//         </div>
//         <div className="form-group">
//           <label>Project Name</label>
//           <input
//             type="text"
//             name="projectName"
//             value={formData.projectName}
//             onChange={handleInputChange}
//           />

//           {errors.projectName && (
//             <div className="error">{errors.projectName}</div>
//           )}
//         </div>

//         <div className="form-group">
//           <label>Hours Worked</label>
//           <input
//             type="text"
//             name="hoursWorked"
//             value={formData.hoursWorked}
//             onChange={handleInputChange}
//           />
//           {errors.hoursWorked && (
//             <div className="error">{errors.hoursWorked}</div>
//           )}
//         </div>
//         <div className="form-group">
//           <label>Comments</label>
//           <textarea
//             name="comments"
//             value={formData.comments}
//             onChange={handleInputChange}
//           />
//         </div>

//         <button id="btn" type="submit">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default ReportSubmissionForm;



// // ReportSubmissionForm.js


// import React, { useState } from 'react';
// import './ReportSubmissionForm.css';
// const ReportSubmissionForm = ({ onReportSubmit }) => {
//   const [formData, setFormData] = useState({
//     date: '',
//     name: '',
//     projectName: '',
//     hoursWorked: '',
//     comments: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onReportSubmit(formData);
//     setFormData({
//       date: '',
//       name: '',
//       projectName: '',
//       hoursWorked: '',
//       comments: '',
//     });
//   };

//   return (
//     <div className="report-submission">
//       <h2>Report Submission</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="date">Date:</label>
//           <input
//             type="text"
//             name="date"
//             id="date"
//             placeholder="Enter the date"
//             value={formData.date}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             name="name"
//             id="name"
//             placeholder="Enter your name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="projectName">Project Name:</label>
//           <input
//             type="text"
//             name="projectName"
//             id="projectName"
//             placeholder="Enter project name"
//             value={formData.projectName}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="hoursWorked">Hours Worked:</label>
//           <input
//             type="text"
//             name="hoursWorked"
//             id="hoursWorked"
//             placeholder="Enter hours worked"
//             value={formData.hoursWorked}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="comments">Comments:</label>
//           <textarea
//             name="comments"
//             id="comments"
//             placeholder="Enter comments"
//             value={formData.comments}
//             onChange={handleChange}
//           />
//         </div>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default ReportSubmissionForm;



