import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TrainiButton from '../../components/traini/TrainiButton';
import TrainiField from '../../components/traini/TrainiField';
import TrainiLogo from '../../components/traini/TrainiLogo';
import TrainiProgress from '../../components/traini/TrainiProgress';
import TrainiScreen from '../../components/traini/TrainiScreen';
import TrainiTopBar from '../../components/traini/TrainiTopBar';
import { trainiTheme } from '../../theme/traini';

export default function Traini_05() {
  return (
    <TrainiScreen>
      <View style={styles.container}>
        <TrainiTopBar
          left={<View style={styles.backCircle}><Text style={styles.back}>{'<'}</Text></View>}
          center={<TrainiLogo />}
        />
        <View style={styles.content}>
          <Text style={styles.title}>What breed is Br?</Text>
          <Text style={styles.subtitle}>Knowing br&apos;s breed helps us personalize insights.</Text>
          <TrainiField
            placeholder="Select or type breed"
            rightElement={<Text style={styles.chevron}>{'v'}</Text>}
            style={styles.dropdown}
          />
          <Text style={styles.sectionTitle}>Popular Breeds</Text>
          {['Mix', 'Golden Retriever', 'Dachshund', 'German Shepherd', 'Poodle', 'Bulldog'].map(
            (item) => (
              <Text key={item} style={styles.breedItem}>
                {item}
              </Text>
            ),
          )}
        </View>
        <TrainiButton label="Next" disabled style={styles.button} />
        <TrainiProgress progress={0.58} />
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
  content: {
    flex: 1,
    paddingTop: 20,
  },
  title: {
    fontSize: 20,
    color: trainiTheme.colors.textPrimary,
    fontWeight: '700',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 12,
    color: trainiTheme.colors.textSecondary,
    marginBottom: 14,
  },
  dropdown: {
    marginBottom: 18,
  },
  chevron: {
    color: trainiTheme.colors.textMuted,
    fontSize: 12,
  },
  sectionTitle: {
    color: trainiTheme.colors.textMuted,
    fontWeight: '600',
    fontSize: 12,
    marginBottom: 8,
  },
  breedItem: {
    paddingVertical: 6,
    color: trainiTheme.colors.textPrimary,
    fontWeight: '600',
  },
  button: {
    marginBottom: 12,
  },
});
