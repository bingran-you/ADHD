import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import KeepButton from '../../components/keep/KeepButton';
import KeepLightScreen from '../../components/keep/KeepLightScreen';
import { keepTheme } from '../../theme/keep';

export default function Keep_23() {
  return (
    <KeepLightScreen>
      <View style={styles.container}>
        <Text style={styles.back}>&lt;</Text>
        <View style={styles.header}>
          <Text style={styles.label}>AI 医生·卡卡</Text>
          <Text style={styles.title}>你想提升的部位是?</Text>
          <Text style={styles.subtitle}>可多选, 最多可选 3 项</Text>
        </View>
        <View style={styles.bodyWrap}>
          <View style={styles.bodyShape}>
            <View style={styles.bodyCore} />
          </View>
          <View style={styles.tagRow}>
            {['胸部', '背部', '腹部', '肩膀', '臀腿', '全身'].map((tag, index) => (
              <View key={tag} style={[styles.bodyTag, index < 2 && styles.bodyTagLeft]}>
                <Text style={styles.bodyTagText}>{tag}</Text>
              </View>
            ))}
          </View>
        </View>
        <KeepButton label="下一步" style={styles.button} />
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
  label: {
    color: '#6a42d6',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 6,
  },
  title: {
    color: keepTheme.colors.textDark,
    fontSize: 20,
    fontWeight: '700',
  },
  subtitle: {
    color: '#9a96a5',
    fontSize: 12,
    marginTop: 6,
  },
  bodyWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyShape: {
    width: 140,
    height: 200,
    borderRadius: 80,
    backgroundColor: '#f7e6df',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyCore: {
    width: 80,
    height: 140,
    borderRadius: 50,
    backgroundColor: '#f3d7c9',
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  },
  bodyTag: {
    backgroundColor: '#e9f8f1',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: 10,
  },
  bodyTagLeft: {
    marginRight: 12,
  },
  bodyTagText: {
    color: keepTheme.colors.greenDark,
    fontSize: 12,
    fontWeight: '600',
  },
  button: {
    marginTop: 'auto',
    marginBottom: 12,
  },
});
