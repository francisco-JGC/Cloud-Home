import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import routes from './routes'

const app = express()
app.set('port', process.env.PORT || 3000)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', routes)

app.listen(app.get('port'), () => {
    console.log(`\nListening on http://localhost:${app.get('port')}`)
})