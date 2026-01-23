


// MUIX datagrid：
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import data from '../data/results.json';
import Tooltip from '@mui/material/Tooltip';
import { DataGrid, GridToolbarContainer, GridToolbarColumnsButton, GridToolbarFilterButton, GridToolbarDensitySelector } from '@mui/x-data-grid';
import "../styles.css"
import ChangeResultShow from "./ChangeResultShow"

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const { useState } = React;

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
    </GridToolbarContainer>
  );
}


  

export default function DataView(selectedID) {

    const [userChoices, setUserChoices] = React.useState({});// for change rated credit
    const [userSelections, setUserSelections] = React.useState({});// for change predicted credit

    const columns = [
        { field: 'id', headerName: 'ID', width: 50 },//field为对应数据中的key，headerName为显示在tabel中的column name
        { field: 'Duration', headerName: 'Duration', width: 100 },
        { field: 'Credit Amount', headerName: 'Credit Amount', width: 130 }, 
        { field: 'Installment Rate', headerName: 'Installment Rate', width: 130 },
        { field: 'Residence Length', headerName: 'Residence Length', width: 130 },
        { field: 'Existing Credits', headerName: 'Existing Credits', width: 130 },
        { field: 'Dependents', headerName: 'Dependents', width: 100 },
        { field: 'Age', headerName: 'Age', width: 100 },
        { field: 'Gender', headerName: 'Gender', width: 100 },
        { field: 'Checking Account', headerName: 'Checking Account', width: 150,
                    valueGetter: (params) => params.value,  
                    renderCell: (params) => (
                      <Tooltip title={params.value}>  
                        {params.formattedValue} 
                      </Tooltip>) },
        { field: 'Credit History', headerName: 'Credit History', width: 150, 
                    valueGetter: (params) => params.value,  
                    renderCell: (params) => (
                      <Tooltip title={params.value}>  
                        {params.formattedValue} 
                      </Tooltip>)  },
        { field: 'Purpose', headerName: 'Purpose', width: 100 },
        { field: 'Savings', headerName: 'Savings', width: 100 },
        { field: 'Employment', headerName: 'Employment', width: 100 },
        { field: 'Debtors', headerName: 'Debtors', width: 100 },
        { field: 'Property', headerName: 'Property', width: 100 },
        { field: 'Installment Plans', headerName: 'Installment Plans', width: 150 },
        { field: 'Housing', headerName: 'Housing', width: 100 },
        { field: 'Job', headerName: 'Job', width: 100, 
                  valueGetter: (params) => params.value,  
                  renderCell: (params) => (
                    <Tooltip title={params.value}>  
                      {params.formattedValue} 
                    </Tooltip>)  }, 
        { field: 'Telephone', headerName: 'Telephone', width: 100 },
        { field: 'Foreign Worker', headerName: 'Foreign Worker', width: 150 },
        { field: 'Real Credit', headerName: 'Rated Credit', width: 120, className: 'sticky-cell',
              renderCell: (params) => {
                const realCreditValue = params.value;
      
                // 根据 'Good' 或 'Bad' 的值来选择图像
                let imageSource;
                if (realCreditValue === 'Good') {
                  imageSource = '/GoodIcon.png'; // 将图片放置于public文件夹下面，同html放在一起
                } else if (realCreditValue === 'Bad') {
                  imageSource = '/BadIcon.png'; // 将图片放置于public文件夹下面，同html放在一起
                } 
      
                return (
                  <img
                    src={imageSource}
                    alt={realCreditValue}
                    style={{ maxWidth: '100%', maxHeight: '100%', display: 'block' }}
                  />
                );
              },
              
        },
      
        { field: 'Predicted Credit', headerName: 'Predicted Credit', width: 120,className: 'sticky-cell',
              renderCell: (params) => {
                const predCreditValue = params.value;
      
                // 根据 'Good' 或 'Bad' 的值来选择图像
                let imageSource;
                if (predCreditValue === 'Good') {
                  imageSource = '/GoodIcon.png'; // 将图片放置于public文件夹下面，同html放在一起
                } else if (predCreditValue === 'Bad') {
                  imageSource = '/BadIcon.png'; // 将图片放置于public文件夹下面，同html放在一起
                } 
      
                return (
                  <img
                    src={imageSource}
                    alt={predCreditValue}
                    style={{ maxWidth: '100%', maxHeight: '100%', display: 'block' }}
                  />
                );
              },
              
        },
          
      
        { field: 'Probability', headerName: 'Probability', width: 120,className: 'sticky-cell',
              renderCell: (params) => {
              // 获取概率数据
              const probabilities = params.value; // 这里假设 params.value 是一个包含两个概率值的数组 [0.21, 0.79]
              
              // 计算柱状图的宽度，假设容器宽度为 100px
              const maxWidth = 100;
              const bar1Width = Math.round(probabilities[0] * maxWidth);
              const bar2Width = maxWidth - bar1Width;
              
              // 返回包含柱状图的 JSX
          
                return (
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Tooltip title={`Probability of Bad Credit: ${probabilities[0]}`}>
                      <div
                          style={{
                            width: `${bar1Width}px`,
                            height: '20px', // 柱状图高度
                            backgroundColor: '#FF3366', // 柱状图颜色
                            fontSize: '8px'
                          }}
                        >
                          {/* {probabilities[0]} */}
                        </div>
                      </Tooltip>
                      <Tooltip title={`Probability of Good Credit: ${probabilities[1]}`}>
                        <div
                          style={{
                            width: `${bar2Width}px`,
                            height: '20px', // 柱状图高度
                            backgroundColor: '#33CC33', // 柱状图颜色
                            fontSize: '8px'
                          }}
                        >
                          {/* {probabilities[1]} */}
                        </div>
                      </Tooltip>
                  </div>
                );
              },
             
        },

        
        { field: 'Change Rated Credit', // results.json中无此field
          headerName: 'Change Rated Credit',
          width: 160,
          renderCell: (params) => {
            return (
              <div>
                <label>
                  <input
                    type="radio"
                    name={`changeRated-${params.row.id}`}
                    value="Good"
                    checked={userChoices[params.row.id] === 'Good'}
                    onChange={() => handleRadioChangeRated(params.row.id, 'Good')}
                  />
                  Good
                </label>
                <label>
                  <input
                    type="radio"
                    name={`changeRated-${params.row.id}`}
                    value="Bad"
                    checked={userChoices[params.row.id] === 'Bad'}
                    onChange={() => handleRadioChangeRated(params.row.id, 'Bad')}
                  />
                  Bad
                </label>
              </div>
            );
          }
        },   

        
        { field: 'Change Predicted Credit', // results.json中无此field
          headerName: 'Change Predicted Credit',
          width: 185,
          renderCell: (params) => {
            return (
              <div>
                <label>
                  <input
                    type="radio"
                    name={`changePredicted-${params.row.id}`}
                    value="Good"
                    checked={userSelections[params.row.id] === 'Good'}
                    onChange={() => handleRadioChangePredicted(params.row.id, 'Good')}
                  />
                  Good
                </label>
                <label>
                  <input
                    type="radio"
                    name={`changePredicted-${params.row.id}`}
                    value="Bad"
                    checked={userSelections[params.row.id] === 'Bad'}
                    onChange={() => handleRadioChangePredicted(params.row.id, 'Bad')}
                  />
                  Bad
                </label>
              </div>
            );
          }
        },   
        ];
      
      

    
    // 1 Gender
    const [showChangeResult, setShowChangeResult] = useState(false);
    //1.1 DP
    const [percentageFemale, setPercentageFemale] = useState(0);
    const [percentageMale, setPercentageMale] = useState(0);
    // 1.2 EO
    const [percentageFemale_EO, setPercentageFemale_EO] = useState(0);
    const [percentageMale_EO, setPercentageMale_EO] = useState(0);
    // 1.3 PE
    const [percentageFemale_PE, setPercentageFemale_PE] = useState(0);
    const [percentageMale_PE, setPercentageMale_PE] = useState(0);
    //1.4 EOS
    // 1.5 OT
    const [percentageFemale_OT, setPercentageFemale_OT] = useState(0);
    const [percentageMale_OT, setPercentageMale_OT] = useState(0);

    // 2 Foreign worker
    const [showChangeResult_FW, setShowChangeResult_FW] = useState(false);
    //1.1 DP
    const [percentageForeigner, setPercentageForeigner] = useState(0);
    const [percentageLocal, setPercentageLocal] = useState(0);
    // 1.2 EO
    const [percentageForeigner_EO, setPercentageForeigner_EO] = useState(0);
    const [percentageLocal_EO, setPercentageLocal_EO] = useState(0);
    // 1.3 PE
    const [percentageForeigner_PE, setPercentageForeigner_PE] = useState(0);
    const [percentageLocal_PE, setPercentageLocal_PE] = useState(0);
    //1.4 EOS
    // 1.5 OT
    const [percentageForeigner_OT, setPercentageForeigner_OT] = useState(0);
    const [percentageLocal_OT, setPercentageLocal_OT] = useState(0);

    // 3 Age
    const [showChangeResult_AGE, setShowChangeResult_AGE] = useState(false);
    //1.1 DP
    const [percentageYoung, setPercentageYoung] = useState(0);
    const [percentageOld, setPercentageOld] = useState(0);
    // 1.2 EO
    const [percentageYoung_EO, setPercentageYoung_EO] = useState(0);
    const [percentageOld_EO, setPercentageOld_EO] = useState(0);
    // 1.3 PE
    const [percentageYoung_PE, setPercentageYoung_PE] = useState(0);
    const [percentageOld_PE, setPercentageOld_PE] = useState(0);
    //1.4 EOS
    // 1.5 OT
    const [percentageYoung_OT, setPercentageYoung_OT] = useState(0);
    const [percentageOld_OT, setPercentageOld_OT] = useState(0);
    
    



    
      function handleRadioChangePredicted(rowId, value) {
        setUserSelections((prev) => ({
          ...prev,
          [rowId]: value
        }));
        console.log('changed predictions',userSelections)
      }

      function handleRadioChangeRated(rowId, value) {
        setUserChoices((prev) => ({
          ...prev,
          [rowId]: value
        }));
      }

    //set Radio change event for the "box(sensitive feature)" update
    const [selectedSensitiveFeature, setSelectedSensitiveFeature] = useState("");
      
    function handleOkButtonClick() {

      setShowChangeResult_FW(false)
      setShowChangeResult_AGE(false)

      const user = {};   // predicted credit change
      const user_Rated = {}; // Rated credit change
      for (const row of data) {
        user[row.id] = userSelections[row.id] || row['Predicted Credit'];  // get final predicted credit change
        user_Rated[row.id] = userChoices[row.id] || row['Real Credit']; // Rated final change
      }

      console.log("user",user);  // 在控制台打印 user 变量以验证
      console.log("user_Rated",user_Rated);  // 在控制台打印 user 变量以验证

      // 1. DP for gender
      // 1.1 DP： female
      // 找出所有 Gender 为 female 的行
      const femaleRows = data.filter(row => row['Gender'] === 'Female');

      // 对于这些行，检查 user 是否有相应的 Good 值
      const goodCount_female = femaleRows.reduce((count, row) => {
          return count + (user[row.id] === 'Good' ? 1 : 0);
      }, 0);

      // 计算百分比
      const percentage_DP_female = (goodCount_female / femaleRows.length) * 100;

      // 1.2 DP： male
      // 找出所有 Gender 为 male 的行
      const maleRows = data.filter(row => row['Gender'] === 'Male');

      // 对于这些行，检查 user 是否有相应的 Good 值
      const goodCount_male = maleRows.reduce((count, row) => {
          return count + (user[row.id] === 'Good' ? 1 : 0);
      }, 0);

      // 计算百分比
      const percentage_DP_male = (goodCount_male / maleRows.length) * 100;

      console.log(`Percentage of 'Good' among females: ${percentage_DP_female.toFixed(0)}%`);
      console.log(`Percentage of 'Good' among males: ${percentage_DP_male.toFixed(0)}%`);

      setPercentageFemale(percentage_DP_female.toFixed(0));
      setPercentageMale(percentage_DP_male.toFixed(0));

       // 2. Equal Opportunity for gender
       // 找出所有 Rated Good 并且Gender 为 female 的行
       const RatedGoodfemaleRows = data.filter(row => row['Gender'] === 'Female' && row['Real Credit'] === 'Good');

       // 对于这些行，检查 user 是否有相应的 Good 值
       const predicted_goodCount_female = RatedGoodfemaleRows.reduce((count, row) => {
           return count + (user[row.id] === 'Good' ? 1 : 0);
       }, 0);
 
       // 计算百分比
       const percentage_EO_female = (predicted_goodCount_female / RatedGoodfemaleRows.length) * 100;
 
       // EO： male
        // 找出所有 Rated Good 并且Gender 为 male 的行
        const RatedGoodmaleRows = data.filter(row => row['Gender'] === 'Male' && row['Real Credit'] === 'Good');

        // 对于这些行，检查 user 是否有相应的 Good 值
        const predicted_goodCount_male = RatedGoodmaleRows.reduce((count, row) => {
            return count + (user[row.id] === 'Good' ? 1 : 0);
        }, 0);
  
        // 计算百分比
        const percentage_EO_male = (predicted_goodCount_male / RatedGoodmaleRows.length) * 100;
 
       setPercentageFemale_EO(percentage_EO_female.toFixed(0));
       setPercentageMale_EO(percentage_EO_male.toFixed(0));

       // 3 . PE
       // 找出所有 Rated Bad 并且Gender 为 female 的行
       const RatedBadfemaleRows = data.filter(row => row['Gender'] === 'Female' && row['Real Credit'] === 'Bad');

       // 对于这些行，检查 user 是否有相应的 Good 值
       const bad_predicted_goodCount_female = RatedBadfemaleRows.reduce((count, row) => {
           return count + (user[row.id] === 'Good' ? 1 : 0);
       }, 0);
 
       // 计算百分比
       const percentage_PE_female = ( bad_predicted_goodCount_female / RatedBadfemaleRows.length) * 100;
 
       // EO： male
       const RatedBadmaleRows = data.filter(row => row['Gender'] === 'Male' && row['Real Credit'] === 'Bad');

       // 对于这些行，检查 user 是否有相应的 Good 值
       const bad_predicted_goodCount_male = RatedBadmaleRows.reduce((count, row) => {
           return count + (user[row.id] === 'Good' ? 1 : 0);
       }, 0);
 
       // 计算百分比
       const percentage_PE_male = ( bad_predicted_goodCount_male / RatedBadmaleRows.length) * 100;
 
       setPercentageFemale_PE(percentage_PE_female.toFixed(0));
       setPercentageMale_PE(percentage_PE_male.toFixed(0));

       // 4 . EOs
       // 5. OT
       // 找出所有 Predicted 并且Gender 为 female 的行
       const PredictedGoodfemaleRows = data.filter(row => row['Gender'] === 'Female' && row['Predicted Credit'] === 'Good');

       // 对于这些行，检查 user_rated是否有相应的 Good 值
       const rated_goodCount_female = PredictedGoodfemaleRows.reduce((count, row) => {
           return count + (user_Rated[row.id] === 'Good' ? 1 : 0);
       }, 0);
 
       // 计算百分比
       const percentage_OT_female = (rated_goodCount_female / PredictedGoodfemaleRows.length) * 100;
 
       // 找出所有 Predicted 并且Gender 为 Male 的行
       const PredictedGoodmaleRows = data.filter(row => row['Gender'] === 'Male' && row['Predicted Credit'] === 'Good');

       // 对于这些行，检查 user_rated是否有相应的 Good 值
       const rated_goodCount_male = PredictedGoodmaleRows.reduce((count, row) => {
           return count + (user_Rated[row.id] === 'Good' ? 1 : 0);
       }, 0);
 
       // 计算百分比
       const percentage_OT_male = (rated_goodCount_male / PredictedGoodmaleRows.length) * 100;
 
       setPercentageFemale_OT(percentage_OT_female.toFixed(0));
       setPercentageMale_OT(percentage_OT_male.toFixed(0));
       






      setShowChangeResult(true);

     




     

    }

    function handleOkButtonClick_FW() {

      setShowChangeResult(false)
      setShowChangeResult_AGE(false)

      // 注意 变量名没有修改：female --》foreigner； male--》local

      const user = {};   // predicted credit change
      const user_Rated = {}; // Rated credit change
      for (const row of data) {
        user[row.id] = userSelections[row.id] || row['Predicted Credit'];  // get final predicted credit change
        user_Rated[row.id] = userChoices[row.id] || row['Real Credit']; // Rated final change
      }

      console.log("user",user);  // 在控制台打印 user 变量以验证
      console.log("user_Rated",user_Rated);  // 在控制台打印 user 变量以验证

      // 1. DP for gender
      // 1.1 DP： female
      // 找出所有 Gender 为 female 的行
      const femaleRows = data.filter(row => row['Foreign Worker'] === 'Yes');

      // 对于这些行，检查 user 是否有相应的 Good 值
      const goodCount_female = femaleRows.reduce((count, row) => {
          return count + (user[row.id] === 'Good' ? 1 : 0);
      }, 0);

      // 计算百分比
      const percentage_DP_female = (goodCount_female / femaleRows.length) * 100;

      // 1.2 DP： male
      // 找出所有 Gender 为 male 的行
      const maleRows = data.filter(row => row['Foreign Worker'] === 'No');

      // 对于这些行，检查 user 是否有相应的 Good 值
      const goodCount_male = maleRows.reduce((count, row) => {
          return count + (user[row.id] === 'Good' ? 1 : 0);
      }, 0);

      // 计算百分比
      const percentage_DP_male = (goodCount_male / maleRows.length) * 100;

     

      setPercentageForeigner(percentage_DP_female.toFixed(0));
      setPercentageLocal(percentage_DP_male.toFixed(0));

       // 2. Equal Opportunity for gender
       // 找出所有 Rated Good 并且Gender 为 female 的行
       const RatedGoodfemaleRows = data.filter(row => row['Foreign Worker'] === 'Yes' && row['Real Credit'] === 'Good');

       // 对于这些行，检查 user 是否有相应的 Good 值
       const predicted_goodCount_female = RatedGoodfemaleRows.reduce((count, row) => {
           return count + (user[row.id] === 'Good' ? 1 : 0);
       }, 0);
 
       // 计算百分比
       const percentage_EO_female = (predicted_goodCount_female / RatedGoodfemaleRows.length) * 100;
 
       // EO： male
        // 找出所有 Rated Good 并且Gender 为 male 的行
        const RatedGoodmaleRows = data.filter(row => row['Foreign Worker'] === 'No' && row['Real Credit'] === 'Good');

        // 对于这些行，检查 user 是否有相应的 Good 值
        const predicted_goodCount_male = RatedGoodmaleRows.reduce((count, row) => {
            return count + (user[row.id] === 'Good' ? 1 : 0);
        }, 0);
  
        // 计算百分比
        const percentage_EO_male = (predicted_goodCount_male / RatedGoodmaleRows.length) * 100;
 
        setPercentageForeigner_EO(percentage_EO_female.toFixed(0));
        setPercentageLocal_EO(percentage_EO_male.toFixed(0));

       // 3 . PE
       // 找出所有 Rated Bad 并且Gender 为 female 的行
       const RatedBadfemaleRows = data.filter(row => row['Foreign Worker'] === 'Yes' && row['Real Credit'] === 'Bad');

       // 对于这些行，检查 user 是否有相应的 Good 值
       const bad_predicted_goodCount_female = RatedBadfemaleRows.reduce((count, row) => {
           return count + (user[row.id] === 'Good' ? 1 : 0);
       }, 0);
 
       // 计算百分比
       const percentage_PE_female = ( bad_predicted_goodCount_female / RatedBadfemaleRows.length) * 100;
 
       // EO： male
       const RatedBadmaleRows = data.filter(row => row['Foreign Worker'] === 'No' && row['Real Credit'] === 'Bad');

       // 对于这些行，检查 user 是否有相应的 Good 值
       const bad_predicted_goodCount_male = RatedBadmaleRows.reduce((count, row) => {
           return count + (user[row.id] === 'Good' ? 1 : 0);
       }, 0);
 
       // 计算百分比
       const percentage_PE_male = ( bad_predicted_goodCount_male / RatedBadmaleRows.length) * 100;
 
       setPercentageForeigner_PE(percentage_PE_female.toFixed(0));
       setPercentageLocal_PE(percentage_PE_male.toFixed(0));

       // 4 . EOs
       // 5. OT
       // 找出所有 Predicted 并且Gender 为 female 的行
       const PredictedGoodfemaleRows = data.filter(row => row['Foreign Worker'] === 'Yes' && row['Predicted Credit'] === 'Good');

       // 对于这些行，检查 user_rated是否有相应的 Good 值
       const rated_goodCount_female = PredictedGoodfemaleRows.reduce((count, row) => {
           return count + (user_Rated[row.id] === 'Good' ? 1 : 0);
       }, 0);
 
       // 计算百分比
       const percentage_OT_female = (rated_goodCount_female / PredictedGoodfemaleRows.length) * 100;
 
       // 找出所有 Predicted 并且Gender 为 Male 的行
       const PredictedGoodmaleRows = data.filter(row => row['Foreign Worker'] === 'No' && row['Predicted Credit'] === 'Good');

       // 对于这些行，检查 user_rated是否有相应的 Good 值
       const rated_goodCount_male = PredictedGoodmaleRows.reduce((count, row) => {
           return count + (user_Rated[row.id] === 'Good' ? 1 : 0);
       }, 0);
 
       // 计算百分比
       const percentage_OT_male = (rated_goodCount_male / PredictedGoodmaleRows.length) * 100;
 
       setPercentageForeigner_OT(percentage_OT_female.toFixed(0));
       setPercentageLocal_OT(percentage_OT_male.toFixed(0));
  

      setShowChangeResult_FW(true);

     




     

    }

    function handleOkButtonClick_AGE() {

      setShowChangeResult(false)
      setShowChangeResult_FW(false)

      // 注意 变量名没有修改：female --》foreigner； male--》local

      const user = {};   // predicted credit change
      const user_Rated = {}; // Rated credit change
      for (const row of data) {
        user[row.id] = userSelections[row.id] || row['Predicted Credit'];  // get final predicted credit change
        user_Rated[row.id] = userChoices[row.id] || row['Real Credit']; // Rated final change
      }

      console.log("user",user);  // 在控制台打印 user 变量以验证
      console.log("user_Rated",user_Rated);  // 在控制台打印 user 变量以验证

      // 1. DP for gender
      // 1.1 DP： female
      // 找出所有 Gender 为 female 的行
      const femaleRows = data.filter(row => row['Age'] <25);

      // 对于这些行，检查 user 是否有相应的 Good 值
      const goodCount_female = femaleRows.reduce((count, row) => {
          return count + (user[row.id] === 'Good' ? 1 : 0);
      }, 0);

      // 计算百分比
      const percentage_DP_female = (goodCount_female / femaleRows.length) * 100;

      // 1.2 DP： male
      // 找出所有 Gender 为 male 的行
      const maleRows = data.filter(row => row['Age'] >=25);

      // 对于这些行，检查 user 是否有相应的 Good 值
      const goodCount_male = maleRows.reduce((count, row) => {
          return count + (user[row.id] === 'Good' ? 1 : 0);
      }, 0);

      // 计算百分比
      const percentage_DP_male = (goodCount_male / maleRows.length) * 100;

     

      setPercentageYoung(percentage_DP_female.toFixed(0));
      setPercentageOld(percentage_DP_male.toFixed(0));

       // 2. Equal Opportunity for gender
       // 找出所有 Rated Good 并且Gender 为 female 的行
       const RatedGoodfemaleRows = data.filter(row => row['Age'] <25 && row['Real Credit'] === 'Good');

       // 对于这些行，检查 user 是否有相应的 Good 值
       const predicted_goodCount_female = RatedGoodfemaleRows.reduce((count, row) => {
           return count + (user[row.id] === 'Good' ? 1 : 0);
       }, 0);
 
       // 计算百分比
       const percentage_EO_female = (predicted_goodCount_female / RatedGoodfemaleRows.length) * 100;
 
       // EO： male
        // 找出所有 Rated Good 并且Gender 为 male 的行
        const RatedGoodmaleRows = data.filter(row => row['Age'] >=25 && row['Real Credit'] === 'Good');

        // 对于这些行，检查 user 是否有相应的 Good 值
        const predicted_goodCount_male = RatedGoodmaleRows.reduce((count, row) => {
            return count + (user[row.id] === 'Good' ? 1 : 0);
        }, 0);
  
        // 计算百分比
        const percentage_EO_male = (predicted_goodCount_male / RatedGoodmaleRows.length) * 100;
 
        setPercentageYoung_EO(percentage_EO_female.toFixed(0));
        setPercentageOld_EO(percentage_EO_male.toFixed(0));

       // 3 . PE
       // 找出所有 Rated Bad 并且Gender 为 female 的行
       const RatedBadfemaleRows = data.filter(row => row['Age'] <25 && row['Real Credit'] === 'Bad');

       // 对于这些行，检查 user 是否有相应的 Good 值
       const bad_predicted_goodCount_female = RatedBadfemaleRows.reduce((count, row) => {
           return count + (user[row.id] === 'Good' ? 1 : 0);
       }, 0);
 
       // 计算百分比
       const percentage_PE_female = ( bad_predicted_goodCount_female / RatedBadfemaleRows.length) * 100;
 
       // EO： male
       const RatedBadmaleRows = data.filter(row => row['Age'] >=25 && row['Real Credit'] === 'Bad');

       // 对于这些行，检查 user 是否有相应的 Good 值
       const bad_predicted_goodCount_male = RatedBadmaleRows.reduce((count, row) => {
           return count + (user[row.id] === 'Good' ? 1 : 0);
       }, 0);
 
       // 计算百分比
       const percentage_PE_male = ( bad_predicted_goodCount_male / RatedBadmaleRows.length) * 100;
 
       setPercentageYoung_PE(percentage_PE_female.toFixed(0));
       setPercentageOld_PE(percentage_PE_male.toFixed(0));

       // 4 . EOs
       // 5. OT
       // 找出所有 Predicted 并且Gender 为 female 的行
       const PredictedGoodfemaleRows = data.filter(row => row['Age'] <25 && row['Predicted Credit'] === 'Good');

       // 对于这些行，检查 user_rated是否有相应的 Good 值
       const rated_goodCount_female = PredictedGoodfemaleRows.reduce((count, row) => {
           return count + (user_Rated[row.id] === 'Good' ? 1 : 0);
       }, 0);
 
       // 计算百分比
       const percentage_OT_female = (rated_goodCount_female / PredictedGoodfemaleRows.length) * 100;
 
       // 找出所有 Predicted 并且Gender 为 Male 的行
       const PredictedGoodmaleRows = data.filter(row => row['Age'] >=25 && row['Predicted Credit'] === 'Good');

       // 对于这些行，检查 user_rated是否有相应的 Good 值
       const rated_goodCount_male = PredictedGoodmaleRows.reduce((count, row) => {
           return count + (user_Rated[row.id] === 'Good' ? 1 : 0);
       }, 0);
 
       // 计算百分比
       const percentage_OT_male = (rated_goodCount_male / PredictedGoodmaleRows.length) * 100;
 
       setPercentageYoung_OT(percentage_OT_female.toFixed(0));
       setPercentageOld_OT(percentage_OT_male.toFixed(0));
  

      setShowChangeResult_AGE(true);   

    }


     
 // handle different features
 const handleOkButtonClickSelect = () => {
  if (selectedSensitiveFeature === "Age") {
    handleOkButtonClick_AGE();
  } else if (selectedSensitiveFeature === "Gender") {
    handleOkButtonClick();
  } else if (selectedSensitiveFeature === "Foreign Worker"){
    handleOkButtonClick_FW();
  }
};   
    
      

  //selected ID 传进来了
  console.log(selectedID)
  const ID =  selectedID.selectedID;
  console.log(`ID: ${ID}, Type: ${typeof ID}`);

  


 
  return (
    

    <div style={{ height: 1500, width: '100%',overflowX: 'auto' }}>

      <Box>
          <DataGrid
          style={{ height: '800px' }}
            rows={data}  // data的json文件 一定要有一个默认的id，自己创建 或者 自动创建都可以。
            columns={columns}  
            // getRowId={(row) => row.id} 
            slots={{ toolbar: CustomToolbar}}
            getRowClassName = {(params)=>{
              return params.row.id === ID ? "highlight":"";
            }}
            sx={{
              boxShadow: 2,
              border: 2,
              borderColor: 'primary.light',
              '& .MuiDataGrid-cell:hover': {
                color: 'primary.main',
              },
            }}
          />
      </Box>

      <Box padding='6px' margin='20px' display="flex" justifyContent="center" alignItems="center">
          {/* RadioGroup */}
          <FormControl >
                    <FormLabel id="group-selection-label" sx={{ textAlign: 'left',fontSize:"25px" }}>Choose a Protected Group You Are Interested In</FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="group-selection-label"
                      defaultValue=""
                      name="group-selection"
                      onChange={event => setSelectedSensitiveFeature(event.target.value)}
                    >
                      <FormControlLabel value="Age" control={<Radio />} size="large" label="Age"   />
                      <FormControlLabel value="Gender" control={<Radio />} size="large" label="Gender"   />
                      <FormControlLabel value="Foreign Worker" control={<Radio />} size="large" label="Foreign Worker"  />
                    </RadioGroup>
                  </FormControl>
                                      
      </Box>

      <Box margin='20px' display="flex" justifyContent="center" alignItems="center">
          <Button style={{fontSize: '27px'}} variant="outlined" onClick={handleOkButtonClickSelect}>OK & Check New Fairness Results </Button>        
      </Box>

      <Box padding='20px' margin='50px'>
        {showChangeResult && (
              <Box display="flex">
                <ChangeResultShow data={[parseFloat(percentageFemale), parseFloat(percentageMale),parseFloat(percentageFemale) - parseFloat(percentageMale)]} domain={['female','male','difference']} w={300} h_fairnessname={'Demographic Parity'}/> 
                {/* // 注父组件的属性名称 要和 子组件对应一致，不然传不进去， */}
                <ChangeResultShow data={[parseFloat(percentageFemale_EO), parseFloat(percentageMale_EO),parseFloat(percentageFemale_EO) - parseFloat(percentageMale_EO)]} domain={['female','male','difference']} w={300} h_fairnessname={'Equal Opportunity'}/>
                <ChangeResultShow data={[parseFloat(percentageFemale_PE), parseFloat(percentageMale_PE),parseFloat(percentageFemale_PE) - parseFloat(percentageMale_PE)]} domain={['female','male','difference']} w={300} h_fairnessname={'Predictive Equality'}/>
                <ChangeResultShow data={[parseFloat(percentageFemale_EO) - parseFloat(percentageMale_EO), parseFloat(percentageFemale_PE) - parseFloat(percentageMale_PE),Math.min((parseFloat(percentageFemale_EO) - parseFloat(percentageMale_EO)),(parseFloat(percentageFemale_PE) - parseFloat(percentageMale_PE)))]} domain={['female','male','difference']} w={300} h_fairnessname={'Equalized Odds'}/>
                <ChangeResultShow data={[parseFloat(percentageFemale_OT), parseFloat(percentageMale_OT),parseFloat(percentageFemale_OT) - parseFloat(percentageMale_OT)]} domain={['female','male','difference']} w={300} h_fairnessname={'Outcome Test'}/>
             </Box>
            )}
            {showChangeResult_FW && (
              <Box display="flex">
                <ChangeResultShow data={[parseFloat(percentageForeigner), parseFloat(percentageLocal),parseFloat(percentageForeigner) - parseFloat(percentageLocal)]} domain={['foreigner','local','difference']} w={300} h_fairnessname={'Demographic Parity'}/> 
                {/* // 注父组件的属性名称 要和 子组件对应一致，不然传不进去， */}
                <ChangeResultShow data={[parseFloat(percentageForeigner_EO), parseFloat(percentageLocal_EO),parseFloat(percentageForeigner_EO) - parseFloat(percentageLocal_EO)]} domain={['foreigner','local','difference']} w={300} h_fairnessname={'Equal Opportunity'}/>
                <ChangeResultShow data={[parseFloat(percentageForeigner_PE), parseFloat(percentageLocal_PE),parseFloat(percentageForeigner_PE) - parseFloat(percentageLocal_PE)]} domain={['foreigner','local','difference']} w={300} h_fairnessname={'Predictive Equality'}/>
                <ChangeResultShow data={[parseFloat(percentageForeigner_EO) - parseFloat(percentageLocal_EO), parseFloat(percentageForeigner_PE) - parseFloat(percentageLocal_PE),Math.min((parseFloat(percentageForeigner_EO) - parseFloat(percentageLocal_EO)),(parseFloat(percentageForeigner_PE) - parseFloat(percentageLocal_PE)))]} domain={['foreigner','local','difference']} w={300} h_fairnessname={'Equalized Odds'}/>
                <ChangeResultShow data={[parseFloat(percentageForeigner_OT), parseFloat(percentageLocal_OT),parseFloat(percentageForeigner_OT) - parseFloat(percentageLocal_OT)]} domain={['foreigner','local','difference']} w={300} h_fairnessname={'Outcome Test'}/>
             </Box>
            )}
            {showChangeResult_AGE && (
              <Box display="flex">
                <ChangeResultShow data={[parseFloat(percentageYoung), parseFloat(percentageOld),parseFloat(percentageYoung) - parseFloat(percentageOld)]} domain={['age<25','age>=25','difference']} w={300} h_fairnessname={'Demographic Parity'}/> 
                {/* // 注父组件的属性名称 要和 子组件对应一致，不然传不进去， */}
                <ChangeResultShow data={[parseFloat(percentageYoung_EO), parseFloat(percentageOld_EO),parseFloat(percentageYoung_EO) - parseFloat(percentageOld_EO)]} domain={['age<25','age>=25','difference']} w={300} h_fairnessname={'Equal Opportunity'}/>
                <ChangeResultShow data={[parseFloat(percentageYoung_PE), parseFloat(percentageOld_PE),parseFloat(percentageYoung_PE) - parseFloat(percentageOld_PE)]} domain={['age<25','age>=25','difference']} w={300} h_fairnessname={'Predictive Equality'}/>
                <ChangeResultShow data={[parseFloat(percentageYoung_EO) - parseFloat(percentageOld_EO), parseFloat(percentageYoung_PE) - parseFloat(percentageOld_PE),Math.min((parseFloat(percentageYoung_EO) - parseFloat(percentageOld_EO)),(parseFloat(percentageYoung_PE) - parseFloat(percentageOld_PE)))]} domain={['age<25','age>=25','difference']} w={300} h_fairnessname={'Equalized Odds'}/>
                <ChangeResultShow data={[parseFloat(percentageYoung_OT), parseFloat(percentageOld_OT),parseFloat(percentageYoung_OT) - parseFloat(percentageOld_OT)]} domain={['age<25','age>=25','difference']} w={300} h_fairnessname={'Outcome Test'}/>
             </Box>
            )}

            

          
      </Box>

    </div>
    
  

  );
  }


