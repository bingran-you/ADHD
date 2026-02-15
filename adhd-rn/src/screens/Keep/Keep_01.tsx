import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import KeepLogo from '../../components/keep/KeepLogo';
import KeepScreen from '../../components/keep/KeepScreen';
import { keepTheme } from '../../theme/keep';

export default function Keep_01() {
  return (
    <KeepScreen>
      <View style={styles.container}>
        <View style={styles.titleWrap}>
          <Text style={styles.title}>自律给我自由</Text>
        </View>
        <View style={styles.logoWrap}>
          <KeepLogo />
        </View>
      </View>
    </KeepScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 28,
    paddingBottom: 40,
  },
  titleWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: keepTheme.colors.textPrimary,
    fontSize: 36,
    fontWeight: '700',
    letterSpacing: 2,
  },
  logoWrap: {
    alignItems: 'center',
  },
});
