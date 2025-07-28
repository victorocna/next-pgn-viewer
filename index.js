import BoardControls from './components/BoardControls';
import MobileBoardControls from './components/MobileBoardControls';
import PgnTree from './components/PgnTree';
import PgnViewer from './components/PgnViewer';
import { useTheme, ThemeProvider } from './hooks/use-theme';

import './assets/css/buttons.css';
import './assets/css/icons.css';
import './assets/css/layout.css';
import './assets/css/pgn-tree.css';
import './assets/css/pgn-viewer.css';
import './assets/css/tailwind.css';

export default PgnViewer;

export { BoardControls, MobileBoardControls, PgnTree, PgnViewer, useTheme, ThemeProvider };
