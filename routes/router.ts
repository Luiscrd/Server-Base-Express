import { BASE_URL, SERVER_PORT } from './../global/enviroment';
import { Router, Request, Response } from 'express';
import colors from 'colors'

const router = Router();

console.log(colors.green(`[Routes/] Messages: ${BASE_URL}:${SERVER_PORT}/messages`));

router.get('/messages', (req: Request, res: Response) => {

    res.status(200).json({
        ok: true,
        msg: 'Eeverything is fine - GET'
    });

    console.log(colors.green('[Routes/] GET: Response ok from /messages'));

});

router.post('/messages', (req: Request, res: Response) => {

    res.status(200).json({
        ok: true,
        msg: 'Eeverything is fine - POST'
    });

    console.log(colors.green('[Routes/] POST: Response ok from /messages'));

});

export default router;