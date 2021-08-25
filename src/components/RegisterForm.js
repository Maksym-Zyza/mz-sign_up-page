import React, { useState } from 'react';
// import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';
import Logo from '../img/Logo';
import Gender from './Gender';
import Button from './Button';
import Footer from './Footer';
import Eye from '../img/Eye';
import MatchMessage from './MatchMessage';
import '../styles.scss';

const schema = yup.object({
  email: yup
    .string('Enter a email')
    .email('Email should contains at least 3 characters')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(6, 'Password should contains at least 5 characters')
    .required('Password is required'),
});

export default function RegisterForm() {
  const [email, setEmail] = useState('');
  const updateEmail = e => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState('');
  const updatePassword = e => {
    setPassword(e.target.value);
  };

  const [coPassword, setCoPassword] = useState('');
  const updateCoPassword = e => {
    setCoPassword(e.target.value);
    setMatch(password === e.target.value);
  };

  const [gender, setGender] = useState('');
  const updateGender = e => {
    setGender(e.target.value);
  };

  const [match, setMatch] = useState(false);
  const [hide, setHide] = useState('password');
  const tooglePass = () => {
    setHide(hide === 'text' ? 'password' : 'text');
  };

  const [hideCoPass, setHideCoPass] = useState('password');
  const toogleCoPass = () => {
    setHideCoPass(hideCoPass === 'text' ? 'password' : 'text');
  };

  const handleSubmit = e => {
    e.preventDefault();

    console.log({ gender, email, password, coPassword });

    setGender('');
    setEmail('');
    setPassword('');
    setCoPassword('');
    setMatch(false);
  };

  return (
    <div>
      <form
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

        {/* {password.length > 0 && password.length < 6 && (
          <p className="error">Password must be longer than six characters</p>
        )} */}
        {!match && coPassword.length > 5 && <MatchMessage />}

        <Button />

        <Footer />
      </form>
    </div>
  );
}
