import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TrainiButton from '../../components/traini/TrainiButton';
import TrainiField from '../../components/traini/TrainiField';
import TrainiLogo from '../../components/traini/TrainiLogo';
import TrainiProgress from '../../components/traini/TrainiProgress';
import TrainiScreen from '../../components/traini/TrainiScreen';
import TrainiTopBar from '../../components/traini/TrainiTopBar';
import { trainiTheme } from '../../theme/traini';

export default function Traini_01() {
  return (
    <TrainiScreen>
      <View style={styles.container}>
        <TrainiTopBar left={<Text style={styles.back}>{'<'}</Text>} center={<TrainiLogo />} />
        <View style={styles.content}>
          <View style={styles.section}>
            <Text style={styles.title}>What should we call you?</Text>
            <Text style={styles.subtitle}>
              This is how it&apos;ll appear on your profile. You can change this later.
            </Text>
            <TrainiField label="Your Username" value="Bingran" style={styles.field} />
          </View>
          <View style={styles.section}>
            <Text style={styles.title}>What is your dog&apos;s name?</Text>
            <TrainiField label="Your Dog&apos;s Name" value="br" style={styles.field} />
          </View>
        </View>
        <TrainiButton label="Next" style={styles.button} />
        <TrainiProgress progress={0.18} />
      </View>
    </TrainiScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 6,
  },
  back: {
    fontSize: 20,
    color: trainiTheme.colors.textSecondary,
  },
  content: {
    flex: 1,
    paddingTop: 20,
  },
  section: {
    marginBottom: 26,
  },
  title: {
    fontSize: 20,
    color: trainiTheme.colors.textPrimary,
    fontWeight: '700',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 12,
    color: trainiTheme.colors.textSecondary,
    marginBottom: 12,
    lineHeight: 16,
  },
  field: {
    marginTop: 6,
  },
  button: {
    marginBottom: 12,
  },
});
