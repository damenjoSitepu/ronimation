// ★ ———————————————————————————————————————————————————————
//  ★ PosSetting.js
// ★ ———————————————————————————————————————————————————————
import { CustomButtonSetting } from './custom-button-setting.js';
import OutterSetting from './outter-setting.js'

class PosSetting extends CustomButtonSetting {
    // ★ Declare all position property
    posT = 0;
    posR = 0;
    posB = 0;
    posL = 0;
    posSize = "px";
    defaultPosUnit = "px";
    defaultPosSize = 100;
    templatePos = "";

    // ★ set all property with value 
    setPropertyWithValue(posObj) {
        for (let properties in posObj) {
            this[properties] = posObj[properties];

            if (properties == "posSize") {
                this[properties] = this.setPosUnit(posObj[properties]);
            } else {
                this[properties] = this.setPosSize(posObj[properties]);
            }
        }

        // After all pos filled to the each properties
        for (let properties in posObj) {
            if (properties != "posSize") {
                this[properties] = this.setPosWithSizeAndUnit(this[properties], true);
            }
        }
    }

    // ★ Merge Size And Unit pos properties
    setPosWithSizeAndUnit(posType, resetSize) {
        return this.setWithSizeAndUnit(posType, resetSize, this.posSize);
    }

    // ★ Define size of pos properties
    setPosSize(sizeType) {
        return this.setSize(sizeType, this.defaultPosSize, this.PosSize);
    }

    // ★ Define unit of size of pos properties
    setPosUnit(unit) {
        return this.setUnit(unit, this.defaultPosUnit, this.posT, this.posR, this.posB, this.posL);
    }

    // ★ When outter data attribute not filled, take this pos width and height as default size
    setDefaultPosSize() {
        // Ke kiri
        this.defaultPosClientX = OutterSetting.defaultOutterClientWidthBeforePlus - (OutterSetting.defaultOutterClientWidthBeforePlus / 7);
        // Ke atas
        this.defaultPosClientY = OutterSetting.defaultOutterClientHeightBeforePlus - (OutterSetting.defaultOutterClientHeightBeforePlus / 7);
    }

    // template pos dari file configure pos, menyelaraskan dengan file configure ronimation
    setTemplatePos(templatePos) {
        this.templatePos = templatePos;
    }

    getTemplatePos() {
        return this.templatePos;
    }

}

const setPosSetting = new PosSetting();
export default setPosSetting;   