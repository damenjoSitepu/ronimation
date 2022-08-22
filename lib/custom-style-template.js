// ★ ———————————————————————————————————————————————————————
//  ★ CustomStyleTemplate.js
// ★ ———————————————————————————————————————————————————————
import StyleTemplate from './style-template.js';

class CustomStyleTemplate extends StyleTemplate {
    // ★ Property for setDebugBorder 
    setDebugBorderSize = "2px";
    setDebugBorderStyle = "solid";
    setDebugBorderColor = "blue";

    // ★ When you need to debug this button, set the "setDebugBorder" properties value to true
    activateDefaultBorder(defaultDebugBorder = {}, activateThisFeature = false) {
        if (activateThisFeature) {
            this.setDebugBorderSize = !defaultDebugBorder.hasOwnProperty("size") || defaultDebugBorder.size === "" ? this.setDebugBorderSize : defaultDebugBorder.size;

            this.setDebugBorderStyle = !defaultDebugBorder.hasOwnProperty("style") || defaultDebugBorder.style === "" ? this.setDebugBorderStyle : defaultDebugBorder.style;

            this.setDebugBorderColor = !defaultDebugBorder.hasOwnProperty("color") || defaultDebugBorder.color === "" ? this.setDebugBorderColor : defaultDebugBorder.color;

            let borderProperty = "border:";

            // Susun string css
            this.borderDefaultPropertyValue = borderProperty + " " + this.setDebugBorderSize + " " + this.setDebugBorderStyle + " " + this.setDebugBorderColor;
            // Buat overflow jadi visible
            this.defaultOverflow = "visible";
        }
    }

    // ★ Merge all css string from StyleTemplate Class
    importAllDefaultCss() {
        // ★ Set CSS Style with this method
        this.setMainCss();
        // ★ Return all string css for default style
        return this.getMainCss() + this.getPseudoCss() + this.getPseudoHoverCss();
    }
}

// ★ Instance object
const customStyleTemplateDefault = new CustomStyleTemplate();

// ★ Export this single instance 
export default customStyleTemplateDefault;






