// ★ ———————————————————————————————————————————————————————
//  ★ This project is represent for my on-going portfolio
//   ★ Package was created by Damenjo Sitepu © 2022
//  ★ Visit https://github.com/damenjoSitepu
// ★ ———————————————————————————————————————————————————————
import Main from './lib/main.js';
import CustomStyleTemplate from './lib/custom-style-template.js';
import Message from './lib/message.js';
import DefaultStyle from './lib/default-style.js';

class Ronimation {
    // Jalankan seluruh package di dalamnya
    run() {
        // Pesan di konsol setelah package berhasil dijalankan
        Message.displayPackageMessageIsSuccesfullyRun();
        // Menambahkan style default pada setiap button
        DefaultStyle.changeStyle();
        // Jalankan package
        Main.startPackage();
        return this;
    }

    // Saat diaktifkan, border dan overflow ( untuk debug outter width & height ) akan ditampilkan
    watchOutside(defaultDebugBorder = {}, activateThisFeature = true) {
        // jika [activateThisFeature] bernilai false, maka fitur ini tidak akan berjalan
        activateThisFeature ? CustomStyleTemplate.activateDefaultBorder(defaultDebugBorder, activateThisFeature) : console.error("Please activate this default border feature by setting the second parameter value to true immediately.");
        return this;
    }
}

const RonimationInstance = new Ronimation();

export default RonimationInstance;
// ★ ———————————————————————————————————————————————————————
//  ★ Thanks for anyone who contributing for this package
//   ★ Hope this package can be usefull in the future
//  ★ I really-really appreciating it, thank you
// ★ ——————————————————————————————————————————————————————— 