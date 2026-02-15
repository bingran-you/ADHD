import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TrainiButton from '../../components/traini/TrainiButton';
import TrainiLogo from '../../components/traini/TrainiLogo';
import TrainiProgress from '../../components/traini/TrainiProgress';
import TrainiScreen from '../../components/traini/TrainiScreen';
import TrainiTopBar from '../../components/traini/TrainiTopBar';
import { trainiTheme } from '../../theme/traini';

function SegmentedInput() {
  return (
    <View style={styles.segmented}>
      <View style={styles.segment}>
        <Text style={styles.segmentText}>years</Text>
      </View>
      <View style={styles.segmentDivider} />
      <View style={styles.segment}>
        <Text style={styles.segmentText}>months</Text>
      </View>
    </View>
  );
}

export default function Traini_04() {
  return (
    <TrainiScreen>
      <View style={styles.container}>
        <TrainiTopBar
          left={<View style={styles.backCircle}><Text style={styles.back}>{'<'}</Text></View>}
          center={<TrainiLogo />}
        />
        <View style={styles.hero}>
          <View style={styles.dog} />
          <View style={styles.gift} />
        </View>
        <Text style={styles.title}>How old is Br?</Text>
        <SegmentedInput />
        <View style={styles.sheet}>
          <Text style={styles.sheetTitle}>Select years</Text>
          {['0', '1', '2', '3'].map((item) => (
            <Text key={item} style={styles.sheetItem}>
              {item}
            </Text>
          ))}
        </View>
        <TrainiButton label="Next" disabled style={styles.button} />
        <TrainiProgress progress={0.42} />
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
  hero: {
    alignItems: 'center',
    marginTop: 18,
    marginBottom: 24,
  },
  dog: {
    width: 110,
    height: 80,
    borderRadius: 28,
    backgroundColor: trainiTheme.colors.surfaceMuted,
    marginBottom: 10,
  },
  gift: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: trainiTheme.colors.accentSoft,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    color: trainiTheme.colors.textPrimary,
    marginBottom: 14,
  },
  segmented: {
    flexDirection: 'row',
    backgroundColor: trainiTheme.colors.surface,
    borderRadius: trainiTheme.radius.pill,
    borderWidth: 1,
    borderColor: trainiTheme.colors.border,
    overflow: 'hidden',
  },
  segment: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  segmentText: {
    color: trainiTheme.colors.textSecondary,
    fontWeight: '600',
  },
  segmentDivider: {
    width: 1,
    backgroundColor: trainiTheme.colors.border,
  },
  sheet: {
    marginTop: 18,
    backgroundColor: trainiTheme.colors.surface,
    borderRadius: trainiTheme.radius.lg,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: trainiTheme.colors.border,
  },
  sheetTitle: {
    color: trainiTheme.colors.textSecondary,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 8,
  },
  sheetItem: {
    textAlign: 'center',
    paddingVertical: 8,
    color: trainiTheme.colors.textPrimary,
    fontWeight: '600',
  },
  button: {
    marginTop: 'auto',
    marginBottom: 12,
  },
});
