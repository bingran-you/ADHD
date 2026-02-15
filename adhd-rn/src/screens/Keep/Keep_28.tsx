import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import KeepButton from '../../components/keep/KeepButton';
import KeepLightScreen from '../../components/keep/KeepLightScreen';
import KeepListRow from '../../components/keep/KeepListRow';
import KeepTextarea from '../../components/keep/KeepTextarea';
import { keepTheme } from '../../theme/keep';

export default function Keep_28() {
  return (
    <KeepLightScreen>
      <View style={styles.container}>
        <Text style={styles.back}>&lt;</Text>
        <View style={styles.header}>
          <Text style={styles.title}>是否允许使用下述器械</Text>
        </View>
        <View style={styles.list}>
          <KeepListRow title="哑铃" selected />
          <KeepListRow title="弹力绳" />
          <KeepListRow title="壶铃" />
        </View>
        <Text style={styles.sectionTitle}>有其他允许使用器械</Text>
        <KeepTextarea />
        <KeepButton label="确定" style={styles.button} />
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
  button: {
    marginTop: 'auto',
    marginBottom: 12,
  },
});
