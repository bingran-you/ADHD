import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import KeepButton from '../../components/keep/KeepButton';
import KeepInputPill from '../../components/keep/KeepInputPill';
import KeepScreen from '../../components/keep/KeepScreen';
import KeepTopBar from '../../components/keep/KeepTopBar';
import { keepTheme } from '../../theme/keep';

export default function Keep_03() {
  return (
    <KeepScreen>
      <View style={styles.container}>
        <KeepTopBar leftLabel="<" rightLabel="跳过" />
        <View style={styles.header}>
          <Text style={styles.title}>绑定手机号</Text>
        </View>
        <KeepInputPill prefix="+1" value="5105709315" showChevron />
        <KeepButton label="下一步" style={styles.button} />
        <Text style={styles.caption}>绑定手机号以便于手机号快速登录，更可提升帐号安全性</Text>
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
    marginTop: 28,
    marginBottom: 18,
  },
  title: {
    color: keepTheme.colors.textPrimary,
    fontSize: 24,
    fontWeight: '700',
  },
  button: {
    marginTop: 18,
  },
  caption: {
    color: keepTheme.colors.textMuted,
    fontSize: 11,
    marginTop: 12,
    lineHeight: 16,
  },
});
