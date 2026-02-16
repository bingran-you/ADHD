import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TrainiButton from '../../components/traini/TrainiButton';
import TrainiLogo from '../../components/traini/TrainiLogo';
import TrainiProgress from '../../components/traini/TrainiProgress';
import TrainiScreen from '../../components/traini/TrainiScreen';
import TrainiTopBar from '../../components/traini/TrainiTopBar';
import { trainiTheme } from '../../theme/traini';

function PhotoSlot() {
  return (
    <View style={styles.slot}>
      <View style={styles.plusBubble}>
        <Text style={styles.plusText}>+</Text>
      </View>
    </View>
  );
}

export default function Traini_06() {
  return (
    <TrainiScreen>
      <View style={styles.container}>
        <TrainiTopBar
          left={<View style={styles.backCircle}><Text style={styles.back}>{'<'}</Text></View>}
          center={<TrainiLogo />}
        />
        <Text style={styles.title}>Pick br&apos;s best{"\n"}photos for his profile!</Text>
        <Text style={styles.subtitle}>
          Start with one photo to continue. You can add more anytime.
        </Text>
        <View style={styles.grid}>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <PhotoSlot key={item} />
          ))}
        </View>
        <TrainiButton label="Next" disabled style={styles.button} />
        <TrainiProgress progress={0.72} />
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
    marginTop: 24,
    marginBottom: 8,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 12,
    color: trainiTheme.colors.textSecondary,
    marginBottom: 18,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  slot: {
    width: '30%',
    aspectRatio: 1,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: trainiTheme.colors.borderStrong,
    borderStyle: 'dashed',
    borderRadius: trainiTheme.radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: trainiTheme.colors.surface,
  },
  plusBubble: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: trainiTheme.colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  plusText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
  button: {
    marginTop: 'auto',
    marginBottom: 12,
  },
});
