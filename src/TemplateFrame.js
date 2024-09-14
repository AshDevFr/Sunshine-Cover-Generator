import * as React from 'react';
import PropTypes from 'prop-types';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ToggleColorMode from './ToggleColorMode';

function TemplateFrame({
  mode,
  toggleColorMode,
  children,
}) {
  const defaultTheme = createTheme({ palette: { mode } });

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ height: '100dvh', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ right: 15, top: 15, position: 'absolute' }}>
          <ToggleColorMode
            data-screenshot="toggle-mode"
            mode={mode}
            toggleColorMode={toggleColorMode}
          />
        </Box>
        <Box sx={{ flex: '1 1', overflow: 'auto' }}>{children}</Box>
      </Box>
    </ThemeProvider>
  );
}

TemplateFrame.propTypes = {
  children: PropTypes.node,
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default TemplateFrame;
