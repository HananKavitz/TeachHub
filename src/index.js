import ReactDOM from 'react-dom';
import './index.css';
import Routing from './Config/Routing';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(Routing, document.getElementById('root'));
registerServiceWorker();
