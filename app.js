// 1. Data Module 

var budgetController = (function(){
    
    var Expense = function(id, description, value){
        this.id = id;
        this.description =  description;
        this.value = value;
    };
    
    var Income = function(id, description, value){
        this.id = id;
        this.description =  description;
        this.value = value;
    };
    
   //DATA STURCTURES
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        
        totals: {
            exp: 0,
            inc: 0
        }
    };
    
    return {
        
        addItem: function(type, des, val){
            var newItem, ID;
            
            //Creat new ID
            if (data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length -1].id + 1;
            } else{
                ID = 0;
            }
            
            
            //Create new item based on expenses ('esp') and income ('inc') 
            if(type === 'exp'){
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc'){
                newItem = new Income(ID, des, val);
            }
            
            // Push it into data structure
            data.allItems[type].push(newItem);
            
            // Return the new element
            return newItem;
        },
        
        testingData: function(){
            console.log(data);
        }
        
    };
    
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
        var input, newItem;
        
        // 1. Get the filled input data
        input = UICtrl.getInput();
        
        // 2. Add the item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        
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