const express=require('express')
const router=express.Router();
const transportscontroller=require('../controllers/transportscontroller')
router.get('/all',transportscontroller.getAllTransports);
router.get('/:id',transportscontroller.getTransportById);
router.get('/:budget/:ville/:number',transportscontroller.getTransportByPreferences);
router.post('/add',transportscontroller.addTransport);
router.put('/set/:id',transportscontroller.updateTransportById);
router.delete('/delete/:id',transportscontroller.deleteTransportById)
module.exports = router ;