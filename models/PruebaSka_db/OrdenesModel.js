import OrdenesModelGenerated from "./generated/OrdenesModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = OrdenesModelGenerated.init();
  
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
      return await OrdenesModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...OrdenesModelGenerated,
  ...customModel
};
