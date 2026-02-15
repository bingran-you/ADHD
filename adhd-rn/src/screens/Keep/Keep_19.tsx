import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import KeepLightScreen from '../../components/keep/KeepLightScreen';
import { keepTheme } from '../../theme/keep';

const DAYS = [
  { label: '周日', date: '15', active: true },
  { label: '周一', date: '16' },
  { label: '周二', date: '17' },
  { label: '周三', date: '18' },
  { label: '周四', date: '19' },
  { label: '周五', date: '20' },
  { label: '周六', date: '21' },
  { label: '周日', date: '22' },
  { label: '周一', date: '23' },
  { label: '周二', date: '24' },
];

export default function Keep_19() {
  return (
    <KeepLightScreen style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.back}>&lt;</Text>
          <Text style={styles.title}>日程</Text>
          <Text style={styles.manage}>计划管理</Text>
        </View>

        <View style={styles.weekRow}>
          {['四', '五', '六', '今日', '一', '二', '三'].map((day) => (
            <Text key={day} style={[styles.weekText, day === '今日' && styles.weekActive]}>
              {day}
            </Text>
          ))}
        </View>

        <View style={styles.list}>
          {DAYS.map((item) => (
            <View key={item.date} style={styles.listRow}>
              <View style={styles.dateCol}>
                <Text style={[styles.dayLabel, item.active && styles.dayActive]}>{item.label}</Text>
                <Text style={[styles.dayDate, item.active && styles.dayActive]}>{item.date}</Text>
              </View>
              <View style={styles.actionCol}>
                <Text style={styles.actionText}>添加日程</Text>
              </View>
              <View style={styles.actionCol}>
                <Text style={styles.actionText}>请假</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </KeepLightScreen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  back: {
    fontSize: 18,
    color: keepTheme.colors.textDark,
  },
  title: {
    fontSize: 16,
    color: keepTheme.colors.textDark,
    fontWeight: '700',
  },
  manage: {
    fontSize: 12,
    color: '#9a96a5',
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  weekText: {
    color: '#9a96a5',
    fontSize: 11,
  },
  weekActive: {
    color: keepTheme.colors.textDark,
    fontWeight: '700',
  },
  list: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  listRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
  },
  dateCol: {
    width: 60,
  },
  dayLabel: {
    color: '#9a96a5',
    fontSize: 11,
  },
  dayDate: {
    color: keepTheme.colors.textDark,
    fontSize: 18,
    fontWeight: '700',
  },
  dayActive: {
    color: keepTheme.colors.green,
  },
  actionCol: {
    flex: 1,
    alignItems: 'center',
  },
  actionText: {
    color: '#9a96a5',
    fontSize: 12,
  },
});
