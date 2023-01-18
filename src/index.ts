import 'dotenv/config'
import express from 'express'
import cors from 'cors'

const app = express()
app.set('port', process.env.PORT || 3000)

app.use(cors())
app.use(express.json())

app.listen(app.get('port'), () => {
    console.log(`\nListening on http://localhost:${app.get('port')}`)
})