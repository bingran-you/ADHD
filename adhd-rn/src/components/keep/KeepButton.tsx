import React from 'react';
import { Pressable, StyleSheet, Text, TextStyle, ViewStyle } from 'react-native';
import { keepTheme } from '../../theme/keep';

type KeepButtonProps = {
  label: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

export default function KeepButton({ label, style, textStyle }: KeepButtonProps) {
  return (
    <Pressable style={[styles.button, style]}>
      <Text style={[styles.label, textStyle]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: keepTheme.colors.green,
    borderRadius: keepTheme.radius.pill,
    paddingVertical: 14,
    alignItems: 'center',
  },
  label: {
    color: '#1d2b25',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.2,
  },
});
