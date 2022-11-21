import { BASE_URL, SERVER_PORT } from './global/enviroment';
import colors from 'colors'
import Server from './classes/server';

const server = new Server();

server.start(() => {

    console.log(colors.green(`[Indexjs] Server run in ${BASE_URL}:${SERVER_PORT}`));
    
})