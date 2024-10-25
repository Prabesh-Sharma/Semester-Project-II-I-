import {Router} from 'express';
import jsonData from '../utils/districtData.json' assert {type:'json'}

const router = Router()

router.get('/district',(req,res)=>{
    res.json(jsonData)
})

export default router