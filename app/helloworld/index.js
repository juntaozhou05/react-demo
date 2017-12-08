import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './Root';


render(
    <AppContainer>
        <Root />
    </AppContainer>,
    document.getElementById('root')
);

