import express from 'express'

const app = express()

const port = 3000

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => res.json('My API is running 🥹!!'))