import data from '../data/results.json';

// For group fairness： Gender 
// 1. 首先导出基本的八组数据:  (prediction: good/bad  Rated/real label: good/bad)
// 第一组：Predicted Credit 为‘Good’，Real Credit 为‘Bad’，gender为‘female’
export const group_predGood_realBad_female = data.filter((row) => row['Predicted Credit'] === 'Good' && row['Real Credit'] === 'Bad' && row['Gender'] === 'Female');
export const group_predGood_realBad_female_IDs = group_predGood_realBad_female.map((row) => row.id);

// 第二组：Predicted Credit 为‘Good’，Real Credit 为‘Bad’，gender为‘male’
export const group_predGood_realBad_male = data.filter((row) => row['Predicted Credit'] === 'Good' && row['Real Credit'] === 'Bad' && row['Gender'] === 'Male');
export const group_predGood_realBad_male_IDs = group_predGood_realBad_male.map((row) => row.id);

// 第三组：Predicted Credit 为‘Good’，Real Credit 为‘Good’，gender为‘female’
export const group_predGood_realGood_female = data.filter((row) => row['Predicted Credit'] === 'Good' && row['Real Credit'] === 'Good' && row['Gender'] === 'Female');
export const group_predGood_realGood_female_IDs = group_predGood_realGood_female.map((row) => row.id);

// 第四组：Predicted Credit 为‘Good’，Real Credit 为‘Good’，gender为‘male’
export const group_predGood_realGood_male = data.filter((row) => row['Predicted Credit'] === 'Good' && row['Real Credit'] === 'Good' && row['Gender'] === 'Male');
export const group_predGood_realGood_male_IDs = group_predGood_realGood_male.map((row) => row.id);

// 第五组：Predicted Credit 为‘Bad’，Real Credit 为‘Bad’，gender为‘female’
export const group_predBad_realBad_female  = data.filter((row) => row['Predicted Credit'] === 'Bad' && row['Real Credit'] === 'Bad' && row['Gender'] === 'Female');
export const group_predBad_realBad_female_IDs = group_predBad_realBad_female.map((row) => row.id);

// 第六组：Predicted Credit 为‘Bad’，Real Credit 为‘Bad’，gender为‘male’
export const group_predBad_realBad_male  = data.filter((row) => row['Predicted Credit'] === 'Bad' && row['Real Credit'] === 'Bad' && row['Gender'] === 'Male');
export const group_predBad_realBad_male_IDs = group_predBad_realBad_male.map((row) => row.id);

// 第七组：Predicted Credit 为‘Bad’，Real Credit 为‘Good’，gender为‘female’
export const group_predBad_realGood_female = data.filter((row) => row['Predicted Credit'] === 'Bad' && row['Real Credit'] === 'Good' && row['Gender'] === 'Female');
export const group_predBad_realGood_female_IDs = group_predBad_realGood_female.map((row) => row.id);

// 第八组：Predicted Credit 为‘Bad’，Real Credit 为‘Good’，gender为‘male’
export const group_predBad_realGood_male = data.filter((row) => row['Predicted Credit'] === 'Bad' && row['Real Credit'] === 'Good' && row['Gender'] === 'Male');
export const group_predBad_realGood_male_IDs = group_predBad_realGood_male.map((row) => row.id);

// 2. gender对应的4组condition
// 2.1 gender + Job
// Job conditions & 也是他们的实际取值
// Skilled Employee
// Unskilled/Unemployed
// Management/Officer

// 2.1.1 gender (female) + Job + (good/bad predictions)
export const group_predGood_jobMangagement_female = data.filter((row) => row['Predicted Credit'] === 'Good' && row['Job'] === 'Management/Officer' && row['Gender'] === 'Female');
export const group_predGood_jobMangagement_female_IDs = group_predGood_jobMangagement_female.map((row) => row.id);

export const group_predBad_jobMangagement_female = data.filter((row) => row['Predicted Credit'] === 'Bad' && row['Job'] === 'Management/Officer' && row['Gender'] === 'Female');
export const group_predBad_jobMangagement_female_IDs = group_predBad_jobMangagement_female.map((row) => row.id);

export const group_predGood_jobSkilled_female = data.filter((row) => row['Predicted Credit'] === 'Good' && row['Job'] === 'Skilled Employee' && row['Gender'] === 'Female');
export const group_predGood_jobSkilled_female_IDs = group_predGood_jobSkilled_female.map((row) => row.id);

