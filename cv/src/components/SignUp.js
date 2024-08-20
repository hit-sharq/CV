// src/components/SignUp.js
import React from 'react';
import { useForm } from 'react-hook-form';

function SignUp() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Sign Up Data:", data);
    // Here you would normally send the data to your authentication API
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Sign Up</h2>
      <div>
        <label>Name:</label>
        <input type="text" {...register('name', { required: true })} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" {...register('email', { required: true })} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" {...register('password', { required: true })} />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUp;