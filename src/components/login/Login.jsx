import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { signInSchema } from '../../validations/YupValidations';
import '../Button.css';

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: signInSchema,
    onSubmit: (values) => {
      if (
        values.email == 'muhammad1juman@gmail.com' &&
        values.password == 'muhammad1juman786'
      ) {
        navigate('/addproject');
      } else {
        alert('Submit the correct Details Please');
      }
    },
  });

  return (
    <div className="flex items-center justify-center h-screen bg-[#050816] overflow-hidden">
      <div className="w-full max-w-md">
        <form
          className="bg-[#100D25] shadow-md rounded-xl px-8 pt-6 pb-8 mb-4"
          onSubmit={formik.handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-50 text-xl font-bold mb-2 "
              htmlFor="email"
            >
              Email
            </label>
            <input
              className={`shadow appearance-none border ${
                formik.touched.email && formik.errors.email
                  ? 'border-red-500'
                  : 'border-gray-300'
              } rounded w-full py-2 px-3 text-gray-50 font-bold bg-[#151030] leading-tight focus:outline-none focus:shadow-outline`}
              id="email"
              type="email"
              autoComplete="true"
              placeholder="Enter your email"
              {...formik.getFieldProps('email')}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm italic">
                {formik.errors.email}
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-50 text-xl font-bold mt-5 mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className={`shadow appearance-none border ${
                formik.touched.password && formik.errors.password
                  ? 'border-red-500'
                  : 'border-gray-300'
              } rounded w-full py-2 px-3 text-gray-50 bg-[#151030] leading-tight focus:outline-none focus:shadow-outline`}
              id="password"
              autoComplete="true"
              type="password"
              placeholder="Enter your password"
              {...formik.getFieldProps('password')}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm italic">
                {formik.errors.password}
              </p>
            )}
          </div>
          <div className="grid md:grid-cols-2 items-center md:justify-between">
            <button
              className="btnSignIn bg-[#151030] hover: drop-shadow-lg text-slate-50 font-bold text-lg transition-all duration-500 w-full md:w-fit hover:scale-105 py-2 px-4 rounded-md shadow-md tracking-wider"
              type="submit"
            >
              Sign In
            </button>
            <a
              className="text-center mt-5 md:mt-0 inline-block align-baseline font-bold text-md text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
