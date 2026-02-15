import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { trainiTheme } from '../../theme/traini';

type TrainiLogoProps = {
  size?: number;
  color?: string;
};

export default function TrainiLogo({ size = 22, color }: TrainiLogoProps) {
  const accent = color ?? trainiTheme.colors.accent;
  return (
    <View style={styles.container}>
      <View style={[styles.mark, { width: size, height: size }]}>
        <View style={[styles.dot, { backgroundColor: accent }]} />
        <View style={[styles.dot, styles.dotOffset, { backgroundColor: accent }]} />
      </View>
      <Text style={[styles.text, { color: accent }]}>traini</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  mark: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  dotOffset: {
    position: 'absolute',
    top: -6,
    left: 6,
  },
  text: {
    marginTop: 2,
    fontSize: 10,
    letterSpacing: 1,
    fontWeight: '700',
  },
});
