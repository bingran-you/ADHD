import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { keepTheme } from '../../theme/keep';

type KeepBottomSheetProps = {
  children: React.ReactNode;
  style?: ViewStyle;
};

export default function KeepBottomSheet({ children, style }: KeepBottomSheetProps) {
  return <View style={[styles.sheet, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  sheet: {
    backgroundColor: keepTheme.colors.surfaceSolid,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 24,
    paddingTop: 22,
    paddingBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -8 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 6,
  },
});
