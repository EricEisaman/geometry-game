 ![geometry game](https://cdn.glitch.com/162b879e-fd42-40d9-8519-671d783b8c70%2Fgeo-game.gif?1534009918502) 
# Geometry Game 
____
____

## **Remixing Instructions**



Set the **ADMIN_KEY** in .env. Create your own **.glb** models with <a href="http://pixologic.com/sculptris/" no-opener no-referer>**Sculptris**</a> and <a href="https://www.blender.org/download/" no-opener no-referer>**Blender**</a>.

In the **client-config.js** set the values for:
  - game name
  - emoji following game name in browser tab
  - favicon showing in browser tab
  - login font family
  - login font color
  - login form background color
  - login overlay color
  - avatar array of face image URLs ( use .png with transparent background )
  - avatar color used for button background 
  - the text color for the messages
  - sound file URL for playerJoined
  - sound file URL for playerLeft
  - BGM songs
  - custom key bindings/behaviors
  - sythesized voice settings
  - physics gravity
  - maximum grab distance for movable objects
  - movable physics objects to be added to the scene
  - environment settings
  - thruster colors
  
Explore the different voice names by listing them in the client console with:
```js
printVoices()
```
![names](https://cdn.glitch.com/8cdffa44-0009-4d0b-89c7-731fef3fef0b%2Fnames.png?1533445633949)
  
In the client console add users with the following pattern:
![add user](https://cdn.glitch.com/8cdffa44-0009-4d0b-89c7-731fef3fef0b%2Fadduser.png?1533445801204)

If you forget the Users you added, open the server console and reboot the server by adding a meaningless space in any server file.  The Users will be printed in the server console.
  
  ____

## **How to Play**

Move with **WASD** and **ARROW** keys.  Jump with the **SPACE** key.
Toggle music mute with **M** key. Play next song with **P** key. 

![UI](https://cdn.glitch.com/8cdffa44-0009-4d0b-89c7-731fef3fef0b%2FmessageAndAvatar.png?1533445976674)

Toggle the **Message and Avatar UI** with the **EQUALS** key. **Tab** your way through the UI elements. Once you have finished typing your message or selecting a new avatar, hit **ENTER** to submit.

Note: **Users cannot be logged in more than once simultaneously!**


Pressing the **F** key or clicking the **VR Headset Icon** will take you to fullscreen mode.  Note: in fullscreen mode only movement keys are enabled.  Press the **ESC** key to exit fullscreen mode. 

<a href="https://geometry-game.glitch.me/" no-opener no-referer>**LIVE DEMO**</a>

____



**Thruster Animation**

![App Screen2](https://cdn.glitch.com/97457b24-474e-42eb-9358-c8bc7bab1d9f%2Fapp-screen.gif?1533847350291)

**Screenshot with Four Players**

![App Screen3](https://cdn.glitch.com/162b879e-fd42-40d9-8519-671d783b8c70%2F4players.png?1534020052774)

**Screenshot of Side Entrance to Sky Island** (Click to see fullsize image.)

<a href="https://cdn.glitch.com/162b879e-fd42-40d9-8519-671d783b8c70%2Fexplore.png?1534258269725" no-opener no-referer><img src="https://cdn.glitch.com/162b879e-fd42-40d9-8519-671d783b8c70%2Fexplore.png?1534258269725"></a>

**Environment Presets**  

![Environement Options](https://github.com/feiss/aframe-environment-component/raw/master/assets/aframeenvironment.gif?raw=true)

**Sculptris for Easy Creation of Basic Model**

![Sculptris](https://cdn.glitch.com/f54ba682-ab47-46e4-bf61-5e68e6053f18%2Fsculptris.png?1532961951688)

**Blender Bones Animation**

![Blender](https://cdn.glitch.com/f54ba682-ab47-46e4-bf61-5e68e6053f18%2Fblender.png?1532961633005)

**Blender Export as .glb**  

( plugin for Blender v2.79 <a href="https://github.com/KhronosGroup/glTF-Blender-Exporter" no-opener no-referer>here</a>. Note: Blender v2.80 will have built-in plugin )
![.glb export](https://cdn.glitch.com/f54ba682-ab47-46e4-bf61-5e68e6053f18%2Fexport.png?1532962417545)

## Special Thanks

I would like to extend special thanks to <a href="https://sketchfab.com/ZOSK" no-opener no-referer>**ZOSK Studios**</a> for the creation of the sky island model used in this project.