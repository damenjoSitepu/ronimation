// ★ ———————————————————————————————————————————————————————
//  ★ RadiusSetting.js
// ★ ———————————————————————————————————————————————————————
import { CustomButtonSetting } from './custom-button-setting.js';

class RonimationSetting extends CustomButtonSetting {
    // ★ Declare all ronimation property
    ronimationRotate = 180;
    ronimationDuration = .5;

    // Default ronimation property
    defaultRotate = 180;
    defaultDuration = .5;

    // ★ set all property with value 
    setPropertyWithValue(ronimationObj) {
        // jika value ronimation tidak di input ( false )
        if (!ronimationObj.ronimation) {
            this.ronimationRotate = this.setRotate(this.defaultRotate);
            this.ronimationDuration = this.setDuration(this.defaultDuration);
            return;
        }

        // Split ronimation object
        let rotateObject = ronimationObj.ronimation.split("|");

        if (rotateObject.length == 1) {
            // jika value lebih dari 10, maka parameter single itu asumsinya rotate ( bukan duration )
            if (parseFloat(rotateObject[0]) > 10) {
                this.ronimationRotate = this.setRotate(rotateObject[0]);
                this.ronimationDuration = this.setDuration(this.defaultDuration);
            }
            // jika value kurang dari 10, maka parameter single asumsinya itu duration ( bukan rotate )
            else if (parseFloat(rotateObject[0]) < 10) {
                this.ronimationDuration = this.setDuration(rotateObject[0]);
                this.ronimationRotate = this.setRotate(this.defaultRotate);
            }
        }
        // Jika kedua parameternya diisi
        else if (rotateObject.length >= 2) {
            this.ronimationRotate = this.setRotate(rotateObject[0]);
            this.ronimationDuration = this.setDuration(rotateObject[1]);
        }
    }

    // Set rotate 
    setRotate(rotate) {
        return this.ronimationRotate = rotate + "deg";
    }

    // set duration 
    setDuration(duration) {
        return this.ronimationDuration = duration + "s";
    }

}

const setRonimationSetting = new RonimationSetting();
export default setRonimationSetting;   