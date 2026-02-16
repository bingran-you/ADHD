import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import KeepBottomSheet from '../../components/keep/KeepBottomSheet';
import KeepButton from '../../components/keep/KeepButton';
import KeepChip from '../../components/keep/KeepChip';
import KeepProgress from '../../components/keep/KeepProgress';
import KeepScreen from '../../components/keep/KeepScreen';
import KeepTag from '../../components/keep/KeepTag';
import { keepTheme } from '../../theme/keep';

const TAGS = ['瑜伽', '哑铃/壶铃/弹力带等', '跳绳', '普拉提', 'HIIT 燃脂', '跑步', '跳舞', '热身/拉伸/放松', '健身房'];

export default function Keep_13() {
  return (
    <KeepScreen>
      <View style={styles.wrapper}>
        <View style={styles.topArea}>
          <KeepProgress progress={0.86} />
          <View style={styles.chipRow}>
            {['性别: 男', '身高: 175cm', '体重: 65kg', '年龄: 24岁', '目标: 增肌, 肌肉...', '改善部位: 全身'].map(
              (label) => (
                <KeepChip key={label} label={label} style={styles.chip} />
              )
            )}
          </View>
        </View>
        <KeepBottomSheet>
          <View style={styles.sheetHeader}>
            <View style={styles.aiDot} />
            <Text style={styles.sheetLabel}>AI 教练·卡卡</Text>
          </View>
          <Text style={styles.sheetTitle}>你更喜欢哪些类型的运动?</Text>
          <View style={styles.tagWrap}>
            {TAGS.map((tag) => (
              <KeepTag key={tag} label={tag} selected={tag === '跑步'} />
            ))}
          </View>
          <KeepButton label="准备开始运动啦" style={styles.sheetButton} />
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
    marginBottom: 12,
  },
  tagWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  sheetButton: {
    marginTop: 12,
  },
});
