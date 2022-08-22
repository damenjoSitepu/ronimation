// ★ ———————————————————————————————————————————————————————
//  ★ ConfigureOutter.js
// ★ ———————————————————————————————————————————————————————
import RonimationSetting from './ronimation-setting.js';
import PosSetting from './pos-setting.js';
import Property from './property.js';
import style from './style.js';

class ConfigureRonimation {
    // ★ Set up gradient configuration here
    setConfigureRonimation(el, ronimationObj) {
        // ★ gradient property ( to store all property that related to gradient )
        Property.setRonimationProperty(ronimationObj);
        // ★ Set all gradient property with value which is retrieved by gradientObj parameters
        RonimationSetting.setPropertyWithValue(Property.getRonimationProperty());
        // ★ Set ronimation style refer to the button that attached with Aurora classes
        this.setRonimation(el, RonimationSetting);
    }

    // ★ Set ronimation style refer to the button that attached with Aurora classes
    setRonimation(el, RonimationSetting) {
        // ★ assign style function with button element value
        let s = style(el);

        // Transform translate Mode
        let templatePos = `${PosSetting.getTemplatePos()}`;

        // Transform Rotate Mode
        let transformRotate = `${templatePos} rotate(${RonimationSetting.ronimationRotate})`;
        let transformDuration = RonimationSetting.ronimationDuration;
        // Change style
        s.tR(transformRotate);
        s.tD(transformDuration);
        // Begitu di hover, maka jalankan durasi animasi di bagian Aurora::after
        el.addEventListener("mouseover", function () {
            s.tRF(transformDuration);
        });
    }
}

const ConfigureRonimationInstance = new ConfigureRonimation();

export default ConfigureRonimationInstance;





