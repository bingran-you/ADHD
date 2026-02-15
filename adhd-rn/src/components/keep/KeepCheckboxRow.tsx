import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { keepTheme } from '../../theme/keep';

type KeepCheckboxRowProps = {
  label: string;
  checked?: boolean;
};

export default function KeepCheckboxRow({ label, checked }: KeepCheckboxRowProps) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.box, checked && styles.boxChecked]}>
        {checked ? <Text style={styles.check}>✓</Text> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  label: {
    color: keepTheme.colors.sheetText,
    fontSize: 16,
    fontWeight: '500',
  },
  box: {
    width: 18,
    height: 18,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#c9c6d4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxChecked: {
    borderColor: keepTheme.colors.green,
    backgroundColor: keepTheme.colors.green,
  },
  check: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 14,
  },
});
