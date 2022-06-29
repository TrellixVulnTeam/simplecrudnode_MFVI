import { Router } from "express";

import { createTable, insertPessoa, updatePessoa, selectPessoas, selectPessoa } from './controler/pessoa.js';

const router = Router();

router.get('/', (req, res) => {
    res.json({
        "statusCode": 200,
        "msg": "API RODANDO"
    })
})

router.get('/pessoas', selectPessoas);
router.get('/pessoa', selectPessoa);
router.post('/pessoa', insertPessoa);
router.put('/pessoa', updatePessoa);


export default router;