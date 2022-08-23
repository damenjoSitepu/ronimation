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
            s.pt(paddingFullSize, paddingFullStatus);
            s.pr(paddingFullSize, paddingFullStatus);
            s.pb(paddingFullSize, paddingFullStatus);
            s.pl(paddingFullSize, paddingFullStatus);
        }
        // ★ X or Y Available
        else if (paddingXStatus || paddingYStatus) {
            // ★ X and Y Available
            if (paddingXStatus && paddingYStatus) {
                s.pt(paddingYSize, paddingYStatus);
                s.pr(paddingXSize, paddingXStatus);
                s.pb(paddingYSize, paddingYStatus);
                s.pl(paddingXSize, paddingXStatus);
            }
            // ★ Only X Available
            else if (paddingXStatus && !paddingYStatus) {
                s.pt(paddingTSize, paddingTStatus);
                s.pr(paddingXSize, paddingXStatus);
                s.pb(paddingBSize, paddingBStatus);
                s.pl(paddingXSize, paddingXStatus);
            }
            // ★ Only Y Available
            else if (!paddingXStatus && paddingYStatus) {
                s.pt(paddingYSize, paddingYStatus);
                s.pr(paddingRSize, paddingRStatus);
                s.pb(paddingYSize, paddingYStatus);
                s.pl(paddingLSize, paddingLStatus);
            }
        }
        // ★ T or R or B or L Available
        else if (paddingTStatus || paddingRStatus || paddingBStatus || paddingLStatus) {
            s.pt(paddingTSize, paddingTStatus);
            s.pr(paddingRSize, paddingRStatus);
            s.pb(paddingBSize, paddingBStatus);
            s.pl(paddingLSize, paddingLStatus);
        }
        // ★ If No Any Padding Size, give default full padding
        else if (!paddingFullStatus) {
            s.pt(paddingFullSize, paddingFullStatus);
            s.pr(paddingFullSize, paddingFullStatus);
            s.pb(paddingFullSize, paddingFullStatus);
            s.pl(paddingFullSize, paddingFullStatus);
        }
    }
}

const ConfigurePaddingInstance = new ConfigurePadding();
export default ConfigurePaddingInstance;


