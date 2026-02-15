import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import KeepButton from '../../components/keep/KeepButton';
import KeepLightScreen from '../../components/keep/KeepLightScreen';
import KeepListRow from '../../components/keep/KeepListRow';
import KeepTextarea from '../../components/keep/KeepTextarea';
import { keepTheme } from '../../theme/keep';

export default function Keep_29() {
  return (
    <KeepLightScreen>
      <View style={styles.container}>
        <Text style={styles.back}>&lt;</Text>
        <View style={styles.header}>
          <Text style={styles.title}>你是否存在伤病困扰?</Text>
        </View>
        <View style={styles.list}>
          <KeepListRow title="不存在伤病困扰" />
          <KeepListRow title="膝盖" subtitle="关节疼痛、卡顿或不适" />
          <KeepListRow title="腰部" subtitle="疼痛或下肢麻木" selected />
          <KeepListRow title="肩部" subtitle="关节疼痛、卡顿或不适" />
          <KeepListRow title="手腕" subtitle="关节疼痛、卡顿或不适" />
        </View>
        <Text style={styles.sectionTitle}>有其他伤病问题</Text>
        <KeepTextarea />
        <View style={styles.buttonRow}>
          <View style={styles.secondaryButton}>
            <Text style={styles.secondaryText}>补充更多信息</Text>
          </View>
          <KeepButton label="生成计划" style={styles.primaryButton} />
        </View>
      </View>
    </KeepLightScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 12,
  },
  back: {
    color: keepTheme.colors.textDark,
    fontSize: 18,
  },
  header: {
    marginTop: 18,
    marginBottom: 12,
  },
  title: {
    color: keepTheme.colors.textDark,
    fontSize: 20,
    fontWeight: '700',
  },
  list: {
    marginTop: 6,
  },
  sectionTitle: {
    color: '#9a96a5',
    fontSize: 12,
    marginTop: 8,
    marginBottom: 8,
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 12,
  },
  secondaryButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: keepTheme.colors.green,
    borderRadius: 24,
    alignItems: 'center',
    paddingVertical: 12,
    marginRight: 10,
  },
  secondaryText: {
    color: keepTheme.colors.greenDark,
    fontSize: 13,
    fontWeight: '600',
  },
  primaryButton: {
    flex: 1,
  },
});
