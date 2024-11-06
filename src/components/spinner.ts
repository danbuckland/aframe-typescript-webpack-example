import { BaseComponent, component } from 'aframe-typescript-class-components'
const THREE = AFRAME.THREE

export interface SpinnerData {
  speed: number
  direction: 'x' | 'y' | 'z'
  local: boolean
}

@component('spinner')
export class Spinner extends BaseComponent<SpinnerData> {
  static schema = {
    speed: { default: 1 },
    direction: { default: 'x' },
    local: { default: true },
  }
  static multiple = true

  init(): void {}

  tick(time: number, deltaTime: number): void {
    const rotationAmount = Math.PI * ((deltaTime / 1000) * this.data.speed)
    if (this.data.local) {
      // Local rotation
      switch (this.data.direction) {
        case 'x':
          this.el.object3D.rotateX(rotationAmount)
          break
        case 'y':
          this.el.object3D.rotateY(rotationAmount)
          break
        case 'z':
          this.el.object3D.rotateZ(rotationAmount)
          break
      }
    } else {
      // Global/World rotation
      const axis = new THREE.Vector3(
        this.data.direction === 'x' ? 1 : 0,
        this.data.direction === 'y' ? 1 : 0,
        this.data.direction === 'z' ? 1 : 0
      )
      // Apply rotation in world space
      this.el.object3D.applyQuaternion(
        new THREE.Quaternion().setFromAxisAngle(axis, rotationAmount)
      )
    }
  }
}
