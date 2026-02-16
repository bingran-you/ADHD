import React from 'react';
import { Pressable, StyleSheet, Text, TextStyle, ViewStyle } from 'react-native';
import { coachTheme } from '../theme';

type CoachButtonProps = {
  label: string;
  onPress?: () => void;
  variant?: 'primary' | 'outline' | 'ghost';
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

export default function CoachButton({
  label,
  onPress,
  variant = 'primary',
  disabled,
  style,
  textStyle,
}: CoachButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        variant === 'primary' && styles.primary,
        variant === 'outline' && styles.outline,
        variant === 'ghost' && styles.ghost,
        disabled && styles.disabled,
        pressed && !disabled && styles.pressed,
        style,
      ]}
      disabled={disabled}
    >
      <Text
        style={[
          styles.label,
          variant === 'outline' && styles.labelOutline,
          variant === 'ghost' && styles.labelGhost,
          disabled && styles.labelDisabled,
          textStyle,
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: coachTheme.radius.pill,
    paddingVertical: 12,
    paddingHorizontal: 18,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 44,
  },
  primary: {
    backgroundColor: coachTheme.colors.accent,
  },
  outline: {
    borderWidth: 1,
    borderColor: coachTheme.colors.accent,
    backgroundColor: 'transparent',
  },
  ghost: {
    backgroundColor: coachTheme.colors.surfaceCool,
  },
  pressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.92,
  },
  disabled: {
    backgroundColor: coachTheme.colors.border,
  },
  label: {
    color: '#fffaf7',
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: 0.2,
    fontFamily: coachTheme.fonts.heading,
  },
  labelOutline: {
    color: coachTheme.colors.accent,
  },
  labelGhost: {
    color: coachTheme.colors.teal,
  },
  labelDisabled: {
    color: coachTheme.colors.textMuted,
  },
});
