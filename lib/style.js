// ★ ———————————————————————————————————————————————————————
//  ★ Style.js
// ★ ———————————————————————————————————————————————————————

// ★ Style Shorthand 
export default (el) => {
    el.style.pt = (value, status) => {
        el.style.paddingTop = el.style.paddingTop && !status ? el.style.paddingTop : value;
    }

    el.style.pr = (value, status) => {
        el.style.paddingRight = el.style.paddingRight && !status ? el.style.paddingRight : value;
    }

    el.style.pb = (value, status) => {
        el.style.paddingBottom = el.style.paddingBottom && !status ? el.style.paddingBottom : value;
    }

    el.style.pl = (value, status) => {
        el.style.paddingLeft = el.style.paddingLeft && !status ? el.style.paddingLeft : value;
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

