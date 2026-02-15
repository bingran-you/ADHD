import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

type ScreenContainerProps = {
  backgroundImage: number;
  children?: React.ReactNode;
};

export default function ScreenContainer({ backgroundImage, children }: ScreenContainerProps) {
  return (
    <View style={styles.container}>
      <Image source={backgroundImage} style={styles.background} resizeMode="contain" />
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    flex: 1,
  },
});
