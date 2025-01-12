
import { Router } from "express";
const router = new Router();

import UserController from "../controllers/UserController";
import loginRequired from "../middlewares/loginRequired";

// Não deveria existir
// router.get('/', loginRequired, UserController.index); // Lista usuarios.
// router.get('/:id', UserController.show); // Lista usuario.

router.post('/', UserController.store);
router.put('/', loginRequired, UserController.update);
router.delete('/', loginRequired, UserController.delete);

export default router;

/*
        Padrões de projeto

Index -> Lista toos os usuarios -> GET
Store/Create -> Cria um novo usuario -> POST
delete -> apaga um usuario -> DELETE
show -> mostra um usuario -> GET
update -> atualiza um usuario -> PATCH ou PUT
*/
