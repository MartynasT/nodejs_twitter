// middleware - tarpine funkcija taps uklausos ir galutinio response (atsako);
//next() reiskia kad leidziam middleware leidziam testi keliai iki kitos
// funkcijso is routes.js
//dazniausiai naudojama authentification tikslans

const testMiddleware = (req, res, next) =>{
  console.log('middleware')
  // if(req.body){
  //   //kazkas vyksta
  // }
  // return res.status(400).send('respons from middleware');
  next()
}

const contentToUppercase  = (req, res, next) =>{
  // console.log('middleware cia')
  // req.body.content = req.body.content.toUpperCase();
  next()
}

module.exports = {
  testMiddleware,
  contentToUppercase
}