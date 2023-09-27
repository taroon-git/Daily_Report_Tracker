import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './register.css';

function Register() {
  const [data, setData] = useState({
    username: '',
    password: '',
    email: '',
    first_name: '',
    last_name: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const headers = {
    'Content-Type': 'application/json',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.warn(data);
      const response = await axios.post('http://192.168.137.211:8000/api/register/', data);
      console.log(response.data);

      if(response.status==="ok"){
        console.warn("data send");
        
      }
      setData({
        username: '',
        password: '',
        email: '',
        first_name: '',
        last_name: '',
      });

      if (data.password) {
        alert("Registerd Successfully")
         navigate('/login');
      }
      // const data =await response.json();
      // console.log("Response data:", data)
    } 
    catch (error) {
      console.log('Registration failed. Please try again.', error);
    }
  };

  return (
    <div>
      <div className='container1'>
        <div className='form-container'>
          <h1 style={{ color: '#0275d8' }}>Registration Page</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor='first_name'>First Name:</label>
            <input
              type='text'
              name='first_name'
              id='first_name'
              required
              placeholder='Enter your fname'
              value={data.first_name}
              onChange={handleChange}
            />

            <label htmlFor='last_name'>Last Name:</label>
            <input
              type='text'
              name='last_name'
              id='last_name'
              required
              placeholder='Enter your lname'
              value={data.last_name}
              onChange={handleChange}
            />

            {/* <label htmlFor='mobile'>Mobile no:</label>
            <input
              type='tel'
              name='mobile'
              id='mobile'
              required
              placeholder='Enter mobile number'
              value={data.mobile}
              onChange={handleChange}
            /> */}

            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              name='email'
              id='email'
              required
              placeholder='Enter your Email'
              value={data.email}
              onChange={handleChange}
            />
            {/* <label htmlFor='roleName'>Role:</label>
            <input
              type='text'
              name='roleName'
              id='roleName'
              required
              placeholder='Enter your Name'
              value={data.roleName}
              onChange={handleChange}
            /> */}

            <label htmlFor='username'>Username:</label>
            <input
              type='text'
              name='username'
              id='username'
              required
              placeholder='Enter your Name'
              value={data.username}
              onChange={handleChange}
            />
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              name='password'
              id='password'
              required
              placeholder='Enter your password'
              value={data.password}
              onChange={handleChange}
            />


            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;






// import React, { useState } from 'react';
// import {useNavigate } from 'react-router-dom'
// import axios from 'axios';
// import './register.css'


// function Register() {
//   const [data, setData] = useState({
//     firstName: '', 
//     lastName: '',  
//     mobile: '',
//     email: '',
//     password: '',
//     roleName: '', 
//   });
// const navigate = useNavigate();
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData({
//       ...data,
//       [name]: value,
//     });
//   };

//   const headers = {
//     'Content-Type' : 'application/json',
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try{
//       const response = await axios.post('',FormData, {headers});
//     }
//     console.log(response.data.message);
//     setFormData({
//       firstName:'',
//       lastName:'',
//       mobile:'',
//       email:'',
//       password:'',roleName:''})
//     });
//   } catch(error) {
//     console.log('Registration failed. Please try again);
//   }
//   }

//   return (
//     <div>
//       <div className='container1'>
//         <div className='form-container'>
//           <h1 style={{ color: '#0275d8' }}>Registration Page</h1>
//           <form onSubmit={handleSubmit}>
//             <label htmlFor="firstName">First Name:</label>
//             <input
//               type='text'
//               name="firstName"
//               id="firstName"
//               required
//               placeholder='Enter your fname'
//               value={data.firstName}
//               onChange={handleChange}
//             />

//             <label htmlFor="lastName">Last Name:</label>
//             <input
//               type='text'
//               name="lastName"
//               id="lastName"
//               required
//               placeholder='Enter your lname'
//               value={data.lastName}
//               onChange={handleChange}
//             />

//             <label htmlFor="mobile">Mobile no:</label>
//             <input
//               type='tel'
//               name="mobile"
//               id="mobile"
//               required
//               placeholder='Enter mobile number'
//               value={data.mobile}
//               onChange={handleChange}
//             />

//             <label htmlFor="email">Email:</label>
//             <input
//               type='email'
//               name="email"
//               id="email"
//               required
//               placeholder='Enter your Email'
//               value={data.email}
//               onChange={handleChange}
//             />

//             <label htmlFor="password">Password:</label>
//             <input
//               type='password'
//               name="password"
//               id="password"
//               required
//               placeholder='Enter your password'
//               value={data.password}
//               onChange={handleChange}
//             />

//             <label htmlFor="roleName">Role:</label>
//             <input
//               type='text'
//               name="roleName"
//               id="roleName"
//               required
//               placeholder='Enter your Name'
//               value={data.roleName}
//               onChange={handleChange}
//             />
//             <button type='submit'>Submit</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Register;
