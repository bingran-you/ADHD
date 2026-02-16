import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import KeepButton from '../../components/keep/KeepButton';
import KeepLightScreen from '../../components/keep/KeepLightScreen';
import KeepOptionGrid from '../../components/keep/KeepOptionGrid';
import { keepTheme } from '../../theme/keep';

export default function Keep_26() {
  return (
    <KeepLightScreen>
      <View style={styles.container}>
        <Text style={styles.back}>&lt;</Text>
        <View style={styles.header}>
          <Text style={styles.label}>AI 医生·卡卡</Text>
          <Text style={styles.title}>每天运动多长时间?</Text>
        </View>
        <KeepOptionGrid options={['10 分钟左右', '20 分钟左右', '30 分钟左右', '40 分钟以上']} selectedIndex={2} />
        <KeepButton label="确定" style={styles.button} />
      </View>
    </KeepLightScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 12,
  },
  back: {
    color: keepTheme.colors.textDark,
    fontSize: 18,
  },
  header: {
    marginTop: 18,
    marginBottom: 12,
  },
  label: {
    color: '#6a42d6',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 6,
  },
  title: {
    color: keepTheme.colors.textDark,
    fontSize: 20,
    fontWeight: '700',
  },
  button: {
    marginTop: 'auto',
    marginBottom: 12,
  },
});
