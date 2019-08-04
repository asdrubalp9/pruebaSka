import CategoriaMenuModelGenerated from "./generated/CategoriaMenuModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = CategoriaMenuModelGenerated.init();
  
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
      return await CategoriaMenuModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...CategoriaMenuModelGenerated,
  ...customModel
};
