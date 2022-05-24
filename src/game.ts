import * as colum from "./colum";
import { F0_1 } from "./F0_1";
import { F0_2 } from "./F0_2";
import { F1_1 } from "./F1_1";
import { F1_2 } from "./F1_2";
import { F2_1 } from "./F2_1";
import { F2_2 } from "./F2_2";
import { F3_1 } from "./F3_1";
import { F3_2 } from "./F3_2";
import { F4_1 } from "./F4_1";
import { F4_2 } from "./F4_2";
import { F5_1 } from "./F5_1";
import { F5_2 } from "./F5_2";
import { F6_1 } from "./F6_1";
import { F6_2 } from "./F6_2";
import { Nftframe } from "./interface/configinterface";
import { CreateNFTFrame } from "./simplenft";

const _scene = new Entity("_scene");
engine.addEntity(_scene);

const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
_scene.addComponentOrReplace(transform);

/* Piso */

const gltfShape = new GLTFShape("Models/Stones1.glb")

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)

gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform3 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform3)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape)
const transform4 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform4)

const entity3 = new Entity('entity3')
engine.addEntity(entity3)
entity3.setParent(_scene)
entity3.addComponentOrReplace(gltfShape)
const transform5 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity3.addComponentOrReplace(transform5)

const entity4 = new Entity('entity4')
engine.addEntity(entity4)
entity4.setParent(_scene)
entity4.addComponentOrReplace(gltfShape)
const transform6 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity4.addComponentOrReplace(transform6)

