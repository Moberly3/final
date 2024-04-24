import React, { useState } from 'react';

function Registration() {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
    validateForm({ ...userData, [name]: value });
  };

  const validateForm = (fields) => {
    let isValid = true;
    const newErrors = {};

    if (!fields.username || fields.username.trim() === '') {
      isValid = false;
      newErrors.username = 'Username is required.';
    }

    if (!fields.email || fields.email.trim() === '') {
      isValid = false;
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(fields.email)) {
      isValid = false;
      newErrors.email = 'Email is invalid.';
    }

    if (!fields.password || fields.password.trim() === '') {
      isValid = false;
      newErrors.password = 'Password is required.';
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    if (validateForm(userData)) {
      console.log('User Registered:', userData);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        alert('Registration successful');
        setUserData({
          username: '',
          email: '',
          password: '',
        });
        setErrors({});
      } catch (error) {
        console.error('Registration failed:', error);
      }
    } else {
      console.log('Validation Errors:', errors);
    }
    setSubmitting(false);
  };

  return (
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-4">
          <form className="box" onSubmit={handleSubmit}>
            <h1 className="title has-text-centered">Register</h1>
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input 
                  className={`input ${errors.username ? 'is-danger' : ''}`} 
                  type="text" 
                  name="username"
                  value={userData.username}
                  onChange={handleInputChange}
                  placeholder="Username" />
                {errors.username && <p className="help is-danger">{errors.username}</p>}
              </div>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input 
                  className={`input ${errors.email ? 'is-danger' : ''}`} 
                  type="email" 
                  name="email"
                  value={userData.email}
                  onChange={handleInputChange}
                  placeholder="Email" />
                {errors.email && <p className="help is-danger">{errors.email}</p>}
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input 
                  className={`input ${errors.password ? 'is-danger' : ''}`} 
                  type="password" 
                  name="password"
                  value={userData.password}
                  onChange={handleInputChange}
                  placeholder="Password" />
                {errors.password && <p className="help is-danger">{errors.password}</p>}
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button type="submit" className="button is-primary is-fullwidth" disabled={submitting}>
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
