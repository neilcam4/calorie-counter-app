//storage controller

//item controller
const ItemCtrl = (function(){
    const Item = function(id, name, calories){
        this.id = id;
        this.name = name;
        this.caloroes = calories;
    }
    //Data constructor/state
     const data = {
         items: [
             {id:0, name:"Steak Dinner", calories: 1200},
             {id:1, name:"Brownie", calories: 120},
             {id:2, name:"Chicken", calories: 400}
         ],
         currentItem:null,
         totalCalories:0    
     }

     return {
         logData:function(){
             return data;
         }
})();
//UI controller
const UICtrl = (function(){

})()
//App controller

const App =(function(ItemCtrl, UICtrl){
    return {
        init:function(){
            console.log("Initiailizing App")
        }
    }
})(ItemCtrl,UICtrl )

App.init();