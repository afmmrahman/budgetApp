// 1. Data Module 

var budgetController = (function(){
    // some code
})();





// 2. UI Module

var UIController = (function(){
    // some code
})();





// Controller Module

var controller = (function(budgetCtrl, UICtrl){   // Module can also receive arguments
    
    var ctrlAddItem = function(){
        
        // 1. Get the filled input data
        
        // 2. Add the item to the budget controller
        
        // 3. Add the item to the UI
        
        // 4. Calculate the budget
        
        // 5. Display the budget on the UI
        
        console.log('it works');
    }
    
    
    // Adding event handler (button)
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);
    
   
    
    //Adding keypress (ENTER key) 
    document.addEventListener('keypress', function(event){
        
        if (event.keyCode === 13 || event.which === 13){
            
            ctrlAddItem();
        }
    });
})(budgetController, UIController);