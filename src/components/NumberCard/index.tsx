import React, {FunctionComponent} from 'react';
import styled from 'styled-components/native';
import {theme} from '../../ui';

interface props {
  title: string;
  number: string;
  onPress: () => void;
}

const Container = styled.TouchableOpacity({
  width: '100%',
  flexDirection: 'row',
  paddingHorizontal: 21,
  paddingVertical: 15,
});

const TitleContainer = styled.View({
  marginLeft: 15,
});
const Title = styled.Text({
  fontFamily: theme.fontFamilies.bold,
  fontSize: theme.fontSize.largeTitle,
});
const ProfileImage = styled.Image({
  height: 50,
  width: 50,
  borderRadius: 50,
});
const Number = styled.Text({
  fontFamily: theme.fontFamilies.bold,
  fontSize: theme.fontSize.smallTitle,
  marginTop: 7,
});

export const NumberCard: FunctionComponent<props> = ({
  title,
  number,
  onPress,
}) => {
  return (
    <Container onPress={onPress}>
      <ProfileImage source={{uri: 'https://picsum.photos/200'}} />
      <TitleContainer>
        <Title>{title}</Title>
        <Number>{number}</Number>
      </TitleContainer>
    </Container>
  );
};
