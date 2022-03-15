import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  background-color: #c0c0c0;
  height: 100vh;
  width: 100vw;
`;
export const InputContainer = styled.div`
background-color;white;
display:flex;
justify-content:center;
align-items:center;
`;
export const Header = styled.h1`
  text-align: center;
  font-size: 5rem;
  width: fit-content;
  margin: auto;
  padding-top: 4rem;
  margin-bottom: 3rem;
`;

export const InputForm = styled.input`
   {
    height: 2.5rem;
    min-width: 24vw;
    border: none;
    font-size: 1.3rem;
    background-color: white;
    border-radius: 5px;
  }
`;

export const AddButton = styled.button`
  font-size: 1.3rem;
  margin-left: 2rem;
  background-color: white;
  border: none;
  cursor: pointer;
  height: 2.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 5px;
`;

export const TodoItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding: 0.4rem;
`;

export const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: auto;
  margin-top: 4rem;
  width: fit-content;
`;

export const Checkbox = styled.input`
  height: 2rem;
  width: 2rem;
  margin-right: 1rem;
`;
export const CloseButton = styled.div`
  display: inline-block;
`;

export const TodoContent = styled.div`
  display: inline-block;
  font-size: 2rem;
  min-width: 38rem;
  margin: auto;
  text-transform:capitalize;


  //applying hover effects in styled components

  &:hover{

  }
`;
