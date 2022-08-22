// ★ ———————————————————————————————————————————————————————
//  ★ Magic.js
// ★ ———————————————————————————————————————————————————————
import { customButtonSettingInstance as button } from './custom-button-setting.js';
import Configure from './configure.js';

class Magic {
    // Semua pengubahan style mulai berlaku di sini
    changeEverything(el) {
        this.paddingValue(el);
        this.radiusValue(el);
        this.outterValue(el);
        this.posValue(el);
        this.gradientValue(el);
        this.ronimationValue(el);
        // Semua pengubahan style mulai berlaku di sini
        Configure.configure(el, button);
    }

    // Kelompok properti padding diisi dengan nilai padding
    paddingValue(el) {
        button.setPropertyWithValue('paddingFull', el.dataset.p || false);
        button.setPropertyWithValue('paddingSize', el.dataset.pSize || false);
        button.setPropertyWithValue('paddingX', el.dataset.px || false);
        button.setPropertyWithValue('paddingY', el.dataset.py || false);
        button.setPropertyWithValue('paddingT', el.dataset.pt || false);
        button.setPropertyWithValue('paddingR', el.dataset.pr || false);
        button.setPropertyWithValue('paddingB', el.dataset.pb || false);
        button.setPropertyWithValue('paddingL', el.dataset.pl || false);
    }

    // Kelompok properti border radius diisi dengan nilai border radius
    radiusValue(el) {
        button.setPropertyWithValue('radiusFull', el.dataset.r || false);
        button.setPropertyWithValue('radiusSize', el.dataset.rSize || false);
        button.setPropertyWithValue('radiusTL', el.dataset.rtl || false);
        button.setPropertyWithValue('radiusTR', el.dataset.rtr || false);
        button.setPropertyWithValue('radiusBR', el.dataset.rbr || false);
        button.setPropertyWithValue('radiusBL', el.dataset.rbl || false);
    }

    // Kelompok properti outter width dan height diisi dengan nilai outter width dan height
    outterValue(el) {
        button.setPropertyWithValue('outterW', el.dataset.ow || false);
        button.setPropertyWithValue('outterH', el.dataset.oh || false);
        button.setPropertyWithValue('outterWH', el.dataset.o || false);
        button.setPropertyWithValue('outterSize', el.dataset.oSize || false);
    }

    // Kelompok properti position diisi dengan nilai position
    posValue(el) {
        button.setPropertyWithValue('posT', el.dataset.posT || false);
        button.setPropertyWithValue('posR', el.dataset.posR || false);
        button.setPropertyWithValue('posB', el.dataset.posB || false);
        button.setPropertyWithValue('posL', el.dataset.posL || false);
        button.setPropertyWithValue('posSize', el.dataset.posSize || false);
    }

    // Kelompok properti gradient diisi dengan nilai gradient
    gradientValue(el) {
        button.setPropertyWithValue('g', el.dataset.g || false);
        button.setPropertyWithValue('gType', el.dataset.gType || false);
    }

    // Kelompok properti rotate animation diisi dengan nilai rotate animation
    ronimationValue(el) {
        button.setPropertyWithValue('ronimation', el.dataset.ronimation || false);
    }
}

const MagicInstance = new Magic();
export default MagicInstance;





