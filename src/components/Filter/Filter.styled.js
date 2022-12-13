import styled from 'styled-components';

export const ContactsTitleWrapper = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 15px;

  color: #333232;
`;

export const InputText = styled.p`
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Input = styled.input`
  width: 260px;
  height: 20px;
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
