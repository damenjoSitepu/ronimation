// ★ ———————————————————————————————————————————————————————
//  ★ CustomButtonSetting.js
// ★ ———————————————————————————————————————————————————————
import ButtonSetting from './button-setting.js';

class CustomButtonSetting extends ButtonSetting {
    setWithSizeAndUnit(sizeType, resetSize = false, getUnit) {
        let [size, unit, statusProperty] = sizeType;
        // Check status padding status false or not 
        if (resetSize) {
            if (!statusProperty)
                size = "0";
        }
        // Read measure data available or not 
        let units = getUnit;

        let [sizeUnit, statusUnit] = [];
        if (units) {
            [sizeUnit, statusUnit] = getUnit;
        }

        // If size non equal to null and measure non equal to null and padding measure ( own data attribute status equal to true)
        if (size != "" && unit != "" && statusUnit) {
            return [size + sizeUnit, statusProperty];
        }
        // If size non equal to null and measure equal to null
        else if (size != "" && unit == "")
            return [size + sizeUnit, statusProperty];
        // If size non equal to null and measure non equal to null
        else if (size != "" && unit != "")
            return [size + unit, statusProperty];
    }

    setSize(sizeType, defaultSize, defaultUnit) {
        let regexCheckNumber = /[0-9]/;
        // size was undefined or size doesn't have number value 
        if (!sizeType || !regexCheckNumber.test(sizeType))
            return [defaultSize, "", false];

        let regexSize = /cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%/;
        let regexSizeOnlyLetter = /[a-z]/g;
        let getUnit = sizeType.match(regexSize);
        let getUnitOnlyLetter = sizeType.match(regexSizeOnlyLetter);

        // if user input number in the middle ( lkdsl10xskdl ), first ( 10askjdlasd), and last ( sdksadlkajd19 )
        let regexCheckNumberInAnyPosition = /[0-9]/g;
        let regexMatchNumberInAnyPosition = sizeType.match(regexCheckNumberInAnyPosition);
        let getSize = regexMatchNumberInAnyPosition.join("");

        // if unit in this side actually has detected right unit but with another weird letters, give this things
        if (getUnit && getUnitOnlyLetter)
            if (getUnit[0].length != getUnitOnlyLetter.length)
                getUnit = defaultUnit;

        // If return string like ( 10xckdl ( no size detected ))
        if (getUnit == null && getSize != null)
            return [getSize, "", true];
        else if (getUnit != null && getSize != null)
            return [getSize, getUnit, true];
    }

    // ★ Define unit of size properties
    setUnit(unit, defaultUnit, ...everySize) {
        let regexUnit = /cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%/;

        // ★ If unit value was undefined
        if (!unit)
            return [defaultUnit, false];
        // ★ If unit input doesn't match with any regexUnit value
        else if (!regexUnit.test(unit)) {
            for (let i = 0; i < everySize.length; i++) {
                // Cek apakah element tersebut array ( jika array, maka data attribut tersebut telah diisi oleh data size)
                if (Array.isArray(everySize[i])) {
                    // jika isi element tersebut berupa array lagi, maka pakai unit ini
                    if (Array.isArray(everySize[i][1])) {
                        return [defaultUnit, false];
                    }
                }
            }
            return [defaultUnit, true];
        }
        // ★ If unit input match with any regexUnit value
        else {
            // ★ filter unit which is fillable with only regexUnit value
            let getUnit = unit.match(regexUnit);

            // ★ When unit is found but have another letter that not related, give default
            if (getUnit[0].length != unit.length)
                return [defaultUnit, false];
            // ★ When unit is found and related, just give that unit
            else if (getUnit[0].length == unit.length)
                return [getUnit, true];

        }
    }
}

const customButtonSettingInstance = new CustomButtonSetting();

export { customButtonSettingInstance, CustomButtonSetting }