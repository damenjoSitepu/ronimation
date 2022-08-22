// ★ ———————————————————————————————————————————————————————
//  ★ ConfigureOutter.js
// ★ ———————————————————————————————————————————————————————
import OutterSetting from './outter-setting.js';
import Property from './property.js';
import style from './style.js';

class ConfigureOutter {
    // ★ Set up outter configuration here
    setConfigureOutter(el, outterObj) {
        // ★ Outter property ( to store all property that related to outter )
        Property.setOutterProperty(outterObj);
        // ★ To implement default outter width and height an element, we need to know size the element first, then send the data to the class
        OutterSetting.setDefaultOutterWidthSize(el.clientWidth, el.clientHeight);
        // ★ Set all outter property with value which is retrieved by outterObj parameters
        OutterSetting.setPropertyWithValue(Property.getOutterProperty());
        // ★ Set outter style refer to the button that attached with Aurora classes
        this.setOutter(el, OutterSetting);
    }

    // ★ Set outter style refer to the button that attached with Aurora classes
    setOutter(el, OutterSetting) {
        // ★ retrieve all outter type size and status by OutterSetting objects property
        let [outterWHSize, outterWHStatus] = OutterSetting.outterWH;
        let [outterWSize, outterWStatus] = OutterSetting.outterW;
        let [outterHSize, outterHStatus] = OutterSetting.outterH;

        // ★ assign style function with button element value
        let s = style(el);

        // ★ Full outter width and height available
        if (outterWHStatus) {
            s.ow(outterWHSize);
            s.oh(outterWHSize);
        }
        // ★ Outter width or outter height available
        else if (outterWStatus || outterHStatus) {
            if (outterWStatus && !outterHStatus) {
                s.ow(outterWSize);
                s.oh(OutterSetting.defaultOutterClientHeight + OutterSetting.outterSize[0]);
            }
            else if (!outterWStatus && outterHStatus) {
                s.ow(OutterSetting.defaultOutterClientWidth + OutterSetting.outterSize[0]);
                s.oh(outterHSize);
            }
        }
        // ★ If No Any Outter Size, give default outter width and height
        else if (!outterWHStatus) {
            // Jika masuk ke sini, maka ubah statusnya jadi true
            OutterSetting.setDefaultOutterWasActivated();

            s.ow(OutterSetting.defaultOutterClientWidth + OutterSetting.outterSize[0]);
            s.oh(OutterSetting.defaultOutterClientHeight + OutterSetting.outterSize[0]);
        }
    }
}

const ConfigureOutterInstance = new ConfigureOutter();

export default ConfigureOutterInstance;





