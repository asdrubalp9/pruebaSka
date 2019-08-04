// Import Mongoose
import mongoose from "mongoose";
// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

// Start Import Models

import EmpresasModel from "../models/PruebaSka_db/EmpresasModel";
import UserModel from "../models/PruebaSka_db/UserModel";
import CategoriaMenuModel from "../models/PruebaSka_db/CategoriaMenuModel";
import ConfigModel from "../models/PruebaSka_db/ConfigModel";
import ItemMenuModel from "../models/PruebaSka_db/ItemMenuModel";
import ItemOrdenModel from "../models/PruebaSka_db/ItemOrdenModel";
import MediaModel from "../models/PruebaSka_db/MediaModel";
import MenuModel from "../models/PruebaSka_db/MenuModel";
import MesasModel from "../models/PruebaSka_db/MesasModel";
import OrdenesModel from "../models/PruebaSka_db/OrdenesModel";
import TiposMediaModel from "../models/PruebaSka_db/TiposMediaModel";
import UserEmpresaModel from "../models/PruebaSka_db/UserEmpresaModel";

// End Import Models

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info("MongoDB connected at: " + properties.pruebaSka_db_dbUrl);

    // Start Init Models

		EmpresasModel.init();
		UserModel.init();
		CategoriaMenuModel.init();
		ConfigModel.init();
		ItemMenuModel.init();
		ItemOrdenModel.init();
		MediaModel.init();
		MenuModel.init();
		MesasModel.init();
		OrdenesModel.init();
		TiposMediaModel.init();
		UserEmpresaModel.init();
 // End Init Models
  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");
    try {
      this.dbConnection_pruebaSka_db = await mongoose.connect(
        "mongodb://" + properties.pruebaSka_db_dbUrl,
        { useNewUrlParser: true }
      );
    } catch (err) {
      Logger.error(`Failed connection to the DB: ${err.message}`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_pruebaSka_db;
  }
}

export default new Database();
