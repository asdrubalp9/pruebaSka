/**
 * 
 * 
  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
 
 * DO NOT EDIT THIS FILE!! 
 * 
 *  TO CUSTOMIZE menuModelGenerated.js PLEASE EDIT ../menuModel.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
// Database
import Database from "../../../classes/Database_PruebaSka_db";
import mongoose, { Schema } from "mongoose";

// Logger
import Logger from "../../../classes/Logger";

const generatedModel = {
  /**
   * Init  schema
   */
  init() {
    const db = Database.getConnection();

    /**
      * menu
      */
    const menuSchema = new mongoose.Schema({
      flag: {
        type: "Boolean"
      },
      nombreMenu: {
        type: "String"
      },
      //RELATIONS
      idEmpresa: {
        type: Schema.ObjectId,
        ref : "Empresas"
      },
      
      
      //EXTERNAL RELATIONS
      /*
      idItemMenu: {
        type: Schema.ObjectId,
        ref : "itemOrden"
      },
      idMenu: {
        type: Schema.ObjectId,
        ref : "categoriaMenu"
      },
      idMenu: {
        type: Schema.ObjectId,
        ref : "itemMenu"
      },
      idRestaurant: {
        type: Schema.ObjectId,
        ref : "ordenes"
      },
      */
    });

    generatedModel.setModel(db.connection.model("Menu", menuSchema));

    return menuSchema;
  },

  /**
   * Set Model
   */
  setModel: model => {
    generatedModel.model = model;
  },

  /**
   * Get model
   */
  getModel: () => {
    return generatedModel.model;
  },

  // Start queries
    

  // CRUD METHODS




};

export default generatedModel;
