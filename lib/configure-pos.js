// ★ ———————————————————————————————————————————————————————
//  ★ ConfigurePos.js
// ★ ———————————————————————————————————————————————————————
import PosSetting from './pos-setting.js';
import Property from './property.js';
import style from './style.js';

class ConfigurePos {
    // ★ Set up position configuration here
    setConfigurePos(el, posObj) {
        // ★ pos property ( to store all property that related to position )
        Property.setPosProperty(posObj);
        // ★ To implement default pos width and height an element, we need to know size the element first, then send the data to the class
        // OutterSetting.setDefaultOutterWidthSize(el.clientWidth, el.clientHeight);
        // ★ Set all pos property with value which is retrieved by posObj parameters
        PosSetting.setPropertyWithValue(Property.getPosProperty());
        // ★ Set pos style refer to the button that attached with Aurora classes
        this.setPos(el, PosSetting);
    }

    // ★ Set pos style refer to the button that attached with Aurora classes
    setPos(el, PosSetting) {
        // ★ retrieve all outter type size and status by OutterSetting objects property
        let [posTSize, posTStatus] = PosSetting.posT;
        let [posRSize, posRStatus] = PosSetting.posR;
        let [posBSize, posBStatus] = PosSetting.posB;
        let [posLSize, posLStatus] = PosSetting.posL;

        let [posUnitName, posUnitStatus] = PosSetting.posSize;

        // ★ assign style function with button element value
        let s = style(el);

        // Translate Mode
        let templatePos = "";

        // ★ If No Any Outter Size, give default outter width and height
        if (posTStatus || posRStatus || posBStatus || posLStatus) {
            templatePos += `translateY(-${posTSize}) translateX(${posRSize}) translateY(${posBSize}) translateX(-${posLSize})`;
            s.pos(templatePos);

            PosSetting.templatePos = templatePos;
        }
        else if (!posTStatus && !posRStatus && !posBStatus && !posLStatus) {
            PosSetting.setDefaultPosSize();

            let realPosUnit;
            if (posUnitStatus)
                realPosUnit = PosSetting.posSize[0][0];
            else if (!posUnitStatus)
                realPosUnit = PosSetting.posSize[0];

            templatePos += `translateY(-${PosSetting.defaultPosClientY + realPosUnit}) translateX(0) translateY(${posBSize}) translateX(-${PosSetting.defaultPosClientX + realPosUnit})`;
            s.pos(templatePos);

            PosSetting.setTemplatePos(templatePos);
        }
    }
}

const ConfigurePosInstance = new ConfigurePos();

export default ConfigurePosInstance;







