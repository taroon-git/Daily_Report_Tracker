// import React, { useState } from 'react';
// import './ReportSubmissionForm.css';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import axios from 'axios'; // Import Axios
// import Navbar from '../Navbar';


// const ReportSubmissionForm = () => {
//   const [data, setdata] = useState({
//     date: new Date(),
//     name: '',
//     project: '',
//     time: '',
//     discription: '',
//   });
 
//   const [errors, setErrors] = useState({});
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setdata({
//       ...data,
//       [name]: value,
//     });
//   };
//   const handleDateChange = (date) => {
//     setdata({
//       ...data,
//       date,
//     });
//   };
//    // HTTP headers for the axios request
//   const headers = {
//     'Content-Type': 'application/json',
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = {};
//     if (!data.date) {
//       validationErrors.date = 'Date is required.';
//     }
//     if (!data.name) {
//       validationErrors.name = 'Name is required.';
//     }
//     if (!data.project) {
//       validationErrors.projecte = 'Project Name is required.';
//    }
//     if (!data.time) {
//       validationErrors.time = 'Hours Worked is required.';
//     }
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {
//       try {

//         const response = await axios.post('http://192.168.68.43:8000/api/v1/add', data,{headers});       
//         console.log('Form submitted:', response.data);
//         alert(response.data.message);      
//         setdata({
//           date: new Date(),
//           name: '',
//           project: '',
//           time: '',
//           discription: '',
//         });
//       } catch (error) {   

//         console.error('Error submitting form:', error);     

//       }
//     }
//   };
//   return (
//     <>
//       <Navbar></Navbar>
//       <div className="report-submission">
//         <h2 className="h1">Report Submission</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Date</label>
//             <DatePicker
//               selected={data.date}
//               onChange={handleDateChange}
//               dateFormat="MM-dd-yyyy"
//             />
//             {errors.date && <div className="error">{errors.date}</div>}
//           </div>
//           <div className="form-group">
//             <label>Name</label>
//             <input
//               type="text"
//               name="name"
//               value={data.name}
//               onChange={handleInputChange}
//             />
//             {errors.name && <div className="error">{errors.name}</div>}
//           </div>
//           <div className="form-group">
//             <label>Project Name</label>
//             <input
//               type="text"
//               name="project"
//               value={data.project}
//               onChange={handleInputChange}
//             />
//             {errors.project && (
//               <div className="error">{errors.project}</div>
//             )}
//           </div>
//           <div className="form-group">
//             <label>Hours Worked</label>
//             <input
//               type="text"
//               name="time"
//               value={data.time}
//               onChange={handleInputChange}
//             />
//             {errors.time && (
//               <div className="error">{errors.time}</div>
//             )}
//           </div>
//           <div className="form-group">
//             <label>Discription</label>
//             <textarea
//             type="text"
//               name="discription"
//               value={data.discription}
//               onChange={handleInputChange}
//             />
//           </div>
//           <button id="btn" type="submit">Submit</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default ReportSubmissionForm;

import React, { Component } from 'react';

import './ReportSubmissionForm.css';

 

class ReportSubmissionForm extends Component {

  constructor(props) {

    super(props);

    this.state = {

      status_update: '',

      obstacles: 'On Track',

      needs_clarification: 'No',

      explanation: '',

      plans: '',

      attachment: null,

    };

  }

 

  handleInputChange = (event) => {

    const { name, value } = event.target;

    this.setState({ [name]: value });

  }

 

  handleFileChange = (event) => {

    this.setState({ attachment: event.target.files[0] });

  }

 

  handleSubmit = (event) => {

    event.preventDefault();

    // You can submit the form data to your server or perform any other actions here

    // Make sure to handle file uploads appropriately on the server side

  }

 

  render() {

    return (

      <div className='formcontainer'>

        <form id='formreport'>

          <h2 className='reph1'>What Did You Do Today?</h2>

          <textarea

            id='txt1'

            name="status_update"

            rows="4"

            cols="50"

            value={this.state.status_update}

            onChange={this.handleInputChange}

          ></textarea>

 

          <h2 className='reph2'>Are There Any Obstacles Hindering Your Progress?</h2>

          <select

            className='select1'

            name="obstacles"

            value={this.state.obstacles}

            onChange={this.handleInputChange}

          >

            <option value="On Track">On Track</option>

            <option value="At Risk">At Risk</option>

            <option value="Off Track">Off Track</option>

          </select>

 

          <h2 className='reph3'>Do You Need Clarification About Goals and Priorities?</h2>

          <div>

            <input

              id='input1'

              type="radio"

              name="needs_clarification"

              value="Yes"

              checked={this.state.needs_clarification === 'Yes'}

              onChange={this.handleInputChange}

            />

            Yes

            <input

              id='input2'

              type="radio"

              name="needs_clarification"

              value="No"

              checked={this.state.needs_clarification === 'No'}

              onChange={this.handleInputChange}

            />

            No

          </div>

 

          {this.state.needs_clarification === 'Yes' && (

            <div>

              <h2 className='reph4'>Explain If Yes</h2>

              <textarea

                id='txt2'

                name="explanation"

                rows="4"

                cols="50"

                value={this.state.explanation}

                onChange={this.handleInputChange}

              ></textarea>

            </div>

          )}

 

          <h2 className='reph5'>What Are Your Plans for Tomorrow?</h2>

          <textarea

            id='txt3'

            name="plans"

            rows="4"

            cols="50"

            value={this.state.plans}

            onChange={this.handleInputChange}

          ></textarea>

          <h2 className='reph6'>Attachment</h2>

          <input type="file" name="attachment" onChange={this.handleFileChange} />

          <p>The maximum file size allowed per upload on the Free plan is 10 MB.</p>

 

          <button onClick={this.handleSubmit}>Submit</button>

        </form>

      </div>

    );

  }

}

 

export default ReportSubmissionForm;