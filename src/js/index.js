import '../scss/index.scss';

import { createRoot } from 'react-dom/client';

import MyApp from './App';

const root = createRoot(document.getElementById('app'));

root.render(<MyApp/>);