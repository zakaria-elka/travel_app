const express=require('express')
const router=express.Router();
const hotelscontroller=require('../controllers/hotelscontroller')
router.get('/all',hotelscontroller.getAllHotels);
router.get('/:id',hotelscontroller.getHotelById);
router.get('/:budget/:ville/:number',hotelscontroller.getHotelByPreferences);
router.post('/add',hotelscontroller.addHotel);
router.patch('/set/:id',hotelscontroller.updateHotelById);
router.delete('/delete/:id',hotelscontroller.deleteHotelById)
module.exports = router ;