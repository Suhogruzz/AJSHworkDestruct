import specialAttackFunction from '../specialAttack';

test.each([
  {
    character: {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
      special: [
        {
          id: 8,
          name: 'Двойной выстрел',
          icon: 'http://...',
          description: 'Двойной выстрел наносит двойной урон',
        },
        {
          id: 9,
          name: 'Нокаутирующий удар',
          icon: 'http://...',
        },
      ],
    },
    expected: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        description: 'Описание недоступно',
      },
    ],
  },
])('one special attack is unavailable', ({ character, expected }) => {
  expect(specialAttackFunction(character)).toEqual(expected);
});

test.each([
  {
    character: {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
      special: [],
    },
    expected: [],
  },
])('no special attacks', ({ character, expected }) => {
  expect(specialAttackFunction(character)).toEqual(expected);
});
