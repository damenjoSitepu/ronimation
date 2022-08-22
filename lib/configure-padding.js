// ★ ———————————————————————————————————————————————————————
//  ★ ConfigurePadding.js
// ★ ———————————————————————————————————————————————————————
import PaddingSetting from './padding-setting.js';
import Property from './property.js';
import style from './style.js';

class ConfigurePadding {
    // ★ Set up padding configuration here
    setConfigurePadding(el, paddingObj) {
        // ★ Padding property ( to store all property that related to paddings )
        Property.setPaddingProperty(paddingObj);
        // ★ Set all padding property with value which is retrieved by paddingObj parameters
        PaddingSetting.setPropertyWithValue(Property.getPaddingProperty());
        // ★ Set padding style refer to the button that attached with Aurora classes
        this.setPadding(el, PaddingSetting);
    }

    // ★ Set padding style refer to the button that attached with Aurora classes
    setPadding(el, PaddingSetting) {
        // ★ retrieve all padding type size and status by PaddingSetting objects property
        let [paddingFullSize, paddingFullStatus] = PaddingSetting.paddingFull;
        let [paddingXSize, paddingXStatus] = PaddingSetting.paddingX;
        let [paddingYSize, paddingYStatus] = PaddingSetting.paddingY;
        let [paddingTSize, paddingTStatus] = PaddingSetting.paddingT;
        let [paddingRSize, paddingRStatus] = PaddingSetting.paddingR;
        let [paddingBSize, paddingBStatus] = PaddingSetting.paddingB;
        let [paddingLSize, paddingLStatus] = PaddingSetting.paddingL;

        // ★ assign style function with button element value
        let s = style(el);

        // ★ Full available
        if (paddingFullStatus) {
            s.pt(paddingFullSize);
            s.pr(paddingFullSize);
            s.pb(paddingFullSize);
            s.pl(paddingFullSize);
        }
        // ★ X or Y Available
        else if (paddingXStatus || paddingYStatus) {
            // ★ X and Y Available
            if (paddingXStatus && paddingYStatus) {
                s.pt(paddingYSize);
                s.pr(paddingXSize);
                s.pb(paddingYSize);
                s.pl(paddingXSize);
            }
            // ★ Only X Available
            else if (paddingXStatus && !paddingYStatus) {
                s.pt(paddingTSize);
                s.pr(paddingXSize);
                s.pb(paddingBSize);
                s.pl(paddingXSize);
            }
            // ★ Only Y Available
            else if (!paddingXStatus && paddingYStatus) {
                s.pt(paddingYSize);
                s.pr(paddingRSize);
                s.pb(paddingYSize);
                s.pl(paddingLSize);
            }
        }
        // ★ T or R or B or L Available
        else if (paddingTStatus || paddingRStatus || paddingBStatus || paddingLStatus) {
            s.pt(paddingTSize);
            s.pr(paddingRSize);
            s.pb(paddingBSize);
            s.pl(paddingLSize);
        }
        // ★ If No Any Padding Size, give default full padding
        else if (!paddingFullStatus) {
            s.pt(paddingFullSize);
            s.pr(paddingFullSize);
            s.pb(paddingFullSize);
            s.pl(paddingFullSize);
        }
    }
}

const ConfigurePaddingInstance = new ConfigurePadding();
export default ConfigurePaddingInstance;


