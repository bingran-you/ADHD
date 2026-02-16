import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import KeepLightScreen from '../../components/keep/KeepLightScreen';
import KeepTabBar from '../../components/keep/KeepTabBar';
import { keepTheme } from '../../theme/keep';

const PLANS = [
  { title: '胸背腹协同增肌特训', status: '第 0/24 天' },
  { title: '高质量睡眠计划', status: '为你推荐' },
  { title: '腹肌撕裂计划', status: '为你推荐' },
  { title: '瘦腹减围 · 型男打造计划', status: '为你推荐' },
];

export default function Keep_37() {
  return (
    <KeepLightScreen>
      <View style={styles.container}>
        <View style={styles.topRow}>
          <View style={styles.avatar} />
          <View style={styles.iconRow}>
            {['⚡', '⌛', '⏰', '≡'].map((item) => (
              <View key={item} style={styles.iconCircle}>
                <Text style={styles.iconText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.searchBar}>
          <Text style={styles.searchPlaceholder}>询问 AI 医生</Text>
          <View style={styles.plus}>
            <Text style={styles.plusText}>+</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardLabel}>我的计划</Text>
          {PLANS.map((item) => (
            <View key={item.title} style={styles.planRow}>
              <View style={styles.thumb} />
              <View style={styles.planContent}>
                <Text style={styles.planTitle}>{item.title}</Text>
                <Text style={styles.planStatus}>{item.status}</Text>
              </View>
              <Text style={styles.chevron}>&gt;</Text>
            </View>
          ))}
          <Text style={styles.more}>查看更多</Text>
        </View>

        <View style={styles.tabRow}>
          {['练过的计划', '创建的计划', '定制 AI 计划'].map((item, index) => (
            <View key={item} style={[styles.tab, index === 0 && styles.tabActive]}>
              <Text style={[styles.tabText, index === 0 && styles.tabTextActive]}>{item}</Text>
            </View>
          ))}
        </View>

        <View style={styles.searchBar}>
          <Text style={styles.searchPlaceholder}>询问 AI 医生</Text>
          <View style={styles.plus}>
            <Text style={styles.plusText}>+</Text>
          </View>
        </View>

        <View style={styles.chatFloat}>
          <Text style={styles.chatFloatText}>聊聊</Text>
        </View>
      </View>

      <KeepTabBar
        items={[
          { label: '首页' },
          { label: '今日', active: true },
          { label: '运动' },
          { label: '商城' },
          { label: '我的' },
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
  searchBar: {
    marginTop: 14,
    backgroundColor: '#ffffff',
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 16,
    marginTop: 16,
  },
  cardLabel: {
    color: keepTheme.colors.textDark,
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 8,
  },
  planRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  thumb: {
    width: 42,
    height: 42,
    borderRadius: 8,
    backgroundColor: '#e7e4f2',
    marginRight: 10,
  },
  planContent: {
    flex: 1,
  },
  planTitle: {
    color: keepTheme.colors.textDark,
    fontSize: 12,
    fontWeight: '600',
  },
  planStatus: {
    color: '#9a96a5',
    fontSize: 11,
    marginTop: 4,
  },
  chevron: {
    color: '#c1bdcc',
  },
  more: {
    color: '#9a96a5',
    fontSize: 11,
    textAlign: 'center',
    marginTop: 4,
  },
  tabRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  tab: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    paddingVertical: 8,
    alignItems: 'center',
    marginRight: 8,
  },
  tabActive: {
    backgroundColor: '#e9f8f1',
    borderWidth: 1,
    borderColor: keepTheme.colors.green,
  },
  tabText: {
    color: '#7a7487',
    fontSize: 12,
  },
  tabTextActive: {
    color: keepTheme.colors.greenDark,
    fontWeight: '600',
  },
  chatFloat: {
    alignSelf: 'flex-end',
    marginTop: 12,
    backgroundColor: '#f0eaff',
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  chatFloatText: {
    color: '#7c4dff',
    fontSize: 12,
  },
});
