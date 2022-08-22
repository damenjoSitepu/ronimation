// ★ ———————————————————————————————————————————————————————
//  ★ RadiusSetting.js
// ★ ———————————————————————————————————————————————————————
import { CustomButtonSetting } from './custom-button-setting.js';

class RadiusSetting extends CustomButtonSetting {
    // ★ Declare all radius property
    radiusFull = 10;
    radiusTL = 0;
    radiusTR = 0;
    radiusBR = 0;
    radiusBL = 0;
    radiusSize = "px";
    defaultRadiusUnit = "px";
    defaultRadiusSize = 5;

    // ★ set all property with value 
    setPropertyWithValue(radiusObj) {
        for (let properties in radiusObj) {
            this[properties] = radiusObj[properties];

            if (properties == "radiusSize") {
                this[properties] = this.setRadiusUnit(radiusObj[properties]);
            } else {
                this[properties] = this.setRadiusSize(radiusObj[properties]);
            }
        }

        // After all radius filled to the each properties
        for (let properties in radiusObj) {
            if (properties != "radiusSize") {
                if (properties == "radiusFull")
                    this[properties] = this.setRadiusWithSizeAndUnit(this[properties], false);
                else
                    this[properties] = this.setRadiusWithSizeAndUnit(this[properties], true);
            }
        }
    }

    // ★ Merge Size And Unit radius properties
    setRadiusWithSizeAndUnit(radiusType, resetSize) {
        return this.setWithSizeAndUnit(radiusType, resetSize, this.radiusSize);
    }

    // ★ Define size of radius properties
    setRadiusSize(sizeType) {
        return this.setSize(sizeType, this.defaultRadiusSize, this.radiusSize);
    }

    // ★ Define unit of size of radius properties
    setRadiusUnit(unit) {
        return this.setUnit(unit, this.defaultRadiusUnit, this.radiusFull, this.radiusTL, this.radiusTR, this.radiusBR, this.radiusBL);
    }
}

const setRadiusSetting = new RadiusSetting();
export default setRadiusSetting;   