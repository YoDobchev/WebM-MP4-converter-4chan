const express = require('express')
const {execSync} = require('child_process')
// const { stdout, stderr } = require('process')
const app = express()
const port = 4444

app.get('/convert/:board/:id', (req, res) => {
    execSync(`./convert.sh ${req.params.id} webm ${req.params.board}`);
    let file = `${__dirname}/files/${req.params.id}M.mp4`
    res.sendFile(file)
});
app.listen(port, () => {})
