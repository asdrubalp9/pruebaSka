import UserEmpresaModelGenerated from "./generated/UserEmpresaModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = UserEmpresaModelGenerated.init();
  
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
      return await UserEmpresaModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...UserEmpresaModelGenerated,
  ...customModel
};
