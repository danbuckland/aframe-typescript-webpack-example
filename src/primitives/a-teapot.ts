import { BaseComponent, component } from 'aframe-typescript-class-components'
import { TeapotGeometry } from 'three/addons/geometries/TeapotGeometry.js'

AFRAME.registerPrimitive('a-teapot', {
  defaultComponents: {
    teapot: {},
  },

  mappings: {
    size: 'teapot.size',
    haslid: 'teapot.haslid',
    color: 'teapot.color',
  },
})

export interface TeapotData {
  size: number;
  haslid: boolean;
  color: string;
}

@component('teapot')
export class Teapot extends BaseComponent<TeapotData> {
  static schema = {
    size: { default: 1 },
    haslid: { default: true },
    color: { default: '#ffffff' },
  }
  static multiple = false

  init(): void {
    const geometry = new TeapotGeometry(this.data.size, 18, true, this.data.haslid)
    const material = new AFRAME.THREE.MeshStandardMaterial({ color: this.data.color, side: AFRAME.THREE.DoubleSide })
    const mesh = new AFRAME.THREE.Mesh(geometry, material)
    this.el.setObject3D('mesh', mesh)
  }
}
