import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { trainiTheme } from '../../theme/traini';

type TrainiProgressProps = {
  progress: number;
};

export default function TrainiProgress({ progress }: TrainiProgressProps) {
  const clamped = Math.max(0, Math.min(1, progress));
  return (
    <View style={styles.container}>
      <View style={styles.dogWrap}>
        <View style={styles.bubble}>
          <Text style={styles.bubbleText}>HELLO!</Text>
        </View>
        <View style={styles.dogHead}>
          <View style={styles.dogEar} />
          <View style={[styles.dogEar, styles.dogEarRight]} />
        </View>
      </View>
      <View style={styles.track}>
        <View style={[styles.fill, { width: `${clamped * 100}%` }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingBottom: 12,
    paddingTop: 6,
  },
  dogWrap: {
    alignItems: 'center',
    marginBottom: 8,
  },
  bubble: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    backgroundColor: trainiTheme.colors.surface,
    borderWidth: 1,
    borderColor: trainiTheme.colors.border,
    marginBottom: 4,
  },
  bubbleText: {
    fontSize: 9,
    color: trainiTheme.colors.textSecondary,
    fontWeight: '700',
    letterSpacing: 0.6,
  },
  dogHead: {
    width: 20,
    height: 16,
    borderRadius: 8,
    backgroundColor: trainiTheme.colors.accentSoft,
    position: 'relative',
  },
  dogEar: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: trainiTheme.colors.accent,
    position: 'absolute',
    top: -3,
    left: 1,
  },
  dogEarRight: {
    left: 13,
  },
  track: {
    height: 6,
    borderRadius: 999,
    backgroundColor: trainiTheme.colors.progressTrack,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    backgroundColor: trainiTheme.colors.accent,
    borderRadius: 999,
  },
});
