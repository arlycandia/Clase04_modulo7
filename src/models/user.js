import sequelize from "../config/db.js";
import { dataType, DataTypes } from "sequelize";

const Student = sequelize.define(
  "students",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: true, // Agrega ala tabla createdAt y updateAt
  },
);

export default Student;
