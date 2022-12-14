import styled from 'styled-components';

export const Wraper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UserName = styled.p`
  font-weight: 700;
`;

export const Button = styled.button`
  display: block;

  min-width: 150px;
  height: 40px;
  border: 0px solid transparent;
  border-radius: 4px;

  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
  margin-bottom: 5px;

  color: #fff;
  background-color: #2196f3;

  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);

  opacity: 1;

  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;

  :hover,
  :focus {
    opacity: 0.8;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
