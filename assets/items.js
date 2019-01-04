Game.ItemRepository = new Game.Repository('items', Game.Item);

Game.ItemRepository.define('apple', {
    name: 'яблоко',
    character: '%',
    foreground: 'red',
    foodValue: 50,
    mixins: [Game.ItemMixins.Edible]
});

Game.ItemRepository.define('melon', {
    name: 'дыня',
    character: '%',
    foreground: 'lightGreen',
    foodValue: 35,
    consumptions: 4,
    mixins: [Game.ItemMixins.Edible]
});

Game.ItemRepository.define('pumpkin', {
    name: 'тыква',
    character: '%',
    foreground: 'orange',
    foodValue: 50,
    attackValue: 2,
    defenseValue: 2,
    wearable: true,
    wieldable: true,
    mixins: [Game.ItemMixins.Edible, Game.ItemMixins.Equippable]
});

Game.ItemRepository.define('corpse', {
    name: 'труп',
    character: '%',
    foodValue: 75,
    consumptions: 1,
    mixins: [Game.ItemMixins.Edible]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define('rock', {
    name: 'камень',
    character: '*',
    foreground: 'white'
});

// Weapons
Game.ItemRepository.define('dagger', {
    name: 'кинжал',
    character: ')',
    foreground: 'gray',
    attackValue: 5,
    wieldable: true,
    mixins: [Game.ItemMixins.Equippable]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define('sword', {
    name: 'меч',
    character: ')',
    foreground: 'white',
    attackValue: 10,
    wieldable: true,
    mixins: [Game.ItemMixins.Equippable]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define('staff', {
    name: 'посох',
    character: ')',
    foreground: 'yellow',
    attackValue: 5,
    defenseValue: 3,
    wieldable: true,
    mixins: [Game.ItemMixins.Equippable]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define('pickaxe', {
    name: 'кирка',
    character: 'т',
    foreground: 'lightblue',
    attackValue: 3,
    defenseValue: 1,
    digValue: 2,
    wieldable: true,
    mixins: [Game.ItemMixins.Equippable, Game.ItemMixins.Diggeble]
}, {
    disableRandomCreation: true
});


// Wearables
Game.ItemRepository.define('tunic', {
    name: 'туника',
    character: '[',
    foreground: 'green',
    defenseValue: 2,
    wearable: true,
    mixins: [Game.ItemMixins.Equippable]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define('chainmail', {
    name: 'кольчуга',
    character: '[',
    foreground: 'white',
    defenseValue: 4,
    wearable: true,
    mixins: [Game.ItemMixins.Equippable]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define('platemail', {
    name: 'латы',
    character: '[',
    foreground: 'aliceblue',
    defenseValue: 6,
    wearable: true,
    mixins: [Game.ItemMixins.Equippable]
}, {
    disableRandomCreation: true
});
