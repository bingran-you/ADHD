import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import KeepLightScreen from '../../components/keep/KeepLightScreen';
import { keepTheme } from '../../theme/keep';

const QUICK_ITEMS = ['课程推荐', '生成计划', '记饮食', '分析数据'];

export default function Keep_38() {
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

        <Text style={styles.sectionTitle}>以下是你进行中的日程</Text>
        <View style={styles.planCard}>
          <View style={styles.cardIcon}>
            <Text style={styles.cardIconText}>📅</Text>
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>2026.02.15 日程</Text>
            <Text style={styles.cardSubtitle}>查看我的所有日程</Text>
          </View>
          <Text style={styles.chevron}>&gt;</Text>
        </View>

        <View style={styles.actionRow}>
          {['⬆', '✉', '↻', '♡', '👎', '✎'].map((item) => (
            <View key={item} style={styles.actionIcon}>
              <Text style={styles.actionText}>{item}</Text>
            </View>
          ))}
        </View>

        <View style={styles.quickBar}>
          {QUICK_ITEMS.map((item) => (
            <View key={item} style={styles.quickItem}>
              <Text style={styles.quickText}>{item}</Text>
            </View>
          ))}
        </View>

        <View style={styles.searchBar}>
          <Text style={styles.searchPlaceholder}>询问 AI 教练</Text>
          <View style={styles.plus}>
            <Text style={styles.plusText}>+</Text>
          </View>
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
  sectionTitle: {
    color: keepTheme.colors.textDark,
    fontSize: 14,
    fontWeight: '600',
    marginTop: 18,
  },
  planCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 14,
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardIcon: {
    width: 36,
    height: 36,
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
    fontSize: 13,
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
  actionRow: {
    flexDirection: 'row',
    marginTop: 12,
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
  quickBar: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 'auto',
  },
  quickItem: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    marginBottom: 8,
  },
  quickText: {
    color: '#7a7487',
    fontSize: 11,
  },
  searchBar: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  searchPlaceholder: {
    color: '#b0acba',
    fontSize: 12,
  },
  plus: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#e9e7f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusText: {
    color: '#807a8f',
    fontSize: 14,
    fontWeight: '600',
  },
});
