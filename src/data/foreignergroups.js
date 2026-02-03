import data from '../data/results.json';

export const group_predGood_realBad_female = data.filter((row) => row['Predicted Credit'] === 'Good' && row['Real Credit'] === 'Bad' && row['Foreign Worker'] === 'Yes');
export const group_predGood_realBad_female_IDs = group_predGood_realBad_female.map((row) => row.id);

export const group_predGood_realBad_male = data.filter((row) => row['Predicted Credit'] === 'Good' && row['Real Credit'] === 'Bad' && row['Foreign Worker'] === 'No');
export const group_predGood_realBad_male_IDs = group_predGood_realBad_male.map((row) => row.id);

export const group_predGood_realGood_female = data.filter((row) => row['Predicted Credit'] === 'Good' && row['Real Credit'] === 'Good' && row['Foreign Worker'] === 'Yes');
export const group_predGood_realGood_female_IDs = group_predGood_realGood_female.map((row) => row.id);

export const group_predGood_realGood_male = data.filter((row) => row['Predicted Credit'] === 'Good' && row['Real Credit'] === 'Good' && row['Foreign Worker'] === 'No');
export const group_predGood_realGood_male_IDs = group_predGood_realGood_male.map((row) => row.id);

export const group_predBad_realBad_female  = data.filter((row) => row['Predicted Credit'] === 'Bad' && row['Real Credit'] === 'Bad' && row['Foreign Worker'] === 'Yes');
export const group_predBad_realBad_female_IDs = group_predBad_realBad_female.map((row) => row.id);

export const group_predBad_realBad_male  = data.filter((row) => row['Predicted Credit'] === 'Bad' && row['Real Credit'] === 'Bad' && row['Foreign Worker'] === 'No');
export const group_predBad_realBad_male_IDs = group_predBad_realBad_male.map((row) => row.id);

export const group_predBad_realGood_female = data.filter((row) => row['Predicted Credit'] === 'Bad' && row['Real Credit'] === 'Good' && row['Foreign Worker'] === 'Yes');
export const group_predBad_realGood_female_IDs = group_predBad_realGood_female.map((row) => row.id);

export const group_predBad_realGood_male = data.filter((row) => row['Predicted Credit'] === 'Bad' && row['Real Credit'] === 'Good' && row['Foreign Worker'] === 'No');
export const group_predBad_realGood_male_IDs = group_predBad_realGood_male.map((row) => row.id);


export const group_predGood_jobMangagement_female = data.filter((row) => row['Predicted Credit'] === 'Good' && row['Job'] === 'Management/Officer' && row['Foreign Worker'] === 'Yes');
export const group_predGood_jobMangagement_female_IDs = group_predGood_jobMangagement_female.map((row) => row.id);

export const group_predBad_jobMangagement_female = data.filter((row) => row['Predicted Credit'] === 'Bad' && row['Job'] === 'Management/Officer' && row['Foreign Worker'] === 'Yes');
export const group_predBad_jobMangagement_female_IDs = group_predBad_jobMangagement_female.map((row) => row.id);

export const group_predGood_jobSkilled_female = data.filter((row) => row['Predicted Credit'] === 'Good' && row['Job'] === 'Skilled Employee' && row['Foreign Worker'] === 'Yes');
export const group_predGood_jobSkilled_female_IDs = group_predGood_jobSkilled_female.map((row) => row.id);

export const group_predBad_jobSkilled_female = data.filter((row) => row['Predicted Credit'] === 'Bad' && row['Job'] === 'Skilled Employee' && row['Foreign Worker'] === 'Yes');
export const group_predBad_jobSkilled_female_IDs = group_predBad_jobSkilled_female.map((row) => row.id);

export const group_predGood_jobUnskilled_female = data.filter((row) => row['Predicted Credit'] === 'Good' && row['Job'] === 'Unskilled/Unemployed' && row['Foreign Worker'] === 'Yes');
export const group_predGood_jobUnskilled_female_IDs = group_predGood_jobUnskilled_female.map((row) => row.id);

export const group_predBad_jobUnskilled_female = data.filter((row) => row['Predicted Credit'] === 'Bad' && row['Job'] === 'Unskilled/Unemployed' && row['Foreign Worker'] === 'Yes');
export const group_predBad_jobUnskilled_female_IDs = group_predBad_jobUnskilled_female.map((row) => row.id);

export const group_predGood_jobMangagement_male = data.filter((row) => row['Predicted Credit'] === 'Good' && row['Job'] === 'Management/Officer' && row['Foreign Worker'] === 'No');
export const group_predGood_jobMangagement_male_IDs = group_predGood_jobMangagement_male.map((row) => row.id);

export const group_predBad_jobMangagement_male = data.filter((row) => row['Predicted Credit'] === 'Bad' && row['Job'] === 'Management/Officer' && row['Foreign Worker'] === 'No');
export const group_predBad_jobMangagement_male_IDs = group_predBad_jobMangagement_male.map((row) => row.id);

