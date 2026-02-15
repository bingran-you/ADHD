import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { keepTheme } from '../../theme/keep';

type KeepLogoProps = {
  style?: ViewStyle;
};

export default function KeepLogo({ style }: KeepLogoProps) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.icon}>
        <Text style={styles.iconText}>K</Text>
      </View>
      <Text style={styles.word}>keep</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 28,
    height: 28,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: keepTheme.colors.textPrimary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  iconText: {
    color: keepTheme.colors.textPrimary,
    fontSize: 14,
    fontWeight: '700',
  },
  word: {
    color: keepTheme.colors.textPrimary,
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 1.2,
    textTransform: 'lowercase',
  },
});
