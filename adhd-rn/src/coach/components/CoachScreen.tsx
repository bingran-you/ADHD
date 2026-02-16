import React from 'react';
import { SafeAreaView, StyleSheet, View, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { coachTheme } from '../theme';

type CoachScreenProps = {
  children: React.ReactNode;
  style?: ViewStyle;
  contentStyle?: ViewStyle;
};

export default function CoachScreen({ children, style, contentStyle }: CoachScreenProps) {
  return (
    <View style={[styles.root, style]}>
      <View style={styles.background} pointerEvents="none">
        <LinearGradient
          colors={[coachTheme.colors.backgroundTop, coachTheme.colors.backgroundBottom]}
          style={StyleSheet.absoluteFillObject}
        />
        <View style={styles.orbLarge} />
        <View style={styles.orbSmall} />
        <View style={styles.ring} />
      </View>
      <SafeAreaView style={styles.safeArea}>
        <View style={[styles.content, contentStyle]}>{children}</View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: coachTheme.colors.backgroundTop,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  orbLarge: {
    position: 'absolute',
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: coachTheme.colors.highlight,
    top: -120,
    right: -80,
    opacity: 0.55,
  },
  orbSmall: {
    position: 'absolute',
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: coachTheme.colors.accentSoft,
    bottom: 120,
    left: -30,
    opacity: 0.6,
  },
  ring: {
    position: 'absolute',
    width: 220,
    height: 220,
    borderRadius: 110,
    borderWidth: 1,
    borderColor: 'rgba(47, 93, 80, 0.18)',
    bottom: -40,
    right: 20,
  },
});
