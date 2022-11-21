import { BASE_URL, SERVER_PORT } from './../global/enviroment';
import { Router, Request, Response } from 'express';
import colors from 'colors'

const router = Router();

console.log(colors.green(`[Routes/] Messages: ${BASE_URL}:${SERVER_PORT}/messages`));

router.get('/messages', (req: Request, res: Response) => {

    res.status(200).json({
        ok: true,
        msg: 'Eeverything is fine'
    });

    console.log(colors.green('[Routes/] GET: Request for "messages"'));

});

router.post('/messages', (req: Request, res: Response) => {

    res.status(200).json({
        ok: true,
        msg: 'Eeverything is fine'
    });

    console.log(colors.green('[Routes/] POST: Request for "messages"'));

});

export default router;