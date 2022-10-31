import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './routes/App.jsx';
import '@styles/index.scss'

const root = createRoot(document.getElementById('app'));
root.render(
	<App />
);