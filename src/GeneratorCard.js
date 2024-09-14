import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import MuiCard from '@mui/material/Card';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import {styled} from '@mui/material/styles';
import {useEffect, useState} from "react";
import {GeneratePNGImage} from "./service/images";
import {Autocomplete, Link} from "@mui/material";

import {getAvailableFonts} from "@remotion/google-fonts";


const Card = styled(MuiCard)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

function GeneratorCard({setImage, setLoading}) {
  const newFonts = getAvailableFonts();

  const [backgroundURL, setBackgroundURL] = useState('');
  const [mdiIcon, setMdiIcon] = useState('monitor-dashboard');
  const [font, setFont] = useState(null);
  const [line1, setLine1] = useState('DESKTOP');
  const [line2, setLine2] = useState('-4K-');
  const [line3, setLine3] = useState('');

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      const data = await GeneratePNGImage(
        backgroundURL,
        mdiIcon,
        220,
        [line1, line2, line3],
        font,
        80,
      )
      // console.log(data);
      setImage(data)
      setLoading(false)
    }
    fetchData()
  }, [backgroundURL, mdiIcon, font, line1, line2, line3]);

  return (
    <Card variant="outlined">
      <Typography
        component="h1"
        variant="h4"
        sx={{width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)'}}
      >
        Options
      </Typography>
      <Box
        component="form"
        noValidate
        sx={{display: 'flex', flexDirection: 'column', width: '100%', gap: 2}}
      >
        <FormControl>
          <FormLabel htmlFor="backgroundURL">Background URL</FormLabel>
          <TextField
            id="backgroundURL"
            name="backgroundURL"
            placeholder="Leave empty for default background"
            fullWidth
            variant="outlined"
            sx={{ariaLabel: 'backgroundURL'}}
            value={backgroundURL}
            onChange={(event) => {
              setBackgroundURL(event.target.value);
            }}
          />
        </FormControl>
        <FormControl>
          <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
            <FormLabel htmlFor="mdiIcon">MDI Icon</FormLabel>
            <Link href="https://pictogrammers.com/library/mdi/" target="_blank" rel="noopener" underline="hover">
              MDI Library
            </Link>
          </Box>
          <Autocomplete
            name="mdiIcon"
            id="mdiIcon"
            variant="outlined"
            freeSolo
            fullWidth
            options={[
              'monitor',
              'monitor-dashboard',
              'steam',
              'controller',
              'gamepad',
              'nintendo-game-boy',
              'console',
              'linux',
              'ubuntu',
            ]}
            renderInput={(params) =>
              <TextField
                {...params}
                label="MDI Icon"
              />}
            value={mdiIcon}
            onChange={(e, v) => setMdiIcon(v)}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="font">Font</FormLabel>
          <Autocomplete
            name="font"
            id="font"
            variant="outlined"
            fullWidth
            options={newFonts}
            renderInput={(params) =>
              <TextField
                {...params}
                label="Font"
              />}
            value={font}
            getOptionLabel={(f) => f.importName}
            onChange={(e, v) => setFont(v)}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="line1">Line 1</FormLabel>
          <TextField
            id="line1"
            name="line1"
            fullWidth
            variant="outlined"
            sx={{ariaLabel: 'line1'}}
            value={line1}
            onChange={(event) => {
              setLine1(event.target.value);
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="line2">Line 2</FormLabel>
          <TextField
            id="line2"
            name="line2"
            fullWidth
            variant="outlined"
            sx={{ariaLabel: 'line2'}}
            value={line2}
            onChange={(event) => {
              setLine2(event.target.value);
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="line3">Line 3</FormLabel>
          <TextField
            id="line3"
            name="line3"
            fullWidth
            variant="outlined"
            sx={{ariaLabel: 'line3'}}
            value={line3}
            onChange={(event) => {
              setLine3(event.target.value);
            }}
          />
        </FormControl>
      </Box>
    </Card>
  );
}

GeneratorCard.propTypes = {
  setImage: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
};

export default GeneratorCard;
