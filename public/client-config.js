window.config = {
 login:{
  gameName:"Geometry Game",
  backgroundColor:"#FF354E",
 },
 avatar:{
  models:["https://cdn.glitch.com/f54ba682-ab47-46e4-bf61-5e68e6053f18%2Fthing-idle.glb?1532828880828",
          "https://cdn.glitch.com/f54ba682-ab47-46e4-bf61-5e68e6053f18%2Fowl.glb?1532839615976"],
  faces: ["https://cdn.glitch.com/f54ba682-ab47-46e4-bf61-5e68e6053f18%2Fweebs.png?1532833980859",
          "https://cdn.glitch.com/f54ba682-ab47-46e4-bf61-5e68e6053f18%2Fowl.png?1532839076824"],
  color: '#fff'
 },
 sounds:{
  playerJoined: 'https://cdn.glitch.com/162b879e-fd42-40d9-8519-671d783b8c70%2Fbell.mp3?1534013494867',
  playerLeft:  'https://cdn.glitch.com/3294c4a3-a3d8-412f-a31e-1e03d1cd1cbd%2Fplayer-leave.mp3?1532440646173'
 },
 msg:{
  color: "#000"
 },
 //Soundcloud track numbers from share/embed code
 songs:[265693310,120585130,156420873,180582345,1801713],
 releasePointerLockOnUI: false,
 //SEE REF. http://keycode.info/
 keys:{
  toggleUI:'Equal',
  nextSong:'KeyP',
  toggleMute:'Digit0',
  toggleCursor:'KeyC'
 },
 //Run printVoices() in the client console
 voice:{
   name:'Karen',
   rate: 5,
   pitch: 1
 },
 physics:{
   //This gravity affects the players
   gravity: -9.8,
   //These objects are not affected by gravity or collisions, but you can grab and move them
   objects:[
            {geometry:'primitive: sphere; radius: 2',position:'20 5 10',color:'#d8c450'},
            {geometry:"radius:0.6;primitive:sphere",position:'25 3 10',color:'#FFF'},
            {geometry:"radius:0.6;primitive:sphere",position:'28 3 10',color:'#FFF'},
            {geometry:"height:5;primitive:cone",position:'28 7 10',color:'red'}
           ]
 }
}