export const group_predBad_jobSkilled_female = data.filter((row) => row['Predicted Credit'] === 'Bad' && row['Job'] === 'Skilled Employee' && row['Gender'] === 'Female');
export const group_predBad_jobSkilled_female_IDs = group_predBad_jobSkilled_female.map((row) => row.id);

export const group_predGood_jobUnskilled_female = data.filter((row) => row['Predicted Credit'] === 'Good' && row['Job'] === 'Unskilled/Unemployed' && row['Gender'] === 'Female');
export const group_predGood_jobUnskilled_female_IDs = group_predGood_jobUnskilled_female.map((row) => row.id);

export const group_predBad_jobUnskilled_female = data.filter((row) => row['Predicted Credit'] === 'Bad' && row['Job'] === 'Unskilled/Unemployed' && row['Gender'] === 'Female');
export const group_predBad_jobUnskilled_female_IDs = group_predBad_jobUnskilled_female.map((row) => row.id);

// 2.1.2 gender (male) + Job + (good/bad predictions)
export const group_predGood_jobMangagement_male = data.filter((row) => row['Predicted Credit'] === 'Good' && row['Job'] === 'Management/Officer' && row['Gender'] === 'Male');
export const group_predGood_jobMangagement_male_IDs = group_predGood_jobMangagement_male.map((row) => row.id);

export const group_predBad_jobMangagement_male = data.filter((row) => row['Predicted Credit'] === 'Bad' && row['Job'] === 'Management/Officer' && row['Gender'] === 'Male');
export const group_predBad_jobMangagement_male_IDs = group_predBad_jobMangagement_male.map((row) => row.id);

export const group_predGood_jobSkilled_male = data.filter((row) => row['Predicted Credit'] === 'Good' && row['Job'] === 'Skilled Employee' && row['Gender'] === 'Male');
export const group_predGood_jobSkilled_male_IDs = group_predGood_jobSkilled_male.map((row) => row.id);

export const group_predBad_jobSkilled_male = data.filter((row) => row['Predicted Credit'] === 'Bad' && row['Job'] === 'Skilled Employee' && row['Gender'] === 'Male');
export const group_predBad_jobSkilled_male_IDs = group_predBad_jobSkilled_male.map((row) => row.id);

export const group_predGood_jobUnskilled_male = data.filter((row) => row['Predicted Credit'] === 'Good' && row['Job'] === 'Unskilled/Unemployed' && row['Gender'] === 'Male');
export const group_predGood_jobUnskilled_male_IDs = group_predGood_jobUnskilled_male.map((row) => row.id);

export const group_predBad_jobUnskilled_male = data.filter((row) => row['Predicted Credit'] === 'Bad' && row['Job'] === 'Unskilled/Unemployed' && row['Gender'] === 'Male');
export const group_predBad_jobUnskilled_male_IDs = group_predBad_jobUnskilled_male.map((row) => row.id);

// 2.2 gender + Savings
// <100 DM (<500DM/Unknown)
// Unkown (<500DM/Unknown)
// 100-500 DM (<500DM/Unknown)
// 500-1000 DM (500-1000 DM)
// >=1000 DM (>=1000DM)

// 2.2.1 gender (female) + Savings + (good/bad predictions)
export const group_predGood_savingsUnknown_female = data.filter((row) => row['Predicted Credit'] === 'Good' && (row['Savings'] === '<100 DM' || row['Savings'] === 'Unknown' || row['Savings'] === '100-500 DM') && row['Gender'] === 'Female');
export const group_predGood_savingsUnknown_female_IDs = group_predGood_savingsUnknown_female.map((row) => row.id);

export const group_predBad_savingsUnknown_female = data.filter((row) => row['Predicted Credit'] === 'Bad' && (row['Savings'] === '<100 DM' || row['Savings'] === 'Unknown' || row['Savings'] === '100-500 DM') && row['Gender'] === 'Female');
export const group_predBad_savingsUnknown_female_IDs = group_predBad_savingsUnknown_female.map((row) => row.id);

