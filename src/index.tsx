import { createRoot } from 'react-dom/client';
import { App } from './components/App';

const root = document.getElementById('root');

if (!root) {
  throw new Error('root not found');
}

const countainer = createRoot(root);

countainer.render(<App />);