export const group_predGood_jobSkilled_male = data.filter((row) => row['Predicted Credit'] === 'Good' && row['Job'] === 'Skilled Employee' && row['Foreign Worker'] === 'No');
export const group_predGood_jobSkilled_male_IDs = group_predGood_jobSkilled_male.map((row) => row.id);

export const group_predBad_jobSkilled_male = data.filter((row) => row['Predicted Credit'] === 'Bad' && row['Job'] === 'Skilled Employee' && row['Foreign Worker'] === 'No');
export const group_predBad_jobSkilled_male_IDs = group_predBad_jobSkilled_male.map((row) => row.id);

export const group_predGood_jobUnskilled_male = data.filter((row) => row['Predicted Credit'] === 'Good' && row['Job'] === 'Unskilled/Unemployed' && row['Foreign Worker'] === 'No');
export const group_predGood_jobUnskilled_male_IDs = group_predGood_jobUnskilled_male.map((row) => row.id);

export const group_predBad_jobUnskilled_male = data.filter((row) => row['Predicted Credit'] === 'Bad' && row['Job'] === 'Unskilled/Unemployed' && row['Foreign Worker'] === 'No');
export const group_predBad_jobUnskilled_male_IDs = group_predBad_jobUnskilled_male.map((row) => row.id);


export const group_predGood_savingsUnknown_female = data.filter((row) => row['Predicted Credit'] === 'Good' && (row['Savings'] === '<100 DM' || row['Savings'] === 'Unknown' || row['Savings'] === '100-500 DM') && row['Foreign Worker'] === 'Yes');
export const group_predGood_savingsUnknown_female_IDs = group_predGood_savingsUnknown_female.map((row) => row.id);

export const group_predBad_savingsUnknown_female = data.filter((row) => row['Predicted Credit'] === 'Bad' && (row['Savings'] === '<100 DM' || row['Savings'] === 'Unknown' || row['Savings'] === '100-500 DM') && row['Foreign Worker'] === 'Yes');
export const group_predBad_savingsUnknown_female_IDs = group_predBad_savingsUnknown_female.map((row) => row.id);

export const group_predGood_savingsMedium_female =  data.filter((row) => row['Predicted Credit'] === 'Good' && row['Savings'] === '500-1000 DM' && row['Foreign Worker'] === 'Yes');
export const group_predGood_savingsMedium_female_IDs = group_predGood_savingsMedium_female.map((row) => row.id);

export const group_predBad_savingsMedium_female = data.filter((row) => row['Predicted Credit'] === 'Bad' && row['Savings'] === '500-1000 DM' && row['Foreign Worker'] === 'Yes');
export const group_predBad_savingsMedium_female_IDs = group_predBad_savingsMedium_female.map((row) => row.id);

export const group_predGood_savingsHigh_female = data.filter((row) => row['Predicted Credit'] === 'Good' && row['Savings'] === '>=1000 DM' && row['Foreign Worker'] === 'Yes');
export const group_predGood_savingsHigh_female_IDs = group_predGood_savingsHigh_female.map((row) => row.id);

export const group_predBad_savingsHigh_female = data.filter((row) => row['Predicted Credit'] === 'Bad' && row['Savings'] === '>=1000 DM' && row['Foreign Worker'] === 'Yes');
export const group_predBad_savingsHigh_female_IDs = group_predBad_savingsHigh_female.map((row) => row.id);


export const group_predGood_savingsUnknown_male = data.filter((row) => row['Predicted Credit'] === 'Good' && (row['Savings'] === '<100 DM' || row['Savings'] === 'Unknown' || row['Savings'] === '100-500 DM') && row['Foreign Worker'] === 'No');
export const group_predGood_savingsUnknown_male_IDs = group_predGood_savingsUnknown_male.map((row) => row.id);

export const group_predBad_savingsUnknown_male = data.filter((row) => row['Predicted Credit'] === 'Bad' && (row['Savings'] === '<100 DM' || row['Savings'] === 'Unknown' || row['Savings'] === '100-500 DM') && row['Foreign Worker'] === 'No');
export const group_predBad_savingsUnknown_male_IDs = group_predBad_savingsUnknown_male.map((row) => row.id);

export const group_predGood_savingsMedium_male =  data.filter((row) => row['Predicted Credit'] === 'Good' && row['Savings'] === '500-1000 DM' && row['Foreign Worker'] === 'No');
export const group_predGood_savingsMedium_male_IDs = group_predGood_savingsMedium_male.map((row) => row.id);

export const group_predBad_savingsMedium_male = data.filter((row) => row['Predicted Credit'] === 'Bad' && row['Savings'] === '500-1000 DM' && row['Foreign Worker'] === 'No');
export const group_predBad_savingsMedium_male_IDs = group_predBad_savingsMedium_male.map((row) => row.id);

