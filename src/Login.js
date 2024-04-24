import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (setter) => (event) => {
    const { value } = event.target;
    setter(value);
    validateForm({ ...errors, [event.target.name]: value });
  };

  const validateForm = (fields = {}) => {
    let isValid = true;
    const newErrors = {};

    if (!fields.email || fields.email === '') {
      isValid = false;
      newErrors.email = "Email is required.";
    }

    if (!fields.password || fields.password === '') {
      isValid = false;
      newErrors.password = "Password is required.";
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    if (validateForm({ email, password })) {
      console.log('Submitting Form:', email, password);
      // Simulate API call
      try {
        // Simulated API call delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        alert('Logged in successfully');
        // Reset form or redirect user on success
        setEmail('');
        setPassword('');
        setErrors({});
      } catch (error) {
        console.error('Login failed:', error);
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
            <h1 className="title has-text-centered">Login</h1>
            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left">
                <input 
                  type="email"
                  name="email"
                  className={`input ${errors.email ? 'is-danger' : ''}`}
                  placeholder="e.g. alex@example.com"
                  value={email}
                  onChange={handleInputChange(setEmail)}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
                {errors.email && <p className="help is-danger">{errors.email}</p>}
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control has-icons-left">
                <input 
                  type="password"
                  name="password"
                  className={`input ${errors.password ? 'is-danger' : ''}`}
                  placeholder="********"
                  value={password}
                  onChange={handleInputChange(setPassword)}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
                {errors.password && <p className="help is-danger">{errors.password}</p>}
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button type="submit" className="button is-primary is-fullwidth" disabled={submitting}>
                  Log in
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
