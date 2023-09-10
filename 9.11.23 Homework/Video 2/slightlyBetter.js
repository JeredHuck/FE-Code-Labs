 const createPlayer = (name, hp, mp, items) => {
  return {
    name,
    hp,
    mp,
    items,
  };
 };

 const hanSolo = createPlayer('Han Solo', 100, 10, ['Blaster']);
 console.log(hanSolo);

 const darthVader = createPlayer('Darth Vader', 200, 500, ['Saber']);
 console.log(darthVader);