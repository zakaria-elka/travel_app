 const express=require('express')
const path=require("path");
const crypto=require("crypto");
const mongoose=require("mongoose")
const multer=require("multer")
const {GridFsStorage}=require("multer-gridfs-storage")
const Grid=require("gridfs-stream");
const Hotel=require("../modules/hotel");
const bodyParser=require("body-parser");
 
let hotelName
 // 
 const mongoURL="mongodb+srv://zakaria-elk:HEYHEYmongo@travelapp.tcd2y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const conn=mongoose.createConnection(mongoURL);
let gfs;
conn.once('open',()=>{
    //init stream
    gfs=Grid(conn.db,mongoose.mongo);
    gfs.collection('uploads');
})

// storage

 

const storage = new GridFsStorage({
    url: mongoURL,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err);
          }
          const filename = buf.toString('hex') + path.extname(file.originalname);
          const fileInfo = {
            filename: filename,
            bucketName: 'uploads'
          };
          resolve(fileInfo);
        });
      });
    }
  });

  const upload = multer({ storage });
 
//def
const { ppid } = require("process");
const router=express.Router();
const hotelscontroller=require('../controllers/hotelscontroller')

//routes
router.get('/all',hotelscontroller.getAllHotels);
router.get('/:id',hotelscontroller.getHotelById);

router.get('/:budget/:ville/:number',hotelscontroller.getHotelByPreferences);
//router.post('/add',hotelscontroller.addHotel);// add sans image
router.patch('/set/:id',hotelscontroller.updateHotelById);
router.delete('/delete/:id',hotelscontroller.deleteHotelById)
//end routes



//add avec image
 
router.post('/add',upload.single('file'),(req,res)=>{
   console.log(req.body.name)
   
   /* const hotel=new Hotel({
        name:req.body.name,
        description:req.body.description,


    })
    hotel.save().then(data=>{
        res.json(data) 
    }).catch(err=>{
        res.json({message:err})
    })*/
    console.log(req.body);
    
}); 
router.get('/image/:name', (req, res) => {
    if (gfs) {
      gfs.files.findOne({ filename: req.params.name }).then((file) => {
        if (!file) return res.status(404).json({ err: 'No File Exists' });
  
         if (['image/jpeg', 'image/jpg', 'image/png', 'image/webp'].includes(file.contentType)) {
  //#############LIKE THIIIISSS######
          const bucket = new mongoose.mongo.GridFSBucket(conn, {bucketName: 'uploads',});
          const readStream = bucket.openDownloadStreamByName(file.filename);
          readStream.pipe(res);
  
  //#############################
        } else {
          return res.json({ imagen: file });
        }
      });
    }
  });
module.exports = router ;