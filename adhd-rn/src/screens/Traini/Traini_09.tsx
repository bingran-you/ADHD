import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TrainiLogo from '../../components/traini/TrainiLogo';
import TrainiScreen from '../../components/traini/TrainiScreen';
import TrainiTopBar from '../../components/traini/TrainiTopBar';
import { trainiTheme } from '../../theme/traini';

type NavRowProps = {
  label: string;
  destructive?: boolean;
};

function NavRow({ label, destructive }: NavRowProps) {
  return (
    <View style={styles.navRow}>
      <Text style={[styles.navText, destructive && styles.navTextDanger]}>{label}</Text>
      <Text style={styles.chevron}>{'>'}</Text>
    </View>
  );
}

export default function Traini_09() {
  return (
    <TrainiScreen>
      <View style={styles.container}>
        <TrainiTopBar
          left={<View style={styles.backCircle}><Text style={styles.back}>{'<'}</Text></View>}
          center={<TrainiLogo />}
        />
        <Text style={styles.sectionTitle}>User Info</Text>
        <View style={styles.card}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Name</Text>
            <Text style={styles.infoValue}>Bingran</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.infoRowAlt}>
            <View>
              <Text style={styles.infoLabel}>User ID</Text>
              <Text style={styles.infoValue}>n1k1tp5lz-</Text>
            </View>
            <View style={styles.copyIcon}>
              <Text style={styles.copyText}>C</Text>
            </View>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Support</Text>
        <View style={styles.card}>
          <NavRow label="Contact Us" />
          <View style={styles.divider} />
          <NavRow label="Report a Problem" />
          <View style={styles.divider} />
          <NavRow label="FAQ" />
        </View>

        <Text style={styles.sectionTitle}>Account</Text>
        <View style={styles.card}>
          <NavRow label="Change Password" />
          <View style={styles.divider} />
          <NavRow label="Sign Out" />
          <View style={styles.divider} />
          <NavRow label="Delete Account" destructive />
        </View>
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
  sectionTitle: {
    color: trainiTheme.colors.textMuted,
    fontWeight: '600',
    fontSize: 12,
    marginTop: 18,
    marginBottom: 8,
  },
  card: {
    backgroundColor: trainiTheme.colors.surface,
    borderRadius: trainiTheme.radius.lg,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: trainiTheme.colors.border,
  },
  infoRow: {
    paddingVertical: 8,
  },
  infoRowAlt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  infoLabel: {
    fontSize: 11,
    color: trainiTheme.colors.textMuted,
  },
  infoValue: {
    fontSize: 14,
    color: trainiTheme.colors.textPrimary,
    fontWeight: '600',
    marginTop: 4,
  },
  copyIcon: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: trainiTheme.colors.borderStrong,
    alignItems: 'center',
    justifyContent: 'center',
  },
  copyText: {
    fontSize: 12,
    color: trainiTheme.colors.textSecondary,
    fontWeight: '700',
  },
  navRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  navText: {
    color: trainiTheme.colors.textPrimary,
    fontWeight: '600',
  },
  navTextDanger: {
    color: trainiTheme.colors.accent,
  },
  chevron: {
    color: trainiTheme.colors.textMuted,
  },
  divider: {
    height: 1,
    backgroundColor: trainiTheme.colors.border,
  },
});
