import styled from "styled-components";
import { keyframes } from "styled-components";

export const scaleAnimation = keyframes`
    0%{
        opacity: 0;
        transform: scale(1.1);
    }
    100%{
        opacity: 1;
        transform: scale(1);
    }
`;

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;

  .more-information {
    min-width: 300px;
    max-width: 400px;
    width: 90%;
    font-size: calc(8px + 1.5vmin);
    text-align: justify;
    padding: 1rem 0;
    color: aliceblue;
    margin-top: 30px;
    line-height: 30px;
    animation: ${scaleAnimation} 5s forwards;

    button {
      background-color: transparent;
      color: aliceblue;
      border: none;
      margin: 0 8px;
      cursor: pointer;
      transition: 0.6s;

      &:hover {
        color: #a7aad4;
      }
    }

    @media (min-width: 768px) {
      margin-top: 0;
      padding-top: 0;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 90%;
    background-color: aliceblue;
    padding: 1rem;
    border-radius: 10px;
    animation: ${scaleAnimation} 5s forwards;
    min-width: 300px;
    max-width: 400px;
    width: 90%;
    font-size: calc(8px + 1.5vmin);

    h2 {
      width: 100%;
      text-align: center;
      padding: 1rem;
    }

    div {
      border-radius: 10px;
      margin-bottom: 10px;
      width: 100%;
    }

    button {
      border: 1px solid transparent;
      border-radius: 20px;
      padding: 10px 0;
      width: calc(120px + 1.5vmin);
      transition: 0.2s;
      font-size: calc(8px + 1.5vmin);
      background-color: #a7aad4;

      &:hover {
        background-color: #2d307a;
      }

      &:focus {
        background-color: #2d3059;
        color: aliceblue;
      }
    }
  }
`;
