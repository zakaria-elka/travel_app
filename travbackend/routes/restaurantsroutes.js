const express=require('express')
const router=express.Router();
const restaurantscontroller=require('../controllers/restaurantscontroller')
router.get('/all',restaurantscontroller.getAllRestaurants);
router.get('/:id',restaurantscontroller.getRestaurantById);
router.get('/:budget/:ville/:number',restaurantscontroller.getRestaurantByPreferences);
router.post('/add',restaurantscontroller.addRestaurant);
router.put('/set/:id',restaurantscontroller.updateRestaurantById);
router.delete('/delete/:id',restaurantscontroller.deleteRestaurantById)
module.exports = router ;