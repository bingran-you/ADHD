import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import KeepLightScreen from '../../components/keep/KeepLightScreen';
import KeepTabBar from '../../components/keep/KeepTabBar';
import { keepTheme } from '../../theme/keep';

const QUICK_ITEMS = ['课程推荐', '生成计划', '记饮食', '分析数据', '记体重'];

export default function Keep_31() {
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

        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.userBubble}>
            <Text style={styles.userText}>
              帮我定制一个增肌、肌肉线条更明显计划，涵盖室内徒手健身、健身房健身、器械健身等运动方式，训练部位为胸部、背部，每周运动 6 天，每天运动 30 分钟左右，难度是 K3-K4 中高强度，可以使用哑铃，伤病部位为腰部
            </Text>
          </View>

          <Text style={styles.status}>已完成，用时 38 秒</Text>
          <Text style={styles.longText}>
            本计划通过结合健身房健身、室内徒手健身与小器械健身三种方式，针对胸部、背部、腹部进行科学训练以达成增肌目标。从运动科学角度，增肌目标通常需要 8 周才能看到明显效果，考虑到你的训练需求，我们为你设计了精准浓缩计划。虽然时间短，但能有效激活目标肌群，建立科学训练模式。计划将重点围绕你关注的胸部、背部展开，通过哑铃等器械与徒手动作的组合训练，精准刺激肌肉生长；同时，针对腰部伤情情况，所有动作均已调整为低冲击模式，避免腰部过度承压。训练将遵循渐进性原则，从基础动作逐步提升训练强度与复杂度，帮助肌肉在安全范围内持续突破生长瓶颈，让你在高效训练中感受肌肉线条的变化与力量的提升。
          </Text>
          <Text style={styles.more}>∨</Text>
        </ScrollView>

        <View style={styles.quickBar}>
          {QUICK_ITEMS.map((item) => (
            <View key={item} style={[styles.quickItem, item === '生成计划' && styles.quickItemActive]}>
              <Text style={[styles.quickText, item === '生成计划' && styles.quickTextActive]}>{item}</Text>
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
  scrollContent: {
    paddingBottom: 16,
  },
  userBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#e8e4f8',
    borderRadius: 16,
    padding: 14,
    marginTop: 16,
  },
  userText: {
    color: '#4b4760',
    fontSize: 12,
    lineHeight: 18,
  },
  status: {
    color: '#b0acba',
    fontSize: 11,
    marginTop: 12,
  },
  longText: {
    color: '#4b4757',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 8,
  },
  more: {
    color: '#9a96a5',
    textAlign: 'center',
    marginTop: 10,
  },
  quickBar: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 6,
  },
  quickItem: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    marginBottom: 8,
  },
  quickItemActive: {
    borderWidth: 1,
    borderColor: keepTheme.colors.green,
    backgroundColor: '#e9f8f1',
  },
  quickText: {
    color: '#7a7487',
    fontSize: 11,
  },
  quickTextActive: {
    color: keepTheme.colors.greenDark,
  },
  searchBar: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
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
