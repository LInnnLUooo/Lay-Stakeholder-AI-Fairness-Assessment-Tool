import data from '../data/results.json';





const generateFilterGroups = (data, feature) => {
  let filterGroups = {};
  const featureValues = [...new Set(data.map(row => row[feature]))];

  ['Good', 'Bad'].forEach(predCredit => {
    ['Good', 'Bad'].forEach(realCredit => {
      featureValues.forEach(value => {
        let encodedValue = encodeURIComponent(value.toString().toLowerCase().replace(/ /g, ''));

        if (feature === 'Property') {
          if (value === 'Car/Other') {
            encodedValue = 'car_or_other';
          } else if (value === 'Real Estate') {
            encodedValue = 'real_estate';
          } else if (value === 'Life Insurance') {
            encodedValue = 'life_insurance';
          }
        }

        const groupKey = `group_pred${predCredit}_real${realCredit}_${feature.toLowerCase().replace(/ /g, '')}_${encodedValue}`;
        const group = data.filter(row => row['Predicted Credit'] === predCredit && row['Real Credit'] === realCredit && row[feature] === value);
        filterGroups[groupKey] = group;
        filterGroups[`${groupKey}_IDs`] = group.map(row => row.id);
      });
    });
  });

  return { filterGroups, featureValues };
};


const features = ['Installment Rate', 'Residence Length', 'Existing Credits', 'Dependents', 'Debtors', 'Property', 'Installment Plans', 'Housing', 'Telephone', 'Foreign Worker','Gender'];

let filterGroups = {};
let uniqueFeatureValues_string_allvalues = {};

features.forEach(feature => {
  const { filterGroups: fg, featureValues } = generateFilterGroups(data, feature);
  filterGroups = { ...filterGroups, ...fg };
  uniqueFeatureValues_string_allvalues[feature] = featureValues;
});


const getAllCombinationsForFeature = (feature) => {
  const result = {};
  const featureGroups = Object.keys(filterGroups).filter(key => key.includes(feature.toLowerCase().replace(/ /g, '')));

  featureGroups.forEach(group => {
    result[group] = filterGroups[`${group}_IDs`];
  });

  return result;
};

const featureCombinations_string_allvalues = {};

features.forEach(feature => {
  featureCombinations_string_allvalues[feature] = getAllCombinationsForFeature(feature);
});




function generateFilterGroupsForNumericFeature(data, feature, ranges, labels) {
  let filterGroups = {};

  ['Good', 'Bad'].forEach(predCredit => {
    ['Good', 'Bad'].forEach(realCredit => {
      ranges.forEach((range, index) => {
        const [min, max] = range;
        const label = labels[index];
        const groupKey = `group_pred${predCredit}_real${realCredit}_${feature.toLowerCase().replace(/ /g, '')}_${label.replace(/ /g, '').toLowerCase()}`;
        const group = data.filter(row => {
          const featureValue = row[feature];
          return row['Predicted Credit'] === predCredit && row['Real Credit'] === realCredit && featureValue >= min && featureValue <= max;
        });
        filterGroups[groupKey] = group;
        filterGroups[`${groupKey}_IDs`] = group.map(row => row.id);
      });
    });
  });

  return { filterGroups, featureValues: labels };
}

const ageRanges = [
  [0, 25],
  [26, 100]
];
const ageLabels = ['age<=25', 'age>25'];
const { filterGroups: ageFilterGroups, featureValues: ageFeatureValues } = generateFilterGroupsForNumericFeature(data, 'Age', ageRanges, ageLabels);

const creditAmountRanges = [
  [0, 2000],
  [2001, 5000],
  [5001, Infinity]
];
const creditAmountLabels = ['0-2000dm', '2001-5000dm', 'over5000dm'];
const cleanedDataCreditAmount = data.map(row => ({
  ...row,
  'Credit Amount': parseInt(row['Credit Amount'].replace(' DM', ''), 10)
}));
const { filterGroups: creditAmountFilterGroups, featureValues: creditAmountFeatureValues } = generateFilterGroupsForNumericFeature(cleanedDataCreditAmount, 'Credit Amount', creditAmountRanges, creditAmountLabels);

const durationRanges = [
  [1, 12],
  [13, 24],
  [25, 36],
  [37, Infinity]
];
const durationLabels = ['0-12months', '13-24months', '25-36months', 'over36months'];
const cleanedDataDuration = data.map(row => ({
  ...row,
  'Duration': parseInt(row['Duration'].replace(' Months', ''), 10)
}));
const { filterGroups: durationFilterGroups, featureValues: durationFeatureValues } = generateFilterGroupsForNumericFeature(cleanedDataDuration, 'Duration', durationRanges, durationLabels);

