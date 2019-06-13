// 1. Data Module 

var budgetController = (function(){
    // some code
})();





// 2. UI Module

var UIController = (function(){
    
    var DOMStrings = {
        
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
        
    };
    
    return {
      
        getInput: function(){
            
            return {
                type: document.querySelector(DOMStrings.inputType).value,
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value
            };
        },
        
        getDOMstrings: function(){
            return DOMStrings;
        }
    };
    
})();





// Controller Module

var controller = (function(budgetCtrl, UICtrl){   // Module can also receive arguments
    
    var setupEventListeners = function(){
        
        var DOM = UICtrl.getDOMstrings();
        
        // Adding event handler (button)
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        //Adding keypress (ENTER key) 
        document.addEventListener('keypress', function(event){

            if (event.keyCode === 13 || event.which === 13){

                ctrlAddItem();
            }
        });

     };
    
   
        
    var ctrlAddItem = function(){
        
        // 1. Get the filled input data
        var input = UICtrl.getInput();
        
        // 2. Add the item to the budget controller
        
        // 3. Add the item to the UI
        
        // 4. Calculate the budget
        
        // 5. Display the budget on the UI
        
    };
    
    return {
        init: function(){
            console.log('Application has started.');
            setupEventListeners();
        }  
    };
    
})(budgetController, UIController);

controller.init();