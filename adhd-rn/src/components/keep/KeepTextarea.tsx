import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function KeepTextarea() {
  return (
    <View style={styles.box}>
      <Text style={styles.placeholder}>请输入</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#f1f1f1',
  },
  placeholder: {
    color: '#c1bdcc',
    fontSize: 12,
  },
});
