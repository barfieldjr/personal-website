import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";

function ExperienceBlock(props) {
   const {image, live, source, title, companyName, location, dates, skills} = props;
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box component={'img'} src={image} alt={'mockup'} px={'3rem'}/>
         <h1 style={{fontSize: '2rem'}}>{companyName}</h1>
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
              alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={live} title={dates} icon={'fa fa-clock-o'}/>
            </Box>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={source} title={title} icon={'fa fa-code'}/>
            </Box> 
            <Box px={'4rem'}>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'} backgroundColor={'#673af0'}alignItems={'center'}>
               <div style={{color:'white'}}>{skills}</div>
            </Box> 
            </Box>
         </Box>
      </Box>
   );
}

export default ExperienceBlock;