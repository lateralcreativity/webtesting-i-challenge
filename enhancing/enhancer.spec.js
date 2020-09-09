const enhancer = require('./enhancer.js');
// test away!

describe('repair item', () => {
    it('can repair an item', () => {
        const item = {
            durability: 0
        }

        const fixed = enhancer.repair(item);
        expect(fixed.durability).toEqual(item.durability + 100);
    });
});

describe('enhance item', () => {
    it('can enhance an item', () => {
        const item = { enhancement: 0 }

        const upgraded = enhancer.success(item);
        expect(upgraded.enhancement).toEqual(item.enhancement + 1);
    });

    it('does not enhance above 20', () => {
        const item = { enhancement: 20 };
        const upgraded = enhancer.success(item);
        expect(upgraded.enhancement).toEqual(20);
    });
});

describe('lower item', () => {
    it('can lower an item with < 15 enhancement', () => {
        const item = { enhancement: 14, durability: 100 }

        const lowered = enhancer.fail(item);
        expect(lowered.durability).toEqual(item.durability - 5);
    });
    it('can lower an item with 15 enhancement', () => {
        const item = { enhancement: 15, durability: 100 }
        const lowered = enhancer.fail(item);
        expect(lowered.durability).toEqual(item.durability - 10);
    });
    it('can lower an item with > 16 enhancement', () => {
        const item = { enhancement: 17 };
        const lowered = enhancer.fail(item);
        expect(lowered.enhancement).toEqual(item.enhancement - 1);
        expect(lowered.durability).toEqual(item.durability - 10);
    });
});