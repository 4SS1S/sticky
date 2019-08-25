const { BrowserWindow, ipcRenderer } = require('electron');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('ok');
})


ipcRenderer.send('new_task', {
    title: 'test_note',
    content: 'Primeiro task',
    author: null,
    width: 300,
    height: 500,
});

const closebtn = document.querySelector('#close');

console.log(closebtn);
// app.listen(3333);