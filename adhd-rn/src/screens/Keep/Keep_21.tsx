import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import KeepLightScreen from '../../components/keep/KeepLightScreen';
import KeepTabBar from '../../components/keep/KeepTabBar';
import { keepTheme } from '../../theme/keep';

export default function Keep_21() {
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

        <View style={styles.userBubble}>
          <Text style={styles.userText}>帮我生成计划</Text>
        </View>

        <View style={styles.aiBubble}>
          <Text style={styles.aiStatus}>已完成，用时 7 秒</Text>
          <Text style={styles.aiTitle}>好啦，请补充信息来生成计划哟!</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.cardIcon}>
              <Text style={styles.cardIconText}>📅</Text>
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>专属计划定制</Text>
              <Text style={styles.cardSubtitle}>进一步了解你的运动需求</Text>
            </View>
            <Text style={styles.chevron}>&gt;</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.detailButton}>
            <Text style={styles.detailButtonText}>查看详情</Text>
          </View>
        </View>
      </View>

      <KeepTabBar
        items={[
          { label: '首页' },
          { label: '今日' },
          { label: '运动' },
          { label: '商城' },
          { label: '我的', active: true },
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
  userBubble: {
    alignSelf: 'flex-end',
    marginTop: 20,
    backgroundColor: '#dfe7ff',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 16,
  },
  userText: {
    color: '#4a59c2',
    fontSize: 12,
  },
  aiBubble: {
    marginTop: 10,
    backgroundColor: '#ffffff',
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 16,
    maxWidth: '80%',
  },
  aiStatus: {
    color: '#9a96a5',
    fontSize: 10,
  },
  aiTitle: {
    color: keepTheme.colors.textDark,
    fontSize: 14,
    fontWeight: '600',
    marginTop: 6,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginTop: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#6b4cff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  cardIconText: {
    color: '#ffffff',
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    color: keepTheme.colors.textDark,
    fontSize: 14,
    fontWeight: '700',
  },
  cardSubtitle: {
    color: '#9a96a5',
    fontSize: 11,
    marginTop: 4,
  },
  chevron: {
    color: '#9a96a5',
    fontSize: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#f1f1f1',
    marginVertical: 12,
  },
  detailButton: {
    backgroundColor: keepTheme.colors.green,
    borderRadius: 24,
    alignItems: 'center',
    paddingVertical: 10,
  },
  detailButtonText: {
    color: '#1d2b25',
    fontSize: 13,
    fontWeight: '600',
  },
});
