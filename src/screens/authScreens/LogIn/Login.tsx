import React from 'react';
import {theme} from '../../../ui';
import styled from 'styled-components/native';

const Container = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.colors.white,
});

const ContentContainer = styled.SafeAreaView({
  width: '100%',
  height: '100%',
  alignItems: 'center',
  backgroundColor: 'green',
});

const Title = styled.Text({
  fontSize: theme.fontSize.largeTitle,
  fontFamily: theme.fontFamilies.bold,
  color: theme.colors.black,
});

const TextInput = styled.TextInput({
  width: '90%',
  height: 50,
  fontSize: theme.fontSize.subTitle,
  backgroundColor: theme.colors.white,
});

const Login = () => {
  return (
    <Container>
      {/* <ContentContainer> */}
      <Title>Log In</Title>
      <TextInput placeholder="Email"></TextInput>
      {/* </ContentContainer> */}
    </Container>
  );
};

export default Login;
