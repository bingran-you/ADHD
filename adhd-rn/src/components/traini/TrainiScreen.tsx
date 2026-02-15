import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { trainiTheme } from '../../theme/traini';

type TrainiScreenProps = {
  children: React.ReactNode;
  backgroundColor?: string;
};

export default function TrainiScreen({ children, backgroundColor }: TrainiScreenProps) {
  return (
    <View style={[styles.root, { backgroundColor: backgroundColor ?? trainiTheme.colors.background }]}>
      <SafeAreaView style={styles.safe}>{children}</SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  safe: {
    flex: 1,
  },
});