filterGroups = { ...filterGroups, ...ageFilterGroups, ...creditAmountFilterGroups, ...durationFilterGroups };

let uniqueNumericValues = {};
uniqueNumericValues['Age'] = ageFeatureValues;
uniqueNumericValues['Credit Amount'] = creditAmountFeatureValues;
uniqueNumericValues['Duration'] = durationFeatureValues;

const getAllCombinationsForNumericFeature = (feature) => {
  const result = {};
  const featureGroups = Object.keys(filterGroups).filter(key => key.includes(feature.toLowerCase().replace(/ /g, '')));

  featureGroups.forEach(group => {
    result[group] = filterGroups[`${group}_IDs`];
  });

  return result;
};

const featureCombinations_numeric_allvalues = {};

['Age', 'Credit Amount', 'Duration'].forEach(feature => {
  featureCombinations_numeric_allvalues[feature] = getAllCombinationsForNumericFeature(feature);
});

console.log('Age Feature Combinations:', featureCombinations_numeric_allvalues['Age']);
console.log('Unique Age Values:', uniqueNumericValues['Age']);

console.log('Credit Amount Feature Combinations:', featureCombinations_numeric_allvalues['Credit Amount']);
console.log('Unique Credit Amount Values:', uniqueNumericValues['Credit Amount']);

console.log('Duration Feature Combinations:', featureCombinations_numeric_allvalues['Duration']);
console.log('Unique Duration Values:', uniqueNumericValues['Duration']);



const generateFilterGroups2 = (data, feature) => {
  let filterGroups = {};
  const featureValues = [...new Set(data.map(row => row[feature]))];

  ['Good', 'Bad'].forEach(predCredit => {
    ['Good', 'Bad'].forEach(realCredit => {
      featureValues.forEach(value => {
        const groupKey = `group_pred${predCredit}_real${realCredit}_${feature.toLowerCase().replace(/ /g, '')}_${value.toString().toLowerCase().replace(/ /g, '')}`;
        const group = data.filter(row => row['Predicted Credit'] === predCredit && row['Real Credit'] === realCredit && row[feature] === value);
        filterGroups[groupKey] = group;
        filterGroups[`${groupKey}_IDs`] = group.map(row => row.id);
      });
    });
  });

  return { filterGroups, featureValues };
};
const cleanedDataJob = data.map(row => {
  let value;
  switch (row['Job']) {
    case 'Unskilled/Unemployed':
      value = 'unskilled/unemployed';
      break;
    case 'Skilled Employee':
      value = 'skilled_employee';
      break;
    case 'Management/Officer':
      value = 'management/officer';
      break;
    default:
      value = row['Job'];
  }
  return {
    ...row,
    'Job': value
  };
});
const { filterGroups: jobFilterGroups, featureValues: jobFeatureValues } = generateFilterGroups2(cleanedDataJob, 'Job');

const cleanedDataCheckingAccount = data.map(row => {
  let value;
  switch (row['Checking Account']) {
    case '<0 DM':
    case '0-200 DM':
      value = '<200dm';
      break;
    case '>200 DM':
      value = '>200dm';
      break;
    case 'No Checking Account':
      value = 'no_checking_account';
      break;
    default:
      value = row['Checking Account'];
  }
  return {
    ...row,
    'Checking Account': value
  };
});
const { filterGroups: checkingAccountFilterGroups, featureValues: checkingAccountFeatureValues } = generateFilterGroups2(cleanedDataCheckingAccount, 'Checking Account');

const cleanedDataEmployment = data.map(row => {
  let value;
  switch (row['Employment']) {
    case '<1 Year':
    case 'Unemployed':
      value = 'unemployed/<1year';
      break;
    case '1-4 Years':
      value = '1-4years';
      break;
    case '4-7 Years':
    case '>=7 Years':
      value = '>4years';
      break;
    default:
      value = row['Employment'];
  }
  return {
    ...row,
    'Employment': value
  };
});
const { filterGroups: employmentFilterGroups, featureValues: employmentFeatureValues } = generateFilterGroups2(cleanedDataEmployment, 'Employment');

const cleanedDataSavings = data.map(row => {
  let value;
  switch (row['Savings']) {
    
    case '100-500 DM':
    case '<100 DM':
    case 'Unknown':
      value = '<500dm/unknown';
      break;
    case '500-1000 DM':
      value = '500-1000dm';
      break;
    case '>=1000 DM':
      value = '>=1000dm';
      break;
    default:
      value = row['Savings'];
  }
  return {
    ...row,
    'Savings': value
  };
});
const { filterGroups: savingsFilterGroups, featureValues: savingsFeatureValues } = generateFilterGroups2(cleanedDataSavings, 'Savings');

