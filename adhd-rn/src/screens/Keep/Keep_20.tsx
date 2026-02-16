import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import KeepLightScreen from '../../components/keep/KeepLightScreen';
import KeepTabBar from '../../components/keep/KeepTabBar';

export default function Keep_20() {
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
          <Text style={styles.aiTitle}>思考中</Text>
          <Text style={styles.aiText}>
            我需要先确认你的训练目标，并结合你的现有训练习惯。比如每周可训练的时间、器械
            条件等。
          </Text>
        </View>

        <View style={styles.quickBar}>
          {['课程推荐', '生成计划', '记饮食', '分析数据'].map((item) => (
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
    marginTop: 12,
    backgroundColor: '#ffffff',
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 16,
    maxWidth: '80%',
  },
  aiTitle: {
    color: '#9a96a5',
    fontSize: 11,
    marginBottom: 6,
  },
  aiText: {
    color: '#4b4757',
    fontSize: 12,
    lineHeight: 18,
  },
  quickBar: {
    flexDirection: 'row',
    marginTop: 'auto',
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
    marginTop: 4,
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
