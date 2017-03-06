export default class Game {
  static changeNameToKebabCase(hero) {
    return hero.getName().toLowerCase().split(' ').filter(item => item.length).join('-')
  }

  static countHeroWeak(heros) {
    return heros.filter(heroWeak => heroWeak.isWeak()).length
  }


  static attackAllAndCountAlive(hero, damage) {
    if (damage < 0 || damage === Infinity || damage === damage.toString()) {
      throw new Error('invalid damage - should be number and more than 0')
    }
    return hero.map((heroList, index) => heroList.isWeak(index) === false ? heroList.getHp() - damage : heroList.getHp() - (damage * 2))
      .filter(alive => alive > 0).length
  }

  static attackAllAndCountTotalDamage(heros, damage) {
    if (damage < 0 || damage === Infinity || damage === damage.toString()) {
      throw new Error('invalid damage - should be number and more than 0')
    }
    const sumDamage = heros.map(attack => {
      const hp = attack.getHp()
      if (attack.isWeak()) {
        return damage * 2 < hp ? damage * 2 : hp
      }
      return damage < hp ? damage : hp
    })

    return sumDamage.reduce((pve, sum) => pve + sum, 0)
  }
}
