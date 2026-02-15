import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { keepTheme } from '../../theme/keep';

type KeepTagProps = {
  label: string;
  selected?: boolean;
};

export default function KeepTag({ label, selected }: KeepTagProps) {
  return (
    <View style={[styles.tag, selected ? styles.tagSelected : styles.tagDefault]}>
      <Text style={[styles.text, selected ? styles.textSelected : styles.textDefault]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tag: {
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 10,
    marginBottom: 10,
    borderWidth: 1,
  },
  tagDefault: {
    backgroundColor: '#f4f2f8',
    borderColor: '#f4f2f8',
  },
  tagSelected: {
    backgroundColor: '#e9f8f1',
    borderColor: keepTheme.colors.green,
  },
  text: {
    fontSize: 12,
    fontWeight: '600',
  },
  textDefault: {
    color: '#58556a',
  },
  textSelected: {
    color: keepTheme.colors.greenDark,
  },
});
