import * as colum from "./colum";

const _scene = new Entity('_scene')
engine.addEntity(_scene)

const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})


/* Piso */

_scene.addComponentOrReplace(transform)
// const gltfShape = new GLTFShape("Models/Stones1.glb")


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

// const entity2 = new Entity('entity2')
// engine.addEntity(entity2)
// entity2.setParent(_scene)
// entity2.addComponentOrReplace(gltfShape)
// const transform4 = new Transform({
//   position: new Vector3(24, 0, 8),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(1, 1, 1)
// })
// entity2.addComponentOrReplace(transform4)

// const entity3 = new Entity('entity3')
// engine.addEntity(entity3)
// entity3.setParent(_scene)
// entity3.addComponentOrReplace(gltfShape)
// const transform5 = new Transform({
//   position: new Vector3(8, 0, 24),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(1, 1, 1)
// })
// entity3.addComponentOrReplace(transform5)

// const entity4 = new Entity('entity4')
// engine.addEntity(entity4)
// entity4.setParent(_scene)
// entity4.addComponentOrReplace(gltfShape)
// const transform6 = new Transform({
//   position: new Vector3(24, 0, 24),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(1, 1, 1)
// })
// entity4.addComponentOrReplace(transform6)

// const entity5 = new Entity('entity5')
// engine.addEntity(entity5)
// entity5.setParent(_scene)
// entity5.addComponentOrReplace(gltfShape)
// const transform7 = new Transform({
//   position: new Vector3(8, 0, 40),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(1, 1, 1)
// })
// entity5.addComponentOrReplace(transform7)

// const entity6 = new Entity('entity6')
// engine.addEntity(entity6)
// entity6.setParent(_scene)
// entity6.addComponentOrReplace(gltfShape)
// const transform8 = new Transform({
//   position: new Vector3(24, 0, 40),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(1, 1, 1)
// })
// entity6.addComponentOrReplace(transform8)



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

const gltfEdificio = new GLTFShape("Models/edificio_7po.glb")
gltfEdificio.withCollisions = true
gltfEdificio.isPointerBlocker = true
gltfEdificio.visible = true
Edificio.addComponentOrReplace(gltfEdificio)


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




const Bears01 = new Texture("images/atlas/testuv.png")
const MaterialBear01 = new Material();
MaterialBear01.albedoTexture = Bears01


const TexP0_01 = new Texture("images/atlas/p0-1.png")
const MatP0_01 = new Material();
MatP0_01.albedoTexture = TexP0_01;

const TexP0_02 = new Texture("images/atlas/p0-2.png")
const MatP0_02 = new Material();
MatP0_02.albedoTexture = TexP0_02;

const TexP1_01 = new Texture("images/atlas/p1-1.png")
const MatP1_01 = new Material();
MatP1_01.albedoTexture = TexP1_01;

const TexP1_02 = new Texture("images/atlas/p1-2.png")
const MatP1_02 = new Material();
MatP1_02.albedoTexture = TexP1_02;

const TexP2_01 = new Texture("images/atlas/p2-1.png")
const MatP2_01 = new Material();
MatP2_01.albedoTexture = TexP2_01;

const TexP2_02 = new Texture("images/atlas/p2-2.png")
const MatP2_02 = new Material();
MatP2_02.albedoTexture = TexP2_02;

const TexP3_01 = new Texture("images/atlas/p3-1.png")
const MatP3_01 = new Material();
MatP3_01.albedoTexture = TexP3_01;

const TexP3_02 = new Texture("images/atlas/p3-2.png")
const MatP3_02 = new Material();
MatP3_02.albedoTexture = TexP3_02;

const TexP4_01 = new Texture("images/atlas/p4-1.png")
const MatP4_01 = new Material();
MatP4_01.albedoTexture = TexP4_01;

const TexP4_02 = new Texture("images/atlas/p4-2.png")
const MatP4_02 = new Material();
MatP4_02.albedoTexture = TexP4_02;

const TexP5_01 = new Texture("images/atlas/p5-1.png")
const MatP5_01 = new Material();
MatP5_01.albedoTexture = TexP5_01;

const TexP5_02 = new Texture("images/atlas/p5-2.png")
const MatP5_02 = new Material();
MatP5_02.albedoTexture = TexP5_02;


const TexP6_01 = new Texture("images/atlas/p6-1.png")
const MatP6_01 = new Material();
MatP6_01.albedoTexture = TexP6_01;

const TexP6_02 = new Texture("images/atlas/p6-2.png")
const MatP6_02 = new Material();
MatP6_02.albedoTexture = TexP6_02;


let positionact:Vector3;
let materialact = new Material();

// let poscolumx = 13;
// let poscolumz = 12;
// let poscolumy = 8;

let flooract = 0;
// let poscolumz =10.5;
// let poscolumy =12;

let positiony:number[] =[2,8,13,18,23,28,33]
let positionsx:number[] = [11.5,11.5,11.5,11.5,11.5,11.5,11.5,11.5];
let positionz:number[] =[13.5,17,17,17,17,17,17];

//2
//11.5
//13.5


let poscolumx = positionsx[flooract];
let poscolumz = positionz[flooract];
let poscolumy = positiony[flooract];
// let actx = positionsx[flooract];

let Materials:Material[] =[
  MatP0_01,MatP0_02,
  MatP1_01,MatP1_02,
  MatP2_01,MatP2_02,
  MatP3_01,MatP3_02,
  MatP4_01,MatP4_02,
  MatP5_01,MatP5_02,
  MatP6_01,MatP6_02,
];

materialact =Materials[flooract];

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
  colum.CreateColum(positionact, materialact);
  poscolumx += 9;
}

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
