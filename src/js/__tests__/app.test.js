import orderByProps from '../app';

const obj = {
    name: 'мечник', 
    health: 10, 
    level: 2, 
    attack: 80, 
    defence: 40,
};

test('сортировка name, level', () => {
    const result = [
        { key: 'name', value: 'мечник' },
        { key: 'level', value: 2 },
        { key: 'attack', value: 80 },
        { key: 'defence', value: 40 },
        { key: 'health', value: 10 },
    ];
    expect(orderByProps(obj, ['name', 'level'])).toEqual(result);
});

test('сортировка attack, defence, health', () => {
    const result = [
        { key: 'attack', value: 80 },
        { key: 'defence', value: 40 },
        { key: 'health', value: 10 },
        { key: 'level', value: 2 },
        { key: 'name', value: 'мечник' },                
    ];
    expect(orderByProps(obj, ['attack', 'defence', 'healt'])).toEqual(result);
});

test('сортировка', () => {
    const result = [
        { key: 'attack', value: 80 },
        { key: 'defence', value: 40 },
        { key: 'health', value: 10 },
        { key: 'level', value: 2 },
        { key: 'name', value: 'мечник' },
    ];
    expect(orderByProps(obj)).toEqual(result);
});
