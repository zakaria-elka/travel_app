const express=require('express')
const router=express.Router();
const packscontroller=require('../controllers/packscontroller')
router.get('/all',packscontroller.getAllPacks);
router.delete('/remove/:packid',packscontroller.removeFromFavorites)
router.get('/search/:budget/:city/:nuits/:depart',packscontroller.getUserPack);
router.get('/pack/:packid',packscontroller.showPack);
router.post('/fav',packscontroller.addToFavorites);
router.get('/pref/:depart/:city',packscontroller.getPackByPreferences);
 
module.exports = router ;