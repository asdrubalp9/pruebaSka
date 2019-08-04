import MenuModelGenerated from "./generated/MenuModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = MenuModelGenerated.init();
  
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
      return await MenuModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...MenuModelGenerated,
  ...customModel
};
