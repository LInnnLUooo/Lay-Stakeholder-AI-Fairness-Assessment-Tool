import data from '../data/results.json';
// 1. feature的取值为字符串类型，且feature的取值不需要合并。


// const generateFilterGroups = (data, feature) => {
//   let filterGroups = {};
//   const featureValues = [...new Set(data.map(row => row[feature]))];  // 自动提取特征值

//   // 遍历预测信用、真实信用和特征值的每种组合
//   ['Good', 'Bad'].forEach(predCredit => {
//     ['Good', 'Bad'].forEach(realCredit => {
//       featureValues.forEach(value => {
//         const encodedValue = encodeURIComponent(value.toString().toLowerCase().replace(/ /g, ''));
//         const groupKey = `group_pred${predCredit}_real${realCredit}_${feature.toLowerCase().replace(/ /g, '')}_${encodedValue}`;
//         const group = data.filter(row => row['Predicted Credit'] === predCredit && row['Real Credit'] === realCredit && row[feature] === value);
//         filterGroups[groupKey] = group;
//         filterGroups[`${groupKey}_IDs`] = group.map(row => row.id);
//       });
//     });
//   });

//   return { filterGroups, featureValues };
// };

const generateFilterGroups = (data, feature) => {
  let filterGroups = {};
  const featureValues = [...new Set(data.map(row => row[feature]))];  // 自动提取特征值

  // 遍历预测信用、真实信用和特征值的每种组合
  ['Good', 'Bad'].forEach(predCredit => {
    ['Good', 'Bad'].forEach(realCredit => {
      featureValues.forEach(value => {
        let encodedValue = encodeURIComponent(value.toString().toLowerCase().replace(/ /g, ''));

        // 特殊处理 Property feature 和 特定值
        if (feature === 'Property') {
          if (value === 'Car/Other') {
            encodedValue = 'car_or_other';  // 特殊处理 '/' 为 '_'
          } else if (value === 'Real Estate') {
            encodedValue = 'real_estate';  // 特殊处理空格为下划线
          } else if (value === 'Life Insurance') {
            encodedValue = 'life_insurance';  // 特殊处理空格为下划线
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


// 定义需要处理的特征
const features = ['Installment Rate', 'Residence Length', 'Existing Credits', 'Dependents', 'Debtors', 'Property', 'Installment Plans', 'Housing', 'Telephone', 'Foreign Worker','Gender'];

// 合并所有特征的过滤组
let filterGroups = {};
let uniqueFeatureValues_string_allvalues = {};

features.forEach(feature => {
  const { filterGroups: fg, featureValues } = generateFilterGroups(data, feature);
  filterGroups = { ...filterGroups, ...fg };
  uniqueFeatureValues_string_allvalues[feature] = featureValues;
});


// 导出特定特征的所有组合值和对应的ID列表
const getAllCombinationsForFeature = (feature) => {
  const result = {};
  const featureGroups = Object.keys(filterGroups).filter(key => key.includes(feature.toLowerCase().replace(/ /g, '')));

  featureGroups.forEach(group => {
    result[group] = filterGroups[`${group}_IDs`];
  });

  return result;
};

// 导出所有特征的组合及其ID列表
const featureCombinations_string_allvalues = {};

features.forEach(feature => {
  featureCombinations_string_allvalues[feature] = getAllCombinationsForFeature(feature);
});


// 2. 通用函数处理数值型特征的分组

// 在原有代码下面添加以下处理逻辑

function generateFilterGroupsForNumericFeature(data, feature, ranges, labels) {
  let filterGroups = {};

  ['Good', 'Bad'].forEach(predCredit => {
    ['Good', 'Bad'].forEach(realCredit => {
      ranges.forEach((range, index) => {
        const [min, max] = range;
        const label = labels[index];
        const groupKey = `group_pred${predCredit}_real${realCredit}_${feature.toLowerCase().replace(/ /g, '')}_${label.replace(/ /g, '').toLowerCase()}`;
        const group = data.filter(row => {
          const featureValue = row[feature]; // 直接使用转换后的特征值
          return row['Predicted Credit'] === predCredit && row['Real Credit'] === realCredit && featureValue >= min && featureValue <= max;
        });
        filterGroups[groupKey] = group;
        filterGroups[`${groupKey}_IDs`] = group.map(row => row.id);
      });
    });
  });

  return { filterGroups, featureValues: labels };
}

// 处理 Age 特征
const ageRanges = [
  [0, 25],
  [26, 100]
];
const ageLabels = ['age<=25', 'age>25'];
const { filterGroups: ageFilterGroups, featureValues: ageFeatureValues } = generateFilterGroupsForNumericFeature(data, 'Age', ageRanges, ageLabels);

// 处理 Credit Amount 特征
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

// 处理 Duration 特征
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

// 合并三个特征的过滤组
filterGroups = { ...filterGroups, ...ageFilterGroups, ...creditAmountFilterGroups, ...durationFilterGroups };

// 添加特征值
let uniqueNumericValues = {};
uniqueNumericValues['Age'] = ageFeatureValues;
uniqueNumericValues['Credit Amount'] = creditAmountFeatureValues;
uniqueNumericValues['Duration'] = durationFeatureValues;

// 导出三个特征的组合及其ID列表
const getAllCombinationsForNumericFeature = (feature) => {
  const result = {};
  const featureGroups = Object.keys(filterGroups).filter(key => key.includes(feature.toLowerCase().replace(/ /g, '')));

  featureGroups.forEach(group => {
    result[group] = filterGroups[`${group}_IDs`];
  });

  return result;
};

// 导出所有特征的组合及其ID列表
const featureCombinations_numeric_allvalues = {};

['Age', 'Credit Amount', 'Duration'].forEach(feature => {
  featureCombinations_numeric_allvalues[feature] = getAllCombinationsForNumericFeature(feature);
});

// 控制台输出
console.log('Age Feature Combinations:', featureCombinations_numeric_allvalues['Age']);
console.log('Unique Age Values:', uniqueNumericValues['Age']);

console.log('Credit Amount Feature Combinations:', featureCombinations_numeric_allvalues['Credit Amount']);
console.log('Unique Credit Amount Values:', uniqueNumericValues['Credit Amount']);

console.log('Duration Feature Combinations:', featureCombinations_numeric_allvalues['Duration']);
console.log('Unique Duration Values:', uniqueNumericValues['Duration']);



//3. string feature: combined values
const generateFilterGroups2 = (data, feature) => {
  let filterGroups = {};
  const featureValues = [...new Set(data.map(row => row[feature]))];  // 自动提取特征值

  // 遍历预测信用、真实信用和特征值的每种组合
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
// 处理 Job 特征
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

// 处理 Checking Account 特征
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

// 处理 Employment 特征
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

// 处理 Savings 特征
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

// 处理 Purpose 特征
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

// 处理 Credit History 特征
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

// 合并四个特征的过滤组
filterGroups = {
  ...filterGroups,
  ...jobFilterGroups,
  ...checkingAccountFilterGroups,
  ...employmentFilterGroups,
  ...savingsFilterGroups,
  ...purposeFilterGroups,
  ...creditHistoryFilterGroups
};

// 添加特征值
let uniqueFeatureValues_string_combinedvalues = {};
uniqueFeatureValues_string_combinedvalues['Job'] = jobFeatureValues;
uniqueFeatureValues_string_combinedvalues['Checking Account'] = checkingAccountFeatureValues;
uniqueFeatureValues_string_combinedvalues['Employment'] = employmentFeatureValues;
uniqueFeatureValues_string_combinedvalues['Savings'] = savingsFeatureValues;
uniqueFeatureValues_string_combinedvalues['Purpose'] = purposeFeatureValues;
uniqueFeatureValues_string_combinedvalues['Credit History'] = creditHistoryFeatureValues;

// 导出四个特征的组合及其ID列表
const featureCombinations_string_combinedvalues = {};
['Checking Account','Job','Employment', 'Savings', 'Purpose', 'Credit History'].forEach(feature => {
  featureCombinations_string_combinedvalues[feature] = getAllCombinationsForFeature(feature);
});

// 控制台输出
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

// 添加一个新功能： 将所有变量合称为两个类别，一个是feature unique values一个是对应的ID lists 根据预测值和真实值的。
// 合成所有特征组合的变量
const allFeatureCombinations = {
  ...featureCombinations_string_allvalues,
  ...featureCombinations_numeric_allvalues,
  ...featureCombinations_string_combinedvalues
};

// 合成所有唯一特征值的变量
const allUniqueFeatureValues = {
  ...uniqueFeatureValues_string_allvalues,
  ...uniqueNumericValues,
  ...uniqueFeatureValues_string_combinedvalues
};

// 最后导出所有处理后的特征

export { featureCombinations_string_allvalues, uniqueFeatureValues_string_allvalues,featureCombinations_numeric_allvalues, uniqueNumericValues, featureCombinations_string_combinedvalues,uniqueFeatureValues_string_combinedvalues,

allFeatureCombinations, allUniqueFeatureValues,
 };

 // // 数据引用，以提取Age的unique feature values和 combinations（ID）为列子： allUniqueFeatureValues[feature] 和 featureCombinationIDs
// feature='Age'
// allUniqueFeatureValues[feature]


