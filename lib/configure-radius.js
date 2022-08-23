// ★ ———————————————————————————————————————————————————————
//  ★ ConfigureRadius.js
// ★ ———————————————————————————————————————————————————————
import RadiusSetting from './radius-setting.js';
import Property from './property.js';
import style from './style.js';

class ConfigureRadius {
    // ★ Set up radius configuration here
    setConfigureRadius(el, radiusObj) {
        // ★ Radius property ( to store all property that related to radius )
        Property.setRadiusProperty(radiusObj);
        // ★ Set all radius property with value which is retrieved by radiusObj parameters
        RadiusSetting.setPropertyWithValue(Property.getRadiusProperty());
        // ★ Set radius style refer to the button that attached with Aurora classes
        this.setRadius(el, RadiusSetting);
    }

    // ★ Set radius style refer to the button that attached with Aurora classes
    setRadius(el, RadiusSetting) {
        // ★ retrieve all radius type size and status by RadiusSetting objects property
        let [radiusFullSize, radiusFullStatus] = RadiusSetting.radiusFull;
        let [radiusTLSize, radiusTLStatus] = RadiusSetting.radiusTL;
        let [radiusTRSize, radiusTRStatus] = RadiusSetting.radiusTR;
        let [radiusBRSize, radiusBRStatus] = RadiusSetting.radiusBR;
        let [radiusBLSize, radiusBLStatus] = RadiusSetting.radiusBL;

        // ★ assign style function with button element value
        let s = style(el);

        // ★ Full available
        if (radiusFullStatus) {
            s.rtl(radiusFullSize, radiusFullStatus);
            s.rtr(radiusFullSize, radiusFullStatus);
            s.rbr(radiusFullSize, radiusFullStatus);
            s.rbl(radiusFullSize, radiusFullStatus);
        }
        // ★ RTL or RTR or RBR or RBL Available
        else if (radiusTLStatus || radiusTRStatus || radiusBRStatus || radiusBLStatus) {
            s.rtl(radiusTLSize, radiusTLStatus);
            s.rtr(radiusTRSize, radiusTRStatus);
            s.rbr(radiusBRSize, radiusBRStatus);
            s.rbl(radiusBLSize, radiusBLStatus);
        }
        // ★ If No Any Radius Size, give default full radius
        else if (!radiusFullStatus) {
            s.rtl(radiusFullSize, radiusFullStatus);
            s.rtr(radiusFullSize, radiusFullStatus);
            s.rbr(radiusFullSize, radiusFullStatus);
            s.rbl(radiusFullSize, radiusFullStatus);
        }
    }
}

const ConfigureRadiusInstance = new ConfigureRadius();

export default ConfigureRadiusInstance;





