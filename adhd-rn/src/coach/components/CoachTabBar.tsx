import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { coachTheme } from '../theme';
import CoachTabIcon from './CoachTabIcon';

type TabItem = {
  key: string;
  label: string;
  icon: 'today' | 'log' | 'coach' | 'library' | 'trend' | 'profile';
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
              <CoachTabIcon name={item.icon} active={active} size={18} />
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
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderTopWidth: 1,
    borderTopColor: coachTheme.colors.border,
    backgroundColor: 'rgba(255, 255, 255, 0.88)',
  },
  tab: {
    alignItems: 'center',
    gap: 3,
  },
  pressed: {
    opacity: 0.8,
  },
  iconCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
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
  label: {
    fontSize: 10,
    color: coachTheme.colors.textMuted,
    fontFamily: coachTheme.fonts.body,
  },
  labelActive: {
    color: coachTheme.colors.accentDeep,
    fontWeight: '600',
  },
});
