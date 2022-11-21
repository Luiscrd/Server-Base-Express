import colors from 'colors';
import bodyParser from 'body-parser';
import Server from './classes/server';
import router from './routes/router';

const server = new Server();

server.app.use(bodyParser.urlencoded({ extended: true}));

server.app.use(bodyParser.json());

server.app.use('/', router);

server.start(() => {

    console.log(colors.blue('[Indexts] Server run Ok'));
    
})