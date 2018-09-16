import Raven from 'raven-js';
import Five26EZManifest from '../../../disability-benefits/526EZ/manifest.json';
import Zero993Manifest from '../../../edu-benefits/0993/manifest.json';
import One990Manifest from '../../../edu-benefits/1990/manifest.json';
import One990EManifest from '../../../edu-benefits/1990e/manifest.json';
import One990NManifest from '../../../edu-benefits/1990n/manifest.json';
import One995Manifest from '../../../edu-benefits/1995/manifest.json';
import Five490Manifest from '../../../edu-benefits/5490/manifest.json';
import Five495Manifest from '../../../edu-benefits/5495/manifest.json';
import HCAManifest from '../../../hca/manifest.json';

export const formBenefits = {
  '21-526EZ': 'increased disability compensation',
  '21P-527EZ': 'Veterans pension benefits',
  '21P-530': 'burial benefits',
  '1010ez': 'health care',
  '22-0993': 'opt out',
  '22-1990': 'education benefits',
  '22-1990E': 'education benefits',
  '22-1990N': 'education benefits',
  '22-1995': 'education benefits',
  '22-5490': 'education benefits',
  '22-5495': 'education benefits',
  '40-10007': 'pre-need determination of eligibility in a VA national cemetery',
  VIC: 'Veteran ID Card',
  '21-686C': 'dependent status'
};

export const formTitles = Object.keys(formBenefits).reduce((titles, key) => {
  let formNumber;
  if (key === '40-10007' || key === 'VIC') {
    formNumber = '';
  } else if (key === '1010ez') {
    formNumber = ' (10-10EZ)';
  } else {
    formNumber = ` (${key})`;
  }
  const formTitle = `${formBenefits[key]}${formNumber}`;
  titles[key] = formTitle; // eslint-disable-line no-param-reassign
  return titles;
}, {});

export const formLinks = {
  '21-526EZ': Five26EZManifest.rootUrl,
  '21P-527EZ': '/pension/application/527EZ/',
  '21P-530': '/burials-and-memorials/application/530/',
  '1010ez': HCAManifest.rootUrl,
  '22-0993': Zero993Manifest.rootUrl,
  '22-1990': One990Manifest.rootUrl,
  '22-1990E': One990EManifest.rootUrl,
  '22-1990N': One990NManifest.rootUrl,
  '22-1995': One995Manifest.rootUrl,
  '22-5490': Five490Manifest.rootUrl,
  '22-5495': Five495Manifest.rootUrl,
  '40-10007': '/burials-and-memorials/pre-need/form-10007-apply-for-eligibility/',
  VIC: '/veteran-id-card/apply/',
  '21-686C': '/disability-benefits/686/dependent-status/'
};

export const trackingPrefixes = {
  '21-526EZ': 'disability-526EZ-',
  '21P-527EZ': 'pensions-527EZ-',
  '21P-530': 'burials-530-',
  '1010ez': 'hca-',
  '22-0993': 'edu-0993-',
  '22-1990': 'edu-',
  '22-1990E': 'edu-1990e-',
  '22-1990N': 'edu-1990n-',
  '22-1995': 'edu-1995-',
  '22-5490': 'edu-5490-',
  '22-5495': 'edu-5495-',
  '40-10007': 'preneed-',
  VIC: 'veteran-id-card-',
  '21-686C': '686-'
};

export const sipEnabledForms = new Set([
  '1010ez',
  '21-686C',
  '21-526EZ',
  '21P-527EZ',
  '21P-530',
  '22-0993',
  '22-1990',
  '22-1990E',
  '22-1990N',
  '22-1995',
  '22-5490',
  '22-5495',
  '40-10007',
  'VIC'
]);


export function isSIPEnabledForm(savedForm) {
  const formNumber = savedForm.form;
  if (!formTitles[formNumber] || !formLinks[formNumber]) {
    Raven.captureMessage('vets_sip_list_item_missing_info');
    return false;
  }
  if (!sipEnabledForms.has(formNumber)) {
    throw new Error(`Could not find form ${trackingPrefixes[formNumber]} in list of sipEnabledForms`);
  }
  return true;
}
