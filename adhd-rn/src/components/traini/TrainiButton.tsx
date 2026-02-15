import React from 'react';
import { Pressable, StyleSheet, Text, ViewStyle } from 'react-native';
import { trainiTheme } from '../../theme/traini';

type TrainiButtonProps = {
  label: string;
  disabled?: boolean;
  variant?: 'primary' | 'outline';
  style?: ViewStyle;
};

export default function TrainiButton({ label, disabled, variant = 'primary', style }: TrainiButtonProps) {
  const isOutline = variant === 'outline';
  return (
    <Pressable
      style={({ pressed }) => [
        styles.base,
        isOutline && styles.outline,
        disabled && styles.disabled,
        pressed && !disabled && styles.pressed,
        style,
      ]}
    >
      <Text
        style={[
          styles.label,
          isOutline && styles.outlineLabel,
          disabled && styles.disabledLabel,
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: trainiTheme.radius.pill,
    backgroundColor: trainiTheme.colors.accent,
    paddingVertical: 14,
    alignItems: 'center',
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: trainiTheme.colors.borderStrong,
  },
  pressed: {
    opacity: 0.9,
  },
  disabled: {
    backgroundColor: trainiTheme.colors.disabled,
  },
  label: {
    color: '#ffffff',
    fontWeight: '600',
    letterSpacing: 0.4,
  },
  outlineLabel: {
    color: trainiTheme.colors.textSecondary,
  },
  disabledLabel: {
    color: '#f4f1ed',
  },
});
