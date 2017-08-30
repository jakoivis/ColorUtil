<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [ColorUtil](#colorutil)
    -   [rgb](#rgb)
        -   [test](#test)
        -   [toInt](#toint)
        -   [toHex](#tohex)
        -   [toRgbString](#torgbstring)
        -   [toRgbaString](#torgbastring)
        -   [toUint32](#touint32)
        -   [toUint32Opaque](#touint32opaque)
        -   [toUint32b](#touint32b)
        -   [toInt32](#toint32)
        -   [toInt32Opaque](#toint32opaque)
        -   [toInt32b](#toint32b)
        -   [toHsl](#tohsl)
        -   [toHsv](#tohsv)
        -   [hueColors](#huecolors)
        -   [hue](#hue)
        -   [gradientColor](#gradientcolor)
        -   [matrixColor](#matrixcolor)
        -   [circleGradientColor](#circlegradientcolor)
    -   [int](#int)
        -   [test](#test-1)
        -   [toRgb](#torgb)
        -   [toHex](#tohex-1)
        -   [toRgbString](#torgbstring-1)
        -   [toRgbaString](#torgbastring-1)
    -   [int32](#int32)
        -   [toRgb](#torgb-1)
    -   [int32b](#int32b)
        -   [toRgb](#torgb-2)
    -   [hex](#hex)
        -   [test](#test-2)
        -   [toRgb](#torgb-3)
        -   [toInt](#toint-1)
        -   [toRgbString](#torgbstring-2)
        -   [toRgbaString](#torgbastring-2)
    -   [rgbString](#rgbstring)
        -   [test](#test-3)
        -   [toRgb](#torgb-4)
        -   [toInt](#toint-2)
        -   [toHex](#tohex-2)
    -   [rgbaString](#rgbastring)
        -   [test](#test-4)
        -   [toRgb](#torgb-5)
        -   [toInt](#toint-3)
        -   [toHex](#tohex-3)
    -   [hsl](#hsl)
        -   [test](#test-5)
        -   [toRgb](#torgb-6)
        -   [toHsv](#tohsv-1)
        -   [toHslString](#tohslstring)
        -   [toHslaString](#tohslastring)
    -   [hslString](#hslstring)
        -   [test](#test-6)
        -   [toHsl](#tohsl-1)
    -   [hslaString](#hslastring)
        -   [test](#test-7)
        -   [toHsl](#tohsl-2)
    -   [hsv](#hsv)
        -   [test](#test-8)
        -   [toRgb](#torgb-7)
        -   [toHsl](#tohsl-3)
    -   [any](#any)
        -   [toRgb](#torgb-8)
        -   [toInt](#toint-4)
        -   [toHex](#tohex-4)
        -   [toRgbString](#torgbstring-3)
        -   [toRgbaString](#torgbastring-3)
        -   [toHsl](#tohsl-4)
        -   [toHsv](#tohsv-2)
        -   [toHslString](#tohslstring-1)
        -   [toHslaString](#tohslastring-1)
    -   [endian](#endian)
    -   [convert](#convert)
    -   [continuity](#continuity)
        -   [stop](#stop)
        -   [repeat](#repeat)

## ColorUtil

### rgb

Rgb conversion functions

Rgb object notation is `{r:RRR, g:GGG, b:BBB, a:AAA}` where each color component
(red, grean, blue, alpha) range is 0-255. In some conversion functions
alpha is not required. In those where it is required and not present in
rgb object, a fully opaque value is used as a default.

#### test

Test validity of a color whether it is in correct notation for this class.

**Parameters**

-   `color` **any** The color

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** True if valid, False otherwise.

#### toInt

Convert rgb object `{r:RRR, g:GGG, b:BBB, a:AAA}` to 24-bit number `0xRRGGBB`. Alpha is ignored.

**Parameters**

-   `rgb` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

**Examples**

```javascript
ColorUtil.rgb.toInt({r: 0, g: 128, b: 255});
// output: 33023
```

Returns **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

#### toHex

Convert rgb object `{r:RRR, g:GGG, b:BBB, a:AAA}` to 24-bit hex string `'#RRGGBB'`. Alpha is ignored.

**Parameters**

-   `rgb` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

**Examples**

```javascript
ColorUtil.rgb.toHex({r: 0, g: 128, b: 255});
// output: "#0080ff"
```

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

#### toRgbString

Convert rgb object `{r:RRR, g:GGG, b:BBB}` to rgb functional notation string `'rgb(RRR,GGG,BBB)'`.
Alpha is converted from range 0-255 to 0-1.

**Parameters**

-   `rgb` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

**Examples**

```javascript
ColorUtil.rgb.toRgbString({r: 0, g: 128, b: 255});
// output: "rgb(0,128,255)"
```

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

#### toRgbaString

Convert rgb object `{r:RRR, g:GGG, b:BBB, a:AAA}` to rgb functional notation string `'rgba(RRR,GGG,BBB,A)'`.
Alpha is converted from range 0-255 to 0-1.

**Parameters**

-   `rgb` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

**Examples**

```javascript
ColorUtil.rgb.toRgbaString({r: 0, g: 128, b: 255, a: 85});
// output: "rgba(0,128,255,0.3333333333333333)"
```

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

#### toUint32

Convert rgb object `{r:RRR, g:GGG, b:BBB, a:AAA}` to 32-bit number `0xAABBGGRR` (little-endian)
Resulting value is positive

**Parameters**

-   `rgb` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

**Examples**

```javascript
ColorUtil.rgb.toUint32({r: 0, g: 128, b: 255, a: 255});
// output: 4294934528
ColorUtil.rgb.toUint32({r: 0, g: 128, b: 255, a: 85});
// output: 1442807808
```

Returns **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

#### toUint32Opaque

Convert rgb object `{r:RRR, g:GGG, b:BBB}` to 32-bit number `0xAABBGGRR` (little-endian)
Alpha value is discarded and fully opaque value is used. This is faster option compared to
`toUint32` and can be used if alpha value is not relevant. Resulting value is positive

**Parameters**

-   `rgb` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

**Examples**

```javascript
ColorUtil.rgb.toUint32Opaque({r: 0, g: 128, b: 255})
// output: 4294934528
```

Returns **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

#### toUint32b

Convert rgb object `{r:RRR, g:GGG, b:BBB, a:AAA}` to 32-bit number `0xRRGGBBAA` (big-endian)
Resulting value is positive

**Parameters**

-   `rgb` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

**Examples**

```javascript
ColorUtil.rgb.toUint32b({r: 0, g: 128, b: 255, a: 255});
// output: 8454143
ColorUtil.rgb.toUint32b({r: 0, g: 128, b: 255, a: 85});
// output: 8453973
```

Returns **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

#### toInt32

Convert rgb object `{r:RRR, g:GGG, b:BBB, a:AAA}` to 32-bit number `0xAABBGGRR` (little-endian)
Resulting value can be negative.

**Parameters**

-   `rgb` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

**Examples**

```javascript
ColorUtil.rgb.toInt32({r: 0, g: 128, b: 255, a: 255});
// output: -32768
ColorUtil.rgb.toInt32({r: 0, g: 128, b: 255, a: 85});
// output: 1442807808
```

Returns **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

#### toInt32Opaque

Convert rgb object `{r:RRR, g:GGG, b:BBB}` to 32-bit number `0xAABBGGRR` (little-endian)
Alpha value is discarded and fully opaque value is used. This is faster option compared to
`toInt32` and can be used if alpha value is not relevant. Resulting value can be negative.

**Parameters**

-   `rgb` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

**Examples**

```javascript
ColorUtil.rgb.toInt32Opaque({r: 0, g: 128, b: 255})
// output: -32768
```

Returns **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

#### toInt32b

Convert rgb object `{r:RRR, g:GGG, b:BBB, a:AAA}` to 32-bit number `0xRRGGBBAA` (big-endian).
Resulting value can be negative.

**Parameters**

-   `rgb` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

**Examples**

```javascript
ColorUtil.rgb.toInt32b({r: 0, g: 128, b: 255, a: 255});
// output: 8454143
ColorUtil.rgb.toInt32b({r: 0, g: 128, b: 255, a: 85});
// output: 8453973
```

Returns **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

#### toHsl

Convert rgb object `{r:RRR, g:GGG, b:BBB, a:AAA}` to hsl object `{h:H, s:S, l:L, a:A}`
where h, s, l, a (saturation, luminosity, alpha) are in range 0-1.

**Parameters**

-   `rgb` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

**Examples**

```javascript
ColorUtil.rgb.toHsl({r: 255, g: 0, b: 0, a: 255});
// output: {h: 0, s: 1, l: 0.5, a: 1}
```

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

#### toHsv

Convert rgb object `{r:RRR, g:GGG, b:BBB, a:AAA}` to hsv object `{h:H, s:S, v:V, a:A}`
where h, s, v, a (hue, saturation, value, alpha) are in range 0-1.

**Parameters**

-   `rgb` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

**Examples**

```javascript
ColorUtil.rgb.toHsv({r: 255, g: 0, b: 0, a: 255});
// output: {h: 0, s: 1, v: 1, a: 1}
```

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

#### hueColors

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** Array of hue colors

#### hue

A short-cut method for getting hue color

**Parameters**

-   `rgb` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** Rgb object

**Examples**

```javascript
ColorUtil.rgb.hue({r:0x7F, g: 0x7F, b:0})
// output: {r: 255, g: 255, b: 0, a: 255}
```

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** hue color in Rgb object notation

#### gradientColor

Get color from gradient. Calculation is done in
rgb object notation so colors should be converted to object notation.

**Parameters**

-   `colors` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** Array of colors. Colors should be in rgb object notation.
-   `position` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Position on the gradient. Value in range 0-1.
-   `continuity` **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** Continuity function (optional, default `Continuity.stop`)

**Examples**

```javascript
let gradient = ColorUtil.convert([0xFF0000, 0x00FF00, 0x0000FF], ColorUtil.int.toRgb);
ColorUtil.rgb.gradientColor(gradient, 0.5);
// output: {r: 0, g: 255, b: 0, a: 255}
```

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** rgb object

#### matrixColor

Get color from matrix. Calculation is done in
rgb object notation so colors should be converted to object notation.

**Parameters**

-   `matrix` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** Array of gradient color arrays. Colors should be in rgb object notation.
-   `x` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Horizontal position on the gradient. Value in range 0-1.
-   `y` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Vertical position on the gradient. Value in range 0-1.
-   `continuity` **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** Continuity function (optional, default `Continuity.stop`)

**Examples**

```javascript
let matrix = ColorUtil.convert([[0xFF0000, 0x00FF00], [0x0000FF]], ColorUtil.int.toRgb);
ColorUtil.rgb.matrixColor(matrix, 0.5, 0.5);
// output: {r: 63.75, g: 63.75, b: 127.5, a: 255}
```

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** rgb object

#### circleGradientColor

Get color from circle gradient. Calculation is done in
rgb object notation so colors should be converted to object notation.

**Parameters**

-   `colors` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** Array of colors. Colors should be in rgb object notation.
-   `x` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Horizontal position on the gradient. Value in range 0-1.
-   `y` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Vertical position on the gradient. Value in range 0-1.
-   `cx` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Horizontal position of center point. Value in range 0-1. (optional, default `0.5`)
-   `cy` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Vertical position of center point. Value in range 0-1. (optional, default `0.5`)
-   `rotation` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Rotation of the gradient. Value in range 0-1. (optional, default `0`)
-   `continuity` **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** Continuity function (optional, default `Continuity.repeat`)

**Examples**

```javascript
let colors = ColorUtil.rgb.hueColors();
ColorUtil.rgb.circleGradientColor(colors, 0.1, 0.1);
// output: {r: 0, g: 63.74999999999994, b: 255, a: 255}

// keep center the same but rotatio 180 degrees
ColorUtil.rgb.circleGradientColor(colors, 0.1, 0.1, 0.5, 0.5, 0.5);
// output: {r: 255, g: 191.25, b: 0, a: 255}
```

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** rgb object

### int

Number conversion functions.

Int notation is 24-bit number representing the RGB values `0xRRGGBB`.

#### test

Test validity of a color whether it is in correct notation for this class.

**Parameters**

-   `color` **any** The color

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** True if valid, False otherwise.

#### toRgb

24-bit number `0xRRGGBB` to rgb `{r:RRR, g:GGG, b:BBB, a:AAA}`

**Parameters**

-   `int` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Integer
-   `a` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Alpha value in range 0-255 (optional, default `0xFF`)

**Examples**

```javascript
ColorUtil.int.toRgb(0xFF0000);
// output: {r: 255, g: 0, b: 0, a: 255}

ColorUtil.int.toRgb(0xFF0000, 128);
// output: {r: 255, g: 0, b: 0, a: 128}
```

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

#### toHex

24-bit number `0xRRGGBB` to 24-bit hex string `'#RRGGBB'`.

**Parameters**

-   `int` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Integer

**Examples**

```javascript
ColorUtil.int.toHex(0x00FF00);
// output: "#00ff00"
```

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

#### toRgbString

24-bit number `0xRRGGBB` to rgb functional notation string `'rgb(RRR,GGG,BBB)'`

**Parameters**

-   `int` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Integer

**Examples**

```javascript
ColorUtil.int.toRgbString(0x00FF00);
// output: "rgb(0,255,0)"
```

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

#### toRgbaString

24-bit number `0xRRGGBB` to rgb functional notation string `'rgba(RRR,GGG,BBB,A)'`

**Parameters**

-   `int` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Integer
-   `a` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Alpha value in range 0-1 (optional, default `1`)

**Examples**

```javascript
ColorUtil.int.toRgbaString(0x00FF00);
// output: "rgba(0,255,0,1)"

ColorUtil.int.toRgbaString(0x00FF00, 0.5);
// output: "rgba(0,255,0,0.5)"
```

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

### int32

Number conversion functions.

Int32 notation converion functions for 32-bit numbers `0xAABBGGRR` (little-endian).

#### toRgb

32-bit number `0xAABBGGRR` (little-endian) to rgb `{r:RRR, g:GGG, b:BBB, a:AAA}`

**Parameters**

-   `int` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 32-bit number

**Examples**

```javascript
ColorUtil.int32.toRgb(0xFF112233)
// output: {a: 255, b: 17, g: 34, r: 51}
```

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

### int32b

Number conversion functions.

Int32 notation converion functions for 32-bit numbers `0xRRGGBBAA` (big-endian).

#### toRgb

32-bit number `0xRRGGBBAA` (big-endian) to rgb `{r:RRR, g:GGG, b:BBB, a:AAA}`

**Parameters**

-   `int` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 32-bit number

**Examples**

```javascript
ColorUtil.int32b.toRgb(0xFF112233)
// output: {r: 255, g: 17, b: 34, a: 51}
```

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

### hex

Hexadecimal conversion functions

Hex notation is 24-bit hex string representing the RGB values `'#RRGGBB'`.

#### test

Test validity of a color whether it is in correct notation for this class.

**Parameters**

-   `color` **any** The color

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** True if valid, False otherwise.

#### toRgb

24-bit hex string `'#RRGGBB'` to rgb object `{r:RRR, g:GGG, b:BBB, a:AAA}`

**Parameters**

-   `hex` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Hexadecimal string
-   `a` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Alpha value in range 0-255 (optional, default `0xFF`)

**Examples**

```javascript
ColorUtil.hex.toRgb('#00FF00');
// output: {r: 0, g: 255, b: 0, a: 255}
ColorUtil.hex.toRgb('#00FF00', 127);
// output: {r: 0, g: 255, b: 0, a: 127}
```

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

#### toInt

24-bit hex string `'#RRGGBB'` to 24-bit integer `0xRRGGBB`

**Parameters**

-   `hex` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Hexadecimal string

**Examples**

```javascript
ColorUtil.hex.toInt('#00FF00');
// output: 65280
```

Returns **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

#### toRgbString

24-bit hex string `'#RRGGBB'` to rgb functional notation string `'rgb(RRR,GGG,BBB)'`

**Parameters**

-   `hex` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Hexadecimal string

**Examples**

```javascript
ColorUtil.hex.toRgbString('#00FF00')
// output: "rgb(0,255,0)"
```

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

#### toRgbaString

24-bit hex string `'#RRGGBB'` to rgb functional notation string `'rgba(RRR,GGG,BBB,A)'`

**Parameters**

-   `hex` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Hexadecimal string
-   `a` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Alpha value in range 0-1 (optional, default `1`)

**Examples**

```javascript
ColorUtil.hex.toRgbaString('#00FF00')
// output: "rgba(0,255,0,1)"

ColorUtil.hex.toRgbaString('#00FF00', 0.5)
// output: "rgba(0,255,0,0.5)"
```

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

### rgbString

RgbString conversion functions

RgbString notation is `'rgb(RRR,GGG,BBB)'`

#### test

Test validity of a color whether it is in correct notation for this class.

**Parameters**

-   `color` **any** The color

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** True if valid, False otherwise.

#### toRgb

Rgb functional notation string `'rgb(RRR,GGG,BBB)'` to rgb object `{r:RRR, g:GGG, b:BBB, a:AAA}`

**Parameters**

-   `rgbString` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Rgb string
-   `a` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Alpha value in range 0-255 (optional, default `0xFF`)

**Examples**

```javascript
ColorUtil.rgbString.toRgb('rgb(0,255,0)')
// output: {r: 0, g: 255, b: 0, a: 255}
```

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

#### toInt

Rgb functional notation string `'rgb(RRR,GGG,BBB)'` to 24-bit integer `0xRRGGBB`. Alpha is ignored.

**Parameters**

-   `rgbString` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Rgba string

**Examples**

```javascript
ColorUtil.rgbString.toInt('rgb(0,255,0)')
// output: 65280
```

Returns **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

#### toHex

Rgb functional notation string `'rgb(RRR,GGG,BBB)'` to hexadecimal string `'#RRGGBB'`. Alpha is ignored.

**Parameters**

-   `rgbString` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Rgb string

**Examples**

```javascript
ColorUtil.rgbString.toHex('rgb(0,255,0)')
// output: "#00ff00"
```

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

### rgbaString

RgbaString conversion functions

RgbString notation is `'rgba(RRR,GGG,BBB,A)'`

#### test

Test validity of a color whether it is in correct notation for this class.

**Parameters**

-   `color` **any** The color

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** True if valid, False otherwise.

#### toRgb

Rgba functional notation string `'rgba(RRR,GGG,BBB,A)'` to rgb object `{r:RRR, g:GGG, b:BBB, a:AAA}`

**Parameters**

-   `rgbaString` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Rgba string

**Examples**

```javascript
ColorUtil.rgbaString.toRgb('rgba(0,255,0,0.5)')
// output: {r: 0, g: 255, b: 0, a: 127}
```

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

#### toInt

Rgba functional notation string `'rgba(RRR,GGG,BBB,A)'` to 24-bit integer `0xRRGGBB`. Alpha is ignored.

**Parameters**

-   `rgbaString` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Rgba string

**Examples**

```javascript
ColorUtil.rgbaString.toInt('rgba(0,255,0,0.5)')
// output: 65280
```

Returns **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

#### toHex

Rgba functional notation string `'rgba(RRR,GGG,BBB,A)'` to hexadecimal string `'#RRGGBB'`. Alpha is ignored.

**Parameters**

-   `rgbaString` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Rgba string

**Examples**

```javascript
ColorUtil.rgbaString.toHex('rgba(0,255,0,0.5)')
// output: "#00ff00"
```

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

### hsl

Hsl conversion functions

Hsl notation is `{h:H, s:S, l:L, a:A}` where each component (hue, saturation,
luminosity, alpha) is in range 0-1.

#### test

Test validity of a color whether it is in correct notation for this class.

**Parameters**

-   `color` **any** The color

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** True if valid, False otherwise.

#### toRgb

Hsl object `{h:H, s:S, l:L, a:A}` to rgb object `{r:RRR, g:GGG, b:BBB, a:AAA}`

**Parameters**

-   `hsl` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** Hsl object

**Examples**

```javascript
ColorUtil.hsl.toRgb({h: 1/6, s: 0.5, l: 0.5});
// output: {r: 191, g: 191, b: 64, a: 255}

ColorUtil.hsl.toRgb({h: 1/6, s: 0.5, l: 0.5, a: 0.5});
// output: {r: 191, g: 191, b: 64, a: 128}
```

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

#### toHsv

Hsl object `{h:H, s:S, l:L, a:A}` to hsv object `{h:H, s:S, v:V, a:A}`

**Parameters**

-   `hsl` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** Hsl object

**Examples**

```javascript
ColorUtil.hsl.toHsv({h: 1/6, s: 0.5, l: 0.5});
// output: {h: 0.16666666666666666, s: 0.6666666666666666, v: 0.75, a: 1}
```

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

#### toHslString

Convert hsl object `{h:H, s:S, l:L}` to hsl functional notation string `'hsl(HHH,SSS%,LLL%)'`.

**Parameters**

-   `hsl` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

**Examples**

```javascript
ColorUtil.hsl.toHslString({h:2/6, s:0.5, l:0.5});
// output: "hsl(120,50%,50%)"
```

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

#### toHslaString

Convert hsl object `{h:H, s:S, l:L, a:A}` to hsl functional notation string `'hsla(HHH,SSS%,LLL%,A)'`.

**Parameters**

-   `hsl` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

**Examples**

```javascript
ColorUtil.hsl.toHslaString({h:2/6, s:0.5, l:0.5, a:0.5});
// output: "hsla(120,50%,50%,0.5)"
```

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

### hslString

HslString conversion functions

Hsl functional notation is `'hsl(HHH,SSS%,LLL%)'`

#### test

Test validity of a color whether it is in correct notation for this class.

**Parameters**

-   `color` **any** The color

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** True if valid, False otherwise.

#### toHsl

Hsl functional notation string `'hsl(HHH,SSS%,LLL%)'` to hsl object `{h:H, s:S, l:L, a:A}`

**Parameters**

-   `hslString` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Hsl string
-   `a` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Alpha value in range 0-1 (optional, default `1`)

**Examples**

```javascript
ColorUtil.hslString.toHsl('hsl(180, 50%, 60%)');
// output: {h: 0.5, s: 0.5, l: 0.6, a: 1}
```

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

### hslaString

HslaString conversion functions

Hsla functional notation is `'hsla(HHH,SSS%,LLL%,A)'`

#### test

Test validity of a color whether it is in correct notation for this class.

**Parameters**

-   `color` **any** The color

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** True if valid, False otherwise.

#### toHsl

Hsl functional notation string `'hsla(HHH,SSS%,LLL%,A)'` to hsl object `{h:H, s:S, l:L, a:A}`

**Parameters**

-   `hslaString` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Hsl string

**Examples**

```javascript
ColorUtil.hslaString.toHsl('hsla(180, 50%, 60%, 0.5)');
// output: {h: 0.5, s: 0.5, l: 0.6, a: 0.5}
```

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

### hsv

Hsv conversion functions

Hsv notation is `{h:H, s:S, v:V, a:A}` where each component
(hue, saturation, value, alpha) are in range 0-1.

#### test

Test validity of a color whether it is in correct notation for this class.

**Parameters**

-   `color` **any** The color

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** True if valid, False otherwise.

#### toRgb

Hsv object `{h:H, s:S, v:V, a:A}` to rgb object `{r:RRR, g:GGG, b:BBB, a:AAA}`

**Parameters**

-   `hsv` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** Hsv object

**Examples**

```javascript
ColorUtil.hsv.toRgb({h: 0, s: 1, v: 1});
// output: {r: 255, g: 0, b: 0, a: 255}
ColorUtil.hsv.toRgb({h: 0, s: 1, v: 1, a: 0.5});
// output: {r: 255, g: 0, b: 0, a: 128}
```

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

#### toHsl

Hsv object `{h:H, s:S, v:V, a:A}` to hsl object `{h:H, s:S, l:L, a:A}`

**Parameters**

-   `hsv` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** Hsl object

**Examples**

```javascript
ColorUtil.hsv.toHsl({h: 1/6, s: 0.5, v: 0.5});
// output: {h: 0.16666666666666666, s: 0.3333333333333333, l: 0.375, a: 1}
```

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

### any

Any conversion functions.

Converts supported color notations to any notation.

The any conversion functions provide an easy way to convert to specific notation
without knowing the notation of a source color. This is just a collection of
convenience methods making the usage a little bit easier. These functions are not
as fast as the direct conversion functions.

#### toRgb

Convert any color to rgb object notation `{r:RRR, g:GGG, b:BBB, a:AAA}`

**Parameters**

-   `color` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** Color in any notation

**Examples**

```javascript
ColorUtil.any.toRgb(0xFF0000);
// output: {r: 255, g: 0, b: 0, a: 255}

ColorUtil.any.toRgb({h: 1/6, s: 0.5, l: 0.5});
// output: {r: 191, g: 191, b: 64, a: 255}
```

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

#### toInt

Convert any color to number notation `0xRRGGBB`

**Parameters**

-   `color` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** Color in any notation

**Examples**

```javascript
ColorUtil.any.toInt('hsl(180, 50%, 60%)');
// output: 6737100
```

Returns **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

#### toHex

Convert any color to hex notation `'#RRGGBB'`

**Parameters**

-   `color` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** Color in any notation

**Examples**

```javascript
ColorUtil.any.toHex('hsl(180, 50%, 60%)');
// output: "#66cccc"
```

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

#### toRgbString

Convert any color to rgb functional notation `'rgb(RRR,GGG,BBB)'`

**Parameters**

-   `color` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** Color in any notation

**Examples**

```javascript
ColorUtil.any.toRgbString('hsl(180, 50%, 60%)');
// output: "rgb(102,204,204)"
```

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

#### toRgbaString

Convert any color to rgb functional notation `'rgba(RRR,GGG,BBB,A)'`

**Parameters**

-   `color` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** Color in any notation

**Examples**

```javascript
ColorUtil.any.toRgbaString('hsl(180, 50%, 60%)');
// output: "rgba(102,204,204,1)"
```

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

#### toHsl

Convert any color to hsl object notation `{h:H, s:S, v:V, a:A}`

**Parameters**

-   `color` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** Color in any notation

**Examples**

```javascript
ColorUtil.any.toHsl('hsl(180, 50%, 60%)');
// output: {h: 0.5, s: 0.5, l: 0.6, a: 1}
```

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

#### toHsv

Convert any color to hsv object notation `{h:H, s:S, v:V, a:A}`

**Parameters**

-   `color` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** Color in any notation

**Examples**

```javascript
ColorUtil.any.toHsl('hsl(180, 50%, 60%)');
// output: {h: 0.5, s: 0.5, l: 0.6, a: 1}
```

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

#### toHslString

Convert any color to hsl functional notation string `'hsl(HHH,SSS%,LLL%)'`

**Parameters**

-   `color` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** Color in any notation

**Examples**

```javascript
ColorUtil.any.toHslString({h: 0.5, s: 0.5, l: 0.6, a: 1});
// output: "hsl(180,50%,60%)"
```

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

#### toHslaString

Convert any color to hsl functional notation string `'hsla(HHH,SSS%,LLL%,A)'`

**Parameters**

-   `color` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** Color in any notation

**Examples**

```javascript
ColorUtil.any.toHslaString({h: 0.5, s: 0.5, l: 0.6, a: 1});
// output: "hsla(180,50%,60%,1)"
```

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

### endian

Get the endian used by the system.

<https://developer.mozilla.org/en-US/docs/Glossary/Endianness>

Returns **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 0=little-endian, 1=big-endian, 2=unknown-endian

### convert

Run conversion functions for single color, array of colors or
matrix of colors.

**Parameters**

-   `colors` **any** Array of colors or single color
-   `conversionFunctions` **...[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** Rest of the parameters are conversion functions
                                                     which are executed in the order they are listed.

**Examples**

```javascript
ColorUtil.convert(0xFF0000, ColorUtil.int.toHex);
// output: "#ff0000"

ColorUtil.convert([0xFF0000, 0x00FF00], ColorUtil.int.toHex);
// output: ["#ff0000", "#00ff00"]

ColorUtil.convert([[0xFF0000, 0x00FF00], 0x0000FF], ColorUtil.int.toHex);
// output: [['#ff0000', '#00ff00'], '#0000ff']

ColorUtil.convert([[0xFF0000, 0x00FF00], 0x0000FF], ColorUtil.int.toHex, ColorUtil.hex.toRgbString);
// output: [['rgb(255,0,0)', 'rgb(0,255,0)'], 'rgb(0,0,255)']
```

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** 

### continuity

Gradient continuity functions

#### stop

Stop gradient at the edge color

**Parameters**

-   `position`  

#### repeat

Repeat gradient with the same pattern

**Parameters**

-   `position`  