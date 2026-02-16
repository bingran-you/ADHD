import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { coachTheme } from '../theme';

type TabItem = {
  key: string;
  label: string;
  icon: string;
};

type CoachTabBarProps = {
  items: TabItem[];
  activeKey: string;
  onChange: (key: string) => void;
};

export default function CoachTabBar({ items, activeKey, onChange }: CoachTabBarProps) {
  return (
    <View style={styles.container}>
      {items.map((item) => {
        const active = item.key === activeKey;
        return (
          <Pressable
            key={item.key}
            onPress={() => onChange(item.key)}
            style={({ pressed }) => [styles.tab, pressed && styles.pressed]}
          >
            <View style={[styles.iconCircle, active && styles.iconCircleActive]}>
              <Text style={[styles.iconText, active && styles.iconTextActive]}>{item.icon}</Text>
            </View>
            <Text style={[styles.label, active && styles.labelActive]}>{item.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 6,
    borderTopWidth: 1,
    borderTopColor: coachTheme.colors.border,
    backgroundColor: 'rgba(255, 255, 255, 0.88)',
  },
  tab: {
    alignItems: 'center',
    gap: 4,
  },
  pressed: {
    opacity: 0.8,
  },
  iconCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: coachTheme.colors.surfaceWarm,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: coachTheme.colors.border,
  },
  iconCircleActive: {
    backgroundColor: coachTheme.colors.accent,
    borderColor: coachTheme.colors.accentDeep,
  },
  iconText: {
    fontSize: 14,
    color: coachTheme.colors.textSecondary,
    fontWeight: '700',
    fontFamily: coachTheme.fonts.heading,
  },
  iconTextActive: {
    color: '#fffdfb',
  },
  label: {
    fontSize: 11,
    color: coachTheme.colors.textMuted,
    fontFamily: coachTheme.fonts.body,
  },
  labelActive: {
    color: coachTheme.colors.accentDeep,
    fontWeight: '600',
  },
});
