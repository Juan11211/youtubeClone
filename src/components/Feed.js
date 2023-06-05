import React, { useState, useEffect} from 'react'
import { Box, Stack, Typography } from '@mui/material' 

function Feed() {
  return (
    <Stack sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
  <div style={{ width: '100%', borderRight: '1px solid #e3e3e3', height: '100%' }}>
    <Box sx={{ height: { sx: 'auto', md: '92vh' }, px: { xs: 0, md: 2 } }}>
      Sidebar

      <Typography className='copyright'
      >

        </Typography>
    </Box>
  </div>
</Stack>


  );
  
};

export default Feed