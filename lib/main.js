// ★ ———————————————————————————————————————————————————————
//  ★ Main.js
// ★ ———————————————————————————————————————————————————————
import Magic from './magic.js';

class Main {
    // Method ini akan mencari seluruh element <button> yang telah ditambahkan dengan class Ronimation, kemudian menambahkan style sesuai dengan kustom data-attribute yang telah dimasukkan ke dalam setiap <button> yang ada.
    startPackage() {
        Array.from(this.RonimationElement()).forEach((Ronimation) => {
            Magic.changeEverything(Ronimation);
        });
    }

    // Shorthand
    RonimationElement() {
        return document.getElementsByClassName("Ronimation");
    }
}

const MainInstance = new Main();
export default MainInstance;

