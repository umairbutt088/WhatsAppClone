import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {theme} from '../../../ui';
import styled from 'styled-components/native';
import {appImage} from '../../../utilities';

const Container = styled.SafeAreaView({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: theme.space[4],
  backgroundColor: theme.colors.background,
});

const ImageIcon = styled.Image({
  fontSize: theme.fontSize.largeTitle,
  fontFamily: theme.fontFamilies.bold,
  color: theme.colors.primery100,
});

const WhatsAppIcon = styled.View({
  position: 'absolute',
});

const SplashScreen_1 = () => {
  const nav = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      nav.navigate('SplashScreen_2' as never);
    }, 3000);
  }, []);

  return (
    <Container>
      <ImageIcon source={appImage.whatsapp} />
      <WhatsAppIcon>
        <ImageIcon source={appImage.WhatsAppIcon} />
      </WhatsAppIcon>
    </Container>
  );
};

export default SplashScreen_1;
