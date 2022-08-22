// ★ ———————————————————————————————————————————————————————
//  ★ Style.js
// ★ ———————————————————————————————————————————————————————

// ★ Style Shorthand 
export default (el) => {
    el.style.pt = (value) => {
        el.style.paddingTop = value;
    }

    el.style.pr = (value) => {
        el.style.paddingRight = value;
    }

    el.style.pb = (value) => {
        el.style.paddingBottom = value;
    }

    el.style.pl = (value) => {
        el.style.paddingLeft = value;
    }

    el.style.rtl = (value) => {
        el.style.borderTopLeftRadius = value;
    }

    el.style.rtr = (value) => {
        el.style.borderTopRightRadius = value;
    }

    el.style.rbr = (value) => {
        el.style.borderBottomRightRadius = value;
    }

    el.style.rbl = (value) => {
        el.style.borderBottomLeftRadius = value;
    }

    el.style.ow = (value) => {
        el.style.setProperty("--setoutterwidth", value);
    }

    el.style.oh = (value) => {
        el.style.setProperty("--setoutterheight", value);
    }

    el.style.pos = (value) => {
        el.style.setProperty("--setpos", value);
    }

    el.style.g = (value) => {
        el.style.setProperty("--setgradient", value);
    }

    el.style.tR = (value) => {
        el.style.setProperty("--setrotate", value);
    }

    el.style.tRF = (value) => {
        el.style.setProperty("--settransitionfirst", value);
    }

    el.style.tD = (value) => {
        el.style.setProperty("--settransition", value);
    }

    return el.style;
}

