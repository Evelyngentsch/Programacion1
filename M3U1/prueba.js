var moment = require('moment');

moment.locale('es');

console.log('Naci ' + moment('23/06/1996', 'DD/MM/YYYY').fromNow());
