

import React, { useState } from 'react';
import './ReportSubmissionForm.css';
import axios from 'axios'; 
import Navbar from '../Navbar';

function ReportSubmissionForm() {
  const [formData, setFormData] = useState({
    status_update: '',
    obstacles: 'On Track',
    needs_clarification: 'No',
    explanation: '',
    plans: '',
    attachment: null,
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      attachment: e.target.files[0],
    });
  };

  
  const headers = {
    'Content-Type': 'application/json',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.status_update) {
      validationErrors.status_update = 'Status Update is required.';
    }
    if (!formData.explanation && formData.needs_clarification === 'Yes') {
      validationErrors.explanation = 'Explanation is required when clarification is needed.';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const response = await axios.post('http://192.168.68.43:8000/api/v1/add', formData, {
          headers,
        });
        console.log('Form submitted:', response.data);
        alert(response.data.message);
        setFormData({
          status_update: '',
          obstacles: 'On Track',
          needs_clarification: 'No',
          explanation: '',
          plans: '',
          attachment: null,
        });
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  };

  return (
    
    <div>
    <Navbar></Navbar>
    <div className='formcontainer'>
      <form id='formreport' onSubmit={handleSubmit}>
        <h2 className='reph1'>What Did You Do Today?</h2>
        <textarea
          id='txt1'
          name="status_update"
          rows="4"
          cols="50"
          value={formData.status_update}
          onChange={handleInputChange}
        ></textarea>

        <h2 className='reph2'>Are There Any Obstacles Hindering Your Progress?</h2>
        <select
          className='select1'
          name="obstacles"
          value={formData.obstacles}
          onChange={handleInputChange}
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
            checked={formData.needs_clarification === 'Yes'}
            onChange={handleInputChange}
          />
          Yes
          <input
            id='input2'
            type="radio"
            name="needs_clarification"
            value="No"
            checked={formData.needs_clarification === 'No'}
            onChange={handleInputChange}
          />
          No
        </div>

        {formData.needs_clarification === 'Yes' && (
          <div>
            <h2 className='reph4'>Explain If Yes</h2>
            <textarea
              id='txt2'
              name="explanation"
              rows="4"
              cols="50"
              value={formData.explanation}
              onChange={handleInputChange}
            ></textarea>
          </div>
        )}

        <h2 className='reph5'>What Are Your Plans for Tomorrow?</h2>
        <textarea
          id='txt3'
          name="plans"
          rows="4"
          cols="50"
          value={formData.plans}
          onChange={handleInputChange}
        ></textarea>

        <h2 className='reph6'>Attachment</h2>
        <input type="file" name="attachment" onChange={handleFileChange} />
        <p>The maximum file size allowed per upload on the Free plan is 10 MB.</p>

        {errors.status_update && <div className="error">{errors.status_update}</div>}
        {errors.explanation && <div className="error">{errors.explanation}</div>}

        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
}

export default ReportSubmissionForm;

