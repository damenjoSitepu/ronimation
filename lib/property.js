// ★ ———————————————————————————————————————————————————————
//  ★ Property.js
// ★ ———————————————————————————————————————————————————————
class Property {
    paddingProperty = {};
    radiusProperty = {};
    outterProperty = {};
    posProperty = {};
    gradientProperty = {};
    ronimationProperty = {};

    setPaddingProperty(paddingObj) {
        this.paddingProperty.paddingFull = paddingObj.paddingFull;
        this.paddingProperty.paddingX = paddingObj.paddingX;
        this.paddingProperty.paddingY = paddingObj.paddingY;
        this.paddingProperty.paddingT = paddingObj.paddingT;
        this.paddingProperty.paddingR = paddingObj.paddingR;
        this.paddingProperty.paddingB = paddingObj.paddingB;
        this.paddingProperty.paddingL = paddingObj.paddingL;
        this.paddingProperty.paddingSize = paddingObj.paddingSize;
    }

    getPaddingProperty() {
        return this.paddingProperty;
    }

    setRadiusProperty(radiusObj) {
        this.radiusProperty.radiusFull = radiusObj.radiusFull;
        this.radiusProperty.radiusTL = radiusObj.radiusTL;
        this.radiusProperty.radiusTR = radiusObj.radiusTR;
        this.radiusProperty.radiusBR = radiusObj.radiusBR;
        this.radiusProperty.radiusBL = radiusObj.radiusBL;
        this.radiusProperty.radiusSize = radiusObj.radiusSize;
    }

    getRadiusProperty() {
        return this.radiusProperty;
    }

    setOutterProperty(outterObj) {
        this.outterProperty.outterW = outterObj.outterW;
        this.outterProperty.outterH = outterObj.outterH;
        this.outterProperty.outterWH = outterObj.outterWH;
        this.outterProperty.outterSize = outterObj.outterSize;
    }

    getOutterProperty() {
        return this.outterProperty;
    }

    setPosProperty(posObj) {
        this.posProperty.posT = posObj.posT;
        this.posProperty.posR = posObj.posR;
        this.posProperty.posB = posObj.posB;
        this.posProperty.posL = posObj.posL;
        this.posProperty.posSize = posObj.posSize;
    }

    getPosProperty() {
        return this.posProperty;
    }

    setGradientProperty(gradientObj) {
        this.gradientProperty.g = gradientObj.g;
        this.gradientProperty.gType = gradientObj.gType;
    }

    getGradientProperty() {
        return this.gradientProperty;
    }

    setRonimationProperty(gradientObj) {
        this.ronimationProperty.ronimation = gradientObj.ronimation;
    }

    getRonimationProperty() {
        return this.ronimationProperty;
    }
}

const propertyInstance = new Property();

export default propertyInstance;    