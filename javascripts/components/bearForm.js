import util from '../helpers/util.js';
import bearData from '../helpers/data/bearData.js';



//add bear event

const bearBtn = (e) => {
  if(e.target.id='bearSbmBtn') {
  e.preventDefault();
  const bears = bearData.getBears()
  console.log('button is clicked');
  const newBear =   {
    id: Date.now(),
    name: document.getElementById('bear-name').value,
    imageUrl: document.getElementById('bear-image').value
  };
  bears.push(newBear);
  document.getElementById('bear-form').reset();
  buildBears();
 }
};



// add domString
const buildBears =()=>{
  const allBears = bearData.getBears();
  let domString = '';
  allBears.forEach((bears)=>{
    domString += '<div class="col-4">';
    domString += `<div class= "card">`;
    domString += `<img class="bear-photo" src="${bears.imageUrl}" alt="card image">`;
    domString += '<div class="card-body">';
    domString += `<h5 class=card-title">${bears.name}</h5>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';

  });
  util.printToDom('bear-container', domString);
  document.getElementById('bearSbmBtn').addEventListener('click',bearBtn)
};

export default { buildBears };