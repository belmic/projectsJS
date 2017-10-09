//BUDGET CONTROLLER
var budgetController = (function () {
  // Some code
  var Expense = function (id, description, value){
      this.id = id;
      this.description = description;
      this.value = value;
  }

  var Income = function (id, description, value){
      this.id = id;
      this.description = description;
      this.value = value;
  }

  var allExpenses = [];
  var allIncomes = [];

  var data = {
        allItems: {
          exp: [],
          inc: []
        },
        totals: {
          exp: 0,
          inc: 0
        }
        }
    return {
      addItem: function (type, des, val){
        var ID, newItem;
        // Create new ID
        if (data.allItems[type].length > 0){
            ID = data.allItems[type][data.allItems[type].length -1].id+1;
        }else{
            ID = 0;
        }

        //Create new Item inc or exp
      if (type === 'exp'){
        newItem  = new Expense(ID, des, val);
      }
      else if (type == 'inc'){
        newItem = new Income(ID,des,val);
      }
      // Push into DAtastructure
      data.allItems[type].push(newItem);
      return newItem;
    },
    testing: function (){
      console.log(data);
    }
}


})();




// UI CONTROLLER
var UIController = (function () {

var DOMstrings = {
    inputType:        '.add__type',
    inputDescription: '.add__description',
    inputValue:       '.add__value',
    inputBtn:         '.add__btn'
};

return {

  getInput: function () {

    return {
           type: document.querySelector(DOMstrings.inputType).value, // inc OR exp
    description: document.querySelector(DOMstrings.inputDescription).value,
         value : document.querySelector(DOMstrings.inputValue).value
       };
    },

  getDOMstrings: function(){

                return DOMstrings;
  }
};

})();

//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

var setupEventListeners = function (){
  var DOM = UICtrl.getDOMstrings();
  document.querySelector(DOM.inputBtn).addEventListener('click',ctrlAddItem);

  document.addEventListener('keypress', function(event){
  if (event.keyCode === 13 || event.which === 13 ){
    ctrlAddItem();
    }
  });

}

var ctrlAddItem = function (){
  var input, newItem;
  //1. Get the filed input data
  input = UICtrl.getInput();

  //2. Add the item to budgetController

  newItem = budgetController.addItem(input.type, input.description, input.value);
  //3. Add the item to UI

  //4. Calculate budget

  //5. Display in UI
};

return {
  init: function (){
    console.log("Application started");
    setupEventListeners();

  }
}


})(budgetController, UIController);

controller.init();
