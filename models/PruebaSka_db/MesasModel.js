import MesasModelGenerated from "./generated/MesasModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = MesasModelGenerated.init();
  
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
      return await MesasModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...MesasModelGenerated,
  ...customModel
};
