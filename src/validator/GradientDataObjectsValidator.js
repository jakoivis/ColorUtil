
import _ from '../Utils';
import GradientDataValidatorUtil from './GradientDataValidatorUtil';

 /*

one dimensional data structure for normal gradients
[
    {x:0},
    {x:1}
]
colors is array
colors[n] has x
colors[n] !has y
colors[n] !has colors

x properties are optional

used internally

*/
export default class {

    static get structureType() {

        return 'objects'
    }

    static verifyStructure(colors) {

        return GradientDataValidatorUtil.verifyStructure(colors, this);
    }

    static testStructureAllSamples(colors) {

        return _.findIndex(colors, 'y') === -1;
    }

    static testStructureSingleSample(item) {

        return _.isObject(item) && !_.has(item, 'colors');
    }

    static validateStops(colors) {

        return GradientDataValidatorUtil.addMissingStops(colors, 'x');
    }
}