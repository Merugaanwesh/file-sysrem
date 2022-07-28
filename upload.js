const fs = require("fs")

var oldpath = "C:/Users/Lenovo/Desktop/Jupyte/Hirect-SEO/images/download (2).jpg";
 var newpath = 'C:/Users/Lenovo/Desktop/fs/fs1.jpg';

 fs.rename(oldpath, newpath, function (err) {
    if (err) throw err;
    //res.write('File uploaded and moved!');
    //res.end();
  });