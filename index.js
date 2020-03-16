let express = require('express')
let app = express();
let bodyParser = require('body-parser');
let path = require('path');

app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'views')));
  
let expressHbs= require('express-handlebars');  
app.engine(
    'hbs',
    expressHbs({
        layoutsDir: 'views/layouts/',
        partialsDir: 'views/partials/',
        defaultLayout: 'main',
        extname: 'hbs'
    })
);

app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let artistRoutes = require('./routes/artistsRoutes');
app.use(artistRoutes);

let loginRoutes = require('./routes/loginRoutes');
app.use(loginRoutes);
 
app.get('/', (req, res, next) => {
    res.render('login', { 
        pageTitle: 'Artist Directory',
        css: 'login',
        requiresJS: false
    });
});

app.listen(process.env.PORT || 3000, () => console.log('Server ready.'));