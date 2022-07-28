const nodemailer =require("nodemailer")

let transporter=nodemailer.createTransport({
   service:"gamil",
   auth:{
    user:"meruga.anweshreddy@gmail.com",
    pass:"@Anvesh996333"
   }


});

let mailOption={
    from:"meruga.anweshreddy@gmail.com",
    to:"",
    subject:"",
    Text:``
}

transporter.sendMail(mailOption,function(err,info){
    if(err){
        console.log(err);
    }
    else{
        console.log(info.response);
    }
})