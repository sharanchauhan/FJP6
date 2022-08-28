const nodemailer = require("nodemailer");
 const password = require("./secrets")

 async function mailSender() {


   let transporter = nodemailer.createTransport({
     host: "smtp.gmail.com",
     port: 587,
     secure: false, // true for 465, false for other ports
     auth: {
       user: "sharanchauhanredmi2@gmail.com", // generated ethereal user
       pass: password, // generated ethereal password
     },
   });

   // send mail with defined transport object
   let info = await transporter.sendMail({
     from: '"no reply" <no-reply@test.com>', // sender address
     to: "sharanchauhan29@gmail.com", // list of receivers
     subject: "Hello ✔Testing", // Subject line
     text: "Hello world?", // plain text body
     html: "<b>Hello world?</b>", // html body
   });

   console.log("Message sent: %s", info.messageId);
   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

   // Preview only available when sending through an Ethereal account
   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
 }

 mailSender().catch(console.error);