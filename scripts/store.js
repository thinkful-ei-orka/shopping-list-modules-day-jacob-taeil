import item from './item.js';

let items = [];
let hideCheckedItems = false;

const findById = function(id) {
  return items.find((item) => item.id === id);
};

const addItem = function(name) {
  try {
    item.validateName(name);
    let newItem = item.create(name);
    items.push(newItem);
  } catch(e) {
    // error
  }
};

const findAndToggleChecked = function(id) {
  let itemObj = findById(id);
  itemObj.checked = !itemObj.checked;
};

const findAndUpdateName = function(id, newName) {
  try {
    item.validateName(name);
    let itemObj = findById(id);
    itemObj.name = newName;
  } catch(e) {
    console.log(`Cannot update name: ${e.message}`);
  }
};

const findAndDelete = function(id) {
  let itemObj = findById(id);
  const isObj = (obj) => obj === itemObj;
  let itemIndex = items.findIndex(isObj);
  items.splice(itemIndex, 1);
};

export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete
};
