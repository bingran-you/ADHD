import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TrainiBottomNav from '../../components/traini/TrainiBottomNav';
import TrainiLogo from '../../components/traini/TrainiLogo';
import TrainiScreen from '../../components/traini/TrainiScreen';
import TrainiTopBar from '../../components/traini/TrainiTopBar';
import { trainiTheme } from '../../theme/traini';

type ActionCardProps = {
  label: string;
  title: string;
  badge?: string;
};

function ActionCard({ label, title, badge }: ActionCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.cardTextBlock}>
        <Text style={styles.cardLabel}>{label}</Text>
        <View style={styles.cardTitleRow}>
          <View style={styles.cardIcon} />
          <Text style={styles.cardTitle}>{title}</Text>
        </View>
      </View>
      <View style={styles.cardRight}>
        {badge && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{badge}</Text>
          </View>
        )}
        <View style={styles.cardIllustration} />
      </View>
    </View>
  );
}

export default function Traini_07() {
  return (
    <TrainiScreen>
      <View style={styles.container}>
        <TrainiTopBar
          left={<View style={styles.menuIcon}><View style={styles.menuLine} /><View style={styles.menuLine} /><View style={styles.menuLine} /></View>}
          center={<TrainiLogo />}
        />
        <View style={styles.hero}>
          <View style={styles.heroDog} />
        </View>
        <View style={styles.greeting}>
          <Text style={styles.greetingTitle}>Hey there, Bingran!</Text>
          <Text style={styles.greetingSubtitle}>Guess what&apos;s on my mind?</Text>
          <View style={styles.pawRow}>
            <View style={styles.pawDot} />
            <View style={styles.pawDot} />
            <View style={styles.pawDot} />
          </View>
        </View>
        <View style={styles.cardList}>
          <ActionCard label="LIVE EMOTIONAL INSIGHTS" title="Live Camera" badge="LIVE" />
          <ActionCard label="BARK-TO-HUMAN & HUMAN-TO-BARK" title="Voice Record" />
          <ActionCard label="PICTURES, VIDEOS, AND MORE" title="Album Upload" />
        </View>
        <View style={styles.askInput}>
          <Text style={styles.askText}>Ask PetGPT</Text>
        </View>
      </View>
      <TrainiBottomNav activeIndex={0} />
    </TrainiScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 6,
  },
  menuIcon: {
    width: 24,
    height: 20,
    justifyContent: 'space-between',
  },
  menuLine: {
    height: 2,
    borderRadius: 2,
    backgroundColor: trainiTheme.colors.textSecondary,
  },
  hero: {
    alignItems: 'center',
    marginTop: 6,
  },
  heroDog: {
    width: 140,
    height: 110,
    borderRadius: 30,
    backgroundColor: trainiTheme.colors.surfaceMuted,
  },
  greeting: {
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 14,
  },
  greetingTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: trainiTheme.colors.textPrimary,
  },
  greetingSubtitle: {
    fontSize: 16,
    fontWeight: '700',
    color: trainiTheme.colors.textPrimary,
  },
  pawRow: {
    flexDirection: 'row',
    marginTop: 6,
  },
  pawDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: trainiTheme.colors.textMuted,
    marginRight: 4,
  },
  cardList: {},
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: trainiTheme.colors.highlight,
    borderRadius: trainiTheme.radius.lg,
    paddingVertical: 14,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  cardTextBlock: {
    flex: 1,
  },
  cardLabel: {
    fontSize: 10,
    color: trainiTheme.colors.textMuted,
    fontWeight: '700',
    marginBottom: 6,
  },
  cardTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardIcon: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: trainiTheme.colors.surface,
    borderWidth: 1,
    borderColor: trainiTheme.colors.border,
    marginRight: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: trainiTheme.colors.textPrimary,
  },
  cardRight: {
    alignItems: 'center',
  },
  badge: {
    backgroundColor: trainiTheme.colors.surface,
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginBottom: 6,
    borderWidth: 1,
    borderColor: trainiTheme.colors.border,
  },
  badgeText: {
    fontSize: 9,
    color: trainiTheme.colors.accent,
    fontWeight: '700',
  },
  cardIllustration: {
    width: 42,
    height: 42,
    borderRadius: 16,
    backgroundColor: trainiTheme.colors.surface,
    borderWidth: 1,
    borderColor: trainiTheme.colors.border,
  },
  askInput: {
    marginTop: 16,
    backgroundColor: trainiTheme.colors.surface,
    borderRadius: trainiTheme.radius.pill,
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: trainiTheme.colors.border,
  },
  askText: {
    color: trainiTheme.colors.textMuted,
    fontWeight: '600',
  },
});
