const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const port = 5000;
const cors = require('cors')


//use express static folder
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.listen(port, () => {
  try {
    console.log(`Server is running ${port}`);
     mongoose.connect(
      "mongodb+srv://StyleLoft:StyleLoft@cluster0.zwh7t.mongodb.net/dbStyleLoft"
    );
    console.log("db connection established");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
});


//AdminSchema

const adminSchemaStructure = new mongoose.Schema({
    adminName: {
      type: String,
      required: true,
    },
    adminEmail: {
      type: String,
      required: true,
      unique: true,
    },
    adminPassword: {
      type: String,
      required: true,
      minlength: 6,
    },
  });
  const Admin = mongoose.model("adminCollection", adminSchemaStructure);
  
  //AdminPost

app.post("/Admin", async (req, res) => {
  try {
    const { adminName, adminEmail, adminPassword } = req.body;

   
   let admin = new Admin({
      adminName,
      adminEmail,
      adminPassword,
    });

    await admin.save();

    res.json({ message: "Admin inserted successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//get

app.get("/Admin", async (req, res) => {
  try{
    const admin = await Admin.find();
    if(admin.length === 0){
      return res.send({ message: "Admin not found", admin: [] });
    } else{
      res.send({ admin }).status(200);
    }
  }catch(err){
    console.error("Error finding Admin:", err);
    res.status(500).json({message:"Internal Server error"});
  }
});

//Admin GetById

app.get("/Admin/:aid", async (req, res) => {
  try{
    const admin = await Admin.findById(req.params.aid);
    if(!admin){
      return res.send({message: "Admin not found",admin:{}});
    }else{
      res.send({admin}).status(200);
    }
  }catch(err){
    console.error("Error finding in Admin:", err);
    res.status(500).json({message: "Internal Server Error"});
  }
});

// -----------------------------------------------------------------

//District
 
const districtSchemaStructure = new mongoose.Schema({
    districtName:{
    type:String,
    required:true,
  },
});
const District = mongoose.model("districtCollection", districtSchemaStructure);
 //DistrictPost

 app.post("/District", async (req, res) => {
  try {
    const { districtName} = req.body;
    let district = new District({
    districtName,
    });

    await district.save();

    res.json({ message: "District inserted successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//get

app.get("/District", async (req, res) => {
  try{
    const district = await District.find();
    if(district.length === 0){
      return res.send({ message: "District not found", district: [] });
    } else{
      res.send({ district }).status(200);
    }
  }catch(err){
    console.error("Error finding districtt:", err);
    res.status(500).json({message:"Internal Server error"});
  }
});


//patch

app.patch("/AdminPatch/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const { adminPassword } = req.body;
    const updatedAdmin = await Admin.findByIdAndUpdate(
      id,
      { adminPassword },
      { new: true }
    );
    res.json(updatedAdmin);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

//put

app.put("/AdminPut/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const { adminName, adminEmail, adminPassword } = req.body;
    const updatedAdmin = await Admin.findByIdAndUpdate(
      id,
      { adminName, adminEmail, adminPassword },
      { new: true }
    );
    res.json(updatedAdmin);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});


// -----------------------------------------------------------------

//PlaceSchema

const placeSchemaStructure = new mongoose.Schema({
  districtId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "districtCollection"
  },
  placeName:{
    type:String,
    required:true,   
  },
});
const Place = mongoose.model("placeCollection", placeSchemaStructure);
//PlacePost

app.post("/Place", async (req, res) => {
  try {
    const { placeName, districtId} = req.body;
    let place = new Place({
    placeName,
    districtId,
    });

    await place.save();
    res.json({ message: "Place inserted successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//get

app.get("/Place", async (req, res) => {
  try{
    const place = await Place.find();
    if(place.length === 0){
      return res.send({ message: "Place not found", place: [] });
    } else{
      res.send({ place }).status(200);
    }
  }catch(err){
    console.error("Error finding place:", err);
    res.status(500).json({message:"Internal Server error"});
  }
});

//Place FilterById

app.get("/PlaceFilter/:did", async (req, res) => {
  try{
    const disid = req.params.did
    const place = await Place.find({districtId:disid});
    if(!place){
      return res.send({message: "Place not found",place:{}});
    }else{
      res.send({place}).status(200);
    }
  }catch(err){
    console.error("Error finding in place:", err);
    res.status(500).json({message: "Internal Server Error"});
  }
});

// -----------------------------------------------------------------

//CategorySchema

const categorySchemaStructure = new mongoose.Schema({
  categoryName:{
    type:String,
    required:true,   
  },
});
const Category = mongoose.model("categoryCollection", categorySchemaStructure);

  //categoryPost

  app.post("/Category", async (req, res) => {
    try {
      const { categoryName} = req.body; 
      let category = new Category({
      categoryName,
      });
  
      await category.save();
  
      res.json({ message: "Category inserted successfully" });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  });

  //get

  app.get("/Category", async (req, res) => {
    try{
      const category = await Category.find();
      if(category.length === 0){
        return res.send({ message: "Category not found", category: [] });
      } else{
        res.send({ category }).status(200);
      }
    }catch(err){
      console.error("Error finding category:", err);
      res.status(500).json({message:"Internal Server error"});
    }
  });
  // -----------------------------------------------------------------

  //SubcategorySchema

const subcategorySchemaStructure = new mongoose.Schema({
    categoryId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "categoryCollection"
  },
  subcategoryName:{
    type:String,
    required:true,   
  },
});
const Subcategory = mongoose.model("subcategoryCollection", subcategorySchemaStructure);

//get

app.get("/Subcategory", async (req, res) => {
  try{
    const subcategory = await Subcategory.find();
    if(subcategory.length === 0){
      return res.send({ message: "Subcategory not found", district: [] });
    } else{
      res.send({ subcategory }).status(200);
    }
  }catch(err){
    console.error("Error finding subcategory:", err);
    res.status(500).json({message:"Internal Server error"});
  }
});

//Subcategory get filterById

app.get("/SubcategoryFilter/:cid", async (req, res) => {
  try{
    const catid = req.params.cid
    const subcategory = await Subcategory.find({categoryId:catid});
    if(!subcategory){
      return res.send({message: "Subcategory not found",subcategory:{}});
    }else{
      res.send({subcategory}).status(200);
    }
  }catch(err){
    console.error("Error finding in subcategory:", err);
    res.status(500).json({message: "Internal Server Error"});
  }
});


//----------------------------------------------------------------------

 //SizeSchema

const SizeSchemaStructure = new mongoose.Schema({
  sizeName:{
    type:String,
    required:true,   
  },
});
const Size = mongoose.model("sizeCollection", SizeSchemaStructure);

  //SizePost

  app.post("/Size", async (req, res) => {
    try {
      const { sizeName} = req.body;
      let size = new Size({
      sizeName,
      });
  
      await size.save();
  
      res.json({ message: "Size inserted successfully" });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  });
//get
app.get("/Size", async (req, res) => {
  try{
    const size = await Size.find();
    if(size.length === 0){
      return res.send({ message: "Size not found", size: [] });
    } else{
      res.send({ size }).status(200);
    }
  }catch(err){
    console.error("Error finding size:", err);
    res.status(500).json({message:"Internal Server error"});
  }
});

  // -----------------------------------------------------------------

   //TypeSchema

const TypeSchemaStructure = new mongoose.Schema({
  typeName:{
    type:String,
    required:true,   
  },
});
const Type = mongoose.model("typeCollection", TypeSchemaStructure);

  //TypePost

  app.post("/Type", async (req, res) => {
    try {
      const { typeName} = req.body;
      let type = new Type({
      typeName,
      });
  
      await type.save();
  
      res.json({ message: "Type inserted successfully" });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  });

  //get
  app.get("/Type", async (req, res) => {
    try{
      const type = await Type.find();
      if(type.length === 0){
        return res.send({ message: "Type not found", type: [] });
      } else{
        res.send({ type }).status(200);
      }
    }catch(err){
      console.error("Error finding type:", err);
      res.status(500).json({message:"Internal Server error"});
    }
  });
  // -----------------------------------------------------------------

  //BoutiqueTypeSchema

const BoutiqueTypeSchemaStructure = new mongoose.Schema({
    boutiquetypeName:{
    type:String,
    required:true,   
  },
});
const BoutiqueType = mongoose.model("boutiquetypeCollection", BoutiqueTypeSchemaStructure);

  //BoutiqueTypePost

  app.post("/BoutiqueType", async (req, res) => {
    try {
      const { boutiquetypeName} = req.body;  
      let boutiquetype = new BoutiqueType({
        boutiquetypeName,
      });
  
      await boutiquetype.save();
  
      res.json({ message: "BoutiqueType inserted successfully" });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  });

  //get

  app.get("/BoutiqueType", async (req, res) => {
    try{
      const boutiquetype = await BoutiqueType.find();
      if(boutiquetype .length === 0){
        return res.send({ message: "Boutiquetype not found", boutiquetype: [] });
      } else{
        res.send({ boutiquetype  }).status(200);
      }
    }catch(err){
      console.error("Error finding boutiquetype :", err);
      res.status(500).json({message:"Internal Server error"});
    }
  });

  // -----------------------------------------------------------------

  //MaterialSchema

const MaterialSchemaStructure = new mongoose.Schema({
  materialName:{
  type:String,
  required:true,   
},
});
const Material = mongoose.model("materialCollection", MaterialSchemaStructure);


  //MaterialPost

  app.post("/Material", async (req, res) => {
    try {
      const { materialName} = req.body;
      let material= new Material({
        materialName,
      });
  
      await material.save();
  
      res.json({ message: "Material inserted successfully" });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  });

  //get

  app.get("/Material", async (req, res) => {
    try{
      const material = await Material.find();
      if(material.length === 0){
        return res.send({ message: "Material not found", material: [] });
      } else{
        res.send({ material  }).status(200);
      }
    }catch(err){
      console.error("Error finding material:", err);
      res.status(500).json({message:"Internal Server error"});
    }
  });
  // -----------------------------------------------------------------
  
//BoutiqueSchema

const BoutiqueSchemaStructure = new mongoose.Schema({
  boutiqueName:{
  type:String,
  required:true,   
  },
  boutiqueEmail:{
    type:String,
    required:true,   
  },
  boutiquePassword:{
    type:String,
    required:true,   
  },
  boutiqueAddress:{
    type:String,
    required:true,   
  },
  placeId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "placeCollection"
  },
  boutiquetypeId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "boutiquetypeCollection"
  },
  boutiqueSlogan:{
    type:String,  
    // required:true,  
  },
  boutiquePhoto:{
    type:String,
    // required:true,   
  },
  boutiqueProof:{
    type:String,
    // required:true,   
  },
});
const Boutique = mongoose.model("boutiqueCollection", BoutiqueSchemaStructure);

//BoutiquePost

app.post("/Boutique", async (req, res) => {
try {
  const { boutiqueName,boutiqueEmail,boutiquePassword,boutiqueAddress,placeId,boutiquetypeId,boutiqueSlogan,boutiquePhoto,boutiqueProof} = req.body;  
  let boutique = new Boutique({
    boutiqueName,
    boutiqueEmail,
    boutiquePassword,
    boutiqueAddress,
    placeId,
    boutiquetypeId,
    boutiqueSlogan,
    boutiquePhoto,
    boutiqueProof,
  });

  await boutique.save();

  res.json({ message: "Boutique inserted successfully" });
  } catch (err) {
  console.error(err.message);
  res.status(500).send("Server error");
}
});

//get

app.get("/Boutique", async (req, res) => {
  try{
    const boutique = await Boutique.find();
    if(boutique.length === 0){
      return res.send({ message: "Boutique not found", boutique: [] });
    } else{
      res.send({ boutique  }).status(200);
    }
  }catch(err){
    console.error("Error finding boutique:", err);
    res.status(500).json({message:"Internal Server error"});
  }
});
// -----------------------------------------------------------------
  
 //ProductSchema

 const ProductSchemaStructure = new mongoose.Schema({
  productName:{
  type:String,
  required:true,   
  },
  productPhoto:{
    type:String,
    // required:true,   
  },
productDetails:{
  type:String,
  required:true,   
},
productPrice:{
  type:String,
  required:true,   
},
productStatus:{
  type:String,
  // required:true,   
},
sizeId:{
  type: mongoose.Schema.Types.ObjectId,
  ref: "sizeCollection"
},
typeId:{
  type: mongoose.Schema.Types.ObjectId,
  ref: "typeCollection"
},
boutiqueId:{
  type: mongoose.Schema.Types.ObjectId,
  ref: "boutiqueCollection"
},
subcategoryId:{
  type:mongoose.Schema.Types.ObjectId,
  ref: "subcategoryCollection"
},
boutiqueId:{
  type: mongoose.Schema.Types.ObjectId,
  ref: "boutiqueCollection"
},

});
const Product = mongoose.model("productCollection", ProductSchemaStructure);

//ProductPost

app.post("/Product", async (req, res) => {
try {
  const { productName,productPhoto,productDetails,productPrice,productStatus,sizeId,typeId,materialId,subcategoryId,boutiqueId} = req.body;  
  let product = new Product({
    productName,
    productPhoto,
    productDetails,
    productPrice,
    productStatus,
    sizeId,
    typeId,
    materialId,
    subcategoryId,
    boutiqueId,
    
  });

  await product.save();
  res.json({ message: "Product inserted successfully" });
  } catch (err) {
  console.error(err.message);
  res.status(500).send("Server error");
}
});

//get

app.get("/Product", async (req, res) => {
  try{
    const product = await Product.find();
    if(product.length === 0){
      return res.send({ message: "Product not found", product: [] });
    } else{
      res.send({ product }).status(200);
    }
  }catch(err){
    console.error("Error finding product :", err);
    res.status(500).json({message:"Internal Server error"});
  }
});

// -----------------------------------------------------------------

//StockSchema

const StockSchemaStructure = new mongoose.Schema({
  stockQuantity:{
  type:String,
  required:true,   
},
productId:{
  type: mongoose.Schema.Types.ObjectId,
  ref: "productCollection"
},
});
const Stock = mongoose.model("stockCollection", StockSchemaStructure);

//StockPost

app.post("/Stock", async (req, res) => {
  try {
    const { stockQuantity,productId} = req.body;
    let stock= new Stock({
      stockQuantity,
      productId,
    });

    await stock.save();

    res.json({ message: "Stock inserted successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//get

app.get("/Stock", async (req, res) => {
  try{
    const stock = await Stock.find();
    if(stock.length === 0){
      return res.send({ message: "Stock not found", stock: [] });
    } else{
      res.send({ stock  }).status(200);
    }
  }catch(err){
    console.error("Error finding stock :", err);
    res.status(500).json({message:"Internal Server error"});
  }
});

// -----------------------------------------------------------------

//StylistSchema

const StylistSchemaStructure = new mongoose.Schema({
  stylistName:{
  type:String,
  required:true,   
  },
  stylistEmail:{
    type:String,
    required:true,   
  },
  stylistPassword:{
    type:String,
    required:true,   
  },
  stylistAddress:{
    type:String,
    required:true,   
  },
  boutiqueId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "boutiqueCollection"
  },
  stylistProof:{
    type:String,
    // required:true,   
  },
});
const Stylist = mongoose.model("stylistCollection", StylistSchemaStructure);

//stylistPost
app.post("/Stylist", async (req, res) => {
  try {
    const { stylistName,stylistEmail,stylistPassword,stylistAddress,stylistProof,boutiqueId} = req.body;  
    let stylist= new Stylist({
      stylistName,
      stylistEmail,
      stylistPassword,
      stylistAddress,
      stylistProof,
      boutiqueId,  
    });
  
    await stylist.save();
    res.json({ message: "Stylist inserted successfully" });
    } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
  });

  //get

  app.get("/Stylist", async (req, res) => {
    try{
      const stylist = await Stylist.find();
      if(stylist.length === 0){
        return res.send({ message: "Stylist not found", stylist: [] });
      } else{
        res.send({ stylist  }).status(200);
      }
    }catch(err){
      console.error("Error finding stylist :", err);
      res.status(500).json({message:"Internal Server error"});
    }
  });

  // -----------------------------------------------------------------

  //GallerySchema

  const GallerySchemaStructure = new mongoose.Schema({
    galleryPhoto:{
    type:String,
    // required:true,   
  },
  productId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "productCollection"
  },
  });
  const Gallery = mongoose.model("galleryCollection", GallerySchemaStructure);
  
  //GalleryPost
  
  app.post("/Gallery", async (req, res) => {
    try {
      const { galleryPhoto,productId} = req.body;
      let gallery= new Gallery({
        galleryPhoto,
        productId,
      });
  
      await gallery.save();
  
      res.json({ message: "Gallery inserted successfully" });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  });

//get

app.get("/Gallery", async (req, res) => {
  try{
    const gallery = await Gallery.find();
    if(gallery.length === 0){
      return res.send({ message: "Gallery not found", gallery: [] });
    } else{
      res.send({ gallery }).status(200);
    }
  }catch(err){
    console.error("Error finding gallery:", err);
    res.status(500).json({message:"Internal Server error"});
  }
});

  // -----------------------------------------------------------------

  //UserSchema

  const UserSchemaStructure = new mongoose.Schema({
    userName:{
    type:String,
    required:true,   
    },
    userEmail:{
      type:String,
      required:true,   
    },
    userPassword:{
      type:String,
      required:true,   
    },
    userAddress:{
      type:String,
      required:true,   
    },
    userPhoto:{
      type:String,
      // required:true,   
    },
  });
  const User = mongoose.model("userCollection", UserSchemaStructure);
  
  //UserPost
  app.post("/User", async (req, res) => {
    try {
      const { userName,userEmail,userPassword,userAddress,userPhoto} = req.body;  
      let user= new User({
        userName,
        userEmail,
        userPassword,
        userAddress,
        userPhoto, 
      });
    
      await user.save();
      res.json({ message: "user inserted successfully" });
      } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
    });

    //get
    app.get("/User", async (req, res) => {
      try{
        const user = await User.find();
        if(user.length === 0){
          return res.send({ message: "User not found", user: [] });
        } else{
          res.send({ user  }).status(200);
        }
      }catch(err){
        console.error("Error finding user :", err);
        res.status(500).json({message:"Internal Server error"});
      }
    });

    // -----------------------------------------------------------------
  
    //Customization

    const CustomizationSchemaStructure = new mongoose.Schema({
      customizationPhoto:{
        type:String,
        // required:true,   
      },
      customizationDetails:{
      type:String,
      required:true,   
    },
    customizationQuantity:{
      type:String,
      required:true,   
    },
    sizeId:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "sizeCollection"
    },
    materialId:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "materialCollection"
    },
    userId:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "userCollection"
    },
    customerStatus:{
      type:String,
      // required:true, 
    },
    boutiqueId:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "boutiqueCollection"
    },
    
    });
    const Customization = mongoose.model("customizationCollection", CustomizationSchemaStructure);
    
    //CutomizationPost
    
    app.post("/Customization", async (req, res) => {
    try {
      const { customizationPhoto,customizationDetails,sizeId,materialId,userId,boutiqueId,customizationQuantity,customizationStatus} = req.body;  
      let customization = new Customization({
        customizationPhoto,
        customizationDetails,
        customizationStatus,
        sizeId,
        userId,
        materialId,
        customizationQuantity,
        boutiqueId,
        
      });
    
      await customization.save();
      res.json({ message: "Customization inserted successfully" });
      } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
    });

    //get

    app.get("/Customization", async (req, res) => {
      try{
        const customization = await Customization.find();
        if(customization.length === 0){
          return res.send({ message: "Customization not found", customization: [] });
        } else{
          res.send({ customization  }).status(200);
        }
      }catch(err){
        console.error("Error finding Customization :", err);
        res.status(500).json({message:"Internal Server error"});
      }
    });

    //---------------------------------------------------------------

    //BookingSchema

    const BookingSchemaStructure = new mongoose.Schema({
      bookingDate:{
        type:String,
        required:true,   
      },
      bookingAmount:{
        type:String,
        required:true,   
      },
      bookingFromdate:{
        type:String,
        required:true,   
      },
      bookingTodate:{
        type:String,
        required:true,   
      },
      userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "userCollection"
      },
       
    
    });
    const Booking = mongoose.model("bookingCollection", BookingSchemaStructure);
    
    //BookingPost
    app.post("/Booking", async (req, res) => {
      try {
        const { bookingDate,bookingAmount,bookingStatus,userId,bookingFromdate,bookingTodate} = req.body;  
        let booking= new Booking({
         bookingDate,
         bookingAmount,
         bookingStatus,
         userId,
         bookingFromdate,
         bookingTodate,
        });
      
        await booking.save();
        res.json({ message: "booking inserted successfully" });
        } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
      }
      });

//get

app.get("/Booking", async (req, res) => {
  try{
    const booking = await Booking.find();
    if(booking.length === 0){
      return res.send({ message: "Booking not found", booking: [] });
    } else{
      res.send({ booking  }).status(200);
    }
  }catch(err){
    console.error("Error finding booking :", err);
    res.status(500).json({message:"Internal Server error"});
  }
});


  //---------------------------------------------------------------------

 //CartSchema
 
 const CartSchemaStructure = new mongoose.Schema({

  bookingId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "bookingCollection"
  },
  productId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "productCollection"
  },
  cartQuantity:{
    type:String,
    required:true,   
  },
});
const Cart = mongoose.model("cartCollection",CartSchemaStructure);

//CartPost
app.post("/Cart", async (req, res) => {
  try {
    const { bookingId,productId,cartQuantity} = req.body;  
    let cart= new Cart({
     bookingId,
     productId,
     cartQuantity,
    });
  
    await cart.save();
    res.json({ message: "Cart inserted successfully" });
    } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
  });

  //get

  app.get("/Cart", async (req, res) => {
    try{
      const cart = await Cart.find();
      if(cart.length === 0){
        return res.send({ message: "Cart not found", cart: [] });
      } else{
        res.send({ cart  }).status(200);
      }
    }catch(err){
      console.error("Error finding Cart:", err);
      res.status(500).json({message:"Internal Server error"});
    }
  });

  //---------------------------------------------------------------------

  //ChatSchema

  const ChatSchemaStructure = new mongoose.Schema({
    userId:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "userCollection"
    },
    stylistId:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "stylistCollection"
    },
    chatMessage:{
      type:String,
        required:true, 
    },
    chatStatus:{
      type:String,
        // required:true, 
    },
     
  
  });
  const Chat = mongoose.model("chatCollection", ChatSchemaStructure);
  
  //chatPost
  app.post("/Chat", async (req, res) => {
    try {
      const { userId,stylistId,chatMessage,chatStatus} = req.body;  
      let chat= new Chat({
       chatMessage,
       userId,
       chatStatus,
       stylistId
      });
    
      await chat.save();
      res.json({ message: "Chat inserted successfully" });
      } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
    });

    //get

    app.get("/Chat", async (req, res) => {
      try{
        const chat = await Chat.find();
        if(chat.length === 0){
          return res.send({ message: "Chat not found", chat: [] });
        } else{
          res.send({ chat  }).status(200);
        }
      }catch(err){
        console.error("Error finding Chat:", err);
        res.status(500).json({message:"Internal Server error"});
      }
    });

    //-----------------------------------------------------

    //complaintSchema

    const ComplaintSchemaStructure = new mongoose.Schema({

      complaintTitle:{
        type:String,
        required:true,   
      },
      compliantContent:{
        type:String,
        required:true,   
      },
      complaintReply:{
        type:String,
        required:true,   
      },
      complaintStatus:{
        type:String,
        // required:true,   
      },
      userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "userCollection" 
      }
    });
    const Complaint = mongoose.model("complaintCollection",ComplaintSchemaStructure);
    
    //ComplaintPost
    app.post("/Complaint", async (req, res) => {
      try {
        const { compliantContent,comaplaintTitle,complaintReply,userId,complaintStatus } = req.body;  
        let complaint= new Complaint({
          compliantContent,
          comaplaintTitle,
          complaintReply,
          userId,
          complaintStatus
        });
        await complaint.save();
        res.json({ message: "Complaint inserted successfully" });
        } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
      }
      });

//get

 app.get("/Complaint", async (req, res) => {
      try{
        const complaint = await Complaint.find();
        if(complaint.length === 0){
          return res.send({ message: "Complaint not found", complaint: [] });
        } else{
          res.send({ complaint  }).status(200);
        }
      }catch(err){
        console.error("Error finding Complaint:", err);
        res.status(500).json({message:"Internal Server error"});
      }
    });

  //--------------------------------------------------------------------------

      //RatingSchema

      const RatingSchemaStructure = new mongoose.Schema({

        ratingCount:{
          type:String,
          required:true,   
        },
        ratingContent:{
          type:String,
          required:true,   
        },
        userId:{
          type: mongoose.Schema.Types.ObjectId,
          ref: "userCollection" 
        },
        bookingId:{
          type: mongoose.Schema.Types.ObjectId,
          ref: "bookingCollection" 
        }
        
      });
      const Rating = mongoose.model("ratingCollection",RatingSchemaStructure);
      
      //CartPost
      app.post("/Rating", async (req, res) => {
        try {
          const { ratingContent,ratingCount,userId,bookingId} = req.body;  
          let rating= new Rating({
            ratingContent,
            ratingCount,
            userId,
            bookingId
          });
          await rating.save();
          res.json({ message: "Rating inserted successfully" });
          } catch (err) {
          console.error(err.message);
          res.status(500).send("Server error");
        }
        });

        //get
        app.get("/Rating", async (req, res) => {
          try{
            const rating = await Rating.find();
            if(rating.length === 0){
              return res.send({ message: "Rating not found", rating: [] });
            } else{
              res.send({ rating }).status(200);
            }
          }catch(err){
            console.error("Error finding rating:", err);
            res.status(500).json({message:"Internal Server error"});
          }
        });
  


    
   