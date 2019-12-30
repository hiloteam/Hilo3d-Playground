var loader = new Hilo3d.GLTFLoader();
loader.load({
    src: '//ossgw.alicdn.com/tmall-c3/tmx/f3159fe279655ea93a4447448cdcd1fd.gltf',
    isMultiAnim:false
}).then(function(model) {
    window.xx = model;
    model.node.setScale(0.003);
    var x = model.node.clone(true);
    x.traverse(function(mesh) {
        if (!mesh.isMesh) {
            return;
        }
        mesh.material = mesh.material.clone();
        mesh.material.diffuse = new Hilo3d.Color(0, 1, 0);
        mesh.material.wireframe = true;
        mesh.geometry = mesh.geometry.clone();
    });

    stage.addChild(x);
    stage.addChild(model.node);
});