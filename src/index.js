import express from "express";
import exphbs from "express-handlebars";
import appRouter from "./routes/index.js";
import path from "path";

const __dirname = path.resolve();

const app = express();

const PORT = process.env.PORT || 4000;

// Midlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Static Files
app.use(express.static(path.join(__dirname, "src/public")));

//Sincroniza la BBDD

// Configuracion de Handlebars
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "src/views"));

app.engine(
  "hbs",
  exphbs({
    defaultLayout: "main",
    layoutDir: path.join(__dirname, "src/views/layouts"),
    extname: ".hbs",
  }),
);

//Rutas

app.use("/", appRouter);

app.listen(PORT, () => {
  console.log(`confirmar si comenzo el sistema en http://localhost:${PORT}`);
});
