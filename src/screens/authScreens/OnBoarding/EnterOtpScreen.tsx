import React, {useState, FunctionComponent} from 'react';
import styled from 'styled-components/native';
import {theme} from '../../../ui';
import {appImage} from '../../../utilities';
import {Spacer, CustomButton} from '../../../components';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {Text} from 'react-native';
import {CodeField, Cursor} from 'react-native-confirmation-code-field';
import messaging from '@react-native-firebase/messaging';
import firestore from '@react-native-firebase/firestore';
import {Spacer, CustomTextInput, CustomButton} from '../../../components';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {Alert, Text} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

export type ParamsProps = {
  route: RouteProp<{
    params: {
      value: string;
      confirm: string;
    };
  }>;
};
const Container = styled.SafeAreaView({
  flex: 1,
  paddingHorizontal: theme.space[4],
  backgroundColor: theme.colors.background,
});

const TitleContainer = styled.View({
  flexDirection: 'row',
  marginTop: theme.space[5],
});

const IconContainer = styled.TouchableOpacity({
const IconContainer = styled.View({
  height: theme.space[8],
  width: theme.space[8],
  justifyContent: 'center',
});

const BackArrow = styled.Image({
  height: theme.space[4],
});

const TitleText = styled.Text({
  color: theme.colors.black,
  fontSize: theme.fontSize.subTitle,
  fontFamily: theme.fontFamilies.bold,
});

const DescriptionText = styled.Text({
  textAlign: 'center',
  color: theme.colors.black,
  fontWeight: theme.fontWeights.normal,
  fontSize: theme.fontSize.navButtonText,
});

const OtpCodeMainContainer = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: theme.space[5],
});

const ButtonContianer = styled.KeyboardAvoidingView({
  height: '50%',
  alignItems: 'center',
  justifyContent: 'flex-end',
});

const EnterOtpScreen: FunctionComponent<ParamsProps> = ({route}) => {
  const PhoneNumber = route.params?.value;
  const confirm = route.params?.confirm;
  console.log('confirm---->>>>', confirm);

  const nav = useNavigation();

  const [code, setCode] = useState('');

  async function confirmCode() {
    try {
      console.log('code---->>>>', code, confirm);
      confirm.confirm(code).then(async (response: string) => {
        console.log('[response ---->>>> ]', response);
        const token = await messaging().getToken();
        console.log('[token ---->>>> ]', token);
        await firestore().collection('employee').add({code, token});
        nav.navigate('TopTabNavigator' as never);
  const {confirm} = route.params;
  console.log('[confirm---->>>>]', confirm);

  const [code, setCode] = useState('');

  //   async function confirmCode() {
  //     try {
  //       await confirm.confirm(code);
  //     } catch (error) {
  //       console.log('Invalid code.');
  //       Alert.alert('Error', error.message);
  //     }
  //   }
  async function confirmCode() {
    try {
      console.log('code---->>>>', code, confirm);
      confirm.confirm(code).then(async response => {
        console.log('[response ---->>>> ]', response);
        const token = await messaging().getToken();
        await firestore().collection('employee').add({code, token});
        navigation.navigate('ChatPage');
      });
    } catch (error) {
      console.log('Invalid code....', error);
    }
  }

  const handleOnPress = () => {
    confirmCode();
  };

  return (
    <Container>
      <TitleContainer>
        <IconContainer onPress={() => nav.goBack()}>
        <IconContainer>
          <BackArrow source={appImage.backArrow} />
        </IconContainer>
        <TitleText>Enter OTP Code</TitleText>
      </TitleContainer>
      <Spacer.Column numberOfSpaces={50} />
      <DescriptionText>Code has been send to {PhoneNumber}</DescriptionText>
      {/* <OtpCodeMainContainer>
        <CustomTextInput small={true} />
        <CustomTextInput small={true} />
        <CustomTextInput small={true} />
        <CustomTextInput small={true} />
        <CustomTextInput small={true} />
        <CustomTextInput small={true} />
      </OtpCodeMainContainer> */}

      <CodeField
        value={code}
        onChangeText={setCode}
        cellCount={6}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[
              {
                width: 55,
                height: 55,
                borderRadius: 18,
                lineHeight: 38,
                fontSize: 24,
                borderWidth: 1,
                borderColor: '#000',
                textAlign: 'center',
                color: 'black',
              },
              isFocused && {borderColor: 'orange'},
            ]}>
            ]}
            // onLayout={getCellOnLayoutHandler(index)}
          >
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />

      <ButtonContianer>
        <CustomButton small title="NEXT" onPress={handleOnPress} />
      </ButtonContianer>
    </Container>
  );
};

export default EnterOtpScreen;
