const app = require('express')();
const port = 8080;
const db = require('./config/database');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors({
    origin: ['http://localhost:4200'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(bodyParser.json());

db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: '+err));

app.set('json spaces', 4);

const index = require('./routes/index');
const clientes = require('./routes/clientes');
const filme = require('./routes/filmes');
const game = require('./routes/games');
const lanhouse = require('./routes/lanhouse');
const login = require('./routes/login');

app.use('/', index);
app.use('/clientes', clientes);
app.use('/filmes', filme);
app.use('/games', game);
app.use('/lanhouse', lanhouse);
app.use('/login', login);

app.listen(port, () => console.log('Up on port '+port));