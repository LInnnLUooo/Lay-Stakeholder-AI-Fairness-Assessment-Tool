
import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';

const CausalGraphTestDataset = () => {

  return (
    <Box display="flex" justifyContent="center" alignItems="center" width="100%" height="100%">
      <iframe
        src={`${process.env.PUBLIC_URL}/causal_graph_testdata_Pweight_30_45.html`}
        width="1300px"
        height="1100px"
        style={{ border: 'none' }}
        title="Test Dataset Causal Graph"
      ></iframe>
    </Box>
  );
};

export default CausalGraphTestDataset;
