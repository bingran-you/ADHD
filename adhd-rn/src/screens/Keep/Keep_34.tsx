import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import KeepButton from '../../components/keep/KeepButton';
import KeepLightScreen from '../../components/keep/KeepLightScreen';
import { keepTheme } from '../../theme/keep';

export default function Keep_34() {
  return (
    <KeepLightScreen>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.back}>&lt;</Text>
          <View style={styles.logo} />
        </View>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.title}>胸背腹协同增肌特训</Text>
          <Text style={styles.subtitle}>进阶 · 共 24 个训练日 · 48 节课</Text>
          <Text style={styles.caption}>本计划由 AI 生成，共 4 个阶段，每个阶段 6 个训练日</Text>

          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <View style={styles.statCircle} />
              <Text style={styles.statLabel}>有氧占比</Text>
              <Text style={styles.statValue}>0%</Text>
            </View>
            <View style={styles.statItem}>
              <View style={styles.statCircle} />
              <Text style={styles.statLabel}>无氧占比</Text>
              <Text style={styles.statValue}>100%</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>预计消耗</Text>
              <Text style={styles.statValue}>2306 千卡</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>阶段 1 男性增肌训练</Text>

          {['Day 1', 'Day 2', 'Day 3'].map((day) => (
            <View key={day} style={styles.dayBlock}>
              <Text style={styles.dayLabel}>{day}</Text>
              <Text style={styles.dayMeta}>训练日 · 共 35 分钟</Text>
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
            </View>
          ))}
        </ScrollView>
        <KeepButton label="选择训练日" style={styles.button} />
      </View>
    </KeepLightScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  back: {
    color: keepTheme.colors.textDark,
    fontSize: 18,
    marginRight: 12,
  },
  logo: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#8f84b5',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  title: {
    color: keepTheme.colors.textDark,
    fontSize: 20,
    fontWeight: '700',
    marginTop: 16,
  },
  subtitle: {
    color: '#9a96a5',
    fontSize: 12,
    marginTop: 6,
  },
  caption: {
    color: '#b0acba',
    fontSize: 11,
    marginTop: 8,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 14,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 4,
    borderColor: keepTheme.colors.green,
    marginBottom: 6,
  },
  statLabel: {
    color: '#9a96a5',
    fontSize: 11,
  },
  statValue: {
    color: keepTheme.colors.textDark,
    fontSize: 13,
    fontWeight: '700',
    marginTop: 2,
  },
  sectionTitle: {
    color: '#6b667b',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 18,
  },
  dayBlock: {
    marginTop: 12,
  },
  dayLabel: {
    color: '#9a96a5',
    fontSize: 11,
  },
  dayMeta: {
    color: '#9a96a5',
    fontSize: 11,
    marginTop: 2,
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
  button: {
    marginTop: 8,
    marginBottom: 12,
  },
});
