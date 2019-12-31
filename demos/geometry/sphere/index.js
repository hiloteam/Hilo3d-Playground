var geometry = new Hilo3d.SphereGeometry({
    radius: 1,
    heightSegments: 32,
    widthSegments: 64,
})
var material = new Hilo3d.BasicMaterial({
    lightType: 'NONE',
    diffuse: new Hilo3d.LazyTexture({
        src: '//gw.alicdn.com/tfs/TB1VUmoQFXXXXcjXFXXXXXXXXXX-1500-750.jpg'
    }),
    wireframe:false
});
var mesh = new Hilo3d.Mesh({
    geometry: geometry,
    material: material
});

stage.addChild(mesh);