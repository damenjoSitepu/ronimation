// ★ ———————————————————————————————————————————————————————
//  ★ ButtonSetting.js
// ★ ———————————————————————————————————————————————————————
export default class ButtonSetting {
    paddingFull = false;
    paddingX = false;
    paddingY = false;
    paddingT = false;
    paddingR = false;
    paddingB = false;
    paddingL = false;
    paddingSize = false;

    radiusFull = false;
    radiusTL = false;
    radiusTR = false;
    radiusBR = false;
    radiusBL = false;
    radiusSize = false;

    outterW = false;
    outterH = false;
    outterWH = false;
    outterSize = false;

    posT = false;
    posR = false;
    posB = false;
    posL = false;
    posSize = false;

    g = false;
    gType = false;

    ronimation = false;

    constructor() {
        if (this.constructor == ButtonSetting)
            throw new Error("Cannot Instantiation Abstract Class Of ButtonSetting!");
    }

    setPropertyWithValue(property, value) {
        this[property] = value;
    }
}
