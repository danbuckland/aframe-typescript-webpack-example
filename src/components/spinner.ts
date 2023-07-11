import { BaseComponent, component } from 'aframe-typescript-class-components'

export interface SpinnerData {
  speed: number
  direction: 'x' | 'y' | 'z'
}

@component('spinner')
export class Spinner extends BaseComponent<SpinnerData> {
  static schema = {
    speed: { default: 1 },
    direction: { default: 'x' },
  }
  static multiple = true;

  init(): void {

  }

  tick(time: number, deltaTime: number): void {
    const rotationAmount = Math.PI * (deltaTime / 1000 * this.data.speed)
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
      default:
        break
    }
  }
}
