(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{779:function(n,e,i){"use strict";i.r(e),e.default="initModel();\ninitLight();\n\nfunction initModel(){\n    var loadQueue = new Hilo3d.LoadQueue([{\n        type: 'CubeTexture',\n        images: [\n            './image/bakedDiffuse_01.jpg',\n            './image/bakedDiffuse_02.jpg',\n            './image/bakedDiffuse_03.jpg',\n            './image/bakedDiffuse_04.jpg',\n            './image/bakedDiffuse_05.jpg',\n            './image/bakedDiffuse_06.jpg'\n        ]\n    }, {\n        type: 'CubeTexture',\n        right: './image/px.jpg',\n        left: './image/nx.jpg',\n        top: './image/py.jpg',\n        bottom: './image/ny.jpg',\n        front: './image/pz.jpg',\n        back: './image/nz.jpg',\n        magFilter: Hilo3d.constants.LINEAR,\n        minFilter: Hilo3d.constants.LINEAR_MIPMAP_LINEAR\n    },{\n        src: './image/brdfLUT.png',\n        wrapS: Hilo3d.constants.CLAMP_TO_EDGE,\n        wrapT: Hilo3d.constants.CLAMP_TO_EDGE,\n        type:'Texture'\n    }]).start().on('complete', function(){\n        var result = loadQueue.getAllContent();\n        var diffuseEnvMap = result[0];\n        var specularEnvMap = result[1];\n        var brdfTexture = result[2];\n\n        var node = new Hilo3d.Node();\n        node.setScale(0.2);\n        stage.addChild(node);\n\n        var geometry = new Hilo3d.SphereGeometry({\n            radius: 0.45,\n            heightSegments: 16,\n            widthSegments: 32\n        });\n\n       var colors = [\n            [0.56, 0.57, 0.58], //\u94c1\n            [0.95, 0.64, 0.54], //\u94dc\n            [1, 0.71, 0.29], //\u91d1\n            [0.95, 0.93, 0.88], //\u94f6\n        ];\n\n        var num = 8;\n        for(var i = 0;i < num; i ++){\n            for(var j = 0;j < num;j ++){\n                var x = i - num*.5;\n                var y = j - num*.5;\n                var metallic = i/num;\n                var roughness = j/num;\n                var len = colors.length;\n                colors.forEach(function(color, index){\n                    material = new Hilo3d.PBRMaterial({\n                        baseColor: new Hilo3d.Color(color[0], color[1], color[2]),\n                        metallic: metallic,\n                        roughness: roughness,\n                        brdfLUT: brdfTexture,\n                        diffuseEnvMap: diffuseEnvMap,\n                        specularEnvMap: specularEnvMap\n                    });\n\n                    var mesh = new Hilo3d.Mesh({\n                        geometry: geometry,\n                        material: material,\n                        x:x,\n                        y:y,\n                        z:(index - len * .5) * 2\n                    });\n\n                    node.addChild(mesh);\n                });\n            }\n        }\n\n\n        var skyBox = new Hilo3d.Mesh({\n            geometry: new Hilo3d.BoxGeometry(),\n            material: new Hilo3d.BasicMaterial({\n                lightType: 'NONE',\n                side: Hilo3d.constants.BACK,\n                diffuse: specularEnvMap\n            })\n        }).addTo(stage);\n        skyBox.setScale(20);\n    });\n}\n\nfunction initLight(){\n    ambientLight.amount = 0.03;\n\n    var pointLight = new Hilo3d.PointLight({\n        color:new Hilo3d.Color(.3, .3, .3),\n        x:5,\n        y:0,\n        z:5,\n        range:500\n    });\n    stage.addChild(pointLight);\n\n    Hilo3d.Tween.to(pointLight, {\n        x:-5\n    }, {\n        duration:2000,\n        loop:true,\n        reverse:true\n    });\n}"}}]);