const express=require('express')
const router=express.Router();
const packscontroller=require('../controllers/packscontroller')
router.get('/all',packscontroller.getAllPacks);
router.post('/search',packscontroller.getPackWithPreferences);
router.post('/fav',packscontroller.addToFavorites);
 
module.exports = router ;