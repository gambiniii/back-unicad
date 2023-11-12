import app from "./app.js";

const port = 3001
const environment = `http://127.0.0.1:${port}`

app.listen(port, () => {
    console.log(`APLICATIVO ESCUTANDO NA PORTA ${port}`)

    console.log(`Ctrl + Click em ${environment}`)
})