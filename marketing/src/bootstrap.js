import React from 'react';
import ReactDom from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';

import App from './App';

const mount = (el, { onNavigate, defaultHistory,initialPath }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    });

    if (onNavigate) {
        history.listen(onNavigate);
    }

    ReactDom.render(<App history={history} />, el);

    return {
        onParentNavigate(location) {
            const { pathname: nextPathname } = location;
            const { pathname } = history.location;

            if (pathname != nextPathname) {
                history.push(nextPathname);
            }
        },
    };
};

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');
    const history = createBrowserHistory();

    if (devRoot) {
        mount(devRoot, {defaultHistory: history});
    }
}

export { mount };
