import React, { useState } from 'react';
import Logo from '../img/Logo';
import Male from '../img/Male';
import Female from '../img/Female';
import Other from '../img/Other';
import '../styles.scss';

export default function RegisterForm() {
  const [gender, setGender] = useState('');
  const updateGender = e => {
    setGender(e.target.value);
  };

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

  const [match, setMatch] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    console.log({ gender, email, password, coPassword });
    console.log('match', match);

    setGender('');
    setEmail('');
    setPassword('');
    setCoPassword('');
    setMatch(false);
  };

  // console.log('match', match);
  return (
    <div>
      <form onSubmit={handleSubmit} className="authForm" autoComplete="off">
        <div>
          <Logo />
        </div>

        <h1 className="title">Sign Up with email</h1>

        <label className="authLabel">
          Gender
          <div className="radio_div" onChange={updateGender}>
            <label>
              <input
                className="radio"
                type="radio"
                value="Male"
                name="gender"
              />
              <Male />
            </label>
            <label>
              <input
                className="radio"
                type="radio"
                value="Female"
                name="gender"
              />
              <Female />
            </label>
            <label>
              <input
                className="radio"
                type="radio"
                value="Other"
                name="gender"
              />
              <Other />
            </label>
          </div>
        </label>

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
          <input
            className="input"
            type="password"
            name="password"
            value={password}
            onChange={updatePassword}
          />
        </label>

        <label className="authLabel">
          Confirm Password
          <input
            className="input"
            type="password"
            name="coPassword"
            value={coPassword}
            onChange={updateCoPassword}
          />
        </label>

        {!match && coPassword.length > 5 && (
          <p className="error">Password does not match. Try again</p>
        )}

        {/* {match && password.length>5 ? (
          <button className="btn" type="submit">
            <span className="text_sign_up">Sign Up</span>
          </button>
        ) : (
          <div className="disable" type="submit">
            <span className="text_sign_up">Sign Up</span>
          </div>
        )} */}

        <button className="btn" type="submit">
          <span className="text_sign_up">Sign Up</span>
        </button>
        <div className="form_text">
          Already have an account? <a href="URL">Log In</a>
        </div>
        <div className="form_text">
          Review privacy and disclosures <a href="URL">here</a>
        </div>
      </form>
    </div>
  );
}
