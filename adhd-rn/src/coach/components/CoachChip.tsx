import React from 'react';
import { Pressable, StyleSheet, Text, TextStyle, ViewStyle } from 'react-native';
import { coachTheme } from '../theme';

type CoachChipProps = {
  label: string;
  selected?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

export default function CoachChip({ label, selected, onPress, style, textStyle }: CoachChipProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        selected && styles.selected,
        pressed && styles.pressed,
        style,
      ]}
    >
      <Text style={[styles.label, selected && styles.labelSelected, textStyle]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: coachTheme.radius.pill,
    backgroundColor: coachTheme.colors.surfaceWarm,
    borderWidth: 1,
    borderColor: coachTheme.colors.border,
  },
  selected: {
    backgroundColor: coachTheme.colors.accentSoft,
    borderColor: coachTheme.colors.accent,
  },
  pressed: {
    transform: [{ scale: 0.97 }],
  },
  label: {
    color: coachTheme.colors.textSecondary,
    fontSize: 12,
    fontWeight: '600',
    fontFamily: coachTheme.fonts.body,
  },
  labelSelected: {
    color: coachTheme.colors.accentDeep,
  },
});
