window.bodies = {};
window.setCustomPhysics = ()=>{
  let scene = document.querySelector('a-scene');
  scene.setAttribute('physics',`gravity:${window.config.physics.gravity}`);
  document.querySelector('[cursor]').setAttribute('raycaster',`far: ${window.config.physics.maxGrabDistance};`);
  window.config.physics.objects.forEach(o=>{
    let e = document.createElement('a-entity');
    e.setAttribute('geometry', o.geometry);
    e.setAttribute('grabbable','');
    e.setAttribute('line','start:0 0 0;end:0 0 0;color:green');
    e.setAttribute('material', `color:${o.color}`);
    //e.setAttribute(o.type,(o.type == 'dynamic-body')?`mass:${o.mass}`:'' );
    e.setAttribute('static-body','');
    window.bodies[o.name]= e;
    e.setAttribute('position', o.position);
    scene.appendChild(e);
  });
}

window.updateBodies = (bodiesData)=>{
  if(Object.keys(window.bodies).length === 0 || !window.bodies[bodiesData[0].name] || !window.gameHasBegun) return;
  bodiesData.forEach( (d,index)=>{
    if(window.debug){
      console.warn('Individual body data from server:');
      console.log(d);
    }
    if(d.position) window.bodies[d.name].object3D.position.copy(d.position);
		if(d.scale) window.bodies[d.name].object3D.scale.copy(d.scale);
		if(d.rotation) window.bodies[d.name].object3D.quaternion.copy(d.rotation);
  });
}