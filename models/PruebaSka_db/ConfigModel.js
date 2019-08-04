import ConfigModelGenerated from "./generated/ConfigModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = ConfigModelGenerated.init();
  
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
      return await ConfigModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...ConfigModelGenerated,
  ...customModel
};
