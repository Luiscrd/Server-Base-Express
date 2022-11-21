import { BASE_URL, SERVER_PORT } from './global/enviroment';
import colors from 'colors'
import Server from './classes/server';
import router from './routes/router';


const server = new Server();

server.app.use('/', router);

server.start(() => {

    console.log(colors.blue(`[Indexts] Server run in ${BASE_URL}:${SERVER_PORT}`));
    
})