export const group_predGood_savingsMedium_female =  data.filter((row) => row['Predicted Credit'] === 'Good' && row['Savings'] === '500-1000 DM' && row['Gender'] === 'Female');
export const group_predGood_savingsMedium_female_IDs = group_predGood_savingsMedium_female.map((row) => row.id);

export const group_predBad_savingsMedium_female = data.filter((row) => row['Predicted Credit'] === 'Bad' && row['Savings'] === '500-1000 DM' && row['Gender'] === 'Female');
export const group_predBad_savingsMedium_female_IDs = group_predBad_savingsMedium_female.map((row) => row.id);

export const group_predGood_savingsHigh_female = data.filter((row) => row['Predicted Credit'] === 'Good' && row['Savings'] === '>=1000 DM' && row['Gender'] === 'Female');
export const group_predGood_savingsHigh_female_IDs = group_predGood_savingsHigh_female.map((row) => row.id);

export const group_predBad_savingsHigh_female = data.filter((row) => row['Predicted Credit'] === 'Bad' && row['Savings'] === '>=1000 DM' && row['Gender'] === 'Female');
export const group_predBad_savingsHigh_female_IDs = group_predBad_savingsHigh_female.map((row) => row.id);


// 2.2.2 gender (male) + Savings + (good/bad predictions)
export const group_predGood_savingsUnknown_male = data.filter((row) => row['Predicted Credit'] === 'Good' && (row['Savings'] === '<100 DM' || row['Savings'] === 'Unknown' || row['Savings'] === '100-500 DM') && row['Gender'] === 'Male');
export const group_predGood_savingsUnknown_male_IDs = group_predGood_savingsUnknown_male.map((row) => row.id);

export const group_predBad_savingsUnknown_male = data.filter((row) => row['Predicted Credit'] === 'Bad' && (row['Savings'] === '<100 DM' || row['Savings'] === 'Unknown' || row['Savings'] === '100-500 DM') && row['Gender'] === 'Male');
export const group_predBad_savingsUnknown_male_IDs = group_predBad_savingsUnknown_male.map((row) => row.id);

export const group_predGood_savingsMedium_male =  data.filter((row) => row['Predicted Credit'] === 'Good' && row['Savings'] === '500-1000 DM' && row['Gender'] === 'Male');
export const group_predGood_savingsMedium_male_IDs = group_predGood_savingsMedium_male.map((row) => row.id);

export const group_predBad_savingsMedium_male = data.filter((row) => row['Predicted Credit'] === 'Bad' && row['Savings'] === '500-1000 DM' && row['Gender'] === 'Male');
export const group_predBad_savingsMedium_male_IDs = group_predBad_savingsMedium_male.map((row) => row.id);

export const group_predGood_savingsHigh_male = data.filter((row) => row['Predicted Credit'] === 'Good' && row['Savings'] === '>=1000 DM' && row['Gender'] === 'Male');
export const group_predGood_savingsHigh_male_IDs = group_predGood_savingsHigh_male.map((row) => row.id);

export const group_predBad_savingsHigh_male = data.filter((row) => row['Predicted Credit'] === 'Bad' && row['Savings'] === '>=1000 DM' && row['Gender'] === 'Male');
export const group_predBad_savingsHigh_male_IDs = group_predBad_savingsHigh_male.map((row) => row.id);



// 2.3 gender + Employment
// condition: 'Unemployed/<1 Year','1-4 Years', '>=4 Years'
//Unemployed ('Unemployed/<1 Year')
// <1 Year ('Unemployed/<1 Year')
//1-4 Years ('1-4 Years')
//4-7 Years ('>=4 Years')
//>=7 Years ('>=4 Years')

// 2.3.1 gender (female) + Employment + (good/bad predictions)
export const group_predGood_employmentUnemployed_female = data.filter((row) => row['Predicted Credit'] === 'Good' && (row['Employment'] === 'Unemployed' || row['Employment'] === '<1 Year') && row['Gender'] === 'Female');
export const group_predGood_employmentUnemployed_female_IDs = group_predGood_employmentUnemployed_female.map((row) => row.id);

export const group_predBad_employmentUnemployed_female = data.filter((row) => row['Predicted Credit'] === 'Bad' && (row['Employment'] === 'Unemployed' || row['Employment'] === '<1 Year') && row['Gender'] === 'Female');
export const group_predBad_employmentUnemployed_female_IDs = group_predBad_employmentUnemployed_female.map((row) => row.id);