export const group_predGood_savingsHigh_male = data.filter((row) => row['Predicted Credit'] === 'Good' && row['Savings'] === '>=1000 DM' && row['Foreign Worker'] === 'No');
export const group_predGood_savingsHigh_male_IDs = group_predGood_savingsHigh_male.map((row) => row.id);

export const group_predBad_savingsHigh_male = data.filter((row) => row['Predicted Credit'] === 'Bad' && row['Savings'] === '>=1000 DM' && row['Foreign Worker'] === 'No');
export const group_predBad_savingsHigh_male_IDs = group_predBad_savingsHigh_male.map((row) => row.id);




export const group_predGood_employmentUnemployed_female = data.filter((row) => row['Predicted Credit'] === 'Good' && (row['Employment'] === 'Unemployed' || row['Employment'] === '<1 Year') && row['Foreign Worker'] === 'Yes');
export const group_predGood_employmentUnemployed_female_IDs = group_predGood_employmentUnemployed_female.map((row) => row.id);

export const group_predBad_employmentUnemployed_female = data.filter((row) => row['Predicted Credit'] === 'Bad' && (row['Employment'] === 'Unemployed' || row['Employment'] === '<1 Year') && row['Foreign Worker'] === 'Yes');
export const group_predBad_employmentUnemployed_female_IDs = group_predBad_employmentUnemployed_female.map((row) => row.id);

export const group_predGood_employmentMedium_female =  data.filter((row) => row['Predicted Credit'] === 'Good' && row['Employment'] === '1-4 Years' && row['Foreign Worker'] === 'Yes');
export const group_predGood_employmentMedium_female_IDs = group_predGood_employmentMedium_female.map((row) => row.id);

export const group_predBad_employmentMedium_female = data.filter((row) => row['Predicted Credit'] === 'Bad' && row['Employment'] === '1-4 Years' && row['Foreign Worker'] === 'Yes');
export const group_predBad_employmentMedium_female_IDs = group_predBad_employmentMedium_female.map((row) => row.id);

export const group_predGood_employmentHigh_female = data.filter((row) => row['Predicted Credit'] === 'Good' && (row['Employment'] === '4-7 Years' || row['Employment'] === '>=7 Years') && row['Foreign Worker'] === 'Yes');
export const group_predGood_employmentHigh_female_IDs = group_predGood_employmentHigh_female.map((row) => row.id);

export const group_predBad_employmentHigh_female = data.filter((row) => row['Predicted Credit'] === 'Bad' && (row['Employment'] === '4-7 Years' || row['Employment'] === '>=7 Years') && row['Foreign Worker'] === 'Yes');
export const group_predBad_employmentHigh_female_IDs = group_predBad_employmentHigh_female.map((row) => row.id);


export const group_predGood_employmentUnemployed_male = data.filter((row) => row['Predicted Credit'] === 'Good' && (row['Employment'] === 'Unemployed' || row['Employment'] === '<1 Year') && row['Foreign Worker'] === 'No');
export const group_predGood_employmentUnemployed_male_IDs = group_predGood_employmentUnemployed_male.map((row) => row.id);

export const group_predBad_employmentUnemployed_male = data.filter((row) => row['Predicted Credit'] === 'Bad' && (row['Employment'] === 'Unemployed' || row['Employment'] === '<1 Year') && row['Foreign Worker'] === 'No');
export const group_predBad_employmentUnemployed_male_IDs = group_predBad_employmentUnemployed_male.map((row) => row.id);

export const group_predGood_employmentMedium_male =  data.filter((row) => row['Predicted Credit'] === 'Good' && row['Employment'] === '1-4 Years' && row['Foreign Worker'] === 'No');
export const group_predGood_employmentMedium_male_IDs = group_predGood_employmentMedium_male.map((row) => row.id);

export const group_predBad_employmentMedium_male = data.filter((row) => row['Predicted Credit'] === 'Bad' && row['Employment'] === '1-4 Years' && row['Foreign Worker'] === 'No');
export const group_predBad_employmentMedium_male_IDs = group_predBad_employmentMedium_male.map((row) => row.id);

export const group_predGood_employmentHigh_male = data.filter((row) => row['Predicted Credit'] === 'Good' && (row['Employment'] === '4-7 Years' || row['Employment'] === '>=7 Years') && row['Foreign Worker'] === 'No');
export const group_predGood_employmentHigh_male_IDs = group_predGood_employmentHigh_male.map((row) => row.id);

export const group_predBad_employmentHigh_male = data.filter((row) => row['Predicted Credit'] === 'Bad' && (row['Employment'] === '4-7 Years' || row['Employment'] === '>=7 Years') && row['Foreign Worker'] === 'No');
export const group_predBad_employmentHigh_male_IDs = group_predBad_employmentHigh_male.map((row) => row.id);


