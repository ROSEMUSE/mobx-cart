/* mobx实现 */

import React from 'react';
import ReactDOM from 'react-dom';
import apple from './stores/appleStore'
import App from './components/AppleBasket';
import { Provider } from 'mobx-react';

console.log(apple);

ReactDOM.render(<Provider apple={apple}><App /></Provider>,
  document.getElementById('root'));
