import React, {useState} from 'react';
import {theme} from '../../../ui';
import styled from 'styled-components/native';
import {CustomTextInput, Spacer, CustomButton} from '../../../components';

const Container = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.colors.background,
  paddingHorizontal: theme.space[4],
});

const ContentContainer = styled.SafeAreaView({
  width: '100%',
  height: '100%',
  alignItems: 'center',
});

const Title = styled.Text({
  fontSize: theme.fontSize.largeTitle,
  fontFamily: theme.fontFamilies.bold,
  color: theme.colors.primery100,
});

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log(email, password);

  return (
    <Container>
      <ContentContainer>
        <Spacer.Column numberOfSpaces={20} />
        <Title>LogIn</Title>
        <Spacer.Column numberOfSpaces={10} />
        <CustomTextInput
          title="Email"
          placeHolder="Email"
          onChangeText={em => setEmail(em)}
        />
        <Spacer.Column numberOfSpaces={4} />
        <CustomTextInput
          title="Password"
          placeHolder="Password"
          onChangeText={pw => setPassword(pw)}
        />
        <Spacer.Column numberOfSpaces={20} />
        <CustomButton title="Sign Up" />
      </ContentContainer>
    </Container>
  );
};

export default LogIn;
