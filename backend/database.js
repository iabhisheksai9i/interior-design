const express = require('express')
var path = require('path');
const app = express()
const {Client, Query} = require('pg');
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
app.use(cookieParser());

const items=[]

// Example secret key (keep this secure and do not expose it)
const secretKey = 'your-secret-key';
const loginToken=''


const client = new Client({
    host:'localhost',
    user:'postgres',
    port:5432,
    password:'133202',
    database:'postgres'
    })
    
    client.connect();

    app.use(bodyParser.json());
    
    app.use(express.json()); // for parsing application/json


  const authenticateToken = (req, res, next) => {
    jwt.verify(this.loginToken, secretKey, (err, user) => {
      if (err) {
        console.log('user not login')
        return res.send(null); // Forbidden if token is invalid
      }
      console.log(user)
      next(); // Pass the control to the next middleware or route handler
    });
  };
    

app.get('/getData',authenticateToken, async (req, res) => {
    console.log("get Request");
    const data = await client.query(`Select * from slideshow`);
    res.cookie('myCookie', 'hello');
    res.send(data.rows);
});

app.get('/getImages',authenticateToken, async (req,res)=>{
    console.log("getSecond");
    const images = await client.query(`select * from homepage`);
    res.send(images.rows)
});

app.get('/getProducts', async (req,res)=>{
    console.log('getProduct');
    const products = await client.query(`select * from products`)
    res.send(products.rows)
    
})

app.post('/login',async(req,res)=>{
    console.log('login')
    const data = req.body;
    console.log(data)
    const loginData = await client.query(`SELECT 
    username,
	  pgp_sym_decrypt(password, 'password') AS password
    FROM data where username = '${data.name}'`)

  const login = loginData.rows.find(user=>user.username === data.name && user.password === data.password);
  if (login) {
    console.log('Login successful');
    // Creating a JWT
    this.loginToken = jwt.sign(login, secretKey, { expiresIn: '1m' });
    console.log('Generated JWT:', this.loginToken);
  } else {
    console.log('Invalid credentials');
  }

    res.send(login)

})




app.post('/postData', async (req, res) => {
    const data = req.body;
    console.log('Received data:', data);
    const values = data;
    isname = values[0]
    username = values[1]
    email = values[2]
    password = values[3]
    // const query = `INSERT INTO users (name,username,email_id,password) VALUES ('${name}', '${username}' ,'${email}' ,'${password}')`;

    const query =`INSERT INTO data (name, username,email,password) 
    VALUES (
    pgp_sym_encrypt('${isname}', 'name'), 
    pgp_sym_encrypt('${username}', 'username'), 
    pgp_sym_encrypt('${email}', 'email'),
	pgp_sym_encrypt('${password}', 'password')
)`;
    client.query(query, (err, res) => {
        if (err) {
          console.log('data not inserted');
        } else {
            console.log(res.rows);

        }
      });
    // Process the data as needed
    res.send({message:'ghggyyggy'});
  });



  app.post('/addproducts', authenticateToken, async (req, res) => {
    try {
      const data = req.body;
      console.log(data);
      let arrayLength = 0;
      let isId = '';
  
      // Await the query properly
      const isMatch = await client.query(`SELECT details FROM products`);
      
      isMatch.rows.forEach(product => {
        arrayLength += product.details.items.length;
        product.details.items.forEach(item => {
          if (item.id === arrayLength + 1) {
            isId = item;
          }
        });
      });
  
      console.log(arrayLength + 1);
  
      if (isId && isId.id === arrayLength + 1) {
        console.log('ID is present');
        console.log('Data not inserted');
        res.status(400).send('ID already present');
      } else {
        console.log('ID is not present');
  
        const query = `
          UPDATE products
          SET details = jsonb_set(details, '{items}', details->'items' || jsonb_build_array(
            jsonb_build_object(
              'id', ${arrayLength + 1},
              'name', '${data.name}',
              'color', '${data.color}',
              'image', '${data.image}',
              'price', '${data.price}',
              'images', jsonb_build_array(
                'https://saina-doors.com/wp-content/uploads/2024/01/image-1.jpg',
                'https://saina-doors.com/wp-content/uploads/2024/01/image-2.jpg',
                'https://saina-doors.com/wp-content/uploads/2024/01/image-1.jpg',
                'https://saina-doors.com/wp-content/uploads/2024/01/image-2.jpg'
              ),
              'material', '${data.material}',
              'dimension', '${data.dimensions}',
              'handel_color', '${data.handel_color}',
              'shape', '${data.shape}'
            )
          ), true)
          WHERE id = ${data.rowId}
        `;
  
        await client.query(query);
        console.log('Table Row Added');
        res.send('Item inserted');
      }
    } catch (err) {
      console.error(err.stack);
      res.status(500).send('Internal Server Error');
    }
  });
  



