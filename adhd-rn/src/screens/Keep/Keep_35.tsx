import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import KeepButton from '../../components/keep/KeepButton';
import KeepLightScreen from '../../components/keep/KeepLightScreen';
import KeepOptionGrid from '../../components/keep/KeepOptionGrid';
import { keepTheme } from '../../theme/keep';

export default function Keep_35() {
  return (
    <KeepLightScreen>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.back}>&lt;</Text>
          <View style={styles.logo} />
        </View>
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
      </View>

      <View style={styles.overlay}>
        <View style={styles.sheet}>
          <View style={styles.sheetHeader}>
            <Text style={styles.sheetTitle}>每周训练日</Text>
            <Text style={styles.sheetClose}>×</Text>
          </View>
          <Text style={styles.sheetSubtitle}>请至少选择 3 ~ 4 天</Text>
          <KeepOptionGrid
            options={['一', '二', '三', '四', '五', '六', '日']}
            selectedIndex={2}
          />
          <KeepButton label="确认并使用计划" style={styles.sheetButton} />
        </View>
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
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.35)',
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 24,
  },
  sheetHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sheetTitle: {
    color: keepTheme.colors.textDark,
    fontSize: 16,
    fontWeight: '700',
  },
  sheetClose: {
    color: '#9a96a5',
    fontSize: 18,
  },
  sheetSubtitle: {
    color: '#9a96a5',
    fontSize: 12,
    marginTop: 8,
  },
  sheetButton: {
    marginTop: 12,
  },
});
