import React from 'react';
import { StyleSheet, View } from 'react-native';

type TrainiTopBarProps = {
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
};

export default function TrainiTopBar({ left, center, right }: TrainiTopBarProps) {
  return (
    <View style={styles.container}>
      <View style={styles.side}>{left}</View>
      <View style={styles.center}>{center}</View>
      <View style={styles.sideRight}>{right}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 46,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  side: {
    width: 64,
    alignItems: 'flex-start',
  },
  sideRight: {
    width: 64,
    alignItems: 'flex-end',
  },
  center: {
    flex: 1,
    alignItems: 'center',
  },
});
