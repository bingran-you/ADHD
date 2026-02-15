import React from 'react';
import { StyleSheet, View } from 'react-native';
import { keepTheme } from '../../theme/keep';

type KeepProgressProps = {
  progress: number;
};

export default function KeepProgress({ progress }: KeepProgressProps) {
  const clamped = Math.max(0, Math.min(progress, 1));
  return (
    <View style={styles.track}>
      <View style={[styles.fill, { width: `${clamped * 100}%` }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    height: 3,
    borderRadius: 999,
    backgroundColor: keepTheme.colors.divider,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    backgroundColor: keepTheme.colors.textPrimary,
  },
});
