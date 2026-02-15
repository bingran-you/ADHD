import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import KeepBottomSheet from '../../components/keep/KeepBottomSheet';
import KeepButton from '../../components/keep/KeepButton';
import KeepCheckboxRow from '../../components/keep/KeepCheckboxRow';
import KeepScreen from '../../components/keep/KeepScreen';
import { keepTheme } from '../../theme/keep';

const DAYS = ['每周一', '每周二', '每周三', '每周四', '每周五', '每周六', '每周日'];

export default function Keep_14() {
  return (
    <KeepScreen>
      <KeepBottomSheet style={styles.sheet}>
        <View style={styles.header}>
          <View style={styles.aiDot} />
          <Text style={styles.sheetLabel}>AI 教练·卡卡</Text>
        </View>
        <Text style={styles.title}>提醒自己定时运动吧!</Text>
        <View style={styles.list}>
          {DAYS.map((day) => (
            <KeepCheckboxRow key={day} label={day} checked />
          ))}
        </View>
        <KeepButton label="提醒我" style={styles.button} />
        <Text style={styles.skip}>下次再说</Text>
      </KeepBottomSheet>
    </KeepScreen>
  );
}

const styles = StyleSheet.create({
  sheet: {
    flex: 1,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    paddingTop: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  aiDot: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#7b5df0',
    marginRight: 8,
  },
  sheetLabel: {
    color: '#6a42d6',
    fontSize: 12,
    fontWeight: '600',
  },
  title: {
    color: keepTheme.colors.sheetText,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },
  list: {
    marginTop: 4,
  },
  button: {
    marginTop: 18,
  },
  skip: {
    color: keepTheme.colors.sheetMuted,
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
  },
});
