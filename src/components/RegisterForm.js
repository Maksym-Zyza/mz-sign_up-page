import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';
import MatchMessage from './MatchMessage';
import Logo from '../img/Logo';
import Gender from './Gender';
import Button from './Button';
import Footer from './Footer';
import Eye from '../img/Eye';
import '../styles.scss';

const schema = yup.object({
  email: yup
    .string('Enter a email')
    .min(3, 'Email should contains at least 3 characters')
    .email('Must contain e-mail')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(6, 'Password should contains at least 5 characters')
    .required('Password is required'),
  coPassword: yup
    .string('Enter your password')
    .min(6, 'Password should contains at least 5 characters')
    .required('Password is required'),
});

export default function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [coPassword, setCoPassword] = useState('');
  const [match, setMatch] = useState(false);
  const [registration, setRegistration] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setMatch(password === value);
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      case 'coPassword':
        return setCoPassword(value);
      default:
        return;
    }
  };

  const [gender, setGender] = useState('');
  const updateGender = e => {
    setGender(e.target.value);
  };

  const [hide, setHide] = useState('password');
  const tooglePass = () => {
    setHide(hide === 'text' ? 'password' : 'text');
  };

  const [hideCoPass, setHideCoPass] = useState('password');
  const toogleCoPass = () => {
    setHideCoPass(hideCoPass === 'text' ? 'password' : 'text');
  };

  const handleSubmit = (
    { email, password, coPassword },
    { resetForm, setSubmitting },
  ) => {
    console.log({ gender, email, password, coPassword });

    setSubmitting(false);
    resetForm();
    setRegistration(true);
  };

  return (
    <>
      {registration ? (
        <h1 className="success">Success!</h1>
      ) : (
        <Formik
          initialValues={{
            email: '',
            password: '',
            coPassword: '',
          }}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form
              className="authForm"
              autoComplete="off"
              onChange={handleChange}
            >
              <Logo />
              <h1 className="title">Sign Up with email</h1>

              <Gender updateGender={updateGender} />

              <label className="authLabel">
                E-mail
                <Field
                  className={`${'input'} ${
                    touched.email && errors.email && 'errorInput'
                  }`}
                  type="email"
                  name="email"
                  value={email}
                  placeholder=" "
                />
                {touched.email && errors.email && (
                  <div className="error">{errors.email}</div>
                )}
              </label>

              <label className="authLabel">
                Create Password
                <span onClick={tooglePass}>
                  <Eye />
                </span>
                <Field
                  className={`${'input'} ${
                    touched.password && errors.password && 'errorInput'
                  }`}
                  type={hide}
                  name="password"
                  value={password}
                  placeholder=" "
                />
                {touched.password && errors.password && (
                  <div className="error">{errors.password}</div>
                )}
              </label>

              <label className="authLabel">
                Confirm Password
                <span onClick={toogleCoPass}>
                  <Eye />
                </span>
                <Field
                  className={`${'input'} ${
                    touched.coPassword && errors.coPassword && 'errorInput'
                  }`}
                  type={hideCoPass}
                  name="coPassword"
                  value={coPassword}
                  placeholder=" "
                />
                {touched.coPassword && errors.coPassword && (
                  <div className="error">{errors.coPassword}</div>
                )}
              </label>

              {!match && coPassword.length > 5 && <MatchMessage />}

              <Button />

              <Footer />
            </Form>
          )}
        </Formik>
      )}
    </>
  );
}

// =========
/* <form
        onSubmit={handleSubmit}
        validationSchema={schema}
        className="authForm"
        autoComplete="off"
      >
        <Logo />
        <h1 className="title">Sign Up with email</h1>

        <Gender updateGender={updateGender} />

        <label className="authLabel">
          E-mail
          <input
            className="input"
            type="email"
            name="email"
            value={email}
            onChange={updateEmail}
          />
        </label>

        <label className="authLabel">
          Create Password
          <span onClick={tooglePass}>
            <Eye />
          </span>
          <input
            className="input"
            type={hide}
            name="password"
            value={password}
            onChange={updatePassword}
          />
        </label>

        <label className="authLabel">
          Confirm Password
          <span onClick={toogleCoPass}>
            <Eye />
          </span>
          <input
            className="input"
            type={hideCoPass}
            name="coPassword"
            value={coPassword}
            onChange={updateCoPassword}
          />
        </label>

        
        {!match && coPassword.length > 5 && <MatchMessage />}

        <Button />

        <Footer />
      </form> */
