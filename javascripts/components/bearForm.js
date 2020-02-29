import util from '../helpers/util.js';
import bearData from '../helpers/data/bearData.js';
import river from './river.js';


const bearBtn = (e) => {
    if(e.target.id='bearSbmBtn') {
    e.preventDefault();
    const bears = bearData.getBears()
      const newBear =   {
      id: Date.now(),
      name: document.getElementById('bear-name').value,
      imageUrl: document.getElementById('bear-image').value
    };
    bears.push(newBear);
    document.getElementById('bear-form').reset();
    river.buildBears();
   }
  };
  

const bearFormBuilder= ()=>{
    let domString ='';
    domString += '<form id="bear-form" class="bear-info">';
    domString += '<div class="form-group">';
    domString += '<label for="bear-name"></label>';
    domString += '<input type="text" class="form-control" id="bear-name"placeholder="Enter Bear Name">';
    domString += '</div>';
    domString += '<div class="form-group">';
    domString += '<label for="bear-image"></label>';
    domString += '<input type="text" class="form-control" id="bear-image" placeholder="Add Image">';
    domString += '</div>';
    domString += '<div>';
    domString += '<button id="bearSbmBtn" type="submit" class="btn btn-danger">Submit</button>';
    domString += '</div>';
    domString += '</form>';
    domString += '</div>';
    util.printToDom('brookbears', domString);
    document.getElementById('bearSbmBtn').addEventListener('click',bearBtn);
};
export default  {bearFormBuilder };