import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import KeepButton from '../../components/keep/KeepButton';
import KeepLightScreen from '../../components/keep/KeepLightScreen';
import KeepTabBar from '../../components/keep/KeepTabBar';
import { keepTheme } from '../../theme/keep';

export default function Keep_33() {
  return (
    <KeepLightScreen>
      <View style={styles.container}>
        <View style={styles.topRow}>
          <View style={styles.avatar} />
          <View style={styles.iconRow}>
            {['⌂', '≡', '⌄'].map((item) => (
              <View key={item} style={styles.iconCircle}>
                <Text style={styles.iconText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>生成计划</Text>
          <Text style={styles.cardSubtitle}>胸背腹协同增肌特训</Text>
          <Text style={styles.cardMeta}>进阶 · 共 24 个训练日 · 48 节课</Text>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>阶段 1 男性增肌训练</Text>
          </View>
          <View style={styles.courseRow}>
            <View style={styles.thumb} />
            <View style={styles.courseContent}>
              <Text style={styles.courseTitle}>健身房训练 · 胸部 · 高效塑造 · 初级</Text>
              <Text style={styles.courseMeta}>K2 初级 · 20 分钟 · 39 千卡</Text>
            </View>
          </View>
          <View style={styles.courseRow}>
            <View style={styles.thumb} />
            <View style={styles.courseContent}>
              <Text style={styles.courseTitle}>腹部塑形 · 全面塑造 · 中等 · 活力</Text>
              <Text style={styles.courseMeta}>K3 进阶 · 15 分钟 · 53 千卡</Text>
            </View>
          </View>
          <View style={styles.buttonRow}>
            <KeepButton label="查看详情" style={styles.primaryButton} />
            <View style={styles.secondaryButton}>
              <Text style={styles.secondaryText}>重新定制</Text>
            </View>
          </View>
        </View>

        <View style={styles.actionRow}>
          {['⬆', '✉', '↻', '♡', '👎', '✎'].map((item) => (
            <View key={item} style={styles.actionIcon}>
              <Text style={styles.actionText}>{item}</Text>
            </View>
          ))}
        </View>
      </View>

      <KeepTabBar
        items={[
          { label: '首页' },
          { label: '课程推荐' },
          { label: '生成计划', active: true },
          { label: '记饮食' },
          { label: '分析数据' },
        ]}
      />
    </KeepLightScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#a78bfa',
  },
  iconRow: {
    flexDirection: 'row',
  },
  iconCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  iconText: {
    fontSize: 12,
    color: '#8b8796',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    padding: 16,
    marginTop: 16,
  },
  cardTitle: {
    color: keepTheme.colors.textDark,
    fontSize: 14,
    fontWeight: '700',
  },
  cardSubtitle: {
    color: keepTheme.colors.textDark,
    fontSize: 16,
    fontWeight: '700',
    marginTop: 6,
  },
  cardMeta: {
    color: '#9a96a5',
    fontSize: 11,
    marginTop: 4,
  },
  sectionHeader: {
    marginTop: 14,
  },
  sectionTitle: {
    color: '#6b667b',
    fontSize: 12,
    fontWeight: '600',
  },
  courseRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  thumb: {
    width: 48,
    height: 36,
    borderRadius: 8,
    backgroundColor: '#e7e4f2',
    marginRight: 10,
  },
  courseContent: {
    flex: 1,
  },
  courseTitle: {
    color: keepTheme.colors.textDark,
    fontSize: 12,
    fontWeight: '600',
  },
  courseMeta: {
    color: '#9a96a5',
    fontSize: 10,
    marginTop: 4,
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 14,
  },
  primaryButton: {
    flex: 1,
    marginRight: 10,
  },
  secondaryButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: keepTheme.colors.green,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryText: {
    color: keepTheme.colors.greenDark,
    fontSize: 13,
    fontWeight: '600',
  },
  actionRow: {
    flexDirection: 'row',
    marginTop: 10,
  },
  actionIcon: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  actionText: {
    fontSize: 11,
    color: '#8b8796',
  },
});
