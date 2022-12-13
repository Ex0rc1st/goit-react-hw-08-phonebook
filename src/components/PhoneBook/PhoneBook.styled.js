import styled from 'styled-components';

export const PhoneContactTitle = styled.h1`
  margin-top: 10px;
  margin-bottom: 10px;

  color: #2196f3;

  text-align: center;
`;

export const ContactListTitle = styled.h2`
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;

  color: #2196f3;

  margin-left: auto;
  margin-right: auto;
`;

export const Notice = styled.p`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  color: red;
  text-shadow: ${p => p.theme.shadows.noticeShadow};
`;
