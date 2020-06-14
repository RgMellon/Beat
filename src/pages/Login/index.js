import React from 'react';
import { View, Button } from 'react-native';

import { Container } from './styles';

import { useAuth } from '../../hooks/auth';

// import authenticateHandler from '../../services/authenticateHandler';

const Login = () => {
  const { signIn } = useAuth();

  return (
    <Container>
      <Button onPress={signIn} title="Press to login" />
    </Container>
  );
};

export default Login;