export const group_predGood_employmentMedium_female =  data.filter((row) => row['Predicted Credit'] === 'Good' && row['Employment'] === '1-4 Years' && row['Gender'] === 'Female');
export const group_predGood_employmentMedium_female_IDs = group_predGood_employmentMedium_female.map((row) => row.id);

export const group_predBad_employmentMedium_female = data.filter((row) => row['Predicted Credit'] === 'Bad' && row['Employment'] === '1-4 Years' && row['Gender'] === 'Female');
export const group_predBad_employmentMedium_female_IDs = group_predBad_employmentMedium_female.map((row) => row.id);

export const group_predGood_employmentHigh_female = data.filter((row) => row['Predicted Credit'] === 'Good' && (row['Employment'] === '4-7 Years' || row['Employment'] === '>=7 Years') && row['Gender'] === 'Female');
export const group_predGood_employmentHigh_female_IDs = group_predGood_employmentHigh_female.map((row) => row.id);

export const group_predBad_employmentHigh_female = data.filter((row) => row['Predicted Credit'] === 'Bad' && (row['Employment'] === '4-7 Years' || row['Employment'] === '>=7 Years') && row['Gender'] === 'Female');
export const group_predBad_employmentHigh_female_IDs = group_predBad_employmentHigh_female.map((row) => row.id);


// 2.3.2 gender (male) + Employment + (good/bad predictions)
export const group_predGood_employmentUnemployed_male = data.filter((row) => row['Predicted Credit'] === 'Good' && (row['Employment'] === 'Unemployed' || row['Employment'] === '<1 Year') && row['Gender'] === 'Male');
export const group_predGood_employmentUnemployed_male_IDs = group_predGood_employmentUnemployed_male.map((row) => row.id);

export const group_predBad_employmentUnemployed_male = data.filter((row) => row['Predicted Credit'] === 'Bad' && (row['Employment'] === 'Unemployed' || row['Employment'] === '<1 Year') && row['Gender'] === 'Male');
export const group_predBad_employmentUnemployed_male_IDs = group_predBad_employmentUnemployed_male.map((row) => row.id);

export const group_predGood_employmentMedium_male =  data.filter((row) => row['Predicted Credit'] === 'Good' && row['Employment'] === '1-4 Years' && row['Gender'] === 'Male');
export const group_predGood_employmentMedium_male_IDs = group_predGood_employmentMedium_male.map((row) => row.id);

export const group_predBad_employmentMedium_male = data.filter((row) => row['Predicted Credit'] === 'Bad' && row['Employment'] === '1-4 Years' && row['Gender'] === 'Male');
export const group_predBad_employmentMedium_male_IDs = group_predBad_employmentMedium_male.map((row) => row.id);

export const group_predGood_employmentHigh_male = data.filter((row) => row['Predicted Credit'] === 'Good' && (row['Employment'] === '4-7 Years' || row['Employment'] === '>=7 Years') && row['Gender'] === 'Male');
export const group_predGood_employmentHigh_male_IDs = group_predGood_employmentHigh_male.map((row) => row.id);

export const group_predBad_employmentHigh_male = data.filter((row) => row['Predicted Credit'] === 'Bad' && (row['Employment'] === '4-7 Years' || row['Employment'] === '>=7 Years') && row['Gender'] === 'Male');
export const group_predBad_employmentHigh_male_IDs = group_predBad_employmentHigh_male.map((row) => row.id);

// 2.4 gender + Credit History
//condition: 'Paid back duly/Paid up/No credits','Delayed', 'Other Credits Existing'
//All Credits Paid Back Duly ('Paid back duly/Paid up/No credits')
//Credits Paid Back Duly but Paid Up ('Paid back duly/Paid up/No credits')
//No credits Taken ('Paid back duly/Paid up/No credits')
//Delayed ('Delayed')
//Other Credits Existing ('Other Credits Existing')

// 2.4.1 gender (female) + Credit History + (good/bad predictions)
export const group_predGood_creditHistoryPaid_female = data.filter((row) => row['Predicted Credit'] === 'Good' && (row['Credit History'] === 'All Credits Paid Back Duly' || row['Credit History'] === 'Credits Paid Back Duly but Paid Up'|| row['Credit History'] === 'No credits Taken') && row['Gender'] === 'Female');
export const group_predGood_creditHistoryPaid_female_IDs = group_predGood_creditHistoryPaid_female.map((row) => row.id);

