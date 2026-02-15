import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import KeepButton from '../../components/keep/KeepButton';
import KeepScreen from '../../components/keep/KeepScreen';
import { keepTheme } from '../../theme/keep';

export default function Keep_15() {
  return (
    <KeepScreen>
      <View style={styles.container}>
        <View style={styles.topRow}>
          <View style={styles.spacer} />
          <View style={styles.close}>
            <Text style={styles.closeText}>×</Text>
          </View>
        </View>
        <Text style={styles.title}>Keep 为你准备了{'\n'}智能运动方案</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>每日目标</Text>
          <Text style={styles.cardSubtitle}>已为你更新每日目标，稍后可「我的运动」中查看</Text>
          <View style={styles.divider} />
          <Text style={styles.planTitle}>瘦子增肌·全身塑造计划</Text>
          <Text style={styles.planSubtitle}>根据你的信息调整强度，省时省心科学训练</Text>
          <View style={styles.milestones}>
            {['Day 1', 'Day 7', 'Day 20'].map((item) => (
              <View key={item} style={styles.milestone}>
                <View style={styles.milestoneIcon} />
                <Text style={styles.milestoneText}>{item}</Text>
              </View>
            ))}
          </View>
          <KeepButton label="参与计划" style={styles.joinButton} />
        </View>
      </View>
    </KeepScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 18,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spacer: {
    flex: 1,
  },
  close: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.45)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeText: {
    color: keepTheme.colors.textPrimary,
    fontSize: 18,
    lineHeight: 18,
  },
  title: {
    color: keepTheme.colors.textPrimary,
    fontSize: 22,
    fontWeight: '700',
    marginTop: 16,
    marginBottom: 16,
    lineHeight: 30,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.12,
    shadowRadius: 18,
    elevation: 6,
  },
  cardTitle: {
    color: '#2d2a34',
    fontSize: 16,
    fontWeight: '700',
  },
  cardSubtitle: {
    color: '#8b8796',
    fontSize: 12,
    marginTop: 6,
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 16,
  },
  planTitle: {
    color: '#2d2a34',
    fontSize: 15,
    fontWeight: '700',
  },
  planSubtitle: {
    color: '#8b8796',
    fontSize: 12,
    marginTop: 6,
    marginBottom: 16,
  },
  milestones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  milestone: {
    alignItems: 'center',
  },
  milestoneIcon: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#f6d7c8',
    marginBottom: 6,
  },
  milestoneText: {
    color: '#f09864',
    fontSize: 11,
    fontWeight: '600',
  },
  joinButton: {
    marginTop: 6,
  },
});
