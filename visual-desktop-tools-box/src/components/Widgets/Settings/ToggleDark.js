import { dark } from '@material-ui/core/styles/createPalette';
import React, { useState, useEffect } from 'react';
import storage from 'local-storage-fallback'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import "../App.css"

const GlobalStyle = createGlobalStyle`
body {
    background-color: ${props => props.theme.mode === 'dark' ? '#262626' : '#EEEEEE'};
    color: ${props => props.theme.mode === 'dark' ? '#474747' : '#111111'};
}
`
function loadSavedMode() {
    const savedMode = storage.getItem('theme')
    return savedMode ? JSON.parse(savedMode) : { mode: 'light' }
}

export default function ToggleDark() {

    const [globalTheme, setGlobalTheme] = useState(loadSavedMode);
    useEffect(
        () => {
            storage.setItem('theme', JSON.stringify(globalTheme));
        },
        [globalTheme]
    );
    
    return (
        <ThemeProvider theme={globalTheme}>
            <>
                <GlobalStyle />
                <div>
                    <Button size="sm" variant="secondary" className="toggle" onClick={e=>setGlobalTheme(globalTheme.mode === 'dark' ? {mode:'light'} : {mode:'dark'})}> Toggle Dark Mode </Button>
                </div>
            </>
        </ThemeProvider>
    );
}
