import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { io } from "socket.io-client";
import Contacts from "../components/Contacts";
import ChatContainer from "../components/ChatContainer";
import Welcome from "../components/Welcome";
import { allUsersRoute, host } from "../utils/APIRoutes";

const Chat = () => {
  const navigate = useNavigate();
  const socket = useRef();
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!localStorage.getItem("chat-data")) {
        navigator("/login");
      } else {
        setCurrentUser(await JSON.parse(localStorage.getItem("chat-data")));
        setIsLoaded(true);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (currentUser) {
      socket.current = io(host);
      socket.current.emit("add-user", currentUser._id);
    }
  }, [currentUser]);

  useEffect(() => {
    const fetchData = async () => {
      if (currentUser) {
        if (currentUser.isAvatarImageSet) {
          const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
          setContacts(data.data.data);
        } else {
          navigate("/setAvatar");
        }
      }
    };
    fetchData();
  }, [currentUser, navigate]);

  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };

  return (
    <Container>
      <div className="container">
        <Contacts contacts={contacts} changeChat={handleChatChange} />

        {isLoaded && currentChat === undefined ? (
          <Welcome currentUser={currentUser} />
        ) : (
          <ChatContainer
            currentChat={currentChat}
            currentUser={currentUser}
            socket={socket}
          />
        )}
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;

  .container {
    padding: 1.5rem;
    height: 85vh;
    width: 85vw;
    background-color: #00000076;
    display: grid;
    grid-template-columns: 25% 75%;

    @media screen and (max-width: 480px) {
      // Small screens (e.g. mobile)
      grid-template-columns: 100%;
      height: auto;
      width: 100%;
      padding: 1rem;
    }

    @media screen and (min-width: 481px) and (max-width: 768px) {
      // Medium screens (e.g. tablet)
      grid-template-columns: 35% 65%;
    }

    @media screen and (min-width: 769px) {
      // Large screens (e.g. desktop)
      grid-template-columns: 25% 75%;
    }
  }
`;
export default Chat;
