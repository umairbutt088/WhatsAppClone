import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
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

const SignUp = () => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');

  console.log(fname, lname, email);
  const nav = useNavigation();

  return (
    <Container>
      <ContentContainer>
        <Spacer.Column numberOfSpaces={20} />
        <Title>SignUp</Title>
        <Spacer.Column numberOfSpaces={4} />
        <CustomTextInput
          title="First Name"
          placeHolder="Fname"
          onChangeText={fn => setFname(fn)}
        />
        <Spacer.Column numberOfSpaces={4} />
        <CustomTextInput
          title="Last Name"
          placeHolder="Lname"
          onChangeText={ln => setLname(ln)}
        />
        <Spacer.Column numberOfSpaces={4} />
        <CustomTextInput
          title="Email"
          placeHolder="Email"
          onChangeText={em => setEmail(em)}
        />
        <Spacer.Column numberOfSpaces={4} />
        <CustomTextInput title="Password" placeHolder="Password" />
        <Spacer.Column numberOfSpaces={20} />
        <CustomButton
          title="Sign Up"
          onPress={() => nav.navigate('Login' as never)}
        />
      </ContentContainer>
    </Container>
  );
};

export default SignUp;
