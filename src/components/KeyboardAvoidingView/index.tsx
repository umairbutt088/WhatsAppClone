import React, {FunctionComponent, ReactNode} from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {theme} from '../../ui';

interface props {
  children: ReactNode;
}

export const ParentContainer: FunctionComponent<props> = ({children}) => {
  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}
      keyboardVerticalOffset={
        Platform.OS === 'ios' ? theme.dimensions.statusBar + 5 : 5
      }
      behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}>
      {children}
    </KeyboardAvoidingView>
  );
};
