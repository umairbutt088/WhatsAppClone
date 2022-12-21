import React, {useEffect, useState} from 'react';
import {appImage} from '../../../utilities';
import styled from 'styled-components/native';
import {theme} from '../../../ui';
import {
  Spacer,
  PhoneTextInput,
  CustomButton,
  ParentContainer,
  Loader,
} from '../../../components';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';

interface props {
  value?: string;
}

const Container = styled.SafeAreaView({
  flex: 1,
  paddingHorizontal: theme.space[4],
  backgroundColor: theme.colors.background,
});

const TilteContainer = styled.View({
  flexDirection: 'row',
  justifyContent: 'center',
  marginTop: theme.space[20],
});

const TitleText = styled.Text({
  color: theme.colors.black,
  fontSize: theme.fontSize.subTitle,
  fontFamily: theme.fontFamilies.semibold,
});

const DotsImageContainer = styled.TouchableOpacity({
  backgroundColor: 'transparent',
});

const DotsImage = styled.Image({
  height: theme.space[8],
  backgroundColor: 'transparent',
});

const DescriptionText = styled.Text({
  textAlign: 'center',
  color: theme.colors.black,
  fontWeight: theme.fontWeights.normal,
  fontSize: theme.fontSize.navButtonText,
});

const DescriptionText_1 = styled.Text({
  color: 'blue',
  fontWeight: theme.fontWeights.normal,
  fontSize: theme.fontSize.navButtonText,
});

const ButtonContianer = styled.KeyboardAvoidingView({
  height: '50%',
  alignItems: 'center',
  justifyContent: 'flex-end',
});

const PhoneNumberScreen = () => {
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [loading, setLoading] = useState(false);

  const nav = useNavigation();

  async function signInWithPhoneNumber(formattedValue) {
  console.log('value', value, formattedValue);

  async function signInWithPhoneNumber(value) {
    try {
      const confirmation: any = await auth().signInWithPhoneNumber(
        formattedValue,
      );

      nav.navigate('EnterOtpScreen', {
        confirm: confirmation,
        value: formattedValue,
      });
    } catch (error: any) {
      console.log('error', error.message);
      console.log('confirmation', confirmation);

      setConfirm(confirmation);
    } catch (error: any) {
      console.log('error', error.message);
      Alert.alert('Error', error.message);
    }
  }

  const handleOnPress = () => {

    signInWithPhoneNumber(formattedValue);
  };
    signInWithPhoneNumber(value);
    nav.navigate('EnterOtpScreen', {
      value: formattedValue,
      confirm: confirm,
    });
  };

  return (
    <ParentContainer>
      <Container>
        <TilteContainer>
          <TitleText>Enter your phone number</TitleText>
          <Spacer.Row numberOfSpaces={6} />
          <DotsImageContainer>
            <DotsImage source={appImage.Dots} />
          </DotsImageContainer>
        </TilteContainer>
        <Spacer.Column numberOfSpaces={5} />
        <DescriptionText>
          WhatsApp will need to verify your phone number.
          <DescriptionText_1>Whats my number?</DescriptionText_1>
        </DescriptionText>
        <Spacer.Column numberOfSpaces={20} />
        <PhoneTextInput isNumber />
        <PhoneTextInput
          isNumber={true}
          value={value}
          setValue={setValue}
          setFormattedValue={a => setFormattedValue(a)}
        />
          setFormattedValue={setFormattedValue}
        />
        <ButtonContianer>
          <CustomButton small title="NEXT" onPress={handleOnPress} />
        </ButtonContianer>
      </Container>
      <Loader show={loading} />
    </ParentContainer>
  );
};

export default PhoneNumberScreen;
