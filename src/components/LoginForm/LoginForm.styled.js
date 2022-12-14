import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: ${p => p.theme.space[4]}px;
`;

export const Input = styled.input`
  width: 260px;
  height: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${p => p.theme.space[4]}px;
  border: 2px solid rgba(33, 33, 33, 0.2);
  background-color: ${p => p.theme.colors.white};
  padding: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.l};
  border-radius: ${p => p.theme.radii.normal};

  :focus {
    border: 2px solid #337ab7;
    outline: none;
  }
`;

export const LabelName = styled.span`
  margin-left: auto;
  margin-right: auto;
  color: black;
  margin-bottom: ${p => p.theme.space[2]}px;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  color: black;
  transition: color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  :focus-within {
    color: #337ab7;
  }
`;

export const ErrorMessage = styled.p`
  margin-left: auto;
  margin-right: auto;
  color: ${p => p.theme.colors.error};
  margin-bottom: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.l};
`;

export const Button = styled.button`
  display: block;

  min-width: 150px;
  height: 40px;
  border: 0px solid transparent;
  border-radius: 4px;

  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;
  margin-bottom: 25px;

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
