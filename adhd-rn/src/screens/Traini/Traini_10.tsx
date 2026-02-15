import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TrainiButton from '../../components/traini/TrainiButton';
import TrainiScreen from '../../components/traini/TrainiScreen';
import TrainiTopBar from '../../components/traini/TrainiTopBar';
import { trainiTheme } from '../../theme/traini';

type PlanCardProps = {
  title: string;
  price: string;
  cadence: string;
  featured?: boolean;
  badge?: string;
};

function PlanCard({ title, price, cadence, featured, badge }: PlanCardProps) {
  return (
    <View style={[styles.planCard, featured && styles.planFeatured]}>
      {badge && (
        <View style={styles.saveBadge}>
          <Text style={styles.saveText}>{badge}</Text>
        </View>
      )}
      {!!title && <Text style={styles.planTitle}>{title}</Text>}
      <Text style={styles.planPrice}>{price}</Text>
      <Text style={styles.planCadence}>{cadence}</Text>
    </View>
  );
}

export default function Traini_10() {
  return (
    <TrainiScreen>
      <View style={styles.container}>
        <TrainiTopBar
          left={<View style={styles.backCircle}><Text style={styles.back}>{'<'}</Text></View>}
          center={<Text style={styles.title}>Subscription</Text>}
        />
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Current Plan</Text>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Free</Text>
            </View>
          </View>
          <Text style={styles.label}>Membership Type</Text>
          <Text style={styles.value}>Free</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Want more Traini?</Text>
          <Text style={styles.helperText}>Find the perfect plan for you and your pup!</Text>
          <Text style={styles.sectionHeading}>Enhanced Member</Text>
          <Text style={styles.sectionSub}>For the ultimate pet parent</Text>
          <View style={styles.planRow}>
            <View style={styles.planCardSpacing}>
              <PlanCard title="" price="$19.99" cadence="Billed monthly" />
            </View>
            <PlanCard
              title="Annual Enhanced"
              price="$119.99"
              cadence="Billed yearly"
              featured
              badge="Save 50%"
            />
          </View>
          <TrainiButton label="Become an Enhanced Member" style={styles.primaryButton} />
          <TrainiButton label="View other plans" variant="outline" style={styles.secondaryButton} />
          <View style={styles.divider} />
          <Text style={styles.sectionHeading}>Everything in Free, plus:</Text>
          {['Unlimited Dog to Human Translation', 'Unlimited Human to Dog Translation'].map((item) => (
            <View key={item} style={styles.featureRow}>
              <View style={styles.check}>
                <Text style={styles.checkText}>v</Text>
              </View>
              <Text style={styles.featureText}>{item}</Text>
            </View>
          ))}
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
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: trainiTheme.colors.textPrimary,
  },
  card: {
    backgroundColor: trainiTheme.colors.surface,
    borderRadius: trainiTheme.radius.lg,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: trainiTheme.colors.border,
    marginTop: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: trainiTheme.colors.textPrimary,
  },
  tag: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: trainiTheme.radius.pill,
    backgroundColor: trainiTheme.colors.surfaceMuted,
  },
  tagText: {
    fontSize: 11,
    color: trainiTheme.colors.textSecondary,
    fontWeight: '600',
  },
  label: {
    fontSize: 11,
    color: trainiTheme.colors.textMuted,
  },
  value: {
    fontSize: 14,
    color: trainiTheme.colors.textPrimary,
    fontWeight: '700',
    marginTop: 4,
  },
  helperText: {
    fontSize: 12,
    color: trainiTheme.colors.textSecondary,
    marginTop: 6,
  },
  sectionHeading: {
    fontSize: 12,
    fontWeight: '700',
    color: trainiTheme.colors.textPrimary,
    marginTop: 10,
  },
  sectionSub: {
    fontSize: 11,
    color: trainiTheme.colors.textSecondary,
    marginBottom: 10,
  },
  planRow: {
    flexDirection: 'row',
  },
  planCard: {
    flex: 1,
    borderRadius: trainiTheme.radius.md,
    borderWidth: 1,
    borderColor: trainiTheme.colors.border,
    padding: 12,
    backgroundColor: trainiTheme.colors.surface,
  },
  planCardSpacing: {
    flex: 1,
    marginRight: 10,
  },
  planFeatured: {
    borderColor: trainiTheme.colors.accent,
  },
  saveBadge: {
    alignSelf: 'flex-start',
    backgroundColor: trainiTheme.colors.accentSoft,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: trainiTheme.radius.pill,
    marginBottom: 6,
  },
  saveText: {
    fontSize: 10,
    color: trainiTheme.colors.accent,
    fontWeight: '700',
  },
  planTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: trainiTheme.colors.textPrimary,
    marginBottom: 6,
  },
  planPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: trainiTheme.colors.textPrimary,
  },
  planCadence: {
    fontSize: 11,
    color: trainiTheme.colors.textSecondary,
    marginTop: 4,
  },
  primaryButton: {
    marginTop: 12,
  },
  secondaryButton: {
    marginTop: 8,
  },
  divider: {
    height: 1,
    backgroundColor: trainiTheme.colors.border,
    marginVertical: 12,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  check: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: trainiTheme.colors.accentSoft,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  checkText: {
    fontSize: 10,
    color: trainiTheme.colors.accent,
    fontWeight: '700',
  },
  featureText: {
    fontSize: 12,
    color: trainiTheme.colors.textPrimary,
    fontWeight: '600',
  },
});
