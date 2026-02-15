import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { keepTheme } from '../../theme/keep';

type KeepChipProps = {
  label: string;
  style?: ViewStyle;
};

export default function KeepChip({ label, style }: KeepChipProps) {
  return (
    <View style={[styles.chip, style]}>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  chip: {
    backgroundColor: keepTheme.colors.surfaceStrong,
    borderRadius: keepTheme.radius.pill,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  text: {
    color: keepTheme.colors.textSecondary,
    fontSize: 12,
    fontWeight: '600',
  },
});
