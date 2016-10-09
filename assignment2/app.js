(function () {
'use strict';

   angular.module('ShoppingListCheckOff', [])
   .controller('ToBuyController', ToBuyController)
   .controller('AlreadyBoughtController', AlreadyBoughtController)
   .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

   ToBuyController.$inject = ['ShoppingListCheckOffService'];  
   function ToBuyController(ShoppingListCheckOffService) { 
      var shoppingList = this;
      shoppingList.items = ShoppingListCheckOffService.getToBuyItems();  
      
      this.boughtItem = function (itemIndex) {
         ShoppingListCheckOffService.boughtItem(itemIndex);
      }  
      
      this.isEmpty = function (){
         return ShoppingListCheckOffService.isEmptyList(shoppingList.items);
      }
   }
   
   AlreadyBoughtController.$inject = ['ShoppingListCheckOffService']; 
   function AlreadyBoughtController(ShoppingListCheckOffService) { 
      var boughtList = this;
      boughtList.items = ShoppingListCheckOffService.getBoughtItems();  

      this.itemName = "";
      this.itemQuantity = "";
      this.addItem = function () {
         shoppingList.addItem(self.itemName, self.itemQuantity);
      };
      this.isEmpty = function (){
         return ShoppingListCheckOffService.isEmptyList(boughtList.items);
      };
   } 
  
   function ShoppingListCheckOffService() {
      var service = this 
      var toBuyItems = [
         { name: "chicken pack", quantity: 1 },
         { name: "carrots 1kg bags", quantity: 2 },
         { name: "potatoes 2kg bag", quantity: 1},
         { name: "yogourts 4 packs", quantity: 3 },
         { name: "milk 2l", quantity: 2}
      ]; 
      var boughtItems = [];

      service.addItem = function (list, item) { 
         list.push(item); 
      };

      service.removeItem = function (list, itemIndex) {
         var item = {
            name: list[itemIndex].name,
            quantity: list[itemIndex].quantity
         };
       list.splice(itemIndex, 1);
       return item
      }; 

      service.boughtItem = function (itemName, quantity) {
         var removedItem = service.removeItem (toBuyItems, itemName);
         service.addItem (boughtItems,  removedItem); 
         service.isEmptyList (toBuyItems);
      };  

      service.getToBuyItems = function () {
         return toBuyItems;
      };
      service.getBoughtItems = function () {
         return boughtItems;
      };

      service.isEmptyList = function (list) { 
         return list.length < 1;
      };
   }   

})();




 

