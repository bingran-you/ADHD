import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import KeepButton from '../../components/keep/KeepButton';
import KeepScreen from '../../components/keep/KeepScreen';
import KeepTopBar from '../../components/keep/KeepTopBar';
import { keepTheme } from '../../theme/keep';

export default function Keep_05() {
  return (
    <KeepScreen>
      <View style={styles.container}>
        <KeepTopBar leftLabel="<" />
        <View style={styles.header}>
          <Text style={styles.title}>输入验证码</Text>
          <Text style={styles.subtitle}>已发送 4 位验证码至 +1 5105709315</Text>
        </View>
        <View style={styles.codeRow}>
          {[0, 1, 2, 3].map((index) => (
            <View key={index} style={styles.codeBox}>
              {index === 0 ? <View style={styles.cursor} /> : null}
            </View>
          ))}
        </View>
        <KeepButton label="确定" style={styles.button} />
        <Text style={styles.resend}>重新获取 (56)</Text>
      </View>
    </KeepScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 14,
  },
  header: {
    marginTop: 24,
    marginBottom: 20,
  },
  title: {
    color: keepTheme.colors.textPrimary,
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 6,
  },
  subtitle: {
    color: keepTheme.colors.textSecondary,
    fontSize: 12,
  },
  codeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  codeBox: {
    width: 60,
    height: 50,
    borderRadius: 10,
    backgroundColor: keepTheme.colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cursor: {
    width: 2,
    height: 22,
    backgroundColor: '#69d4a5',
  },
  button: {
    marginTop: 22,
  },
  resend: {
    color: keepTheme.colors.textMuted,
    fontSize: 12,
    marginTop: 12,
    textAlign: 'center',
  },
});
