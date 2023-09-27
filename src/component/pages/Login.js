
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';

function Login() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const headers = {
    'Content-Type': 'application/json',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('', FormData, { headers });

      if (response.data.success) {
        setIsLoggedIn(true);
        alert('Login successful');
        navigate('/login/dashboard');
      } else {
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      alert('Invalid email or password..');
    }
  };

  return (
    <div>
      <div className='container' id='i'>
        <div className='form-container'>
          <h1 className='text-center' style={{ color: '#0275d8' }}>Login</h1>
          <form onSubmit={handleSubmit}>
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
            <button type='submit'>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;



// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './login.css';

// function Login() {
//   const [data, setData] = useState({
//     email: '',
//     password: '',
//   });

//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

// const headers = {
//   'Content-Type': 'application/json',
// };

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     const response = await axios.post('',FormData, { headers});

//     if(response.data.success) {
      
//       setIsLoggedIn(true);
//       alert('Login successful');

//       navigate('/login/dashboard');
//      } 
//      else 
//        {
//        alert('Login failed. Please check your credentials.');
//       }
//     }

//     catch (error) {
//       alert("Invalid username or password..");
//     }
// }



//   // // HTTPS headers for the axios request
//   // const headers = {
//   //   'Content-Type': 'application/json',
//   // };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   const { email, password } = data;

//   //   // Simulated authentication logic (replace with actual authentication)
//   //   if (email && password) {
//   //     setIsLoggedIn(true);
//   //     alert('Login successful');
      
//   //     // Navigate to the home page ("/") after successful login
//   //     navigate('/login/dashboard');
//   //   } else {
//   //     alert('Login failed. Please check your credentials.');
//   //   }
//   // };

//   // if (isLoggedIn) {
//   //   // If the user is logged in, the navigate function will redirect them
//   //   return null; // You can return null or any other content you want in this case
//   // }

//   return (
//     <div>
//       <div className='container' id='i'>
//         <div className='form-container'>
//           <h1 className="text-center" style={{ color: '#0275d8' }}>Login</h1>
//           <form onSubmit={handleSubmit}>
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               required
//               placeholder="Enter your Email"
//               value={data.email}
//               onChange={handleChange}
//             />

//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               name="password"
//               id="password"
//               required
//               placeholder="Enter your password"
//               value={data.password}
//               onChange={handleChange}
//             />
//             <button type='submit'>Login</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;




