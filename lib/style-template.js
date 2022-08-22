// ★ ———————————————————————————————————————————————————————
//  ★ StyleTemplate.js
// ★ ———————————————————————————————————————————————————————

export default class StyleTemplate {
    // ★ Declare private property 
    mainCss;
    pseudoCss;
    pseudoHoverCss;

    // ★ Declare Default private property 
    defaultBorder = 0;
    defaultBackgroundColor = "transparent";
    defaultCursor = "pointer";
    defaultBoxSizing = "border-box";
    defaultPosition = "relative"
    defaultOverflow = "hidden";

    // ★ Declare Default Border Debug
    defaultBorderStatus = false;
    borderDefaultPropertyValue = "";
    arrangeDefaultBorder = {};

    // ★ This class cannot be instantiated
    constructor() {
        // ★ Mimic like abstract class
        if (this.constructor == StyleTemplate)
            throw new Error("Object Of Abstract Class Cannot Be Created");

        // ★ Fill each private property with available Set Method
        this.setPseudoCss();
        this.setPseudoHoverCss();
    }

    // ★ Get main css private property
    getMainCss() {
        return this.mainCss;
    }

    // ★ Get pseudo css private property
    getPseudoCss() {
        return this.pseudoCss;
    }

    // ★ Get pseudo hover css private property
    getPseudoHoverCss() {
        return this.pseudoHoverCss;
    }

    // ★ Set main css private property
    setMainCss() {
        let defaultBorderProperty = "border:";
        let defaultBackgroundColorProperty = "background-color:";
        let defaultCursorProperty = "cursor:";
        let defaultBoxSizingProperty = "box-sizing:";
        let defaultPositionProperty = "position:";
        let defaultOverflowProperty = "overflow:";

        this.mainCss = `
        .Ronimation {
            ${defaultBorderProperty} ${this.defaultBorder};
            ${defaultBackgroundColorProperty} ${this.defaultBackgroundColor};
            ${defaultCursorProperty} ${this.defaultCursor};
            ${defaultBoxSizingProperty} ${this.defaultBoxSizing};
            ${defaultPositionProperty} ${this.defaultPosition};
            ${defaultOverflowProperty} ${this.defaultOverflow};
            ${this.borderDefaultPropertyValue};
        }
        `;

        return this;
    }

    // ★ Set pseudo css private property
    setPseudoCss() {
        this.pseudoCss = `
        .Ronimation::after {
            content: "";
            width: var(--setoutterwidth);
            height: var(--setoutterheight);
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            transform: var(--setpos);
            background-image: var(--setgradient);
            transition: transform var(--settransitionfirst) ease; 
            z-index: -1;
        }
        `;
    }

    // ★ Set pseudo hover css private property
    setPseudoHoverCss() {
        this.pseudoHoverCss = `
        .Ronimation:hover::after {
            transition: var(--settransition) ease;
            transform: var(--setrotate);
        }
        `;
    }
}







