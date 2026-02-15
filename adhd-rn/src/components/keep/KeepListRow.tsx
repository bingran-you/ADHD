import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { keepTheme } from '../../theme/keep';

type KeepListRowProps = {
  title: string;
  subtitle?: string;
  selected?: boolean;
};

export default function KeepListRow({ title, subtitle, selected }: KeepListRowProps) {
  return (
    <View style={[styles.row, selected ? styles.rowSelected : null]}>
      <View style={styles.thumb}>
        <Text style={styles.thumbText}>图</Text>
      </View>
      <View style={styles.content}>
        <Text style={[styles.title, selected ? styles.titleSelected : null]}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: '#ffffff',
    borderRadius: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#f1f1f1',
  },
  rowSelected: {
    backgroundColor: '#e9f8f1',
    borderColor: '#c8eedc',
  },
  thumb: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#eaeaf2',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  thumbText: {
    color: '#9a96a5',
    fontSize: 10,
  },
  content: {
    flex: 1,
  },
  title: {
    color: keepTheme.colors.textDark,
    fontSize: 14,
    fontWeight: '600',
  },
  titleSelected: {
    color: keepTheme.colors.greenDark,
  },
  subtitle: {
    color: '#9a96a5',
    fontSize: 11,
    marginTop: 4,
  },
});
