window.bodies = [];
window.setCustomPhysics = ()=>{
  let scene = document.querySelector('a-scene');
  scene.setAttribute('physics',`gravity:${window.config.physics.gravity}`);
  scene.setAttribute('raycaster',"far: 100;");
  scene.setAttribute('cursor',"rayOrigin: mouse");
  window.config.physics.objects.forEach(o=>{
    let e = document.createElement('a-entity');
    e.setAttribute('geometry', o.geometry);
    e.setAttribute('grabbable', '');
    e.setAttribute('line','start:0 0 0;end:0 0 0;color:green');
    e.setAttribute('material', `color:${o.color}`);
    //e.setAttribute(o.type,(o.type == 'dynamic-body')?`mass:${o.mass}`:'' );
    e.setAttribute('static-body','');
    window.bodies.push(e);
    e.setAttribute('position', o.position);
    scene.appendChild(e);
  });
}

window.updateBodies = (bodiesData)=>{
  if(window.bodies.length === 0) return;
  bodiesData.forEach( (d,index)=>{
    //console.log(d);
    //window.bodies[index].pause();
    window.bodies[index].setAttribute('position',d.position);
    //window.bodies[index].setAttribute('rotation',d.rotation);
    //window.bodies[index].object3D.rotation = d.rotation;
    window.bodies[index].object3D.setRotationFromEuler(new THREE.Euler(d.rotation.x,d.rotation.y,d.rotation.z,d.order));
    //window.bodies[index].components["static-body"].syncFromPhysics();
    //window.bodies[index].play();
  });
}