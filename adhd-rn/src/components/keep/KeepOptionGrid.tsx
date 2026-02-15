import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { keepTheme } from '../../theme/keep';

type KeepOptionGridProps = {
  options: string[];
  selectedIndex?: number;
};

export default function KeepOptionGrid({ options, selectedIndex }: KeepOptionGridProps) {
  return (
    <View style={styles.grid}>
      {options.map((item, index) => {
        const selected = index === selectedIndex;
        return (
          <View key={item} style={[styles.option, selected ? styles.optionSelected : null]}>
            <Text style={[styles.optionText, selected ? styles.optionTextSelected : null]}>{item}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 6,
  },
  option: {
    backgroundColor: '#f4f2f8',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 10,
    marginBottom: 10,
  },
  optionSelected: {
    backgroundColor: '#e9f8f1',
    borderWidth: 1,
    borderColor: keepTheme.colors.green,
  },
  optionText: {
    color: '#58556a',
    fontSize: 12,
    fontWeight: '600',
  },
  optionTextSelected: {
    color: keepTheme.colors.greenDark,
  },
});
