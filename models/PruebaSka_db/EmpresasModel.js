import EmpresasModelGenerated from "./generated/EmpresasModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = EmpresasModelGenerated.init();
  
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
      return await EmpresasModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...EmpresasModelGenerated,
  ...customModel
};
