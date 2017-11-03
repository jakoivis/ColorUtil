
import Rgb from './Rgb';
import Int from './Int';
import Int32 from './Int32';
import Int32b from './Int32b';
import Hex from './Hex';
import RgbString from './RgbString';
import RgbaString from './RgbaString';
import Hsl from './Hsl';
import HslString from './HslString';
import HslaString from './HslaString';
import Hsv from './Hsv';

import {callConverter} from '../conversionFunctions';

const TYPES = [Rgb, Int, Hex, Hsl, Hsv, RgbaString, RgbString, HslaString, HslString];

/**
 * @class Any
 * @private
 */
export default {

    /**
     * Convert any color to rgb object notation `{r:RRR, g:GGG, b:BBB, a:AAA}`
     *
     * @example
     * ColorUtil.any.toRgb(0xFF0000);
     * // output: {r: 255, g: 0, b: 0, a: 255}
     *
     * ColorUtil.any.toRgb({h: 1/6, s: 0.5, l: 0.5});
     * // output: {r: 191, g: 191, b: 64, a: 255}
     *
     * @memberof ColorUtil.any
     *
     * @param      {Object}  color        Color in any notation
     * @return     {Object}
     */
    toRgb: color => {
        return callConverter(Rgb, color, TYPES);
    },

    /**
     * Convert any color to number notation `0xRRGGBB`
     *
     * @example
     * ColorUtil.any.toInt('hsl(180, 50%, 60%)');
     * // output: 6737100
     *
     * @memberof ColorUtil.any
     *
     * @param      {Object}  color        Color in any notation
     * @return     {number}
     */
    toInt: color => {
        return callConverter(Int, color, TYPES);
    },

    /**
     * Convert any color to hex notation `'#RRGGBB'`
     *
     * @example
     * ColorUtil.any.toHex('hsl(180, 50%, 60%)');
     * // output: "#66cccc"
     *
     * @memberof ColorUtil.any
     *
     * @param      {Object}  color        Color in any notation
     * @return     {string}
     */
    toHex: color => {
        return callConverter(Hex, color, TYPES);
    },

    /**
     * Convert any color to rgb functional notation `'rgb(RRR,GGG,BBB)'`
     *
     * @example
     * ColorUtil.any.toRgbString('hsl(180, 50%, 60%)');
     * // output: "rgb(102,204,204)"
     *
     * @memberof ColorUtil.any
     *
     * @param      {Object}  color        Color in any notation
     * @return     {string}
     */
    toRgbString: color => {
        return callConverter(RgbString, color, TYPES);
    },

    /**
     * Convert any color to rgb functional notation `'rgba(RRR,GGG,BBB,A)'`
     *
     * @example
     * ColorUtil.any.toRgbaString('hsl(180, 50%, 60%)');
     * // output: "rgba(102,204,204,1)"
     *
     * @memberof ColorUtil.any
     *
     * @param      {Object}  color        Color in any notation
     * @return     {string}
     */
    toRgbaString: color => {
        return callConverter(RgbaString, color, TYPES);
    },

    /**
     * Convert any color to hsl object notation `{h:H, s:S, v:V, a:A}`
     *
     * @example
     * ColorUtil.any.toHsl('hsl(180, 50%, 60%)');
     * // output: {h: 0.5, s: 0.5, l: 0.6, a: 1}
     *
     * @memberof ColorUtil.any
     *
     * @param      {Object}  color        Color in any notation
     * @return     {Object}
     */
    toHsl: color => {
        return callConverter(Hsl, color, TYPES);
    },

    /**
     * Convert any color to hsv object notation `{h:H, s:S, v:V, a:A}`
     *
     * @example
     * ColorUtil.any.toHsl('hsl(180, 50%, 60%)');
     * // output: {h: 0.5, s: 0.5, l: 0.6, a: 1}
     *
     * @memberof ColorUtil.any
     *
     * @param      {Object}  color        Color in any notation
     * @return     {Object}
     */
    toHsv: color => {
        return callConverter(Hsv, color, TYPES);
    },

    /**
     * Convert any color to hsl functional notation string `'hsl(HHH,SSS%,LLL%)'`
     *
     * @example
     * ColorUtil.any.toHslString({h: 0.5, s: 0.5, l: 0.6, a: 1});
     * // output: "hsl(180,50%,60%)"
     *
     * @memberof ColorUtil.any
     *
     * @param      {Object}  color        Color in any notation
     * @return     {string}
     */
    toHslString: color => {
        return callConverter(HslString, color, TYPES);
    },

    /**
     * Convert any color to hsl functional notation string `'hsla(HHH,SSS%,LLL%,A)'`
     *
     * @example
     * ColorUtil.any.toHslaString({h: 0.5, s: 0.5, l: 0.6, a: 1});
     * // output: "hsla(180,50%,60%,1)"
     *
     * @memberof ColorUtil.any
     *
     * @param      {Object}  color        Color in any notation
     * @return     {string}
     */
    toHslaString: color => {
        return callConverter(HslaString, color, TYPES);
    }
}