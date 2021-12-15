import { Router } from "express";
import multer from "multer";

// Quando a gente passa uma pasta, ele sabe que o arquivo que a gente tá esperando é um index.ts
import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { importCategoryController } from "../modules/cars/useCases/importCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";


const categoriesRoutes = Router();

//middleware responsável por fazer o donwload do nosso arquivo
const upload = multer({
    dest: "./tmp" //passamos um destino de onde ele vai salvar
})

categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
    return listCategoriesController.handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) =>{
    return importCategoryController.handle(request, response);
})

export { categoriesRoutes };

