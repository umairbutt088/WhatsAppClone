import React, {FunctionComponent} from 'react';
import {theme} from '../../ui';
import styled from 'styled-components/native';

interface props {
  title?: string;
  small?: boolean;
  onPress?: () => void;
}

const Container = styled.TouchableOpacity<{small: boolean}>(({small}) => ({
  width: small ? '30%' : '100%',
  backgroundColor: theme.colors.buttonColor,
  alignItems: 'center',
  paddingHorizontal: theme.space[4],
  paddingVertical: theme.space[4],
  borderRadius: 5,
}));

const Title = styled.Text({
  fontSize: theme.fontSize.subTitle,
  fontFamily: theme.fontFamilies.bold,
  color: theme.colors.black,
});

export const CustomButton: FunctionComponent<props> = ({
  title,
  onPress,
  small = false,
}) => {
  return (
    <Container onPress={onPress} small={small}>
      <Title>{title}</Title>
    </Container>
  );
};
