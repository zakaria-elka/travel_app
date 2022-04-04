const mongoose=require('mongoose');
const { add } = require('nodemon/lib/rules');

const exemple=[
    {
      "_id": "624a3592fa7ff7698c6096f9",
      "index": 0,
      "guid": "3365bbb6-2f84-474b-9be0-5bea6f506471",
      "isActive": true,
      "balance": "$1,350.01",
      "picture": "http://placehold.it/32x32",
      "age": 21,
      "eyeColor": "blue",
      "name": "Ramirez Dean",
      "gender": "male",
      "company": "ENERFORCE",
      "email": "ramirezdean@enerforce.com",
      "phone": "+1 (802) 448-2829",
      "address": "203 Wythe Place, Dunlo, Indiana, 259",
      "about": "Culpa occaecat est labore ullamco. Velit non minim irure adipisicing laborum aliqua adipisicing non nulla est quis officia esse. Nisi anim ut ex tempor voluptate laboris elit tempor proident aute irure dolor ad nulla. Quis mollit minim in ullamco ut adipisicing ipsum culpa nisi officia occaecat culpa enim.\r\n",
      "registered": "2018-12-27T06:04:31 -01:00",
      "latitude": -26.293745,
      "longitude": 53.640197,
      "tags": [
        "ad",
        "consequat",
        "deserunt",
        "enim",
        "nostrud",
        "velit",
        "sit"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Doris Morales"
        },
        {
          "id": 1,
          "name": "Margie Lang"
        },
        {
          "id": 2,
          "name": "Fisher Stone"
        }
      ],
      "greeting": "Hello, Ramirez Dean! You have 2 unread messages.",
      "favoriteFruit": "apple"
    },
    {
      "_id": "624a3592fd629e1f435e60a1",
      "index": 1,
      "guid": "3fcbafca-1c33-41d4-bc79-b6d580153f1b",
      "isActive": true,
      "balance": "$1,730.70",
      "picture": "http://placehold.it/32x32",
      "age": 22,
      "eyeColor": "green",
      "name": "Carole Levine",
      "gender": "female",
      "company": "XYQAG",
      "email": "carolelevine@xyqag.com",
      "phone": "+1 (971) 588-2355",
      "address": "288 Fair Street, Stouchsburg, Rhode Island, 6233",
      "about": "Adipisicing dolore eu fugiat commodo mollit deserunt veniam id elit. Occaecat magna ex pariatur sint id nulla Lorem aliquip. Velit anim sunt officia eu. Sunt tempor consectetur duis est mollit do. Sunt enim esse irure veniam adipisicing aute aliquip.\r\n",
      "registered": "2021-03-06T05:17:30 -01:00",
      "latitude": -29.099642,
      "longitude": -104.325483,
      "tags": [
        "duis",
        "commodo",
        "fugiat",
        "qui",
        "cillum",
        "exercitation",
        "velit"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Virgie Wallace"
        },
        {
          "id": 1,
          "name": "Maureen Taylor"
        },
        {
          "id": 2,
          "name": "Elvira Hays"
        }
      ],
      "greeting": "Hello, Carole Levine! You have 1 unread messages.",
      "favoriteFruit": "banana"
    },
    {
      "_id": "624a35922b9594d9fc22e5a4",
      "index": 2,
      "guid": "590f54fa-9266-4ac1-bfe5-689e12271014",
      "isActive": false,
      "balance": "$1,360.44",
      "picture": "http://placehold.it/32x32",
      "age": 33,
      "eyeColor": "green",
      "name": "Althea Head",
      "gender": "female",
      "company": "ZOLAREX",
      "email": "altheahead@zolarex.com",
      "phone": "+1 (875) 505-3058",
      "address": "936 Arion Place, Springville, Maryland, 6262",
      "about": "Ea pariatur nulla nostrud id ad. Nostrud laboris minim velit aliquip. Quis aute et consectetur id id amet laborum. Exercitation esse irure irure cupidatat commodo officia in elit.\r\n",
      "registered": "2020-08-13T02:06:26 -01:00",
      "latitude": -78.033593,
      "longitude": -152.821274,
      "tags": [
        "aliquip",
        "nulla",
        "Lorem",
        "incididunt",
        "ex",
        "qui",
        "cupidatat"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Violet Meadows"
        },
        {
          "id": 1,
          "name": "Rich Murphy"
        },
        {
          "id": 2,
          "name": "Cristina Jefferson"
        }
      ],
      "greeting": "Hello, Althea Head! You have 6 unread messages.",
      "favoriteFruit": "apple"
    },
    {
      "_id": "624a35929bfb86521b9c7931",
      "index": 3,
      "guid": "0671a018-1f58-44a8-8210-67e11128f602",
      "isActive": true,
      "balance": "$1,625.35",
      "picture": "http://placehold.it/32x32",
      "age": 23,
      "eyeColor": "green",
      "name": "Ivy Huffman",
      "gender": "female",
      "company": "PROXSOFT",
      "email": "ivyhuffman@proxsoft.com",
      "phone": "+1 (968) 550-3044",
      "address": "804 Harrison Avenue, Kula, Oregon, 1395",
      "about": "Ut do aute duis velit sunt amet. Commodo et irure amet et aliqua non anim. Consequat elit eu incididunt non laborum laboris qui est aliquip qui do magna do culpa. Ea elit labore mollit do ea esse. Dolor nisi esse officia ullamco proident id fugiat laborum. Quis fugiat laborum ut dolor sint duis cillum dolore adipisicing consequat qui dolore. Dolor minim ea enim esse cillum cupidatat aliqua.\r\n",
      "registered": "2021-05-08T03:51:59 -00:00",
      "latitude": 31.079483,
      "longitude": 26.805877,
      "tags": [
        "pariatur",
        "ex",
        "laboris",
        "nulla",
        "dolor",
        "Lorem",
        "eu"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Cameron Bray"
        },
        {
          "id": 1,
          "name": "Kristen Jackson"
        },
        {
          "id": 2,
          "name": "Adkins Schmidt"
        }
      ],
      "greeting": "Hello, Ivy Huffman! You have 5 unread messages.",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "624a35928c99ba80e99ea1c9",
      "index": 4,
      "guid": "9e1afaca-47e1-466b-8d6e-677b10bee070",
      "isActive": false,
      "balance": "$1,506.50",
      "picture": "http://placehold.it/32x32",
      "age": 29,
      "eyeColor": "green",
      "name": "Medina Gonzalez",
      "gender": "male",
      "company": "BRAINCLIP",
      "email": "medinagonzalez@brainclip.com",
      "phone": "+1 (897) 492-3284",
      "address": "708 Cropsey Avenue, Barclay, Vermont, 7286",
      "about": "Tempor enim tempor ea consectetur voluptate irure dolor. Eu sunt qui nulla ut magna sit velit. Elit elit laborum ad eiusmod minim excepteur nostrud mollit non. Id laboris ex voluptate excepteur elit velit.\r\n",
      "registered": "2015-03-28T02:20:29 -00:00",
      "latitude": -24.803181,
      "longitude": 139.950715,
      "tags": [
        "ipsum",
        "minim",
        "anim",
        "anim",
        "laborum",
        "pariatur",
        "nisi"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Mosley Holden"
        },
        {
          "id": 1,
          "name": "Moody Shaffer"
        },
        {
          "id": 2,
          "name": "Lesley Conley"
        }
      ],
      "greeting": "Hello, Medina Gonzalez! You have 8 unread messages.",
      "favoriteFruit": "banana"
    }
  ]

const getAllHotels=async (req,res,next)=>{
    if(false)
    return next(error)
    res.json(exemple);
    }

const getHotelByPreferences=async (req,res,next)=>{
if(false)
return next(error)
res.json({})    
}
const getHotelById=async (req,res,next)=>{
    if(false)
    return next(error)
    
    res.json({})    
    }
const updateHotelById=async (req,res,next)=>{
    if(false)
    return next(error)
    res.json({})    
    }
const deleteHotelById=async (req,res,next)=>{
    if(false)
    return next(error)
    res.json({})    
    }

///////////////////////post////////////////
const addHotel=async (req,res,next)=>{
    if(false)
    return next(error)
    
    data=req.body
    console.log(req.body)
    }
exports.getAllHotels=getAllHotels;
exports.getHotelByPreferences=getHotelByPreferences;
exports.getHotelById=getHotelById;
exports.deleteHotelById=deleteHotelById;
exports.updateHotelById=updateHotelById;
exports.addHotel=addHotel;
