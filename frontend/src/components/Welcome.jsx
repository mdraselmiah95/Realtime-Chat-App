import React from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";

const Welcome = ({ currentUser }) => {
  const { username } = currentUser;

  return (
    <Container>
      <img src={Robot} alt="" />
      <h1>
        Welcome, <span>{username}!</span>
      </h1>
      <h3>Please select a chat to Start messaging.</h3>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #4e0eff;
  }

  /* Small screens (up to 576px) */
  @media screen and (max-width: 576px) {
    img {
      height: 10rem;
    }
    h1 {
      font-size: 1.5rem;
    }
    h3 {
      font-size: 0.8rem;
    }
  }

  /* Medium screens (between 576px and 768px) */
  @media screen and (min-width: 576px) and (max-width: 768px) {
    img {
      height: 15rem;
    }
    h1 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1rem;
    }
  }

  /* Large screens (above 768px) */
  @media screen and (min-width: 768px) {
    img {
      height: 20rem;
    }
    h1 {
      font-size: 3rem;
    }
    h3 {
      font-size: 1.5rem;
    }
  }
`;

export default Welcome;
