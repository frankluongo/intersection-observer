require('intersection-observer');
import Observers from './modules/Observer';

function init() {
  new Observers();
}

document.addEventListener('DOMContentLoaded', init);
