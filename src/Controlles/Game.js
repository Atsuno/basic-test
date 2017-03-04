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
    return hero.getHp().map((hp, index) => heroWeak[index] === false ? hp - myDamage : hp - (myDamage * 2)).filter(hp => hp > 0).length
  }
}
