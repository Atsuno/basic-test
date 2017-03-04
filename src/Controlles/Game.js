export default class Game {
  static chaneNameToKebabCase(hero) {
    return hero.getName().toLowerCase().split(' ').filter(item => item.length).join('-')
  }

  static countHeroWeak(hero) {
    return hero.isWeak().filter(item => item).length
  }


  static attackAllAndCountAlive(hero, damage) {
    const heroWeak = hero.isWeak()
    const attack = hero.getDamage()
    let myDamage = damage
    myDamage = attack < 0 || attack === Infinity || attack === attack.toString() ? 0 : attack

    return hero.getHp().map((hp, index) => heroWeak[index] === false ? hp - myDamage : hp - (myDamage * 2))
      .filter(hp => hp > 0).length
  }

  static attackAllAndCountTotalDamage(heros, damage) {
    const heroWeak = heros.isWeak()
    const attack = heros.getDamage()
    let myDamage = damage
    myDamage = attack < 0 || attack === Infinity || attack === attack.toString() ? 0 : attack

    const totalDamage = heros.getHp().reduce((pre, _, index) => (pre += (heroWeak[index] === false ? myDamage : myDamage * 2)), 0)

    const sumHp = heros.getHp().map((hp, index) => heroWeak[index] === false ? (hp - myDamage) : hp - (myDamage * 2)).filter(item => item < 0)
    const totalHp = sumHp.reduce((pre, item) => (pre += item), 0)

    return totalDamage + totalHp
  }
}
