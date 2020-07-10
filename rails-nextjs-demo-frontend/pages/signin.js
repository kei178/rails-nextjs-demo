import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import cookies from 'nookies';

import CustomInput from '../components/CustomInput';
import validateEmail from '../utils/validators/validateEmail';
import validateRequired from '../utils/validators/validateRequired';

const initialState = {
  email: '',
  password: '',
};

const Signin = () => {
  const [signinInfo, setSigninInfo] = useState(initialState);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = signinInfo;

    if (!email || !password) {
      return;
    }

    try {
      const headers = { 'Content-Type': 'application/json' };
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/sign_in`,
        { user: { ...signinInfo } },
        { headers: headers }
      );

      cookies.set(null, 'token', response.data.token, { path: '/' });
      router.replace('/', '/');
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSigninInfo({
      ...signinInfo,
      [name]: value,
    });
  };

  return (
    <div className="signin">
      <form onSubmit={handleSubmit}>
        <CustomInput
          type="email"
          name="email"
          placeholder="Enter your email"
          value={signinInfo.email}
          onChange={handleInputChange}
          onBlur={validateEmail}
        />
        <CustomInput
          type="password"
          name="password"
          placeholder="Enter your password"
          value={signinInfo.password}
          onChange={handleInputChange}
          onBlur={validateRequired}
        />

        {error && <div className="error">{error}</div>}

        {/* <Link href="/signup">
          <a>Create an account</a>
        </Link> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Signin;
