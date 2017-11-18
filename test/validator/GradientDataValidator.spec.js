
import sinon from 'sinon';
import chai from 'chai';
import GradientData from '../../src/gradientData/GradientData.js';
import _ from '../../src/Utils';

chai.should();
let expect = require('chai').expect;

describe('GradientData', () => {

    describe('create', () => {

        it('should not accept invalida data structures', () => {

            expect(() => {
                GradientData.create([]);
            }).to.throw('Argument should be and array with at least one item');

            expect(() => {
                GradientData.create({});
            }).to.throw('Argument should be and array with at least one item');

            expect(() => {
                GradientData.create([{colors:{}}]);
            }).to.throw('One sample was tested and it did not match any supported data structure');

            expect(() => {
                GradientData.create([{colors:[]}]);
            }).to.throw('One sample was tested and it did not match any supported data structure');

            expect(() => {
                GradientData.create([[]]);
            }).to.throw('One sample was tested and it did not match any supported data structure');
        });

        it('should return type DATA_STRUCTURE_OBJECTS', () => {

            let data = [{}];

            create(data).should.equal(GradientData.validators[0]);

            data = [{x: 0}]

            create(data).should.equal(GradientData.validators[0]);
        });

        it('should return type DATA_STRUCTURE_OBJECTS_WITH_COLORS', () => {

            let data = [{
                colors:[{}]
            }];

            create(data).should.equal(GradientData.validators[1]);

            data = [{
                y: 0,
                colors:[{x: 0}]
            }];

            create(data).should.equal(GradientData.validators[1]);
        });

        it('should return type DATA_STRUCTURE_ARRAYS_WITH_OBJECTS', () => {

            let data = [[{}]];

            create(data).should.equal(GradientData.validators[2]);

            data = [[{x: 0}]];

            create(data).should.equal(GradientData.validators[2]);
        });

        it('should return type DATA_STRUCTURE_OBJECTS_MATRIX', () => {

            let data = [{x: 0, y: 0}];

            create(data).should.equal(GradientData.validators[3]);
        });

        function create(data) {

            return GradientData.create(data);
        }
    });

    describe('verify', () => {

        describe('DATA_STRUCTURE_OBJECTS', () => {

            it('should accept structures', () => {

                verify([{}])
                    .should.equal(true);

                verify([{}, {}])
                    .should.equal(true);
            });

            it('should not accept structures', () => {

                expect(() => {
                    verify([{}, {colors:{}}]);
                }).to.throw('Color data structure is not consistent / valid');

                expect(() => {
                    verify([{}, 1]);
                }).to.throw('Color data structure is not consistent / valid');

                expect(() => {
                    verify([{}, []]);
                }).to.throw('Color data structure is not consistent / valid');
            });
        });

        describe('DATA_STRUCTURE_OBJECTS_MATRIX', () => {

            it('should accept structures', () => {

                verify([{x: 0, y: 0}])
                    .should.equal(true);

                verify([{x: 0, y: 0}, {x: 1, y: 1}])
                    .should.equal(true);
            });

            it('should not accept structures', () => {

                expect(() => {
                    verify([{x:0, y:0}, {colors:{}}]);
                }).to.throw('Color data structure is not consistent / valid');

                expect(() => {
                    verify([{x:0, y:0}, 1]);
                }).to.throw('Color data structure is not consistent / valid');

                expect(() => {
                    verify([{x:0, y:0}, []]);
                }).to.throw('Color data structure is not consistent / valid');
            });
        });

        function verify(data) {

            let validator = GradientData.create(data);

            return validator.verify(data);
        }
    });

    describe('validate', () => {

        let color1, color2, color3, color4;

        beforeEach(() => {

            color1 = {r: 1, g: 2, b: 3, a: 4};
            color2 = {r: 11, g: 22, b: 33, a: 44};
            color3 = {r: 111, g: 222, b: 333, a: 444};
            color4 = {r: 1111, g: 2222, b: 3333, a: 4444};
        })

        describe('DATA_STRUCTURE_OBJECTS', () => {

            it('should add stops for 1 point gradient', () => {

                let data = validate([color1]);

                data.length.should.equal(2);
                data[0].x.should.equal(0);
                data[1].x.should.equal(1);

                // verify new point is created with same identical colors
                data[0].r.should.equal(1);
                data[1].r.should.equal(1);
            });

            it('should add stops for 2 point gradient', () => {

                let data = validate([{}, {}]);

                data.length.should.equal(2);
                data[0].x.should.equal(0);
                data[1].x.should.equal(1);
            });

            it('should add stops for 3 point gradient', () => {

                let data = validate([{}, {}, {}]);

                data.length.should.equal(3);
                data[0].x.should.equal(0);
                data[1].x.should.equal(0.5);
                data[2].x.should.equal(1);
            });

            it('should add stops for 4 point gradient', () => {

                let data = validate([{}, {}, {}, {}]);

                data.length.should.equal(4);
                data[0].x.should.equal(0);
                data[1].x.should.equal(1/3);
                data[2].x.should.equal(2/3);
                data[3].x.should.equal(1);
            });

            it('should add missing stops (end-stops missing)', () => {

                let data = validate([color1, {x: 0.4}, color2]);

                data.length.should.equal(3);
                data[0].x.should.equal(0);
                data[1].x.should.equal(0.4);
                data[2].x.should.equal(1);

                data[0].r.should.equal(1);
                expect(data[1].r).to.equal(undefined);
                data[2].r.should.equal(11);
            });

            it('should add missing stops (end-stops + 1 missing)', () => {

                let data = validate([color1, color2, {x: 0.2}, color3, color4]);

                data.length.should.equal(5);
                data[0].x.should.equal(0);
                data[1].x.should.equal(0.1);
                data[2].x.should.equal(0.2);
                data[3].x.should.equal(0.2 + 0.4);
                data[4].x.should.equal(1);

                data[0].r.should.equal(1);
                data[1].r.should.equal(11);
                expect(data[2].r).to.equal(undefined);
                data[3].r.should.equal(111);
                data[4].r.should.equal(1111);
            });

            it('should add missing stops (end-colors missing)', () => {

                let data = validate([{x: 0.2, r: 1}, color2, {x: 0.8, r: 111}]);

                data.length.should.equal(5);
                data[0].x.should.equal(0);
                data[1].x.should.equal(0.2);
                data[2].x.should.equal(0.5);
                data[3].x.should.equal(0.8);
                data[4].x.should.equal(1);

                data[0].r.should.equal(1);
                data[1].r.should.equal(1);
                data[2].r.should.equal(11);
                data[3].r.should.equal(111);
                data[4].r.should.equal(111);
            });

            it('should not change anything', () => {

                color1.x = 0;
                color2.x = 0.2;
                color3.x = 1;

                let data = validate([color1, color2, color3]);

                data.length.should.equal(3);
                data[0].x.should.equal(0);
                data[1].x.should.equal(0.2);
                data[2].x.should.equal(1);

                data[0].r.should.equal(1);
                data[1].r.should.equal(11);
                data[2].r.should.equal(111);
            });
        });

        describe('DATA_STRUCTURE_OBJECTS_WITH_COLORS', () => {

            it('should add stops for 1 point 1 row gradient', () => {

                let data = validate([
                    {
                        colors: [color1]
                    }
                ]);

                verifyMatrix1x1(data);
            });

            it('should add stops for 3 point 3 row gradient', () => {

                let data = validate([
                    {
                        colors: [color1, color2, color3]
                    },
                    {
                        colors: [color1, color2, color3]
                    },
                    {
                        colors: [color1, color2, color3]
                    }
                ]);

                verifyMatrix3x3(data);
            });

            it('should add missing stops (end-stops missing)', () => {

                color2.x = 0.4;

                let data = validate([
                    {
                        colors: [color1, color2, color3]
                    },
                    {
                        y: 0.4,
                        colors: [color1, color2, color3]
                    },
                    {
                        colors: [color1, color2, color3]
                    }
                ]);

                verifyMatrix3x3WithMissingEndPoints(data);
            });
        });

        describe('DATA_STRUCTURE_ARRAYS_WITH_OBJECTS', () => {

            it('should add stops for 1 point 1 row gradient', () => {

                let data = validate([
                    [
                        color1
                    ]
                ]);

                verifyMatrix1x1(data);
            });

            it('should add stops for 3 point 3 row gradient', () => {

                let data = validate([
                    [
                        color1, color2, color3
                    ],
                    [
                        color1, color2, color3
                    ],
                    [
                        color1, color2, color3
                    ]
                ]);

                verifyMatrix3x3(data);
            });

            it('should add missing stops (end-stops missing)', () => {

                color2.x = 0.4;

                let row1 = [color1, color2, color3];
                let row2 = [color1, color2, color3];
                let row3 = [color1, color2, color3];

                row2.y = 0.4;

                let data = validate([
                    row1, row2, row3
                ]);

                verifyMatrix3x3WithMissingEndPoints(data);
            });
        });

        describe('DATA_STRUCTURE_OBJECTS_MATRIX', () => {

            it('should add stops for 1 point 1 row gradient', () => {

                color1.y = 0;

                let data = validate([
                    color1
                ]);

                verifyMatrix1x1(data);
            });

            it('should add stops for 3 point 3 row gradient', () => {

                let color4 = _.clone(color1);
                let color5 = _.clone(color2);
                let color6 = _.clone(color3);

                let color7 = _.clone(color1);
                let color8 = _.clone(color2);
                let color9 = _.clone(color3);

                color1.y = 0;
                color2.y = 0;
                color3.y = 0;

                color4.y = 0.5;
                color5.y = 0.5;
                color6.y = 0.5;

                color7.y = 1;
                color8.y = 1;
                color9.y = 1;

                let data = validate([
                    color1, color2, color3,
                    color4, color5, color6,
                    color7, color8, color9
                ]);

                verifyMatrix3x3(data);
            });

            it('should add missing stops (end-stops missing)', () => {

                let color4 = _.clone(color1);
                let color5 = _.clone(color2);
                let color6 = _.clone(color3);

                let color7 = _.clone(color1);
                let color8 = _.clone(color2);
                let color9 = _.clone(color3);

                color2.x = 0.4;
                color5.x = 0.4;
                color8.x = 0.4;

                color4.y = 0.4;

                color7.y = 1;

                let data = validate([
                    color1, color2, color3,
                    color4, color5, color6,
                    color7, color8, color9
                ]);

                verifyMatrix3x3WithMissingEndPoints(data);
            });
        });

        function verifyMatrix1x1(data) {

            data.length.should.equal(2);

            data[0].y.should.equal(0);
            data[1].y.should.equal(1);

            data[0].colors.length.should.equal(2);
            data[1].colors.length.should.equal(2);

            data[0].colors[0].x.should.equal(0);
            data[0].colors[1].x.should.equal(1);
            data[1].colors[0].x.should.equal(0);
            data[1].colors[1].x.should.equal(1);

            // verify new point is created with same identical colors
            data[0].colors[0].r.should.equal(1);
            data[0].colors[1].r.should.equal(1);
            data[1].colors[0].r.should.equal(1);
            data[1].colors[1].r.should.equal(1);
        }

        function verifyMatrix3x3(data) {

            data.length.should.equal(3);

            data[0].y.should.equal(0);
            data[1].y.should.equal(0.5);
            data[2].y.should.equal(1);

            data[0].colors.length.should.equal(3);
            data[1].colors.length.should.equal(3);
            data[2].colors.length.should.equal(3);

            data[0].colors[0].x.should.equal(0);
            data[0].colors[1].x.should.equal(0.5);
            data[0].colors[2].x.should.equal(1);
            data[1].colors[0].x.should.equal(0);
            data[1].colors[1].x.should.equal(0.5);
            data[1].colors[2].x.should.equal(1);

            // verify new point is created with same identical colors
            data[0].colors[0].r.should.equal(1);
            data[0].colors[1].r.should.equal(11);
            data[0].colors[2].r.should.equal(111);
            data[1].colors[0].r.should.equal(1);
            data[1].colors[1].r.should.equal(11);
            data[1].colors[2].r.should.equal(111);
        }

        function verifyMatrix3x3WithMissingEndPoints(data) {

            data.length.should.equal(3);

            data[0].y.should.equal(0);
            data[1].y.should.equal(0.4);
            data[2].y.should.equal(1);

            data[0].colors.length.should.equal(3);
            data[1].colors.length.should.equal(3);
            data[2].colors.length.should.equal(3);

            data[0].colors[0].x.should.equal(0);
            data[0].colors[1].x.should.equal(0.4);
            data[0].colors[2].x.should.equal(1);
            data[1].colors[0].x.should.equal(0);
            data[1].colors[1].x.should.equal(0.4);
            data[1].colors[2].x.should.equal(1);

            // verify new point is created with same identical colors
            data[0].colors[0].r.should.equal(1);
            data[0].colors[1].r.should.equal(11);
            data[0].colors[2].r.should.equal(111);
            data[1].colors[0].r.should.equal(1);
            data[1].colors[1].r.should.equal(11);
            data[1].colors[2].r.should.equal(111);
        }

        function validate(data) {

            let validator = GradientData.create(data);

            return validator.validate(data);
        }
    });
});
