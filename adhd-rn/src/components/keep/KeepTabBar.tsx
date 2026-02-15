import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { keepTheme } from '../../theme/keep';

type TabItem = {
  label: string;
  active?: boolean;
};

type KeepTabBarProps = {
  items: TabItem[];
};

export default function KeepTabBar({ items }: KeepTabBarProps) {
  return (
    <View style={styles.container}>
      {items.map((item) => (
        <View key={item.label} style={styles.item}>
          <View style={[styles.icon, item.active && styles.iconActive]} />
          <Text style={[styles.label, item.active && styles.labelActive]}>{item.label}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  item: {
    alignItems: 'center',
  },
  icon: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#e6e6ef',
    marginBottom: 4,
  },
  iconActive: {
    backgroundColor: keepTheme.colors.green,
  },
  label: {
    fontSize: 11,
    color: '#8c879a',
  },
  labelActive: {
    color: keepTheme.colors.textDark,
    fontWeight: '600',
  },
});
