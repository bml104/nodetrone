/*
  Built from the resources below   

	Rzye Tello
	http://www.ryzerobotics.com
  
  https://github.com/jsolderitsch
  https://github.com/jsolderitsch/tello-nodejs
  
*/

//--------------------------------------------------
const got = require('got');
const eol = require('os').EOL;
const readline = require('readline');
const dgram = require('dgram');
const client = dgram.createSocket('udp4');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
//--------------------------------------------------
var dataToTrack_keys = ["battery", "x", "y", "z", "speed"];
var lastDataReceived = null;
var fs = require('fs');
var PORT = 8889;
var HOST = '192.168.10.1';
client.bind(8001);



//Read Key Input
process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    process.exit();
  } else{
    console.log(`You pressed "${str}" key`);
    console.log();
    console.log(key);
    console.log();
  }
})

function sendCommand (telloCommand) {

  switch (telloCommand){
  
      case 'poll':
          respondToPoll(response);
          break;
  
      case 'command':
    console.log('command');
    CommandRequest();
  break;
  
      case 'takeoff':
    console.log('takeoff');
    TakeoffRequest();
  break;
  
      case 'land':
    console.log('land');
    LandRequest();
  break;
  
      case 'up':
    dis = 60;
    console.log('up ' + dis);
    var message = new Buffer( 'up '+ dis );
    client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
      if (err) throw err;
    });
  break;

      case 'down':
    dis = 60;
    console.log('down ' + dis);
    var message = new Buffer( 'down '+ dis );
    client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
      if (err) throw err;
    });			
  break;

      case 'left':
    dis = 100;
    console.log('left ' + dis);
    var message = new Buffer( 'left '+ dis );
    client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
      if (err) throw err;
    });
  break;

      case 'right':
    dis = 100;
    console.log('right ' + dis);
    var message = new Buffer( 'right '+ dis );
    client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
      if (err) throw err;
    });
  break;		
  
  case 'forward':
    dis = 100;
    console.log('forward ' + dis);
    var message = new Buffer( 'forward '+ dis );
    client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
      if (err) throw err;
    });			
  break;		
  
      case 'back':
    dis = 100;
    console.log('back ' + dis);
    var message = new Buffer( 'back '+ dis );
    client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
      if (err) throw err;
    });			
  break;



 
  case 'battery?':
    console.log('battery strength?');
    var message = new Buffer( 'battery?');
    client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
      if (err) throw err;	
    });
  break;		
  
				
    
  }
}




function CommandRequest(){

	var message = new Buffer('command');

	client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
		if (err) throw err;
	});
	
	client.on('message', (msg,info) => {
		console.log('Data received from server : ' + msg.toString());
		console.log('Received %d bytes from %s:%d\n',msg.length, info.address, info.port);
	});								
	
}

console.log('win');
/*
console.log('-_-_-_- TPL 2018 -_-_-_-_-_-');
console.log('Enter Flight Command');
console.log('T to Take Off');
console.log('L to Land');
console.log('Up Arrow Forward');https://github.com/bml104
console.log('Down Arrow Backwards');
console.log('Left Arrow Strafe Left');
console.log('Right Arrow Strafe Right');
console.log('-_-_-_- TPL 2018 -_-_-_-_-_-');
*/