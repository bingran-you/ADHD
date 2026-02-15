import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import KeepLightScreen from '../../components/keep/KeepLightScreen';
import KeepTabBar from '../../components/keep/KeepTabBar';

export default function Keep_30() {
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

        <View style={styles.actionRow}>
          {['⬆', '✉', '↻', '♡', '👎', '✎'].map((item) => (
            <View key={item} style={styles.actionIcon}>
              <Text style={styles.actionText}>{item}</Text>
            </View>
          ))}
        </View>

        <View style={styles.aiCard}>
          <Text style={styles.aiText}>
            帮我定制一个增肌、肌肉线条更明显计划，涵盖室内徒手健身、健身房健身、器械健身等
            运动方式。训练部位为胸部、背部，每周运动 6 天，每天运动 30 分钟左右，难度是
            K3-K4 中高强度，可以使用哑铃，伤病部位为腰部
          </Text>
        </View>

        <View style={styles.ideaCard}>
          <Text style={styles.ideaTitle}>思考中</Text>
          <View style={styles.ideaBlock} />
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
  actionRow: {
    flexDirection: 'row',
    marginTop: 12,
  },
  actionIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  actionText: {
    fontSize: 12,
  },
  aiCard: {
    backgroundColor: '#e8e4f8',
    borderRadius: 16,
    padding: 16,
    marginTop: 12,
  },
  aiText: {
    color: '#4b4760',
    fontSize: 12,
    lineHeight: 18,
  },
  ideaCard: {
    marginTop: 12,
  },
  ideaTitle: {
    color: '#7b6bb6',
    fontSize: 12,
    marginBottom: 8,
  },
  ideaBlock: {
    height: 160,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#d9d4f2',
    backgroundColor: '#f8f6ff',
  },
});
