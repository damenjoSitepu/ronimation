// ★ ———————————————————————————————————————————————————————
//  ★ DefaultStyle.js ( Final )
// ★ ———————————————————————————————————————————————————————
import CustomStyleTemplate from './custom-style-template.js';

class DefaultStyle {
    // Mendapatkan <head> tag element.
    getHeadTag() {
        return document.head || document.getElementsByTagName('head')[0];
    }

    // Menambahkan default style khas bawaan Ronimation Package secara final.
    appendRonimationClass(styleElement) {
        // CustomStyleTemplate.importAllDefaultCss() berisi string class, pseudo class, dan pseudo hover class milik Ronimation Package yang kedepannya akan disisipkan ke dalam <style> tag element.
        if (styleElement.styleSheet) {
            styleElement.styleSheet.cssText = CustomStyleTemplate.importAllDefaultCss();
        } else {
            styleElement.appendChild(document.createTextNode(CustomStyleTemplate.importAllDefaultCss()));
        }
    }

    // Menambahkan default style khas bawaan Ronimation Package.
    changeStyle() {
        // Mendapatkan <head> tag element.
        const headTag = this.getHeadTag();
        // Membuat node element baru bernama <style>.
        let style = document.createElement('style');
        // Menambahkan <style> element yang baru dibuat ke dalam <head> tag.
        headTag.appendChild(style);
        // Menambahkan default style khas bawaan Ronimation Package secara final.
        this.appendRonimationClass(style);
    }
}

const DefaultStyleInstance = new DefaultStyle();

export default DefaultStyleInstance;


