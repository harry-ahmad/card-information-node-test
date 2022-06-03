const mongoose = require('mongoose');
 
// Connection URL
const url = 'mongodb://localhost:27017/card_info';
module.exports = function(){
  // mongoose.set('useFindAndModify', false);

mongoose.connect(url, {
  useNewUrlParser : true,
  useUnifiedTopology: true,
  // useCreateIndex: true
  
}).then(() => console.log(mongoose.connection.readyState))
}