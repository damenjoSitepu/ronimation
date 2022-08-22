// ★ ———————————————————————————————————————————————————————
//  ★ RadiusSetting.js
// ★ ———————————————————————————————————————————————————————
import { CustomButtonSetting } from './custom-button-setting.js';

class OutterSetting extends CustomButtonSetting {
    // ★ Declare all radius property
    outterW = 0;
    outterH = 0;
    outterWH = 100;
    outterSize = "px";
    defaultOutterUnit = "px";
    defaultOutterSize = 100;

    defaultOutterClientWidthBeforePlus;
    defaultOutterClientHeightBeforePlus
    defaultOutterClientWidth;
    defaultOutterClientHeight;

    defaultOutterWasActivated = false;

    // ★ set all property with value 
    setPropertyWithValue(outterObj) {
        for (let properties in outterObj) {
            this[properties] = outterObj[properties];

            if (properties == "outterSize") {
                this[properties] = this.setOutterUnit(outterObj[properties]);
            } else {
                this[properties] = this.setOutterSize(outterObj[properties]);
            }
        }

        // After all outter filled to the each properties
        for (let properties in outterObj) {
            if (properties != "outterSize") {
                if (properties == "outterWH")
                    this[properties] = this.setOutterWithSizeAndUnit(this[properties], false);
                else
                    this[properties] = this.setOutterWithSizeAndUnit(this[properties], true);
            }
        }
    }

    // ★ Merge Size And Unit outter properties
    setOutterWithSizeAndUnit(outterType, resetSize) {
        return this.setWithSizeAndUnit(outterType, resetSize, this.outterSize);
    }

    // ★ Define size of outter properties
    setOutterSize(sizeType) {
        return this.setSize(sizeType, this.defaultOutterSize, this.outterSize);
    }

    // ★ Define unit of size of outter properties
    setOutterUnit(unit) {
        return this.setUnit(unit, this.defaultOutterUnit, this.outterWH, this.outterW, this.outterH);
    }

    // ★ When outter data attribute not filled, take this outter width and height as default size
    setDefaultOutterWidthSize(clientWidth, clientHeight) {
        this.defaultOutterClientWidthBeforePlus = clientWidth;
        this.defaultOutterClientHeightBeforePlus = clientHeight;

        this.defaultOutterClientWidth = clientWidth + (clientWidth * 2);
        this.defaultOutterClientHeight = clientHeight + (clientHeight * 7);
    }

    // Jika masuk ke sini, maka menggunakan outter versi default
    setDefaultOutterWasActivated() {
        this.defaultOutterWasActivated = true;
    }
}

const setOutterSetting = new OutterSetting();
export default setOutterSetting;   