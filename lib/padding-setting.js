// ★ ———————————————————————————————————————————————————————
//  ★ PaddingSetting.js
// ★ ———————————————————————————————————————————————————————
import { CustomButtonSetting } from './custom-button-setting.js';
class PaddingSetting extends CustomButtonSetting {
    // ★ Declare all padding property
    paddingFull = 10;
    paddingX = 0;
    paddingY = 0;
    paddingT = 0;
    paddingR = 0;
    paddingB = 0;
    paddingL = 0;
    paddingSize = "px";
    defaultPaddingSize = 10;
    defaultPaddingUnit = "px";

    // ★ set all property with value 
    setPropertyWithValue(paddingObj) {
        for (let properties in paddingObj) {
            this[properties] = paddingObj[properties];

            if (properties == "paddingSize") {
                this[properties] = this.setPaddingUnit(paddingObj[properties]);
            } else {
                this[properties] = this.setPaddingSize(paddingObj[properties]);
            }
        }

        // After all padding filled to the each properties
        for (let properties in paddingObj) {
            if (properties != "paddingSize") {
                if (properties == "paddingFull")
                    this[properties] = this.setPaddingWithSizeAndUnit(this[properties], false);
                else
                    this[properties] = this.setPaddingWithSizeAndUnit(this[properties], true);
            }
        }
    }

    // ★ Merge Size And Unit padding properties
    setPaddingWithSizeAndUnit(paddingType, resetSize) {
        return this.setWithSizeAndUnit(paddingType, resetSize, this.paddingSize);
    }

    // ★ Define size of padding properties
    setPaddingSize(sizeType) {
        return this.setSize(sizeType, this.defaultPaddingSize, this.paddingSize);
    }

    // ★ Define unit of size of padding properties
    setPaddingUnit(unit) {
        return this.setUnit(unit, this.defaultPaddingUnit, this.paddingFull, this.paddingX, this.paddingY, this.paddingT, this.paddingR, this.paddingB, this.paddingL);
    }
}

const setPaddingSetting = new PaddingSetting();
export default setPaddingSetting;   