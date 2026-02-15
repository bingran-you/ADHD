import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import KeepLightScreen from '../../components/keep/KeepLightScreen';
import KeepTabBar from '../../components/keep/KeepTabBar';
import { keepTheme } from '../../theme/keep';

const FEATURES = [
  { title: '生成计划', desc: '个性定制，打造最适合你的训练方案' },
  { title: '记饮食', desc: '拍照识卡，智能识别，轻松记录' },
  { title: '分析数据', desc: '运动记录，获取专业解读' },
  { title: '记体重', desc: '上秤输入即可，体重记录从未如此简单' },
  { title: '记运动', desc: '一键同步，上传运动数据照片' },
];

export default function Keep_18() {
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

        <Text style={styles.quote}>“</Text>
        <Text style={styles.title}>Hi, 我是 Keep AI 教练卡卡,{'\n'}请问有什么可以帮到你?</Text>
        <Text style={styles.quote}>”</Text>

        <View style={styles.grid}>
          {FEATURES.map((item, index) => (
            <View key={item.title} style={[styles.card, index % 2 === 0 ? styles.cardSpacer : null]}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDesc}>{item.desc}</Text>
            </View>
          ))}
        </View>

        <View style={styles.quickBar}>
          {['课程推荐', '生成计划', '记饮食', '分析数据', '记体重'].map((item) => (
            <View key={item} style={styles.quickItem}>
              <Text style={styles.quickText}>{item}</Text>
            </View>
          ))}
        </View>

        <View style={styles.searchBar}>
          <Text style={styles.searchPlaceholder}>询问 AI 教练...</Text>
          <View style={styles.plus}>
            <Text style={styles.plusText}>+</Text>
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
  quote: {
    color: '#c2bfe0',
    fontSize: 32,
    marginTop: 18,
  },
  title: {
    color: '#6c4bd4',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 26,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
  },
  card: {
    flexBasis: '48%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
  },
  cardSpacer: {
    marginRight: 8,
  },
  cardTitle: {
    color: keepTheme.colors.textDark,
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 6,
  },
  cardDesc: {
    color: '#8f8a9a',
    fontSize: 11,
    lineHeight: 16,
  },
  quickBar: {
    flexDirection: 'row',
    marginTop: 6,
    flexWrap: 'wrap',
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
    marginTop: 'auto',
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
