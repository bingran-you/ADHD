import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import KeepBottomSheet from '../../components/keep/KeepBottomSheet';
import KeepButton from '../../components/keep/KeepButton';
import KeepProgress from '../../components/keep/KeepProgress';
import KeepRadioRow from '../../components/keep/KeepRadioRow';
import KeepScreen from '../../components/keep/KeepScreen';
import { keepTheme } from '../../theme/keep';

export default function Keep_07() {
  return (
    <KeepScreen>
      <View style={styles.wrapper}>
        <View style={styles.topArea}>
          <KeepProgress progress={0.18} />
        </View>
        <KeepBottomSheet>
          <View style={styles.sheetHeader}>
            <View style={styles.aiDot} />
            <Text style={styles.sheetLabel}>AI 医生·卡卡</Text>
          </View>
          <Text style={styles.sheetTitle}>选择性别,更进一步了解你的情况</Text>
          <Text style={styles.sheetSubtitle}>针对男/女不同年龄段的训练方法有所差异，完善个人信息，更科学地获取运动指导，每半年只能修改一次</Text>
          <View style={styles.radioGroup}>
            <KeepRadioRow label="男" />
            <KeepRadioRow label="女" />
          </View>
          <KeepButton label="确定" style={styles.sheetButton} />
          <Text style={styles.sheetFootnote}>我有非常丰富的运动经验，直接使用 &gt;&gt;&gt;</Text>
        </KeepBottomSheet>
      </View>
    </KeepScreen>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  topArea: {
    paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: 20,
  },
  sheetHeader: {
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
  sheetTitle: {
    color: keepTheme.colors.sheetText,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  sheetSubtitle: {
    color: keepTheme.colors.sheetMuted,
    fontSize: 12,
    lineHeight: 18,
  },
  radioGroup: {
    marginTop: 10,
  },
  sheetButton: {
    marginTop: 18,
  },
  sheetFootnote: {
    color: keepTheme.colors.sheetMuted,
    fontSize: 11,
    textAlign: 'center',
    marginTop: 12,
  },
});
