import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  z-index: 11;
  position: fixed;
  display : flex;
  justify-content : center;
  align-items : center;
  background-color: rgba(0,0,0,0.4);
  border-radius: 10px;
  top : 0;
  left : 0;
  right : 0;
  bottom : 0;
`;

export const ModalContainer = styled.div`
  display : flex;
  flex-direction: column;
  justify-content : center;
  align-items : center;
`;

export const ModalView = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 20px;
  width: 250px;
  height: 150px;
  background-color: #ffffff;
`;

export const ButtonSection = styled.div`
    display: flex;
    flex-direction: row;
`;

export const MyBtn = styled.button `
    border-radius: 10px;
    text-decoration: none;
    margin: 10px;
    padding: 5px 10px;
    width: 60px;
    height: 30px;
    display : flex;
    justify-content : center;
    align-items : center;
    background-color: white;
`;

