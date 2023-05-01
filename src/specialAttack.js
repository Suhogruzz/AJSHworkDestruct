export default function specialAttackFunction(obj) {
  const { special } = obj;
  const allSpecials = [];
  for (const {
    id, name, icon, description = 'Описание недоступно',
  } of special) {
    allSpecials.push({
      id,
      name,
      icon,
      description,
    });
  }

  return allSpecials;
}
