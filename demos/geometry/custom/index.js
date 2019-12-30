var verticesData = new Float32Array([
    0.5,-0.5,0.5,0.5,-0.5,-0.5,0.1,0.5,-0.1,0.1,0.5,0.1,-0.5,-0.5,-0.5,-0.5,-0.5,0.5,-0.1,0.5,0.1,-0.1,0.5,-0.1,-0.1,0.5,0.1,0.1,0.5,0.1,0.1,0.5,-0.1,-0.1,0.5,-0.1,-0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,-0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,0.5,-0.5,0.5,0.1,0.5,0.1,-0.1,0.5,0.1,0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.1,0.5,-0.1,0.1,0.5,-0.1
]);
var uvsData = new Float32Array([
    0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0
]);
var indicesData = new Uint16Array([
    0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23
]);

var geometry = new Hilo3d.Geometry({
    vertices:new Hilo3d.GeometryData(verticesData, 3),
    uvs:new Hilo3d.GeometryData(uvsData, 2),
    indices:new Hilo3d.GeometryData(indicesData, 2)
});

var material = new Hilo3d.BasicMaterial({ 
    diffuse:new Hilo3d.LazyTexture({
        src:'//gw.alicdn.com/tfs/TB1iNtERXXXXXcBaXXXXXXXXXXX-600-600.png'
    })
});

var mesh = new Hilo3d.Mesh({
    geometry: geometry,
    material: material,
    rotationX:500,
    rotationY:560,
    onUpdate:function(){
        this.rotationX += 0.1;
        this.rotationY += 0.1;
    }
});
stage.addChild(mesh);