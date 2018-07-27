const E2eHelpers = require('../../../platform/testing/e2e/helpers');
const Timeouts = require('../../../platform/testing/e2e/timeouts.js');
const RxHelpers = require('./rx-helpers');
const Auth = require('../../../platform/testing/e2e/auth');
const AccountCreationHelpers = require('../../../platform/testing/e2e/account-creation-helpers');

module.exports = E2eHelpers.createE2eTest(
  (client) => {
    const token = Auth.getUserToken();

    RxHelpers.initApplicationSubmitMock(token);
    AccountCreationHelpers.initMHVTermsMocks(token);

    // Ensure active page renders
    Auth.logIn(token, client, '/health-care/prescriptions', 3)
      .assert.title('Refill Prescriptions: Vets.gov')
      .waitForElementVisible('#rx-active', Timeouts.normal);

    // Ensure that list view renders
    client
      .expect.element('.rx-table-list').to.be.visible;

    client
      .waitForElementVisible('.va-nav-breadcrumbs', Timeouts.normal)
      .waitForElementVisible('.va-nav-breadcrumbs-list', Timeouts.normal)
      .waitForElementVisible('a[aria-current="page"', Timeouts.normal);

    client.expect.element('.va-nav-breadcrumbs-list li:nth-of-type(3) a[aria-current="page"]').to.be.present;
    client.expect.element('.va-nav-breadcrumbs-list li:nth-of-type(3) a[aria-current="page"]').text.to.equal('Prescription Refills');
    client.expect.element('.va-nav-breadcrumbs-list li:nth-of-type(3) a[aria-current="page"]').to.have.css('pointer-events').which.equal('none');

    // Mobile test, most common size
    client.resizeWindow(375, 667);

    client.waitForElementVisible('.va-nav-breadcrumbs-list', Timeouts.normal);
    client.expect.element('.va-nav-breadcrumbs-list li:not(:nth-last-child(2))').to.have.css('display').which.equal('none');
    client.expect.element('.va-nav-breadcrumbs-list li:nth-last-child(2)').text.to.equal('Health Care');
    client.expect.element('.va-nav-breadcrumbs-list li:nth-last-child(2)').to.have.css('display').which.equal('inline-block');

    // Reset default size
    client.resizeWindow(1024, 768);

    // Check breadcrumb on prescription detail page
    client
      .click('.rx-prescription-info .rx-prescription-title a')
      .waitForElementVisible('#rx-details', Timeouts.slow);

    client.expect.element('.va-nav-breadcrumbs-list li:nth-of-type(4) a[aria-current="page"]').to.be.present;
    client.expect.element('.va-nav-breadcrumbs-list li:nth-of-type(4) a[aria-current="page"]').text.to.equal('Prescription Details');
    client.expect.element('.va-nav-breadcrumbs-list li:nth-of-type(4) a[aria-current="page"]').to.have.css('pointer-events').which.equal('none');

    // Mobile test, most common size
    client.resizeWindow(375, 667);

    client.waitForElementVisible('.va-nav-breadcrumbs-list', Timeouts.normal);
    client.expect.element('.va-nav-breadcrumbs-list li:not(:nth-last-child(2))').to.have.css('display').which.equal('none');
    client.expect.element('.va-nav-breadcrumbs-list li:nth-last-child(2)').text.to.equal('Prescription Refills');
    client.expect.element('.va-nav-breadcrumbs-list li:nth-last-child(2)').to.have.css('display').which.equal('inline-block');

    // Reset default size
    client.resizeWindow(1024, 768);

    client.end();
  }
);
