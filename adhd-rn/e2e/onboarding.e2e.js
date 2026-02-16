/* eslint-env detox/detox, jest */

describe('Coach app minimal flow', () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true, delete: true });
  });

  it('completes onboarding, saves a log, and opens trend', async () => {
    await waitFor(element(by.id('onboarding-next'))).toBeVisible().withTimeout(20000);

    await element(by.id('onboarding-age-1')).tap();
    await element(by.id('onboarding-next')).tap();

    await waitFor(element(by.id('onboarding-concern-transition'))).toBeVisible().withTimeout(10000);
    await element(by.id('onboarding-concern-transition')).tap();
    await element(by.id('onboarding-next')).tap();

    await waitFor(element(by.id('onboarding-time-1'))).toBeVisible().withTimeout(10000);
    await element(by.id('onboarding-time-1')).tap();
    await element(by.id('onboarding-caregiver-0')).tap();
    await element(by.id('onboarding-next')).tap();

    await waitFor(element(by.id('tab-today'))).toBeVisible().withTimeout(20000);
    await waitFor(element(by.id('quick-log')))
      .toBeVisible()
      .whileElement(by.type('RCTScrollViewComponentView'))
      .scroll(260, 'down');
    await element(by.id('quick-log')).tap();

    await waitFor(element(by.text('每日记录'))).toBeVisible().withTimeout(10000);
    await waitFor(element(by.id('log-save')))
      .toBeVisible()
      .whileElement(by.type('RCTScrollViewComponentView'))
      .scroll(300, 'down');
    await element(by.id('log-save')).tap();
    await waitFor(element(by.id('log-saved-at'))).toBeVisible().withTimeout(10000);

    await element(by.id('tab-trend')).tap();
    await waitFor(element(by.id('trend-title'))).toBeVisible().withTimeout(10000);
  });
});
