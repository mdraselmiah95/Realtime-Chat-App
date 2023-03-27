import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Register = () => {
  const { reset, handleSubmit, register } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="brand">
          <img src={Logo} alt="logo" />
          <h1>snappy</h1>
        </div>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          {...register("email")}
        />
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          {...register("email")}
        />
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          {...register("password")}
        />
        <input
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          placeholder="confirmPassword"
          {...register("confirmPassword")}
        />
        <button type="submit">Create User</button>
        <span>
          Already have an account ? <Link to="/login">Login.</Link>
        </span>
      </form>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: white;
      text-transform: uppercase;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 3rem 5rem;
  }
  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #4e0eff;
    border-radius: 0.4rem;
    color: white;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #997af0;
      outline: none;
    }
  }
  button {
    background-color: #4e0eff;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #4e0eff;
    }
  }
  span {
    color: white;
    text-transform: uppercase;
    a {
      color: #4e0eff;
      text-decoration: none;
      font-weight: bold;
    }
  }
`;

export default Register;
