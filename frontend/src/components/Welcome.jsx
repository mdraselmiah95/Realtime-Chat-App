import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";

const Welcome = ({ currentUser }) => {
  const { username } = currentUser;

  // const [userName, setUserName] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await JSON.parse(localStorage.getItem("chat-data"));
  //     setUserName(data.username);
  //   };
  //   fetchData();
  // }, []);

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
`;

export default Welcome;
