import React from 'react';
import { StyleSheet, View } from 'react-native';
import { trainiTheme } from '../../theme/traini';

type TrainiBottomNavProps = {
  activeIndex?: number;
  light?: boolean;
};

export default function TrainiBottomNav({ activeIndex = 0, light }: TrainiBottomNavProps) {
  return (
    <View style={[styles.container, light && styles.light]}>
      {[0, 1, 2].map((index) => (
        <View
          key={index}
          style={[styles.icon, activeIndex === index && styles.iconActive]}
        >
          <View style={[styles.iconInner, activeIndex === index && styles.iconInnerActive]} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 64,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: trainiTheme.colors.border,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 24,
  },
  light: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  icon: {
    width: 26,
    height: 22,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: trainiTheme.colors.borderStrong,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconActive: {
    borderColor: trainiTheme.colors.accent,
    backgroundColor: trainiTheme.colors.accentSoft,
  },
  iconInner: {
    width: 10,
    height: 6,
    borderRadius: 3,
    backgroundColor: trainiTheme.colors.textMuted,
  },
  iconInnerActive: {
    backgroundColor: trainiTheme.colors.accent,
  },
});
