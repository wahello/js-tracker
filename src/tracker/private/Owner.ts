/// <reference path='../public/types/TrackID.d.ts'/>

import ShadowElement from './ShadowElement'
import { setTrackID } from './NativeUtils'

interface IOwner {
  getTrackID(): TrackID;
  getElement(): Element;
  hasTrackID(): boolean;
  isShadow(): boolean;
  setTrackID(): void;
}

export default class Owner {

  static NullOwner = new (class NullOwner extends Owner {
    constructor() {
      super(null)
    }

    public getTrackID() {
      return undefined
    }

    public isShadow() {
      return false
    }
  })()

  private element: Element

  /* public */

  constructor(element: Element) {
    this.element = element
  }

  public getTrackID() {
    return this.element.getAttribute('trackid')
  }

  public getElement() {
    return this.element
  }

  public hasTrackID() {
    return this.element.hasAttribute('trackid')
  }

  public isShadow() {
    return this.element instanceof ShadowElement
  }

  public setTrackID() {
    return !this.hasTrackID() && setTrackID(this.element)
  }
}