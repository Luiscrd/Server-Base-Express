import { Router, Request, Response } from 'express';
import colors from 'colors'

const router = Router();

router.get('/messages', (req: Request, res: Response) => {

    res.status(200).json({
        ok: true,
        msg: 'Eeverything is fine'
    });

    console.log(colors.green('[Routes/] GET: Request for "messages"'));

});

export default router;