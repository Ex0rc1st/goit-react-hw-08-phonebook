import { Helmet } from 'react-helmet';
import { RegistrationForm } from 'components/RegistrerForm/RegistrerForm';
import { Container } from 'components/AppBar/AppBar.styled';

const Register = () => {
  return (
    <Container>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegistrationForm />
    </Container>
  );
};

export default Register;
