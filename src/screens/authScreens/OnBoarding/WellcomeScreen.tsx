import React from 'react';
import {CustomButton, Loader, Spacer} from '../../../components';
import styled from 'styled-components/native';
import {theme} from '../../../ui';
import {appImage} from '../../../utilities';
import {useNavigation} from '@react-navigation/native';

const Container = styled.SafeAreaView({
  flex: 1,
  paddingHorizontal: theme.space[4],
});

const Title = styled.Text({
  textAlign: 'center',
  marginTop: theme.space[20],
  fontSize: theme.fontSize.largeTitle,
  fontFamily: theme.fontFamilies.bold,
  color: theme.colors.black,
});

const WelcomeImage = styled.Image({
  marginTop: theme.space[15],
  alignSelf: 'center',
});

const DescriptionText = styled.Text({
  textAlign: 'center',
  color: theme.colors.black,
  fontFamily: theme.fontFamilies.normal,
  fontSize: theme.fontSize.smallText,
});

const DescriptionText2 = styled.Text({
  fontFamily: theme.fontFamilies.normal,
  fontSize: theme.fontSize.navButtonText,
  color: 'blue',
});

const WellcomeScreen = () => {
  const nav = useNavigation();

  return (
    <Container>
      <Title>Welcome To WhatsApp</Title>
      <WelcomeImage source={appImage.welcomeScreenImage} />
      <Spacer.Column numberOfSpaces={20} />
      <DescriptionText>
        Read our
        <DescriptionText2>
          Privacy Poicy.{' '}
          <DescriptionText>
            Tap “Agree and continue” to accept the{' '}
            <DescriptionText2>Terms of Service</DescriptionText2>
          </DescriptionText>
        </DescriptionText2>
      </DescriptionText>
      <Spacer.Column numberOfSpaces={10} />
      <CustomButton
        title="Agree and continue"
        onPress={() => nav.navigate('TopTabNavigator' as never)}
      />
    </Container>
  );
};

export default WellcomeScreen;
