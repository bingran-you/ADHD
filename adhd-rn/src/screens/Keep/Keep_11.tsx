import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import KeepBottomSheet from '../../components/keep/KeepBottomSheet';
import KeepButton from '../../components/keep/KeepButton';
import KeepChip from '../../components/keep/KeepChip';
import KeepProgress from '../../components/keep/KeepProgress';
import KeepRadioRow from '../../components/keep/KeepRadioRow';
import KeepScreen from '../../components/keep/KeepScreen';
import { keepTheme } from '../../theme/keep';

export default function Keep_11() {
  return (
    <KeepScreen>
      <View style={styles.wrapper}>
        <View style={styles.topArea}>
          <KeepProgress progress={0.7} />
          <View style={styles.chipRow}>
            {['性别: 男', '身高: 175cm', '体重: 65kg', '年龄: 24岁'].map((label) => (
              <KeepChip key={label} label={label} style={styles.chip} />
            ))}
          </View>
        </View>
        <KeepBottomSheet>
          <View style={styles.sheetHeader}>
            <View style={styles.aiDot} />
            <Text style={styles.sheetLabel}>AI 教练·卡卡</Text>
          </View>
          <Text style={styles.sheetTitle}>你想要达成什么运动目标?</Text>
          <View style={styles.radioGroup}>
            <KeepRadioRow label="全身减脂减重" />
            <KeepRadioRow label="局部变瘦, 更紧致" />
            <KeepRadioRow label="增肌, 肌肉线条更明显" selected />
            <KeepRadioRow label="体态体形改善" />
            <KeepRadioRow label="保持身体健康" />
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
    paddingBottom: 16,
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 14,
  },
  chip: {
    marginRight: 10,
    marginBottom: 10,
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
  radioGroup: {
    marginTop: 6,
  },
  sheetButton: {
    marginTop: 16,
  },
  sheetFootnote: {
    color: keepTheme.colors.sheetMuted,
    fontSize: 11,
    textAlign: 'center',
    marginTop: 12,
  },
});
