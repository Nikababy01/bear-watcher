import util from '../helpers/util.js';
import bearData from '../helpers/data/bearData.js';



// add domString
const buildBears =()=>{
  const allBears = bearData.getBears();
  let domString = '';
  allBears.forEach((bears)=>{
    domString += '<div class="col-4">';
    domString += `<div class= "card">`;
    domString += `<img class="img-fluid" src="${bears.imageUrl}" alt="card image">`;
    domString += '<div class="card-body text-center">';
    domString += `<h5 class=card-title">${bears.name}</h5>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';

  });
  util.printToDom('bear-container', domString);
  
};

export default { buildBears};