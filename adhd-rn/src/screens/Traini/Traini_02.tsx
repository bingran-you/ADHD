import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TrainiButton from '../../components/traini/TrainiButton';
import TrainiLogo from '../../components/traini/TrainiLogo';
import TrainiProgress from '../../components/traini/TrainiProgress';
import TrainiScreen from '../../components/traini/TrainiScreen';
import TrainiTopBar from '../../components/traini/TrainiTopBar';
import { trainiTheme } from '../../theme/traini';

type OptionCardProps = {
  label: string;
};

function OptionCard({ label }: OptionCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.dogIllustration}>
        <View style={styles.dogFace} />
        <View style={styles.dogBow} />
      </View>
      <View style={styles.choicePill}>
        <Text style={styles.choiceText}>{label}</Text>
      </View>
    </View>
  );
}

export default function Traini_02() {
  return (
    <TrainiScreen>
      <View style={styles.container}>
        <TrainiTopBar
          left={<View style={styles.backCircle}><Text style={styles.back}>{'<'}</Text></View>}
          center={<TrainiLogo />}
        />
        <Text style={styles.title}>Br is a:</Text>
        <View style={styles.row}>
          <OptionCard label="Boy" />
          <OptionCard label="Girl" />
        </View>
        <TrainiButton label="Next" disabled style={styles.button} />
        <TrainiProgress progress={0.3} />
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
  backCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: trainiTheme.colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: trainiTheme.colors.border,
  },
  back: {
    fontSize: 18,
    color: trainiTheme.colors.textSecondary,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    color: trainiTheme.colors.textPrimary,
    marginTop: 28,
    marginBottom: 18,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: trainiTheme.colors.surface,
    borderRadius: trainiTheme.radius.lg,
    alignItems: 'center',
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: trainiTheme.colors.border,
  },
  dogIllustration: {
    width: 90,
    height: 80,
    borderRadius: 24,
    backgroundColor: trainiTheme.colors.surfaceMuted,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  dogFace: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: trainiTheme.colors.accentSoft,
  },
  dogBow: {
    width: 18,
    height: 6,
    borderRadius: 3,
    backgroundColor: trainiTheme.colors.accent,
    marginTop: 6,
  },
  choicePill: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: trainiTheme.radius.pill,
    backgroundColor: trainiTheme.colors.surface,
    borderWidth: 1,
    borderColor: trainiTheme.colors.border,
  },
  choiceText: {
    color: trainiTheme.colors.textSecondary,
    fontWeight: '600',
  },
  button: {
    marginTop: 'auto',
    marginBottom: 12,
  },
});
