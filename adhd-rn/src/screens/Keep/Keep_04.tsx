import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import KeepButton from '../../components/keep/KeepButton';
import KeepInputPill from '../../components/keep/KeepInputPill';
import KeepScreen from '../../components/keep/KeepScreen';
import KeepTopBar from '../../components/keep/KeepTopBar';
import { keepTheme } from '../../theme/keep';

export default function Keep_04() {
  return (
    <KeepScreen>
      <View style={styles.container}>
        <KeepTopBar leftLabel="<" rightLabel="跳过" />
        <View style={styles.header}>
          <Text style={styles.title}>绑定手机号</Text>
        </View>
        <KeepInputPill prefix="+1" value="5105709315" showChevron />
        <KeepButton label="下一步" style={styles.button} />
      </View>

      <View style={styles.overlay}>
        <View style={styles.captchaCard}>
          <View style={styles.captchaHeader}>
            <Text style={styles.captchaTitle}>请在下图依次点击</Text>
            <Text style={styles.captchaWord}>珊瑚色丁</Text>
          </View>
          <View style={styles.captchaImage}>
            <Text style={styles.captchaHint}>验证码图</Text>
            <View style={styles.dotRow}>
              {['1', '2', '3', '4'].map((item) => (
                <View key={item} style={styles.dot}>
                  <Text style={styles.dotText}>{item}</Text>
                </View>
              ))}
            </View>
          </View>
          <View style={styles.captchaButton}>
            <Text style={styles.captchaButtonText}>确定</Text>
          </View>
          <View style={styles.captchaFooter}>
            <Text style={styles.captchaFooterText}>X</Text>
            <Text style={styles.captchaFooterText}>R</Text>
            <Text style={styles.captchaFooterText}>?</Text>
            <View style={styles.captchaFooterSpacer} />
            <Text style={styles.captchaFooterText}>GEETEST</Text>
          </View>
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
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.55)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  captchaCard: {
    width: '100%',
    maxWidth: 320,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 14,
  },
  captchaHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  captchaTitle: {
    color: '#2f2f2f',
    fontSize: 12,
  },
  captchaWord: {
    color: '#2f2f2f',
    fontSize: 14,
    fontWeight: '600',
  },
  captchaImage: {
    height: 120,
    borderRadius: 8,
    backgroundColor: '#5070a0',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  captchaHint: {
    color: '#e9eefc',
    fontSize: 12,
  },
  dotRow: {
    flexDirection: 'row',
    marginTop: 8,
  },
  dot: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#4d7fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  dotText: {
    color: '#fff',
    fontSize: 12,
  },
  captchaButton: {
    backgroundColor: '#5c83ff',
    borderRadius: 6,
    alignItems: 'center',
    paddingVertical: 8,
  },
  captchaButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  captchaFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  captchaFooterText: {
    color: '#8a8a8a',
    fontSize: 10,
    marginRight: 10,
  },
  captchaFooterSpacer: {
    flex: 1,
  },
});
