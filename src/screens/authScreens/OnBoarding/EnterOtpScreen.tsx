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
      });
    } catch (error) {
      console.log('Invalid code....', error);
    }
  }

  const handleOnPress = () => {
    confirmCode();
    nav.navigate('TopTabNavigator' as never);
  };

  return (
    <Container>
      <TitleContainer>
        <IconContainer onPress={nav.goBack() as never}>
          <BackArrow source={appImage.backArrow} />
        </IconContainer>
        <TitleText>Enter OTP Code</TitleText>
      </TitleContainer>
      <Spacer.Column numberOfSpaces={50} />
      <DescriptionText>Code has been send to {PhoneNumber}</DescriptionText>
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
