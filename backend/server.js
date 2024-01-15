const app = require('express')();
const cors = require('cors');
const PORT = 3000;

app.use(cors());

app.listen(PORT, () => {
    console.log(`Now listening to port ${PORT}`);
});