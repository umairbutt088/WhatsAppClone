import {Text} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView({
  flex: 1,
  backgroundColor: 'yellow',
});

const CallScreen = () => {
  return (
    <Container>
      <Text>CallScreen</Text>
    </Container>
  );
};

export default CallScreen;
