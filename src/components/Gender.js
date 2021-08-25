import React from 'react';
import Male from '../img/Male';
import Female from '../img/Female';
import Other from '../img/Other';

export default function Gender({ updateGender }) {
  return (
    <div>
      <label className="authLabel">
        Gender
        <div className="radio_div" onChange={updateGender}>
          <label>
            <input className="radio" type="radio" value="Male" name="gender" />
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
            <input className="radio" type="radio" value="Other" name="gender" />
            <Other />
          </label>
        </div>
      </label>
    </div>
  );
}
