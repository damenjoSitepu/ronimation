// ★ ———————————————————————————————————————————————————————
//  ★ ConfigureOutter.js
// ★ ———————————————————————————————————————————————————————
import GradientSetting from './gradient-setting.js';
import Property from './property.js';
import style from './style.js';

class ConfigureGradient {
    // ★ Set up gradient configuration here
    setConfigureGradient(el, gradientObj) {
        // ★ gradient property ( to store all property that related to gradient )
        Property.setGradientProperty(gradientObj);
        // ★ Set all gradient property with value which is retrieved by gradientObj parameters
        GradientSetting.setPropertyWithValue(Property.getGradientProperty());
        // ★ Set gradient style refer to the button that attached with Aurora classes
        this.setGradient(el, GradientSetting);
    }

    // ★ Set outter style refer to the button that attached with Aurora classes
    setGradient(el, GradientSetting) {
        // ★ assign style function with button element value
        let s = style(el);

        let gradientTemplate = `${GradientSetting.gType}(${GradientSetting.g})`;

        // Change style
        s.g(gradientTemplate);
    }
}

const ConfigureGradientInstance = new ConfigureGradient();

export default ConfigureGradientInstance;





