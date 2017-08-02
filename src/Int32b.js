
import Rgb from './Rgb';

/**
 * @class Int32b
 * @private
 */
export default {

    name: 'Int32b',

    parent: Rgb,

    /**
     * 32-bit number `0xRRGGBBAA` (big-endian) to rgb `{r:RRR, g:GGG, b:BBB, a:AAA}`
     *
     * @memberof ColorUtil.int32b
     *
     * @example
     * ColorUtil.int32b.toRgb(0xFF112233)
     * // output: {r: 255, g: 17, b: 34, a: 51}
     *
     * @param      {number}  int        32-bit number
     * @return     {Object}
     */
    toRgb: (int) => {
        return {
            r: (int >> 24) & 0xFF,
            g: (int >> 16) & 0xFF,
            b: (int >> 8) & 0xFF,
            a: int & 0xFF
        };
    }
};