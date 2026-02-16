import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import KeepButton from '../../components/keep/KeepButton';
import KeepLightScreen from '../../components/keep/KeepLightScreen';
import KeepTabBar from '../../components/keep/KeepTabBar';
import { keepTheme } from '../../theme/keep';

export default function Keep_17() {
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

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>每日运动时长</Text>
            <Text style={styles.statValue}>0/20 分钟</Text>
            <Text style={styles.statLink}>设置目标</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>里程</Text>
            <Text style={styles.statValue}>-.-/-- km</Text>
            <Text style={styles.statLink}>设置目标</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>热量</Text>
            <Text style={styles.statValue}>-/-</Text>
            <Text style={styles.statLink}>设置目标</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>我的课程</Text>
          <View style={styles.cardBody}>
            <View style={styles.illustration} />
            <Text style={styles.cardTip}>也许灵感就在下一个课程里</Text>
            <KeepButton label="查看推荐课程" style={styles.cardButton} />
          </View>
        </View>

        <View style={styles.pillRow}>
          {['我练过的课', '我创建的课', '创建课程'].map((item) => (
            <View key={item} style={styles.pill}>
              <Text style={styles.pillText}>{item}</Text>
            </View>
          ))}
        </View>

        <View style={styles.searchBar}>
          <Text style={styles.searchPlaceholder}>询问 AI 教练</Text>
          <View style={styles.plus}>
            <Text style={styles.plusText}>+</Text>
          </View>
        </View>

        <View style={styles.miniTabs}>
          {['定计划', '记饮食', '读数据'].map((item) => (
            <View key={item} style={styles.miniTab}>
              <Text style={styles.miniTabText}>{item}</Text>
            </View>
          ))}
        </View>
      </View>

      <KeepTabBar
        items={[
          { label: '首页' },
          { label: '今日' },
          { label: '运动', active: true },
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
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 14,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 10,
    marginRight: 8,
  },
  statLabel: {
    color: '#9b96a8',
    fontSize: 10,
  },
  statValue: {
    color: keepTheme.colors.textDark,
    fontSize: 13,
    fontWeight: '700',
    marginTop: 6,
  },
  statLink: {
    color: keepTheme.colors.green,
    fontSize: 10,
    marginTop: 6,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 16,
    marginTop: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.08,
    shadowRadius: 14,
    elevation: 4,
  },
  cardTitle: {
    color: keepTheme.colors.textDark,
    fontSize: 14,
    fontWeight: '700',
  },
  cardBody: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  illustration: {
    width: 110,
    height: 70,
    backgroundColor: '#eef0f6',
    borderRadius: 12,
    marginBottom: 12,
  },
  cardTip: {
    color: '#8f8a9a',
    fontSize: 12,
    marginBottom: 12,
  },
  cardButton: {
    alignSelf: 'center',
    paddingHorizontal: 30,
  },
  pillRow: {
    flexDirection: 'row',
    marginTop: 12,
  },
  pill: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginRight: 10,
  },
  pillText: {
    color: '#5d5968',
    fontSize: 12,
  },
  searchBar: {
    marginTop: 12,
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
  miniTabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  miniTab: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingVertical: 6,
    marginHorizontal: 4,
  },
  miniTabText: {
    color: '#7a7487',
    fontSize: 11,
  },
});
