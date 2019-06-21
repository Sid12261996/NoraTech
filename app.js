var express  = require('express'),
    app = express(),
    cors = require('cors'),
    bodyParser= require('body-parser'),
    path = require('path'),
    nodemailer = require('nodemailer')
;
app.use(cors());

const testAccount={
    user:'noratechsolutionspvtltd@gmail.com',
    pass:'noraAsdf@123'
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


async function sendMail(subject,body, res){
    let info = await transporter.sendMail({
        from: 'noratechsolutionspvtltd@gmail.com', // sender address
        to: "sidharthrkc@gmail.com", // list of receivers
        subject: subject, // Subject line
        text: body, // plain text body
        // html: "<b>Hello world?</b>" // html body
    });
    if(info.accepted!==null&&info.accepted!==[]){
        res.status(200).json({message:'Successfully sent the mail!!'})
    }

}
const transporter = nodemailer.createTransport({
    auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass // generated ethereal password
    },

    service: 'gmail'
});

app.post('/mail', async (req, res) => {
    await sendMail(req.body.subject, req.body.body,res);

})


app.get('/*',(req,res)=>{
    res.sendFile('./index.html',{root:__dirname});
});





module.exports = app;
