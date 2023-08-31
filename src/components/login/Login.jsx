import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { signInSchema } from '../../validations/YupValidations';

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
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={formik.handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className={`shadow appearance-none border ${
                formik.touched.email && formik.errors.email
                  ? 'border-red-500'
                  : 'border-gray-300'
              } rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline`}
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
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className={`shadow appearance-none border ${
                formik.touched.password && formik.errors.password
                  ? 'border-red-500'
                  : 'border-gray-300'
              } rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline`}
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
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
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
