import MediaModelGenerated from "./generated/MediaModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = MediaModelGenerated.init();
  
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
      return await MediaModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...MediaModelGenerated,
  ...customModel
};
