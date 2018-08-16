window.config = {
 gameName:"Geometry Game",
 // https://emojipedia.org/
 emoji:"♡",
 // https://www141.lunapic.com/editor/  http://icoconvert.com/
 favicon:"https://cdn.glitch.com/162b879e-fd42-40d9-8519-671d783b8c70%2Ftri.ico",
 theme:{
  // https://fonts.google.com/ examples: Kirang Haerang, Megrim, Permanent Marker, Orbitron, Monoton
  fontFamily:"Monoton",
  fontColor:"#F3C600",
  formColor:"#7A42B8",
  overlayColor:"rgba(210, 0, 255, 0.8)"
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
 // https://github.com/feiss/aframe-environment-component
 environment:{
  preset:"tron",
  seed:0.3,
  shadow:true,
  playArea:1.3, 
  shadow:true,
  shadowSize:10,
  dressing:"",
  dressingAmount:12, 
  dressingColor:"",
  dressingScale:15,
  dressingVariance:"20 30 40",
  dressingUniformScale:false,
  fog:0.7, 
  flatShading:false,
  skyType:"", 
  horizonColor:"", 
  skyColor:"",
  ground:"",
  groundYScale:5,
  groundTexture:"",
  groundColor:"",
  groundColor2:"",
  grid:"",
  gridColor:"",
  lighting:"",
  lightPosition:""
 },
 //Soundcloud track numbers from share/embed code
 songs:[265693310,120585130,156420873,180582345,1801713],
 releasePointerLockOnUI: true,
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
   maxGrabDistance: 40,
   //These objects are not affected by gravity or collisions, but you can grab and move them
   // https://github.com/aframevr/aframe/blob/master/docs/components/geometry.md
   objects:[
      {name:'Big Sphere', geometry:'primitive: sphere; radius: 2',position:'-10 5 -10',color:'#7A42B8'},
      {name:'First Little Sphere',geometry:"radius:0.6;primitive:sphere",position:'-5 3 -10',color:'#FFF'},
      {name:'Second Little Sphere',geometry:"radius:0.6;primitive:sphere",position:'10 3 -10',color:'#FFF'},
      {name:'Cone',geometry:"height:5;primitive:cone",position:'10 7 -10',color:'#7A42B8'},
      {name:'Big Torus',geometry:"radius:5;radiusTubular:0.3;primitive:torus",position:'0 8 -10',color:'#7A42B8'},
      {name:'Little Torus',geometry:"radius:2;radiusTubular:0.8;primitive:torus",position:'0 21 -10',color:'#F00'},
      {name:'Box',geometry:"primitive:box;width:4;height:7;depth:2",position:'-20 12 -10',color:'#F00'},
      {name:'Shiny Cube',geometry:"primitive:box;width:4;height:4;depth:4",position:'-28 8 -10',color:'#FFF',material:'shiny-crinkle'},
      {name:'Shiny Sphere',geometry:'primitive: sphere; radius: 2',position:'-20 4 -10',color:'#FFF',material:'shiny-crinkle'},
      {name:'Heart',model:'heart',position:'-28 4 -10',color:'#FFF'},
      {name:'Small Shiny Sphere',geometry:'primitive: sphere; radius: 1',position:'0 8 -10',color:'#FFF',material:'shiny-crinkle'}
      //{name:'Heart2',model:'heart-light',position:'0 18 -10',color:'#FFF'} 
    ]
 },
 thruster:{
   innerColor: "purple",
   outerColor: "white"
 }
}