export const group_predGood_creditHistoryPaid_female = data.filter((row) => row['Predicted Credit'] === 'Good' && (row['Credit History'] === 'All Credits Paid Back Duly' || row['Credit History'] === 'Credits Paid Back Duly but Paid Up'|| row['Credit History'] === 'No credits Taken') && row['Foreign Worker'] === 'Yes');
export const group_predGood_creditHistoryPaid_female_IDs = group_predGood_creditHistoryPaid_female.map((row) => row.id);

export const group_predBad_creditHistoryPaid_female = data.filter((row) => row['Predicted Credit'] === 'Bad' && (row['Credit History'] === 'All Credits Paid Back Duly' || row['Credit History'] === 'Credits Paid Back Duly but Paid Up'|| row['Credit History'] === 'No credits Taken') && row['Foreign Worker'] === 'Yes');
export const group_predBad_creditHistoryPaid_female_IDs = group_predBad_creditHistoryPaid_female.map((row) => row.id);

export const group_predGood_creditHistoryDelayed_female =  data.filter((row) => row['Predicted Credit'] === 'Good' && row['Credit History'] === 'Delayed' && row['Foreign Worker'] === 'Yes');
export const group_predGood_creditHistoryDelayed_female_IDs = group_predGood_creditHistoryDelayed_female.map((row) => row.id);

export const group_predBad_creditHistoryDelayed_female = data.filter((row) => row['Predicted Credit'] === 'Bad' && row['Credit History'] === 'Delayed' && row['Foreign Worker'] === 'Yes');
export const group_predBad_creditHistoryDelayed_female_IDs = group_predBad_creditHistoryDelayed_female.map((row) => row.id);

export const group_predGood_creditHistoryOthers_female = data.filter((row) => row['Predicted Credit'] === 'Good' && row['Credit History'] === 'Other Credits Existing' && row['Foreign Worker'] === 'Yes');
export const group_predGood_creditHistoryOthers_female_IDs = group_predGood_creditHistoryOthers_female.map((row) => row.id);

export const group_predBad_creditHistoryOthers_female = data.filter((row) => row['Predicted Credit'] === 'Bad' && row['Credit History'] === 'Other Credits Existing' && row['Foreign Worker'] === 'Yes');
export const group_predBad_creditHistoryOthers_female_IDs = group_predBad_creditHistoryOthers_female.map((row) => row.id);

export const group_predGood_creditHistoryPaid_male = data.filter((row) => row['Predicted Credit'] === 'Good' && (row['Credit History'] === 'All Credits Paid Back Duly' || row['Credit History'] === 'Credits Paid Back Duly but Paid Up'|| row['Credit History'] === 'No credits Taken') && row['Foreign Worker'] === 'No');
export const group_predGood_creditHistoryPaid_male_IDs = group_predGood_creditHistoryPaid_male.map((row) => row.id);

export const group_predBad_creditHistoryPaid_male = data.filter((row) => row['Predicted Credit'] === 'Bad' && (row['Credit History'] === 'All Credits Paid Back Duly' || row['Credit History'] === 'Credits Paid Back Duly but Paid Up'|| row['Credit History'] === 'No credits Taken') && row['Foreign Worker'] === 'No');
export const group_predBad_creditHistoryPaid_male_IDs = group_predBad_creditHistoryPaid_male.map((row) => row.id);

export const group_predGood_creditHistoryDelayed_male =  data.filter((row) => row['Predicted Credit'] === 'Good' && row['Credit History'] === 'Delayed' && row['Foreign Worker'] === 'No');
export const group_predGood_creditHistoryDelayed_male_IDs = group_predGood_creditHistoryDelayed_male.map((row) => row.id);

export const group_predBad_creditHistoryDelayed_male = data.filter((row) => row['Predicted Credit'] === 'Bad' && row['Credit History'] === 'Delayed' && row['Foreign Worker'] === 'No');
export const group_predBad_creditHistoryDelayed_male_IDs = group_predBad_creditHistoryDelayed_male.map((row) => row.id);

export const group_predGood_creditHistoryOthers_male = data.filter((row) => row['Predicted Credit'] === 'Good' && row['Credit History'] === 'Other Credits Existing' && row['Foreign Worker'] === 'No');
export const group_predGood_creditHistoryOthers_male_IDs = group_predGood_creditHistoryOthers_male.map((row) => row.id);

export const group_predBad_creditHistoryOthers_male = data.filter((row) => row['Predicted Credit'] === 'Bad' && row['Credit History'] === 'Other Credits Existing' && row['Foreign Worker'] === 'No');
export const group_predBad_creditHistoryOthers_male_IDs = group_predBad_creditHistoryOthers_male.map((row) => row.id);

