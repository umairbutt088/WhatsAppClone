import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {theme} from '../../../ui';
import styled from 'styled-components/native';
import {Loader, Spacer} from '../../../components';
import {appImage} from '../../../utilities';

const Container = styled.View({
  flex: 1,
  alignItems: 'center',
});

const ImageContainer = styled.View({
  width: '100%',
  height: '80%',
  alignItems: 'center',
  justifyContent: 'center',
});

const ImageCont = styled.Image({
  alignItems: 'center',
  justifyContent: 'center',
});

const PhoneImag = styled.Image({
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
});

const LoadingContainer = styled.View({
  width: '100%',
  height: '20%',
});

const LoadingText = styled.Text({
  textAlign: 'center',
  color: theme.colors.primery,
  fontSize: theme.fontSize.largeTitle,
  fontFamily: theme.fontFamilies.bold,
});

const SplashScreen_2 = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const nav = useNavigation();
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      nav.navigate('WellcomeStack' as never);
    }, 3000);
  }, []);

  return (
    <Container>
      <ImageContainer>
        <ImageCont source={appImage.whatsapp} />
        <PhoneImag source={appImage.WhatsAppIcon} />
      </ImageContainer>
      <LoadingContainer>
        <Spacer.Column numberOfSpaces={10} />
        <Loader show={loading} size={40} />
        <Spacer.Column numberOfSpaces={10} />
        <LoadingText>Loading...</LoadingText>
      </LoadingContainer>
    </Container>
  );
};

export default SplashScreen_2;
