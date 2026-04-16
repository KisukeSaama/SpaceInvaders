const assert = require("assert")
const { describe } = require("mocha")
const Math = require("../src/ts/math/vector.ts")

describe('Math',() => {
    const math = new Math.Math();
    describe('clamp()',() => {
        it('clamp(1,10,2) returns 2',() => {
        assert.equal(math.clamp(1, 10, 2), 2);
        });

        it('clamp(1,10,-12) returns 1',() => {
        assert.equal(math.clamp(1, 10, -12), 1);
        });
    });

    describe('lerp()',() => {
        it('lerp(1,10,2) returns 19',() => {
        assert.equal(math.lerp(1, 10, 2), 19);
        });

        it('lerp(1,10,-12) returns -107',() => {
        assert.equal(math.lerp(1, 10, -12), -107);
        });
    });

    describe('distance()',() => {
        it('distance({ angle: 5, radius: 50 },{ angle: 10, radius: 100 }) returns 98.30248290540649',() => {
        assert.equal(math.distance({ angle: 5, radius: 50 }, { angle: 10, radius: 100 }), 98.30248290540649);
        });
    });

    describe('toVector()',() => {
        it('toVector({ angle: 5, radius: 50 },{ angle: 10, radius: 100 }) returns {x: 14.183109273161312, y: -47.946213733156924}',() => {
        assert.equal(math.toVector({ angle: 5, radius: 50 }, { angle: 10, radius: 100 }).x, 14.183109273161312);
        assert.equal(math.toVector({ angle: 5, radius: 50 }, { angle: 10, radius: 100 }).y, -47.946213733156924);
        });
    });

    describe('distance',() => {
        it('distance({ angle: 5, radius: 50 },{ angle: -10, radius: 100 }) returns 141.76346189546945',() => {
        assert.equal(math.distance({ angle: 5, radius: 50 }, { angle: -10, radius: 100 }), 141.76346189546945);
        });
    });

    describe('normalize',() => {
        it('normalize({ x: 5, y: 50 }) returns {x: 0.09950371902099892,y: 0.9950371902099892}'),() => {
        assert.equal(math.normalize({ x: 5, y: 50 }).x, 0.09950371902099892);
        assert.equal(math.normalize({ x: 5, y: 50 }).y, 0.9950371902099892);
        };
    });

    describe('dot',() => {
        it('dot({ x: 5, y: 50 },{ x: 10, y: 100 }) returns 5050',() => {
        assert.equal(math.dot({ x: 5, y: 50 }, { x: 10, y: 100 }), 5050);
        });
    });

    describe('add',() => {
        it('add({ x: 5, y: 50 },{ x: 10, y: 100 }) returns {x: 15,y: 150}',() => {
        assert.equal(math.add({ x: 5, y: 50 }, { x: 10, y: 100 }).x, 15);
        assert.equal(math.add({ x: 5, y: 50 }, { x: 10, y: 100 }).y, 150);
        });
    });

    describe('subtract',() => {
        it('subtract({ x: 5, y: 50 },{ x: 10, y: 100 }) returns {x: -5,y: -50}',() => {
        assert.equal(math.subtract({ x: 5, y: 50 }, { x: 10, y: 100 }).x, -5);
        assert.equal(math.subtract({ x: 5, y: 50 }, { x: 10, y: 100 }).y, -50);
        });
    });
});