import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { keepTheme } from '../../theme/keep';

type KeepOptionCardProps = {
  title: string;
  subtitle?: string;
  selected?: boolean;
  icon?: string;
  style?: ViewStyle;
};

export default function KeepOptionCard({ title, subtitle, selected, icon, style }: KeepOptionCardProps) {
  return (
    <View style={[styles.card, selected ? styles.cardSelected : null, style]}>
      {icon ? (
        <View style={[styles.icon, selected ? styles.iconSelected : null]}>
          <Text style={styles.iconText}>{icon}</Text>
        </View>
      ) : null}
      <View style={styles.content}>
        <Text style={[styles.title, selected ? styles.titleSelected : null]}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#f1f1f1',
  },
  cardSelected: {
    backgroundColor: '#e9f8f1',
    borderColor: '#c8eedc',
  },
  icon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#f1f2f6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  iconSelected: {
    backgroundColor: '#bff1da',
  },
  iconText: {
    fontSize: 14,
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
