import './App.css';
import {GeneratePNGImage} from "./service/images";
import {useEffect, useState} from "react";
import React from "react";
import {Autocomplete, Box, Link, TextField} from "@mui/material";
import {getAvailableFonts} from "@remotion/google-fonts";

function App() {
  const newFonts = getAvailableFonts();

  const [image, setImage] = useState('');
  const [backgroundURL, setBackgroundURL] = useState('')
  const [mdiIcon, setMdiIcon] = useState('monitor-dashboard')
  const [loading, setLoading] = useState(false)
  const [font, setFont] = useState(null)

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      const data = await GeneratePNGImage(
        backgroundURL,
        mdiIcon,
        200,
        [
          "DESKTOP",
          "-4K-",
        ],
        font,
        72,
      )
      // console.log(data);
      setImage(data)
      setLoading(false)
    }
    fetchData()
  }, [backgroundURL, mdiIcon, font]);

  return (
    <div className="App">
      {/*  Click a button to generate an image */}
      <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
        <TextField
          id="outlined-basic"
          label="Background URL"
          variant="outlined"
          value={backgroundURL}
          onChange={(event) => {
            setBackgroundURL(event.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="≈≈"
          variant="outlined"
          value={mdiIcon}
          onChange={(event) => {
            setMdiIcon(event.target.value);
          }}
        />
        <Link href="https://pictogrammers.com/library/mdi/" target="_blank" rel="noopener" underline="hover">MDI
          Library</Link>
        <Autocomplete
          disablePortal
          options={newFonts}
          sx={{width: 300}}
          renderInput={(params) => <TextField {...params} label="Font"/>}
          value={font}
          getOptionLabel={(f) => f.importName}
          onChange={(e, v) => setFont(v)}
        />
      </Box>
      <div>
        {loading ? <p>Loading...</p> : null}
        {image && <img src={`data:image/jpeg;base64,${image}`}/>}
      </div>
    </div>
  );
}

export default App;
