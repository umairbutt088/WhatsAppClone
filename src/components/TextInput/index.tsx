import React, {FunctionComponent} from 'react';
import {theme} from '../../ui';
import styled from 'styled-components/native';
import {Spacer} from '../../components';

interface props {
  title?: string;
  placeHolder?: string;
  onChangeText?: (text: string) => void;
}

const Container = styled.View({
  width: '100%',
});
const InputContainer = styled.View({
  height: 50,
  borderWidth: 0.2,
  borderRadius: 5,
  borderColor: theme.colors.netural80,
  backgroundColor: theme.colors.netural40,
});

const InputTitle = styled.Text({
  fontSize: theme.fontSize.subTitle,
  fontFamily: theme.fontFamilies.bold,
  color: theme.colors.primery100,
});

const Input = styled.TextInput({
  height: 50,
  width: '100%',
  paddingHorizontal: 10,
  alignSelf: 'center',
  fontSize: theme.fontSize.subTitle,
});

export const CustomTextInput: FunctionComponent<props> = ({
  title,
  placeHolder,
  onChangeText,
}) => {
  return (
    <Container>
      <InputTitle>{title}</InputTitle>
      <Spacer.Column numberOfSpaces={2} />
      <InputContainer>
        <Input
          placeholder={placeHolder}
          onChangeText={onChangeText}
          autoCapitalize="none"
        />
      </InputContainer>
    </Container>
  );
};
