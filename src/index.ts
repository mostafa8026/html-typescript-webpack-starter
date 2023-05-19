import "./style.scss";

import * as _ from 'lodash';
import blackholeImg from './assets/blackhole.jpg';

console.log("Hello World From Console!");

function component() {
  const element = document.createElement('div');
  element.className = 'abstract_font'

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

function blackholeComponent() {
  const element = document.createElement('img');
  element.className = 'abstract_img';
  element.src = blackholeImg;
  return element;
}

/**
 * Main div at the center of the page
 */
const mainDiv = document.createElement('div');
mainDiv.className = 'main';
document.body.appendChild(mainDiv);


mainDiv.appendChild(component());
mainDiv.appendChild(blackholeComponent());
