import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import KeepBottomSheet from '../../components/keep/KeepBottomSheet';
import KeepButton from '../../components/keep/KeepButton';
import KeepChip from '../../components/keep/KeepChip';
import KeepProgress from '../../components/keep/KeepProgress';
import KeepScreen from '../../components/keep/KeepScreen';
import KeepWheel from '../../components/keep/KeepWheel';
import { keepTheme } from '../../theme/keep';

export default function Keep_09() {
  return (
    <KeepScreen>
      <View style={styles.wrapper}>
        <View style={styles.topArea}>
          <KeepProgress progress={0.45} />
          <View style={styles.chipRow}>
            <KeepChip label="性别: 男" style={styles.chip} />
            <KeepChip label="身高: 175cm" />
          </View>
        </View>
        <KeepBottomSheet>
          <View style={styles.sheetHeader}>
            <View style={styles.aiDot} />
            <Text style={styles.sheetLabel}>AI 教练·卡卡</Text>
          </View>
          <Text style={styles.sheetTitle}>选择体重, 获取更精确的热量消耗</Text>
          <Text style={styles.sheetSubtitle}>身高体重不同，热量消耗也有所不同，完善个人信息，运动后可获取更精确的运动消耗</Text>
          <KeepWheel
            columns={[
              {
                items: ['63 kg', '64 kg', '65 kg', '66 kg', '67 kg'],
                selectedIndex: 2,
                width: 120,
              },
            ]}
            style={styles.wheel}
          />
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
    marginTop: 14,
  },
  chip: {
    marginRight: 10,
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
  wheel: {
    marginTop: 18,
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
