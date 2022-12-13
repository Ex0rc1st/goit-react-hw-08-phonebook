import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-around;

  flex-basis: calc(100% / 1 - 15px);
  padding: 15px 5px;
  border: 1px solid #d4d4d4;

  text-align: center;

  margin-left: 15px;
  margin-top: 15px;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color: rgb(33 150 243 / 10%);
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;

  margin-left: -15px;
  margin-top: -15px;
  margin-top: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[5]}px;
`;

export const Button = styled.button`
  font-weight: ${p => p.theme.fontWeight.bold};
  border-radius: ${p => p.theme.radii.normal};
  margin-left: auto;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  padding-top: ${p => p.theme.space[1]}px;
  padding-bottom: ${p => p.theme.space[1]}px;
  cursor: pointer;
  border: none;
  background-color: ${p => p.theme.colors.btnBg};
  color: ${p => p.theme.colors.white};
  transition: all 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.btnHover};
    box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.75);
    color: red;
  }
`;

export const PhoneName = styled.p`
  display: inline-flex;
  margin-left: ${p => p.theme.space[4]}px;
`;

export const PhoneNumber = styled.p`
  display: inline-flex;
`;
