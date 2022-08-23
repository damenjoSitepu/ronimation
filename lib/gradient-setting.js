// ★ ———————————————————————————————————————————————————————
//  ★ RadiusSetting.js
// ★ ———————————————————————————————————————————————————————
import { CustomButtonSetting } from './custom-button-setting.js'; 

class GradientSetting extends CustomButtonSetting {
    // ★ Declare all radius property
    g = "#2193b0,#6dd5ed";
    gType = "linear";

    // ★ set all property with value 
    setPropertyWithValue(gradientObj) {
        this.g = this.setGradientColor(gradientObj.g) || this.g;
        this.gType = this.setGradientType(gradientObj.gType) || this.gType;
    }

    // Set gradient color 
    setGradientColor = function (g) {
        // if gradient color is undefined
        if (!g)
            return "#2193b0,#6dd5ed";

        // check again
        let splitColor = g.split(",");

        // if gradient color only one color, give the default value
        if (splitColor.length == 1)
            return "#2193b0,#6dd5ed";
        else
            return g;
    }

    // Set gradient type
    setGradientType(gType) {
        // if gradient type is undefined
        if (!gType)
            return "linear-gradient";

        // Regex Checking
        const regexGradientType = /\blinear|radial\b/i;
        const getType = gType.match(regexGradientType);

        // if gradient type input is null
        if (!getType)
            return "linear-gradient";
        else {
            if (getType[0] == "linear")
                return "linear-gradient";
            else
                return "radial-gradient";
        }
    }
}

const setGradientSetting = new GradientSetting();
export default setGradientSetting;   