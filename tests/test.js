const assert = require("assert")
const { describe } = require("mocha")
const Vector = require("../src/ts/math/vector.ts")

describe('Vector',() => {
    const vector = new Vector();
    const { clamp, lerp, distance, toVector, normalize, dot, add, subtract } = vector;
    describe('clamp()',() => {
        it('clamp(1,10,2) returns 2',() => {
        assert.equal(vector.clamp(1, 10, 2), 2);
        });

        it('clamp(1,10,-12) returns 1',() => {
        assert.equal(vector.clamp(1, 10, -12), 1);
        });
    });

    describe('lerp()',() => {
        it('lerp(1,10,2) returns 19',() => {
        assert.equal(vector.lerp(1, 10, 2), 19);
        });

        it('lerp(1,10,-12) returns -107',() => {
        assert.equal(vector.lerp(1, 10, -12), -107);
        });
    });

    describe('distance()',() => {
        it('distance({ angle: 5, radius: 50 },{ angle: 10, radius: 100 }) returns 98.30248290540649',() => {
        assert.equal(vector.distance({ angle: 5, radius: 50 }, { angle: 10, radius: 100 }), 98.30248290540649);
        });
    });

    describe('toVector()',() => {
        it('toVector({ angle: 5, radius: 50 },{ angle: 10, radius: 100 }) returns {x: 14.183109273161312, y: -47.946213733156924}',() => {
        assert.equal(vector.toVector({ angle: 5, radius: 50 }, { angle: 10, radius: 100 }).x, 14.183109273161312);
        assert.equal(vector.toVector({ angle: 5, radius: 50 }, { angle: 10, radius: 100 }).y, -47.946213733156924);
        });
    });

    describe('distance',() => {
        it('distance({ angle: 5, radius: 50 },{ angle: -10, radius: 100 }) returns 141.76346189546945',() => {
        assert.equal(vector.distance({ angle: 5, radius: 50 }, { angle: -10, radius: 100 }), 141.76346189546945);
        });
    });

    describe('normalize',() => {
        it('normalize({ x: 5, y: 50 }) returns {x: 0.09950371902099892,y: 0.9950371902099892}'),() => {
        assert.equal(vector.normalize({ x: 5, y: 50 }).x, 0.09950371902099892);
        assert.equal(vector.normalize({ x: 5, y: 50 }).y, 0.9950371902099892);
        };
    });

    describe('dot',() => {
        it('dot({ x: 5, y: 50 },{ x: 10, y: 100 }) returns 5050',() => {
        assert.equal(vector.dot({ x: 5, y: 50 }, { x: 10, y: 100 }), 5050);
        });
    });

    describe('add',() => {
        it('add({ x: 5, y: 50 },{ x: 10, y: 100 }) returns {x: 15,y: 150}',() => {
        assert.equal(vector.add({ x: 5, y: 50 }, { x: 10, y: 100 }).x, 15);
        assert.equal(vector.add({ x: 5, y: 50 }, { x: 10, y: 100 }).y, 150);
        });
    });

    describe('subtract',() => {
        it('subtract({ x: 5, y: 50 },{ x: 10, y: 100 }) returns {x: -5,y: -50}',() => {
        assert.equal(vector.subtract({ x: 5, y: 50 }, { x: 10, y: 100 }).x, -5);
        assert.equal(vector.subtract({ x: 5, y: 50 }, { x: 10, y: 100 }).y, -50);
        });
    });
});