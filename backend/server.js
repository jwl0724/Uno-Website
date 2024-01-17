const app = require('express')();
const cors = require('cors');
const PORT = 3000;

function generateRoomId() {
    return Math.floor(Math.random() * 10000).toString();
}

app.use(cors());

app.listen(PORT, () => {
    console.log(`Now listening to port ${PORT}`);
});

app.get('/createRoom', async (req, resp) => {
    // create room
    let playerCount = req.query.playerCount;
    
    // return roomId
    let roomId = generateRoomId();
    resp.send({ roomId: roomId });
})