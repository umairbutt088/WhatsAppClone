import {Text} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView({
  flex: 1,
  backgroundColor: 'blue',
});

const StatusScreen = () => {
  return (
    <Container>
      <Text>StatusScreen</Text>
    </Container>
  );
};

export default StatusScreen;
