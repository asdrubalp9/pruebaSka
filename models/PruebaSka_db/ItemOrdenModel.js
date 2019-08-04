import ItemOrdenModelGenerated from "./generated/ItemOrdenModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = ItemOrdenModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await ItemOrdenModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...ItemOrdenModelGenerated,
  ...customModel
};
