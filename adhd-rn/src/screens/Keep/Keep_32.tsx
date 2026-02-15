import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import KeepLightScreen from '../../components/keep/KeepLightScreen';
import { keepTheme } from '../../theme/keep';

export default function Keep_32() {
  return (
    <KeepLightScreen>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.label}>AI 教练·卡卡</Text>
          <View style={styles.gear} />
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.userBubble}>
            <Text style={styles.userText}>
              帮我定制一个增肌、肌肉线条更明显计划，涵盖室内徒手健身、健身房健身、器械健身等运动方式，训练部位为胸部、背部、腹部，每周运动 6 天，每天运动 30 分钟左右，难度是 K3-K4 中高强度，可以使用哑铃，伤病部位为腰部
            </Text>
          </View>
          <Text style={styles.status}>已完成，用时 38 秒</Text>
          <Text style={styles.longText}>
            本计划通过结合健身房健身、室内徒手健身与小器械健身三种方式，针对胸部、背部、腹部进行科学训练以达成增肌目标。从运动科学角度，增肌目标通常需要 8 周才能看到明显效果，考虑到你的训练需求，我们为你设计了精准浓缩计划。虽然时间短，但能有效激活目标肌群，建立科学训练模式。
          </Text>
          <Text style={styles.longText}>
            计划将重点围绕你关注的胸部、背部展开，通过哑铃等器械与徒手动作的组合训练，精准刺激肌肉生长；同时，针对腰部伤情情况，所有动作均已调整为低冲击模式，避免腰部过度承压。训练将遵循渐进性原则，从基础动作逐步提升训练强度与复杂度，帮助肌肉在安全范围内持续突破生长瓶颈，让你在高效训练中感受肌肉线条的变化与力量的提升。
          </Text>
          <Text style={styles.longText}>
            本计划由 AI 生成，共 4 个阶段，每个阶段 6 个训练日，可以根据自己的时间安排每周训练日，建议每个阶段训练周期为 1 周，最多不超过 2 周，否则训练效果可能会有影响。
          </Text>
          <Text style={styles.notice}>- 内含 AI 生成，可能存在错误，仅供参考 -</Text>
          <View style={styles.footerCard}>
            <View style={styles.footerContent}>
              <Text style={styles.footerTitle}>AI 教练 专业指导随时陪伴</Text>
              <Text style={styles.footerSubtitle}>帮你科学训练 · 科学健身计划</Text>
            </View>
            <View style={styles.footerButton}>
              <Text style={styles.footerButtonText}>快来识别</Text>
            </View>
          </View>
          <Text style={styles.qrNote}>@ 天真无邪 @ Keepert83q</Text>
        </ScrollView>
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
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    color: keepTheme.colors.textDark,
    fontSize: 14,
    fontWeight: '700',
  },
  gear: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#e7e4f2',
  },
  scrollContent: {
    paddingBottom: 30,
  },
  userBubble: {
    backgroundColor: '#e8e4f8',
    borderRadius: 16,
    padding: 14,
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
    marginTop: 10,
  },
  notice: {
    color: '#b9b5c4',
    fontSize: 11,
    textAlign: 'center',
    marginTop: 16,
  },
  footerCard: {
    marginTop: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#e7e4f2',
    padding: 14,
  },
  footerContent: {
    marginBottom: 10,
  },
  footerTitle: {
    color: keepTheme.colors.textDark,
    fontSize: 13,
    fontWeight: '700',
  },
  footerSubtitle: {
    color: '#9a96a5',
    fontSize: 11,
    marginTop: 4,
  },
  footerButton: {
    alignSelf: 'flex-end',
    backgroundColor: keepTheme.colors.green,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  footerButtonText: {
    color: '#1d2b25',
    fontSize: 12,
    fontWeight: '600',
  },
  qrNote: {
    color: '#b9b5c4',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 12,
  },
});
