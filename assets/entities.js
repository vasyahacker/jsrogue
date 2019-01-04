// Player template
Game.PlayerTemplate = {
    name: 'человек (вы)',
    character: '@',
    foreground: 'white',
    maxHp: 40,
    attackValue: 10,
    sightRadius: 9,
    inventorySlots: 22,
    speed: 200,
    maxFullness:1000,
    mixins: [Game.EntityMixins.PlayerActor,
             Game.EntityMixins.Attacker,
             Game.EntityMixins.Destructible,
             Game.EntityMixins.InventoryHolder,
             Game.EntityMixins.FoodConsumer,
             Game.EntityMixins.Sight,
             Game.EntityMixins.MessageRecipient,
             Game.EntityMixins.CorpseDropper,
             Game.EntityMixins.LootDropper,
             Game.EntityMixins.Equipper,
             Game.EntityMixins.ExperienceGainer,
             Game.EntityMixins.PlayerStatGainer]
};

// Create our central entity repository
Game.EntityRepository = new Game.Repository('entities', Game.Entity);

// Game.EntityRepository.define('fungus', {
//     name: 'гриб',
//     character: 'г',
//     foreground: 'green',
//     maxHp: 10,
//     speed: 100,
//     mixins: [Game.EntityMixins.FungusActor, Game.EntityMixins.Destructible,
//              Game.EntityMixins.ExperienceGainer, Game.EntityMixins.RandomStatGainer]
// });

Game.EntityRepository.define('bat', {
    name: 'летучая мышь',
    character: 'm',
    foreground: 'white',
    maxHp: 5,
    attackValue: 4,
    speed: 360,
    mixins: [Game.EntityMixins.TaskActor, 
             Game.EntityMixins.Attacker,
             Game.EntityMixins.Destructible,
             Game.EntityMixins.CorpseDropper,
             Game.EntityMixins.ExperienceGainer,
             Game.EntityMixins.RandomStatGainer]
});

Game.EntityRepository.define('newt', {
    name: 'Тритон',
    character: ':',
    foreground: 'yellow',
    maxHp: 3,
    attackValue: 2,
    speed: 450,
    mixins: [Game.EntityMixins.TaskActor,
             Game.EntityMixins.Attacker,
             Game.EntityMixins.Destructible,
             Game.EntityMixins.CorpseDropper,
             Game.EntityMixins.ExperienceGainer,
             Game.EntityMixins.RandomStatGainer]
});

Game.EntityRepository.define('kobold', {
    name: 'кобольд',
    character: 'k',
    foreground: 'white',
    maxHp: 6,
    attackValue: 6,
    sightRadius: 9,
    speed: 720,
    tasks: ['hunt', 'wander'],
    mixins: [Game.EntityMixins.TaskActor,
             Game.EntityMixins.Sight,
             Game.EntityMixins.Attacker,
             Game.EntityMixins.Destructible,
             Game.EntityMixins.CorpseDropper,
             Game.EntityMixins.ExperienceGainer,
             Game.EntityMixins.RandomStatGainer]
});

Game.EntityRepository.define('giant zombie', {
    name: 'большой зомби', 
    character: 'Z',
    foreground: 'teal',
    maxHp: 30,
    attackValue: 8,
    defenseValue: 5,
    level: 5,
    sightRadius: 18,
    mixins: [Game.EntityMixins.GiantZombieActor,
             Game.EntityMixins.Sight,
             Game.EntityMixins.Attacker,
             Game.EntityMixins.Destructible,
             Game.EntityMixins.CorpseDropper,
             Game.EntityMixins.ExperienceGainer]
}, {
    disableRandomCreation: true
});

Game.EntityRepository.define('slime', {
    name: 'слизь',
    character: 's',
    foreground: 'lightGreen',
    maxHp: 10,
    attackValue: 5,
    sightRadius: 3,
    tasks: ['hunt', 'wander'],
    mixins: [Game.EntityMixins.TaskActor,
             Game.EntityMixins.Sight,
             Game.EntityMixins.Attacker,
             Game.EntityMixins.Destructible,
             Game.EntityMixins.CorpseDropper,
             Game.EntityMixins.ExperienceGainer,
             Game.EntityMixins.RandomStatGainer]
});