import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TrainiScreen from '../../components/traini/TrainiScreen';
import { trainiTheme } from '../../theme/traini';

type MenuRowProps = {
  label: string;
};

function MenuRow({ label }: MenuRowProps) {
  return (
    <View style={styles.menuRow}>
      <View style={styles.menuIcon} />
      <Text style={styles.menuText}>{label}</Text>
    </View>
  );
}

export default function Traini_08() {
  return (
    <TrainiScreen>
      <View style={styles.container}>
        <View style={styles.drawer}>
          <View style={styles.headerRow}>
            <Text style={styles.headerTitle}>My Pets (1)</Text>
            <View style={styles.addButton}>
              <Text style={styles.addText}>Add</Text>
            </View>
          </View>

          <View style={styles.petCard}>
            <View style={styles.petAvatar} />
            <View style={styles.petInfo}>
              <Text style={styles.petName}>br</Text>
              <Text style={styles.petMeta}>3 years 6 months</Text>
            </View>
            <View style={styles.editIcon}>
              <Text style={styles.editText}>E</Text>
            </View>
          </View>

          <View style={styles.menuList}>
            <MenuRow label="Subscriptions" />
            <MenuRow label="Rewards" />
            <MenuRow label="Settings" />
            <MenuRow label="Follow Us" />
          </View>

          <View style={styles.footer}>
            <View style={styles.userAvatar} />
            <Text style={styles.userName}>Bingran</Text>
          </View>
        </View>
        <View style={styles.overlay} />
      </View>
    </TrainiScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  drawer: {
    width: '78%',
    backgroundColor: trainiTheme.colors.surface,
    paddingTop: 20,
    paddingHorizontal: 18,
  },
  overlay: {
    flex: 1,
    backgroundColor: trainiTheme.colors.overlay,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    color: trainiTheme.colors.accent,
    fontWeight: '700',
    fontSize: 16,
  },
  addButton: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: trainiTheme.radius.pill,
    borderWidth: 1,
    borderColor: trainiTheme.colors.border,
    backgroundColor: trainiTheme.colors.surfaceMuted,
  },
  addText: {
    color: trainiTheme.colors.textSecondary,
    fontWeight: '600',
    fontSize: 12,
  },
  petCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: trainiTheme.colors.accent,
    borderRadius: trainiTheme.radius.md,
    padding: 12,
    marginBottom: 18,
  },
  petAvatar: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: trainiTheme.colors.surface,
  },
  petInfo: {
    marginLeft: 12,
    flex: 1,
  },
  petName: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 14,
  },
  petMeta: {
    color: '#ffeaea',
    fontSize: 11,
    marginTop: 4,
  },
  editIcon: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  editText: {
    color: trainiTheme.colors.accent,
    fontWeight: '700',
  },
  menuList: {},
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  menuIcon: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 1,
    borderColor: trainiTheme.colors.border,
    marginRight: 12,
  },
  menuText: {
    color: trainiTheme.colors.textPrimary,
    fontWeight: '600',
  },
  footer: {
    marginTop: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
  },
  userAvatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: trainiTheme.colors.border,
    marginRight: 10,
  },
  userName: {
    color: trainiTheme.colors.textPrimary,
    fontWeight: '600',
  },
});
