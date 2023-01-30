import React from 'react';
import ExperienceBlock from "./ExperienceBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";

export default function Experience() {
    return (
        <Box>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.experience.map((experience, index) => (
                   <Grid item xs={12} md={6} key={index} my={6}>
                       <ExperienceBlock image={experience.image} dates={experience.dates} skills={experience.skills} live={experience.live} source={experience.source} location={experience.location} companyName={experience.companyName} title={experience.title}/>
                   </Grid>
                ))}
            </Grid>
        </Box>
    );
};