//   app.post('/addproducts',authenticateToken, async(req, res)=>{
//     const data = req.body;
//     console.log(data);
//     arrayLength = 0
//     isId=''
//     const isMatch = client.query(`SELECT details from products`)
//     let isarray =(await isMatch).rows.forEach(product => {
//        arrayLength += product.details.items.length
//        product.details.items.find(item=>{
//          if(item.id == arrayLength +1){
//            if(item){
//              isId = item
//             }
//           }
//         }
//       )
//       // console.log(isIdMatch)
//     });
//     console.log(arrayLength+1)

//   if(isId.id == arrayLength + 1){
//     console.log('id is presence')
//     console.log('Data not inserted')
//   }
//   else{
//    console.log('id is not presence')
//     query = `UPDATE products
//     SET details = jsonb_set(details, '{items}', details->'items' || '[ {
//       "id": ${arrayLength + 1},
//       "name": "${data.name}",
//       "color": "${data.color}",
//       "image": "${data.image}",
//       "price": "${data.price}",
//       "images": [
//         "https://saina-doors.com/wp-content/uploads/2024/01/image-1.jpg",
//         "https://saina-doors.com/wp-content/uploads/2024/01/image-2.jpg",
//         "https://saina-doors.com/wp-content/uploads/2024/01/image-1.jpg",
//         "https://saina-doors.com/wp-content/uploads/2024/01/image-2.jpg"
//       ],
//       "material": "${data.material}",
//       "dimension": "${data.dimensions}",
//       "handel_color": "${data.handel_color}",
//       "shape": "${data.shape}"
//     }]', true)
// WHERE id = ${data.rowId}`

  
    
//     await client.query(query,(err,res)=>{
//       if (err) {
//         console.log(err.stack);
//       } else {
//           console.log('Table Row Added');
//       }
//     });
//   };
//     res.send();
//   })



  // const payload = {
  //   userId: 123,
  //   username: 'Abhishek'
  // };
  
  // // Example secret key (keep this secure and do not expose it)
  // const secretKey = 'your-secret-key';
  
  // // Creating a JWT
  // const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
  
  // console.log('Generated JWT:', token);
  
  // // Verifying a JWT
  // jwt.verify(token, secretKey, (err, decoded) => {
  //   if (err) {
  //     console.error('JWT verification failed:', err.message);
  //   } else {
  //     console.log('Decoded JWT payload:', decoded);
  //   }
  // });

  

//   UPDATE pro
// SET info = jsonb_set(details, '{items}', info->'items' || '[ {
//       "id": 1,
//       "name": "light Brown Door",
//       "color": "red",
//       "image": "https://saina-doors.com/wp-content/uploads/2024/01/image-1.jpg",
//       "price": 100,
//       "images": [
//         "https://saina-doors.com/wp-content/uploads/2024/01/image-1.jpg",
//         "https://saina-doors.com/wp-content/uploads/2024/01/image-2.jpg",
//         "https://saina-doors.com/wp-content/uploads/2024/01/image-1.jpg",
//         "https://saina-doors.com/wp-content/uploads/2024/01/image-2.jpg"
//       ],
//       "material": "Aluminium",
//       "dimension": "16mm x 45mm x 1.5mm Thick",
//       "handel_color": "silver"
//     }]', true)
// WHERE id = 1;

 app.listen(5000, () => {
    console.log('Server started!')
  })