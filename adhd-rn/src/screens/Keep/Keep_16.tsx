import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import KeepButton from '../../components/keep/KeepButton';
import KeepLightScreen from '../../components/keep/KeepLightScreen';
import KeepTabBar from '../../components/keep/KeepTabBar';
import { keepTheme } from '../../theme/keep';

export default function Keep_16() {
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
          <View style={styles.cardHeader}>
            <Text style={styles.cardLabel}>我的目标</Text>
            <View style={styles.dateRow}>
              {['9', '10', '11', '12', '13', '14', '15'].map((day) => (
                <Text key={day} style={[styles.dateText, day === '15' && styles.dateActive]}>
                  {day}
                </Text>
              ))}
            </View>
          </View>
          <View style={styles.cardBody}>
            <View style={styles.illustration} />
            <Text style={styles.cardTip}>合理的计划有益于建立运动习惯</Text>
            <KeepButton label="定制计划" style={styles.cardButton} />
          </View>
        </View>

        <View style={styles.pillRow}>
          {['管理日程', '请假', '管理计划'].map((item) => (
            <View key={item} style={styles.pill}>
              <Text style={styles.pillText}>{item}</Text>
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.08,
    shadowRadius: 14,
    elevation: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardLabel: {
    color: keepTheme.colors.textDark,
    fontSize: 14,
    fontWeight: '700',
  },
  dateRow: {
    flexDirection: 'row',
  },
  dateText: {
    color: '#a09cad',
    fontSize: 11,
    marginLeft: 8,
  },
  dateActive: {
    color: keepTheme.colors.textDark,
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
