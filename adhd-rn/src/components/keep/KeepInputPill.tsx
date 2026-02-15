import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { keepTheme } from '../../theme/keep';

type KeepInputPillProps = {
  prefix?: string;
  value?: string;
  placeholder?: string;
  showChevron?: boolean;
};

export default function KeepInputPill({ prefix, value, placeholder, showChevron }: KeepInputPillProps) {
  const displayText = value || placeholder || '';
  const muted = !value;
  return (
    <View style={styles.container}>
      {prefix ? (
        <View style={styles.prefixWrap}>
          <Text style={styles.prefix}>{prefix}</Text>
          {showChevron ? <Text style={styles.chevron}>v</Text> : null}
        </View>
      ) : null}
      <Text style={[styles.value, muted && styles.placeholder]}>{displayText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: keepTheme.colors.surface,
    borderRadius: keepTheme.radius.pill,
    paddingHorizontal: 18,
    paddingVertical: 12,
  },
  prefixWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  prefix: {
    color: keepTheme.colors.textPrimary,
    fontSize: 14,
    fontWeight: '600',
  },
  chevron: {
    color: keepTheme.colors.textSecondary,
    marginLeft: 4,
    fontSize: 12,
  },
  value: {
    color: keepTheme.colors.textPrimary,
    fontSize: 14,
    flex: 1,
  },
  placeholder: {
    color: keepTheme.colors.textMuted,
  },
});
