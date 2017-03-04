export default class Game {
  static chaneNameToKebabCase(hero) {
    return hero.getName().toLowerCase().split(' ').filter(item => item.length).join('-')
  }
  static countHeroWeak(hero) {
    return hero.isWeak().filter(item => !item).length
  }
}
