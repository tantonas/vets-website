import React from 'react';
import { expect } from 'chai';
import SkinDeep from 'skin-deep';

import { ConfirmationPage } from '../../../../src/js/edu-benefits/5490/containers/ConfirmationPage';

const form = {
  submission: {
    response: {
      attributes: {}
    }
  },
  data: {
    relativeFullName: {
      first: 'Jane',
      last: 'Doe'
    },
    benefit: 'chapter35'
  }
};

describe('Edu 5490 <ConfirmationPage>', () => {
  it('should render', () => {
    const tree = SkinDeep.shallowRender(
      <ConfirmationPage form={form}/>
    );

    expect(tree.subTree('.confirmation-page-title').text()).to.equal('Claim received');
    expect(tree.everySubTree('span')[1].text().trim()).to.equal('for Jane Doe');
    expect(tree.everySubTree('p')[0].text()).to.contain('We usually process claims within 30 days.');
    expect(tree.everySubTree('p')[1].text()).to.contain('We may contact you for more information or documents.Please print this page for your records');
    expect(tree.everySubTree('.confirmation-guidance-message')[0].text()).to.contain('Find out what happens after you apply.');
    expect(tree.everySubTree('.confirmation-guidance-message')[1].text()).to.contain('If you have questions, call 1-888-442-4551 (1-888-GI-BILL-1), Monday - Friday, 8:00 a.m. - 7:00 p.m. (ET).');
  });
});