export const group_predBad_creditHistoryPaid_female = data.filter((row) => row['Predicted Credit'] === 'Bad' && (row['Credit History'] === 'All Credits Paid Back Duly' || row['Credit History'] === 'Credits Paid Back Duly but Paid Up'|| row['Credit History'] === 'No credits Taken') && row['Gender'] === 'Female');
export const group_predBad_creditHistoryPaid_female_IDs = group_predBad_creditHistoryPaid_female.map((row) => row.id);

export const group_predGood_creditHistoryDelayed_female =  data.filter((row) => row['Predicted Credit'] === 'Good' && row['Credit History'] === 'Delayed' && row['Gender'] === 'Female');
export const group_predGood_creditHistoryDelayed_female_IDs = group_predGood_creditHistoryDelayed_female.map((row) => row.id);

export const group_predBad_creditHistoryDelayed_female = data.filter((row) => row['Predicted Credit'] === 'Bad' && row['Credit History'] === 'Delayed' && row['Gender'] === 'Female');
export const group_predBad_creditHistoryDelayed_female_IDs = group_predBad_creditHistoryDelayed_female.map((row) => row.id);

export const group_predGood_creditHistoryOthers_female = data.filter((row) => row['Predicted Credit'] === 'Good' && row['Credit History'] === 'Other Credits Existing' && row['Gender'] === 'Female');
export const group_predGood_creditHistoryOthers_female_IDs = group_predGood_creditHistoryOthers_female.map((row) => row.id);

export const group_predBad_creditHistoryOthers_female = data.filter((row) => row['Predicted Credit'] === 'Bad' && row['Credit History'] === 'Other Credits Existing' && row['Gender'] === 'Female');
export const group_predBad_creditHistoryOthers_female_IDs = group_predBad_creditHistoryOthers_female.map((row) => row.id);

// 2.4.2 gender (male) + Credit History + (good/bad predictions)
export const group_predGood_creditHistoryPaid_male = data.filter((row) => row['Predicted Credit'] === 'Good' && (row['Credit History'] === 'All Credits Paid Back Duly' || row['Credit History'] === 'Credits Paid Back Duly but Paid Up'|| row['Credit History'] === 'No credits Taken') && row['Gender'] === 'Male');
export const group_predGood_creditHistoryPaid_male_IDs = group_predGood_creditHistoryPaid_male.map((row) => row.id);

export const group_predBad_creditHistoryPaid_male = data.filter((row) => row['Predicted Credit'] === 'Bad' && (row['Credit History'] === 'All Credits Paid Back Duly' || row['Credit History'] === 'Credits Paid Back Duly but Paid Up'|| row['Credit History'] === 'No credits Taken') && row['Gender'] === 'Male');
export const group_predBad_creditHistoryPaid_male_IDs = group_predBad_creditHistoryPaid_male.map((row) => row.id);

export const group_predGood_creditHistoryDelayed_male =  data.filter((row) => row['Predicted Credit'] === 'Good' && row['Credit History'] === 'Delayed' && row['Gender'] === 'Male');
export const group_predGood_creditHistoryDelayed_male_IDs = group_predGood_creditHistoryDelayed_male.map((row) => row.id);

export const group_predBad_creditHistoryDelayed_male = data.filter((row) => row['Predicted Credit'] === 'Bad' && row['Credit History'] === 'Delayed' && row['Gender'] === 'Male');
export const group_predBad_creditHistoryDelayed_male_IDs = group_predBad_creditHistoryDelayed_male.map((row) => row.id);

export const group_predGood_creditHistoryOthers_male = data.filter((row) => row['Predicted Credit'] === 'Good' && row['Credit History'] === 'Other Credits Existing' && row['Gender'] === 'Male');
export const group_predGood_creditHistoryOthers_male_IDs = group_predGood_creditHistoryOthers_male.map((row) => row.id);

export const group_predBad_creditHistoryOthers_male = data.filter((row) => row['Predicted Credit'] === 'Bad' && row['Credit History'] === 'Other Credits Existing' && row['Gender'] === 'Male');
export const group_predBad_creditHistoryOthers_male_IDs = group_predBad_creditHistoryOthers_male.map((row) => row.id);

