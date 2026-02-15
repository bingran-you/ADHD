import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import KeepButton from '../../components/keep/KeepButton';
import KeepInputPill from '../../components/keep/KeepInputPill';
import KeepScreen from '../../components/keep/KeepScreen';
import KeepTopBar from '../../components/keep/KeepTopBar';
import { keepTheme } from '../../theme/keep';

export default function Keep_02() {
  return (
    <KeepScreen>
      <View style={styles.container}>
        <KeepTopBar rightLabel="密码登录" />
        <View style={styles.header}>
          <Text style={styles.title}>手机号登录或注册</Text>
          <Text style={styles.subtitle}>快速找到好友，一站式记录你的运动</Text>
        </View>

        <KeepInputPill prefix="+86" placeholder="输入手机号" showChevron />
        <KeepButton label="获取验证码" style={styles.button} />

        <View style={styles.linkRow}>
          <Text style={styles.linkText}>随便逛逛</Text>
          <Text style={styles.linkText}>找回账号</Text>
        </View>

        <View style={styles.socialRow}>
          {['A', 'W', 'Q', '...'].map((item) => (
            <View key={item} style={styles.socialIcon}>
              <Text style={styles.socialText}>{item}</Text>
            </View>
          ))}
        </View>

        <View style={styles.agreementRow}>
          <View style={styles.checkbox} />
          <Text style={styles.agreementText}>我已阅读并同意</Text>
          <Text style={styles.agreementLink}>Keep 用户协议</Text>
          <Text style={styles.agreementText}>和</Text>
          <Text style={styles.agreementLink}>隐私政策</Text>
        </View>

        <View style={styles.bottomPill}>
          <Text style={styles.bottomPillText}>其他登录方式</Text>
        </View>
      </View>
    </KeepScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 14,
    paddingBottom: 16,
  },
  header: {
    marginTop: 28,
    marginBottom: 22,
  },
  title: {
    color: keepTheme.colors.textPrimary,
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitle: {
    color: keepTheme.colors.textSecondary,
    fontSize: 13,
  },
  button: {
    marginTop: 14,
  },
  linkRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  linkText: {
    color: keepTheme.colors.textMuted,
    fontSize: 12,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    paddingHorizontal: 12,
  },
  socialIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: keepTheme.colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialText: {
    color: keepTheme.colors.textSecondary,
    fontWeight: '600',
  },
  agreementRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: 16,
  },
  checkbox: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: keepTheme.colors.textMuted,
    marginRight: 6,
  },
  agreementText: {
    color: keepTheme.colors.textMuted,
    fontSize: 11,
    marginRight: 4,
  },
  agreementLink: {
    color: keepTheme.colors.textPrimary,
    fontSize: 11,
    marginRight: 4,
  },
  bottomPill: {
    marginTop: 'auto',
    backgroundColor: keepTheme.colors.surfaceSolid,
    alignSelf: 'center',
    borderRadius: keepTheme.radius.pill,
    paddingHorizontal: 28,
    paddingVertical: 8,
  },
  bottomPillText: {
    color: '#5c5c6b',
    fontSize: 12,
  },
});