const entity5 = new Entity('entity5')
engine.addEntity(entity5)
entity5.setParent(_scene)
entity5.addComponentOrReplace(gltfShape)
const transform7 = new Transform({
  position: new Vector3(8, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity5.addComponentOrReplace(transform7)

const entity6 = new Entity('entity6')
engine.addEntity(entity6)
entity6.setParent(_scene)
entity6.addComponentOrReplace(gltfShape)
const transform8 = new Transform({
  position: new Vector3(24, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity6.addComponentOrReplace(transform8)

/* Armado de escena Edificio y columnas */

// const gtlfEdificio = new GLTFShape("Models/edificio_7po.glb")

const Edificio = new Entity('Edificio')
engine.addEntity(Edificio)
Edificio.setParent(_scene)

const transformEdificio = new Transform({
  position: new Vector3(16, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
Edificio.addComponentOrReplace(transformEdificio)

const gltfEdificio = new GLTFShape("Models/Edificio.glb")
gltfEdificio.withCollisions = true
gltfEdificio.isPointerBlocker = true
gltfEdificio.visible = true
Edificio.addComponentOrReplace(gltfEdificio)

///////////////////////////////////////////////

// const Columnas = new Entity('Columnas')
// engine.addEntity(Columnas)
// Columnas.setParent(_scene)

// const transformColumnas = new Transform({
//   position: new Vector3(16, 0, 24),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(1, 1, 1)
// })
// Columnas.addComponentOrReplace(transformColumnas)

// //TODO Agregar coliders a las columnas

// const gltfColumnas = new GLTFShape("Models/Columnas.glb")
// gltfColumnas.withCollisions = true
// gltfColumnas.isPointerBlocker = true
// gltfColumnas.visible = true
// Columnas.addComponentOrReplace(gltfColumnas)

/** */

// const Columna = new Entity('Columna')
// engine.addEntity(Columna)
// Columna.setParent(_scene)

// const transformColumna = new Transform({
//   position: new Vector3(12,2 , 16),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(1, 1, 1)
// })
// Columna.addComponentOrReplace(transformColumna)

// const gltfColumna = new GLTFShape("Models/Columna.glb")
// gltfColumna.withCollisions = true
// gltfColumna.isPointerBlocker = true
// gltfColumna.visible = true
// Columna.addComponentOrReplace(gltfColumna)

// const Columna = new Entity('Columna')
// engine.addEntity(Columna)
// Columna.setParent(_scene)

// const transformColumna = new Transform({
//   position: new Vector3(12,2 , 16),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(1, 1, 1)
// })
// Columna.addComponentOrReplace(transformColumna)

// const gltfColumna = new GLTFShape("Models/ColumnaPrefab.glb")
// gltfColumna.withCollisions = true
// gltfColumna.isPointerBlocker = true
// gltfColumna.visible = true
// Columna.addComponentOrReplace(gltfColumna)

const Bears01 = new Texture("images/atlas/testuv.png");
const MaterialBear01 = new Material();
MaterialBear01.albedoTexture = Bears01;

const TexP0_01 = new Texture("images/atlas/p0-1.png");
const MatP0_01 = new Material();
MatP0_01.albedoTexture = TexP0_01;

const TexP0_02 = new Texture("images/atlas/p0-2.png");
const MatP0_02 = new Material();
MatP0_02.albedoTexture = TexP0_02;

const TexP1_01 = new Texture("images/atlas/p1-1.png");
const MatP1_01 = new Material();
MatP1_01.albedoTexture = TexP1_01;

const TexP1_02 = new Texture("images/atlas/p1-2.png");
const MatP1_02 = new Material();
MatP1_02.albedoTexture = TexP1_02;

const TexP2_01 = new Texture("images/atlas/p2-1.png");
const MatP2_01 = new Material();
MatP2_01.albedoTexture = TexP2_01;

const TexP2_02 = new Texture("images/atlas/p2-2.png");
const MatP2_02 = new Material();
MatP2_02.albedoTexture = TexP2_02;

const TexP3_01 = new Texture("images/atlas/p3-1.png");
const MatP3_01 = new Material();
MatP3_01.albedoTexture = TexP3_01;

const TexP3_02 = new Texture("images/atlas/p3-2.png");
const MatP3_02 = new Material();
MatP3_02.albedoTexture = TexP3_02;

const TexP4_01 = new Texture("images/atlas/p4-1.png");
const MatP4_01 = new Material();
MatP4_01.albedoTexture = TexP4_01;

const TexP4_02 = new Texture("images/atlas/p4-2.png");
const MatP4_02 = new Material();
MatP4_02.albedoTexture = TexP4_02;

const TexP5_01 = new Texture("images/atlas/p5-1.png");
const MatP5_01 = new Material();
MatP5_01.albedoTexture = TexP5_01;

const TexP5_02 = new Texture("images/atlas/p5-2.png");
const MatP5_02 = new Material();
MatP5_02.albedoTexture = TexP5_02;

const TexP6_01 = new Texture("images/atlas/p6-1.png");
const MatP6_01 = new Material();
MatP6_01.albedoTexture = TexP6_01;

const TexP6_02 = new Texture("images/atlas/p6-2.png");
const MatP6_02 = new Material();
MatP6_02.albedoTexture = TexP6_02;

let positionact: Vector3;
let materialact = new Material();

// let poscolumx = 13;
// let poscolumz = 12;
// let poscolumy = 8;

let flooract = 0;
// let poscolumz =10.5;
// let poscolumy =12;

let positiony: number[] = [2, 8, 13, 18, 23, 28, 33];
let positionsx: number[] = [11.5, 11.5, 11.5, 11.5, 11.5, 11.5, 11.5, 11.5];
let positionz: number[] = [13.5, 17, 17, 17, 17, 17, 17];

let nftlisk: Nftframe[][] = [
  F0_1,
  F0_2,
  F1_1,
  F1_2,
  F2_1,
  F2_2,
  F3_1,
  F3_2,
  F4_1,
  F4_2,
  F5_1,
  F5_2,
  F6_1,
  F6_2,
];
//2
//11.5
//13.5

let poscolumx = positionsx[flooract];
let poscolumz = positionz[flooract];
let poscolumy = positiony[flooract];
// let actx = positionsx[flooract];

let Materials: Material[] = [
  MatP0_01,
  MatP0_02,
  MatP1_01,
  MatP1_02,
  MatP2_01,
  MatP2_02,
  MatP3_01,
  MatP3_02,
  MatP4_01,
  MatP4_02,
  MatP5_01,
  MatP5_02,
  MatP6_01,
  MatP6_02,
];

materialact = Materials[flooract];

for (var _i = 0; _i < 56; _i++) {

  if (_i !== 0) {
    if ((_i % 2) == 0) {
      poscolumz += 7;
      poscolumx = positionsx[flooract]

    }
  }

  if (_i !== 0) {
    if ((_i % 8) == 0) {
      flooract+=1;
      poscolumy =positiony[flooract];
      poscolumz = positionz[flooract];
      materialact = Materials[flooract];
    }
  }
  positionact = new Vector3(poscolumx, poscolumy, poscolumz);
  colum.CreateColum(positionact, materialact,nftlisk[flooract]);
  poscolumx += 9;
}

// _scene.addComponentOrReplace(transform)
// const gltfShape = new GLTFShape("Models/marco.glb")

// const entity = new Entity('entity')
// engine.addEntity(entity)
// entity.setParent(_scene)

// gltfShape.withCollisions = true
// gltfShape.isPointerBlocker = true
// gltfShape.visible = true
// entity.addComponentOrReplace(gltfShape)
// const transform3 = new Transform({
//   position: new Vector3(8, 0, 8),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(1, 1, 1)
// })
// entity.addComponentOrReplace(transform3)

// let rot = Quaternion.Euler(0, 90, 0);

const _frames = new Entity("_frames");
engine.addEntity(_frames);

const transformframe = new Transform({
  position: new Vector3(32, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
transformframe.rotation.eulerAngles = new Vector3(0, 270, 0);
_frames.addComponentOrReplace(transformframe);

const TexMP2_MP3 = new Texture("images/atlas_muros/MP2_MP3.png");
const MatMP2_MP3 = new Material();
MatMP2_MP3.albedoTexture = TexMP2_MP3;

const TexMP4_MP5 = new Texture("images/atlas_muros/MP4_MP5.png");
const MatMP4_MP5 = new Material();
MatMP4_MP5.albedoTexture = TexMP4_MP5;

const TexMP6_MP7 = new Texture("images/atlas_muros/MP6_MP7.png");
const MatMP6_MP7 = new Material();
MatMP6_MP7.albedoTexture = TexMP6_MP7;

/// pisos 2-3-4-5-6
let py: number[] = [13, 18, 23, 28, 33];

let positionframes = [
  { x: 20.5, y: 13, z: 29, qx: 0, qy: 90, qz: 0 },
  { x: 27.5, y: 13, z: 29, qx: 0, qy: 90, qz: 0 },
  { x: 34.5, y: 13, z: 29, qx: 0, qy: 90, qz: 0 },
  { x: 44, y: 13, z: 20.5, qx: 0, qy: 180, qz: 0 },
  { x: 44, y: 13, z: 11.5, qx: 0, qy: 180, qz: 0 },
  { x: 34.5, y: 13, z: 3, qx: 0, qy: 270, qz: 0 },
  { x: 27.5, y: 13, z: 3, qx: 0, qy: 270, qz: 0 },
  { x: 20.5, y: 13, z: 3, qx: 0, qy: 270, qz: 0 },

  { x: 20.5, y: 18, z: 29, qx: 0, qy: 90, qz: 0 },
  { x: 27.5, y: 18, z: 29, qx: 0, qy: 90, qz: 0 },
  { x: 34.5, y: 18, z: 29, qx: 0, qy: 90, qz: 0 },
  { x: 44, y: 18, z: 20.5, qx: 0, qy: 180, qz: 0 },
  { x: 44, y: 18, z: 11.5, qx: 0, qy: 180, qz: 0 },
  { x: 34.5, y: 18, z: 3, qx: 0, qy: 270, qz: 0 },
  { x: 27.5, y: 18, z: 3, qx: 0, qy: 270, qz: 0 },
  { x: 20.5, y: 18, z: 3, qx: 0, qy: 270, qz: 0 },

  { x: 20.5, y: 23, z: 29, qx: 0, qy: 90, qz: 0 },
  { x: 27.5, y: 23, z: 29, qx: 0, qy: 90, qz: 0 },
  { x: 34.5, y: 23, z: 29, qx: 0, qy: 90, qz: 0 },
  { x: 44, y: 23, z: 20.5, qx: 0, qy: 180, qz: 0 },
  { x: 44, y: 23, z: 11.5, qx: 0, qy: 180, qz: 0 },
  { x: 34.5, y: 23, z: 3, qx: 0, qy: 270, qz: 0 },
  { x: 27.5, y: 23, z: 3, qx: 0, qy: 270, qz: 0 },
  { x: 20.5, y: 23, z: 3, qx: 0, qy: 270, qz: 0 },

  { x: 20.5, y: 28, z: 29, qx: 0, qy: 90, qz: 0 },
  { x: 27.5, y: 28, z: 29, qx: 0, qy: 90, qz: 0 },
  { x: 34.5, y: 28, z: 29, qx: 0, qy: 90, qz: 0 },
  { x: 44, y: 28, z: 20.5, qx: 0, qy: 180, qz: 0 },
  { x: 44, y: 28, z: 11.5, qx: 0, qy: 180, qz: 0 },
  { x: 34.5, y: 28, z: 3, qx: 0, qy: 270, qz: 0 },
  { x: 27.5, y: 28, z: 3, qx: 0, qy: 270, qz: 0 },
  { x: 20.5, y: 28, z: 3, qx: 0, qy: 270, qz: 0 },

  { x: 20.5, y: 33, z: 29, qx: 0, qy: 90, qz: 0 },
  { x: 27.5, y: 33, z: 29, qx: 0, qy: 90, qz: 0 },
  { x: 34.5, y: 33, z: 29, qx: 0, qy: 90, qz: 0 },
  { x: 44, y: 33, z: 20.5, qx: 0, qy: 180, qz: 0 },
  { x: 44, y: 33, z: 11.5, qx: 0, qy: 180, qz: 0 },
  { x: 34.5, y: 33, z: 3, qx: 0, qy: 270, qz: 0 },
  { x: 27.5, y: 33, z: 3, qx: 0, qy: 270, qz: 0 },
  { x: 20.5, y: 33, z: 3, qx: 0, qy: 270, qz: 0 },
];

let mMaterial: Material[] = [MatMP2_MP3, MatMP4_MP5, MatMP6_MP7];

let mactmaterial = new Material();
let indexm = 0;

mactmaterial = mMaterial[indexm];

positionframes.map((nft, index) => {

  // if ((index % 8) == 0) {
  //     indexm+=1;
  //     mactmaterial =  mMaterial[indexm];

  // }

  if (index !== 0) {
        if ((index % 16) == 0) {
          indexm+=1;
      mactmaterial =  mMaterial[indexm];
    
        }
      }
  

  let positionact = new Vector3(nft.x, nft.y, nft.z);
  let rotationact = Quaternion.Euler(nft.qx, nft.qy, nft.qz);
  let frame = CreateNFTFrame(positionact, rotationact,  mactmaterial);
  frame.setParent(_frames);
});

// for (let p = 0; p < 5; p++) {

//   positionframes.map((nft)=>{
//     let positionact = new Vector3(nft.x, py[p] , nft.z);
//     let rotationact = Quaternion.Euler(nft.qx, nft.qy, nft.qz);
//     let frame =CreateNFTFrame(positionact,rotationact);
//     frame.setParent(_frames);
//   })

// }

// for (var _i = 0; _i < 4; _i++) {

//     if (_i !== 0) {
//     if ((_i % 2) == 0) {
//       poscolumz += 7;
//       poscolumx = positionsx[flooract]

//     }
//   }
//   CreateNFTFrame()
// }

// materialact = MatP0_02;

// for (var _i = 0; _i < 48; _i++) {

//   if (_i !== 0) {
//     if ((_i % 2) == 0) {

//       poscolumz += 8;
//       // actx = 13;
//     }
//   }

//   if (_i !== 0) {
//     if ((_i % 8) == 0) {

//       // poscolumx = 13;
//       flooract+=1;
//       positionsx[flooract];
//       materialact = Materials[flooract];
//       poscolumy = positiony[flooract];
//       // poscolumz = 12;
//       // actmat+=1;
//       // materialact = Materials[actmat];
//       // poscolumy = positiony[actmat];
//     }
//   }

//   positionact = new Vector3(poscolumx, poscolumy, poscolumz);
//   colum.CreateColum(initposf1, materialact);
//   poscolumx += 8;
// }
