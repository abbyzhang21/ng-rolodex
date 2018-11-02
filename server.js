const express = require('express');
const PORT = process.env.PORT || 8008;
const app = express();
const bp = require('body-parser');
const cors = require('cors');
const backendServer = 'src/app/services/backend.service.ts';
// const session = require('express-session');
app.use(cors());
app.use(express.static('public'));
app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())


let testName = [{ name: 'Jyama' }, { name: 'Sarah' }, { name: 'Jamie' }, { name: 'Wymin' }, { name: 'Nick' }, { name: 'Doug' }, { name: 'Abby' }, { name: 'Carl' }, { name: 'Jason' }, { name: 'Romeo' }, { name: 'Jeff' }, { name: 'May' }, { name: 'Harsh' }, { name: 'Chaz' }, { name: 'Raymond' }, { name: 'Baseem' }, { name: 'Ed' }, { name: 'Kenny' }, { name: 'Jesus' }, { name: 'Bronson' }, { name: 'George' }, { name: 'McKarl' }, { name: 'Isaiah' }];
//get
app.get('/name', (req, res) => {
    res.json(testName)

})


//send
app.post('/new', (req, res) => {
    testName.push(req.body);
    res.json(testName);
    console.log(req.body);

})

//edit
app.put('/user/name', (req, res) => {
    let name = req.param.name;
    let newUsers = users.filter(elem => {
        return elem.name = name;
        res.json(newUsers);
    })
})
app.listen(PORT, () => {
    console.log('Server listen on: ', PORT)
})