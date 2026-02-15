import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { keepTheme } from '../../theme/keep';

type WheelColumn = {
  items: string[];
  selectedIndex: number;
  width?: number;
};

type KeepWheelProps = {
  columns: WheelColumn[];
  style?: ViewStyle;
};

export default function KeepWheel({ columns, style }: KeepWheelProps) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.columns}>
        {columns.map((column, columnIndex) => (
          <View
            key={`col-${columnIndex}`}
            style={[
              styles.column,
              column.width ? { width: column.width } : null,
              columnIndex < columns.length - 1 ? styles.columnSpacer : null,
            ]}
          >
            {column.items.map((item, index) => {
              const selected = index === column.selectedIndex;
              return (
                <Text key={`${item}-${index}`} style={[styles.item, selected ? styles.itemSelected : styles.itemMuted]}>
                  {item}
                </Text>
              );
            })}
          </View>
        ))}
      </View>
      <View style={styles.highlight} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    position: 'relative',
    justifyContent: 'center',
  },
  columns: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  column: {
    alignItems: 'center',
  },
  columnSpacer: {
    marginRight: 16,
  },
  item: {
    fontSize: 16,
    paddingVertical: 6,
  },
  itemSelected: {
    color: keepTheme.colors.sheetText,
    fontWeight: '600',
  },
  itemMuted: {
    color: '#c9c7d0',
  },
  highlight: {
    position: 'absolute',
    left: 20,
    right: 20,
    top: '50%',
    marginTop: -18,
    height: 36,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e8e6ef',
  },
});
