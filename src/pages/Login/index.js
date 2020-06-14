import React from 'react';

import {
  Container,
  ContentImage,
  Content,
  Message,
  Title,
  WrapperMessage,
  ButtonLogin,
  TitleButton,
  ContentLogin,
} from './styles';

import { useAuth } from '../../hooks/auth';

import bkg from './background.jpg';

import music from './music.json';
import icon from './icon.png';

const Login = () => {
  const { signIn } = useAuth();

  return (
    <Container source={bkg}>
      <Content>
        <WrapperMessage>
          <Message> Feel the </Message>
          <Title> Beat </Title>
        </WrapperMessage>

        <ContentLogin>
          <ButtonLogin onPress={signIn}>
            <TitleButton> SignIn </TitleButton>
          </ButtonLogin>
        </ContentLogin>
      </Content>
    </Container>
  );
};

export default Login;
