import React from 'react';
import { SafeAreaView, StyleSheet, View, ViewStyle } from 'react-native';

type KeepLightScreenProps = {
  children: React.ReactNode;
  style?: ViewStyle;
  contentStyle?: ViewStyle;
};

export default function KeepLightScreen({ children, style, contentStyle }: KeepLightScreenProps) {
  return (
    <View style={[styles.container, style]}>
      <SafeAreaView style={styles.safeArea}>
        <View style={[styles.content, contentStyle]}>{children}</View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6fb',
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});
