import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { trainiTheme } from '../../theme/traini';

type TrainiFieldProps = {
  label?: string;
  value?: string;
  placeholder?: string;
  rightElement?: React.ReactNode;
  style?: ViewStyle;
};

export default function TrainiField({ label, value, placeholder, rightElement, style }: TrainiFieldProps) {
  const displayText = value ?? placeholder ?? '';
  const isPlaceholder = !value && !!placeholder;

  return (
    <View style={[styles.field, style]}>
      {!!label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.row}>
        <Text style={[styles.value, isPlaceholder && styles.placeholder]}>{displayText}</Text>
        {rightElement}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  field: {
    backgroundColor: trainiTheme.colors.surface,
    borderRadius: trainiTheme.radius.md,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: trainiTheme.colors.border,
  },
  label: {
    fontSize: 11,
    color: trainiTheme.colors.textMuted,
    marginBottom: 6,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  value: {
    fontSize: 15,
    color: trainiTheme.colors.textPrimary,
    fontWeight: '600',
  },
  placeholder: {
    color: trainiTheme.colors.textMuted,
    fontWeight: '500',
  },
});
