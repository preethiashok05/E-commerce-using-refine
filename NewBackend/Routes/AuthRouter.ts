import * as express from 'express'
import { login , register } from '../Controllers/AuthController'
const authRouter = express.Router()

authRouter.post('/', (req, res) => {
  login(req,res);
})

authRouter.post('/', (req, res) => {
    register(req,res);
})

export default authRouter