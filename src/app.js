const express = require('express');
const app = express();
const estates = [
 { id: 1, address: 'Calle 123', precio: 150000, tipo: 'Apartamento' },
 { id: 2, address: 'Avenida 456', precio: 230000, tipo: 'Casa' },
 { id: 3, address: 'Carrera 789', precio: 120000, tipo: 'Estudio' }
];
app.get('/api/estates', (req, res) => {
 res.json(estates);
});
module.exports = app;