const cleanedDataPurpose = data.map(row => {
  let value;
  switch (row['Purpose']) {
    case 'Car(used)':
    case 'Car(new)':
      value = 'car';
      break;
    case 'Business':
      value = 'business';
      break;
    default:
      value = 'other_purpose';
  }
  return {
    ...row,
    'Purpose': value
  };
});
const { filterGroups: purposeFilterGroups, featureValues: purposeFeatureValues } = generateFilterGroups2(cleanedDataPurpose, 'Purpose');

const cleanedDataCreditHistory = data.map(row => {
  let value;
  switch (row['Credit History']) {
    case 'Credits Paid Back Duly but Paid Up':
    case 'All Credits Paid Back Duly':
      value = 'paid_back_duly/all_paid_up';
      break;
    case 'No credits Taken':
    case 'Delayed':
      value = 'no_credits_taken/delayed';
      break;
    case 'Other Credits Existing':
      value = 'other_credits_existing';
      break;
    default:
      value = row['Credit History'];
  }
  return {
    ...row,
    'Credit History': value
  };
});
const { filterGroups: creditHistoryFilterGroups, featureValues: creditHistoryFeatureValues } = generateFilterGroups2(cleanedDataCreditHistory, 'Credit History');

filterGroups = {
  ...filterGroups,
  ...jobFilterGroups,
  ...checkingAccountFilterGroups,
  ...employmentFilterGroups,
  ...savingsFilterGroups,
  ...purposeFilterGroups,
  ...creditHistoryFilterGroups
};

let uniqueFeatureValues_string_combinedvalues = {};
uniqueFeatureValues_string_combinedvalues['Job'] = jobFeatureValues;
uniqueFeatureValues_string_combinedvalues['Checking Account'] = checkingAccountFeatureValues;
uniqueFeatureValues_string_combinedvalues['Employment'] = employmentFeatureValues;
uniqueFeatureValues_string_combinedvalues['Savings'] = savingsFeatureValues;
uniqueFeatureValues_string_combinedvalues['Purpose'] = purposeFeatureValues;
uniqueFeatureValues_string_combinedvalues['Credit History'] = creditHistoryFeatureValues;

const featureCombinations_string_combinedvalues = {};
['Checking Account','Job','Employment', 'Savings', 'Purpose', 'Credit History'].forEach(feature => {
  featureCombinations_string_combinedvalues[feature] = getAllCombinationsForFeature(feature);
});

console.log('Job Feature Combinations:', featureCombinations_string_combinedvalues['Job']);
console.log('Unique Job Values:', uniqueFeatureValues_string_combinedvalues['Job']);

console.log('Checking Account Feature Combinations:', featureCombinations_string_combinedvalues['Checking Account']);
console.log('Unique Checking Account Values:', uniqueFeatureValues_string_combinedvalues['Checking Account']);

console.log('Employment Feature Combinations:', featureCombinations_string_combinedvalues['Employment']);
console.log('Unique Employment Values:', uniqueFeatureValues_string_combinedvalues['Employment']);

console.log('Savings Feature Combinations:', featureCombinations_string_combinedvalues['Savings']);
console.log('Unique Savings Values:', uniqueFeatureValues_string_combinedvalues['Savings']);

console.log('Purpose Feature Combinations:', featureCombinations_string_combinedvalues['Purpose']);
console.log('Unique Purpose Values:', uniqueFeatureValues_string_combinedvalues['Purpose']);

console.log('Credit History Feature Combinations:', featureCombinations_string_combinedvalues['Credit History']);
console.log('Unique Credit History Values:', uniqueFeatureValues_string_combinedvalues['Credit History']);

const allFeatureCombinations = {
  ...featureCombinations_string_allvalues,
  ...featureCombinations_numeric_allvalues,
  ...featureCombinations_string_combinedvalues
};

const allUniqueFeatureValues = {
  ...uniqueFeatureValues_string_allvalues,
  ...uniqueNumericValues,
  ...uniqueFeatureValues_string_combinedvalues
};


export { featureCombinations_string_allvalues, uniqueFeatureValues_string_allvalues,featureCombinations_numeric_allvalues, uniqueNumericValues, featureCombinations_string_combinedvalues,uniqueFeatureValues_string_combinedvalues,

allFeatureCombinations, allUniqueFeatureValues,
 };



