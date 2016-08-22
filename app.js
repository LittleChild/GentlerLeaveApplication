var exec       = require('child_process').exec;
var nodemailer = require('nodemailer');
var cronJob    = require('cron').CronJob;
var _          = require('lodash');
var reasons    = require('./reasons').reasons;

var job = new cronJob('00 50 09 * * 0-6', function(){
  exec("who -q", function(error, stdout, stderr){
    if(stdout.indexOf('yy') === -1) process.exit(1);

    var transporter = nodemailer.createTransport('smtps://username%40kuyun.com:password@smtp.exmail.qq.com');

    transporter.sendMail({
      from: 'username@kuyun.com',
      to: 'leader-name@kuyun.com',
      bcc: 'CC-name@163.com',
      subject: '请假申请',
      text: reasons[_.random(0, reasons.length-1)]
    },function(err){
      console.log(err, 'err');
    });
  });
}, null, true);

job.start();