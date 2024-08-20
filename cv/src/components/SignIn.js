// src/components/SignIn.js
import React from 'react';
import { useForm } from 'react-hook-form';

function SignIn() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Sign In Data:", data);
    // Here you would normally send the data to your authentication API
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Sign In</h2>
      <div>
        <label>Email:</label>
        <input type="email" {...register('email', { required: true })} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" {...register('password', { required: true })} />
      </div>
      <button type="submit">Sign In</button>
    </form>
  );
}

export default SignIn;