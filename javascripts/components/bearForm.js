import util from '../helpers/util.js';
import bearData from '../helpers/data/bearData.js';
import river from './river.js';


const bearBtn = (e) => {
    if(e.target.id='bearSbmBtn') {
    e.preventDefault();
    const bears = bearData.getBears()
      const newBear =   {
      id: `bear${bears.length + 1}`,
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
    domString += '<div class="d-flex justify-content-center">';
    domString += '<form id="bear-form" class="bear-info">';
    domString += '<h1 class="brooks-header">Brooks River Bear Reporting</h1>';
    domString += '<div class="form-group">';
    domString += '<label for="bear-name"></label>';
    domString += '<input type="text" class="form-control" id="bear-name"placeholder="Enter Bear Name">';
    domString += '</div>';
    domString += '<div class="form-group">';
    domString += '<label for="bear-image"></label>';
    domString += '<input type="text" class="form-control" id="bear-image" placeholder="Add Image">';
    domString += '</div>';
    domString += '<div class= "inline-block">'
    domString += '<div class="bear-button">';
    domString += '<button id="bearSbmBtn" type="submit" class="btn btn-danger">Submit</button>';
    domString += '</div>';
    domString += '</div>';
    domString += '</form>';
    domString += '</div>';
    domString += '</div>';
    util.printToDom('brookbears', domString);
    document.getElementById('bearSbmBtn').addEventListener('click',bearBtn);
};
export default  {bearFormBuilder };