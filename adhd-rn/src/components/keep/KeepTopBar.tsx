import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { keepTheme } from '../../theme/keep';

type KeepTopBarProps = {
  leftLabel?: string;
  rightLabel?: string;
};

export default function KeepTopBar({ leftLabel, rightLabel }: KeepTopBarProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.left}>{leftLabel || ''}</Text>
      <View style={styles.spacer} />
      <Text style={styles.right}>{rightLabel || ''}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  left: {
    color: keepTheme.colors.textSecondary,
    fontSize: 16,
    fontWeight: '600',
  },
  right: {
    color: keepTheme.colors.textSecondary,
    fontSize: 14,
    fontWeight: '600',
  },
  spacer: {
    flex: 1,
  },
});
