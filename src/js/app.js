export default function showSpecialAttack(attack) {
  const arr = [];

  attack.special.forEach((item) => {
    const {
      id,
      name,
      icon,
      description = 'Описание недоступно',
    } = item;

    arr.push({
      id,
      name,
      icon,
      description,
    });
  });
  return arr;
}
