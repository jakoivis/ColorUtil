
const INT32_ALPHA_LE = (0xFF << 24) >>> 0;

/**
 * @class Rgb
 * @private
 */
export default {

    name: 'Rgb',

    parent: null,

    /**
     * Test validity of a color whether it is in correct notation for this class.
     *
     * @memberof ColorUtil.rgb
     *
     * @param      {*}          color   The color
     * @return     {boolean}    True if valid, False otherwise.
     */
    test: color => {
        return color !== null &&
            typeof color === 'object' &&
            color.hasOwnProperty('r') &&
            color.hasOwnProperty('g') &&
            color.hasOwnProperty('b') &&
            (color.r >= 0 && color.r <= 255) &&
            (color.g >= 0 && color.g <= 255) &&
            (color.b >= 0 && color.b <= 255) &&
            (color.hasOwnProperty('a') ? (color.a >= 0 && color.a <= 255) : true);
    },

    /**
     * Convert rgb object `{r:RRR, g:GGG, b:BBB, a:AAA}` to 24-bit number `0xRRGGBB`. Alpha is ignored.
     *
     * @example
     * ColorUtil.rgb.toInt({r: 0, g: 128, b: 255});
     * // output: 33023
     *
     * @memberof ColorUtil.rgb
     *
     * @param      {Object}    rgb
     * @return     {number}
     */
    toInt: rgb => {
        return rgb.r << 16 | rgb.g << 8 | rgb.b;
    },

    /**
     * Convert rgb object `{r:RRR, g:GGG, b:BBB, a:AAA}` to 24-bit hex string `'#RRGGBB'`. Alpha is ignored.
     *
     * @example
     * ColorUtil.rgb.toHex({r: 0, g: 128, b: 255});
     * // output: "#0080ff"
     *
     * @memberof ColorUtil.rgb
     *
     * @param      {Object}    rgb
     * @return     {string}
     */
    toHex: rgb => {
        // e.g. (10<<8).toString(16) equals A00, but we need to write this in format 0A00
        // by adding 1<<16 (10000) to the result and removing the first digit
        // we have produced 0A00 like this: ((1<<16) + (10<<8)).toString(16).slice(1)
        return '#' + ((1 << 24) | (rgb.r << 16) | (rgb.g << 8) | rgb.b)
            .toString(16).slice(1);
    },

    /**
     * Convert rgb object `{r:RRR, g:GGG, b:BBB}` to rgb functional notation string `'rgb(RRR,GGG,BBB)'`.
     * Alpha is converted from range 0-255 to 0-1.
     *
     * @example
     * ColorUtil.rgb.toRgbString({r: 0, g: 128, b: 255});
     * // output: "rgb(0,128,255)"
     *
     * @memberof ColorUtil.rgb
     *
     * @param      {Object}    rgb
     * @return     {string}
     */
    toRgbString: rgb => {
        return `rgb(${Math.round(rgb.r)},${Math.round(rgb.g)},${Math.round(rgb.b)})`;
    },

    /**
     * Convert rgb object `{r:RRR, g:GGG, b:BBB, a:AAA}` to rgb functional notation string `'rgba(RRR,GGG,BBB,A)'`.
     * Alpha is converted from range 0-255 to 0-1.
     *
     * @example
     * ColorUtil.rgb.toRgbaString({r: 0, g: 128, b: 255, a: 85});
     * // output: "rgba(0,128,255,0.3333333333333333)"
     *
     * @memberof ColorUtil.rgb
     *
     * @param      {Object}    rgb
     * @return     {string}
     */
    toRgbaString: rgb => {
        return `rgba(${Math.round(rgb.r)},${Math.round(rgb.g)},${Math.round(rgb.b)},${rgb.a/0xFF})`;
    },

    /**
     * Convert rgb object `{r:RRR, g:GGG, b:BBB, a:AAA}` to 32-bit number `0xAABBGGRR` (little-endian)
     * Resulting value is positive
     *
     * @example
     * ColorUtil.rgb.toUint32({r: 0, g: 128, b: 255, a: 255});
     * // output: 4294934528
     * ColorUtil.rgb.toUint32({r: 0, g: 128, b: 255, a: 85});
     * // output: 1442807808
     *
     * @memberof ColorUtil.rgb
     *
     * @param      {Object}    rgb
     * @return     {number}
     */
    toUint32: rgb => {
        return (rgb.a << 24 | rgb.b << 16 | rgb.g << 8 | rgb.r) >>> 0
    },

    /**
     * Convert rgb object `{r:RRR, g:GGG, b:BBB}` to 32-bit number `0xAABBGGRR` (little-endian)
     * Alpha value is discarded and fully opaque value is used. This is faster option compared to
     * `toUint32` and can be used if alpha value is not relevant. Resulting value is positive
     *
     * @example
     * ColorUtil.rgb.toUint32Opaque({r: 0, g: 128, b: 255})
     * // output: 4294934528
     *
     * @memberof ColorUtil.rgb
     *
     * @param      {Object}    rgb
     * @return     {number}
     */
    toUint32Opaque: rgb => {
        return (INT32_ALPHA_LE | rgb.b << 16 | rgb.g << 8 | rgb.r) >>> 0
    },

    /**
     * Convert rgb object `{r:RRR, g:GGG, b:BBB, a:AAA}` to 32-bit number `0xRRGGBBAA` (big-endian)
     * Resulting value is positive
     *
     * @example
     * ColorUtil.rgb.toUint32b({r: 0, g: 128, b: 255, a: 255});
     * // output: 8454143
     * ColorUtil.rgb.toUint32b({r: 0, g: 128, b: 255, a: 85});
     * // output: 8453973
     *
     * @memberof ColorUtil.rgb
     *
     * @param      {Object}    rgb
     * @return     {number}
     */
    toUint32b: rgb => {
        return (rgb.r << 24 | rgb.g << 16 | rgb.b << 8 | rgb.a) >>> 0;
    },

    /**
     * Convert rgb object `{r:RRR, g:GGG, b:BBB, a:AAA}` to 32-bit number `0xAABBGGRR` (little-endian)
     * Resulting value can be negative.
     *
     * @example
     * ColorUtil.rgb.toInt32({r: 0, g: 128, b: 255, a: 255});
     * // output: -32768
     * ColorUtil.rgb.toInt32({r: 0, g: 128, b: 255, a: 85});
     * // output: 1442807808
     *
     * @memberof ColorUtil.rgb
     *
     * @param      {Object}    rgb
     * @return     {number}
     */
    toInt32: rgb => {
        return rgb.a << 24 | rgb.b << 16 | rgb.g << 8 | rgb.r;
    },

    /**
     * Convert rgb object `{r:RRR, g:GGG, b:BBB}` to 32-bit number `0xAABBGGRR` (little-endian)
     * Alpha value is discarded and fully opaque value is used. This is faster option compared to
     * `toInt32` and can be used if alpha value is not relevant. Resulting value can be negative.
     *
     * @example
     * ColorUtil.rgb.toInt32Opaque({r: 0, g: 128, b: 255})
     * // output: -32768
     *
     * @memberof ColorUtil.rgb
     *
     * @param      {Object}    rgb
     * @return     {number}
     */
    toInt32Opaque: rgb => {
        return INT32_ALPHA_LE | rgb.b << 16 | rgb.g << 8 | rgb.r;
    },

    /**
     * Convert rgb object `{r:RRR, g:GGG, b:BBB, a:AAA}` to 32-bit number `0xRRGGBBAA` (big-endian).
     * Resulting value can be negative.
     *
     * @example
     * ColorUtil.rgb.toInt32b({r: 0, g: 128, b: 255, a: 255});
     * // output: 8454143
     * ColorUtil.rgb.toInt32b({r: 0, g: 128, b: 255, a: 85});
     * // output: 8453973
     *
     * @memberof ColorUtil.rgb
     *
     * @param      {Object}    rgb
     * @return     {number}
     */
    toInt32b: rgb => {
        return rgb.r << 24 | rgb.g << 16 | rgb.b << 8 | rgb.a;
    },

    /**
     * Convert rgb object `{r:RRR, g:GGG, b:BBB, a:AAA}` to hsl object `{h:H, s:S, l:L, a:A}`
     * where h, s, l, a (saturation, luminosity, alpha) are in range 0-1.
     *
     * @example
     * ColorUtil.rgb.toHsl({r: 255, g: 0, b: 0, a: 255});
     * // output: {h: 0, s: 1, l: 0.5, a: 1}
     *
     * @memberof ColorUtil.rgb
     *
     * @param      {Object}    rgb
     * @return     {Object}
     */
    toHsl: rgb => {
        let {r:r, g:g, b:b, a:a} = rgb;

        r /= 0xFF;
        g /= 0xFF;
        b /= 0xFF;
        a = !isNaN(parseInt(a)) ? a / 0xFF : 1;

        let max = Math.max(r, g, b);
        let min = Math.min(r, g, b);
        let delta = max - min;
        let luminosity = (max + min) / 2;
        let saturation = 0;
        let hue = 0;

        if (delta > 0) {
            saturation = delta / (1 - Math.abs(luminosity * 2 - 1));

            if (b === max) {
                hue = ((r - g) / delta) + 4;

            } else if (g === max) {
                hue = ((b - r) / delta) + 2;

            } else if (r === max) {
                hue = ((g - b) / delta) + (g < b ? 6 : 0);
                // or this one
                // hue = ((g - b) / delta) % 6;

                // TODO: check why this is here and not after hue *= 60 statement and why unit tests don't break when removing
                if (hue < 0) {
                    hue += 360;
                }
            }

            hue /= 6;
        }

        return {
            h: hue,
            s: saturation,
            l: luminosity,
            a: a
        }
    },

    /**
     * Convert rgb object `{r:RRR, g:GGG, b:BBB, a:AAA}` to hsv object `{h:H, s:S, v:V, a:A}`
     * where h, s, v, a (hue, saturation, value, alpha) are in range 0-1.
     *
     * @example
     * ColorUtil.rgb.toHsv({r: 255, g: 0, b: 0, a: 255});
     * // output: {h: 0, s: 1, v: 1, a: 1}
     *
     * @memberof ColorUtil.rgb
     *
     * @param      {Object}    rgb
     * @return     {Object}
     */
    toHsv: rgb => {
        let {r:r, g:g, b:b, a:a} = rgb;

        r /= 0xFF;
        g /= 0xFF;
        b /= 0xFF;
        a = !isNaN(parseInt(a)) ? a / 0xFF : 1;

        let max = Math.max(r, g, b);
        let min = Math.min(r, g, b);
        let delta = max - min;
        let saturation = 0;
        let hue = 0;

        if (delta > 0) {
            saturation = delta / max;

            if (b === max) {
                hue = ((r - g) / delta) + 4;

            } else if (g === max) {
                hue = ((b - r) / delta) + 2;

            } else if (r === max) {
                hue = ((g - b) / delta) + (g < b ? 6 : 0);
                // or this one
                // hue = ((g - b) / delta) % 6;

                if (hue < 0) {
                    hue += 360;
                }
            }

            hue /= 6;
        }

        return {
            h: hue,
            s: saturation,
            v: max,
            a: a
        }
    }
}