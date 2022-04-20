const express = require("express");
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.send(`Look mama I can do code in Node`);
})
const users = [
    { id: 1, name: 'Sabana', email: 'sabana@gmail.com', phone: '017888888' },
    { id: 2, name: 'Shabnur', email: 'Shabnur@gmail.com', phone: '017888888' },
    { id: 3, name: 'Suchorita', email: 'Suchorita@gmail.com', phone: '017888888' },
    { id: 4, name: 'Suchondra', email: 'Suchondra@gmail.com', phone: '017888888' },
    { id: 5, name: 'Sraabonti', email: 'Sraabonti@gmail.com', phone: '017888888' },
    { id: 6, name: 'Sabila', email: 'Sabila@gmail.com', phone: '017888888' },
    { id: 7, name: 'Sohana', email: 'Sohana@gmail.com', phone: '017888888' },
]
app.get('/users', (req, res) => {
    res.send(users)
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    const user = users.find(user => user.id == id)
    res.send(user)

});

app.post('/user', (req, res) => {
    console.log(req.body);
    res.send('Post method success')

})

app.get('/fruits', (req, res) => {
    res.send(['Mango', 'Lychee', 'Orange'])
})

app.get('/fruits/mango/fazli', (req, res) => {
    res.send('sour sour fazli flavor')
})

app.listen(port, () => {
    console.log(`Listing to port ${port}`);
})