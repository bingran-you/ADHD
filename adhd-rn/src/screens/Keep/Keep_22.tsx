import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import KeepButton from '../../components/keep/KeepButton';
import KeepLightScreen from '../../components/keep/KeepLightScreen';
import { keepTheme } from '../../theme/keep';

const OPTIONS = [
  '全身减脂减重',
  '局部变瘦, 更紧致',
  '增肌, 肌肉线条更明显',
  '体态体形改善',
  '保持身体健康',
  '跑步专项提升',
  '运动能力提升',
];

export default function Keep_22() {
  return (
    <KeepLightScreen>
      <View style={styles.container}>
        <Text style={styles.back}>&lt;</Text>
        <View style={styles.header}>
          <Text style={styles.label}>AI 医生·卡卡</Text>
          <Text style={styles.title}>你的运动目标是什么</Text>
        </View>
        <View style={styles.list}>
          {OPTIONS.map((item) => (
            <View key={item} style={styles.row}>
              <View style={styles.icon} />
              <Text style={styles.rowText}>{item}</Text>
            </View>
          ))}
        </View>
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
    marginBottom: 18,
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
  list: {
    marginTop: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f4f9',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom: 10,
  },
  icon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#dcdbe8',
    marginRight: 10,
  },
  rowText: {
    color: '#6b667b',
    fontSize: 13,
  },
  button: {
    marginTop: 'auto',
    marginBottom: 12,
  },
});
