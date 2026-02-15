import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import KeepScreen from '../../components/keep/KeepScreen';
import { keepTheme } from '../../theme/keep';

export default function Keep_06() {
  return (
    <KeepScreen>
      <View style={styles.container}>
        <View style={styles.avatar}>
          <View style={styles.avatarInner} />
        </View>
        <Text style={styles.message}>Hi，我是Keep AI 教练卡卡，欢迎使用 Keep!</Text>
      </View>
    </KeepScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 50,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#8f84b5',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  avatarInner: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#f2e9ff',
  },
  message: {
    color: keepTheme.colors.textPrimary,
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 28,
  },
});
