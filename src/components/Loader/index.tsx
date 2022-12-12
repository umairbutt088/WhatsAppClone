import React, {FunctionComponent} from 'react';
import {StyleSheet, View, ViewStyle, Dimensions} from 'react-native';
import {BarIndicator, MaterialIndicator} from 'react-native-indicators';

interface props {
  show?: boolean;
  isNative?: boolean;
  color?: string;
  size?: number;
  style?: ViewStyle;
}

export const Loader: FunctionComponent<props> = ({
  show,
  color = '#0CCC83',
  size = 40,
  style,
}) => {
  return (
    <>
      {show && (
        <View style={[styles.container, style]}>
          {/* <BarIndicator size={size} color={color} dotRadius={10} /> */}
          <MaterialIndicator size={size} color={color} dotRadius={10} />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderStyle: {},
});
