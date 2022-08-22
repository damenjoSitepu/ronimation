// ★ ———————————————————————————————————————————————————————
//  ★ Configure.js
// ★ ———————————————————————————————————————————————————————
import ConfigurePadding from './configure-padding.js';
import ConfigureRadius from './configure-radius.js';
import ConfigureOutter from './configure-outter.js';
import ConfigurePos from './configure-pos.js';
import ConfigureGradient from './configure-gradient.js';
import ConfigureRonimation from './configure-ronimation.js';

class Configure {
    // Semua pengaturan style yang terpisahkan berdasarkan kelompoknya dilakukan di sini
    configure(el, buttonObj) {
        // Konfigurasi padding dilakukan di sini
        ConfigurePadding.setConfigurePadding(el, buttonObj);
        // Konfigurasi border radius dilakukan di sini
        ConfigureRadius.setConfigureRadius(el, buttonObj);
        // Konfigurasi Outter width dan height dilakukan di sini
        ConfigureOutter.setConfigureOutter(el, buttonObj);
        // Konfigurasi position dilakukan di sini
        ConfigurePos.setConfigurePos(el, buttonObj);
        // Konfigurasi gradient dilakukan di sini
        ConfigureGradient.setConfigureGradient(el, buttonObj);
        // Konfigurasi rotate animation dilakukan di sini
        ConfigureRonimation.setConfigureRonimation(el, buttonObj);
    }
}

const ConfigureInstance = new Configure();
export default ConfigureInstance;

