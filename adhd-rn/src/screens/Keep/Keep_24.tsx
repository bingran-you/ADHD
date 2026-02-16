import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import KeepButton from '../../components/keep/KeepButton';
import KeepLightScreen from '../../components/keep/KeepLightScreen';
import KeepOptionGrid from '../../components/keep/KeepOptionGrid';
import { keepTheme } from '../../theme/keep';

export default function Keep_24() {
  return (
    <KeepLightScreen>
      <View style={styles.container}>
        <Text style={styles.back}>&lt;</Text>
        <View style={styles.header}>
          <Text style={styles.label}>AI 医生·卡卡</Text>
          <Text style={styles.title}>你想通过什么运动方式增肌?</Text>
        </View>
        <KeepOptionGrid options={['室内徒手健身', '小器械健身', '健身房健身']} selectedIndex={1} />
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
