import React from 'react';
import { SafeAreaView, StyleSheet, View, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { keepTheme } from '../../theme/keep';

type KeepScreenProps = {
  children: React.ReactNode;
  style?: ViewStyle;
  contentStyle?: ViewStyle;
};

export default function KeepScreen({ children, style, contentStyle }: KeepScreenProps) {
  return (
    <LinearGradient
      colors={[keepTheme.colors.gradientTop, keepTheme.colors.gradientBottom]}
      style={[styles.container, style]}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={[styles.content, contentStyle]}>{children}</View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});
