export default class Game {
  static chaneNameToKebabCase(hero) {
    const newHero = hero.getName().toLowerCase().split(' ')
    return newHero.filter(item => item.length).join('-')
  }
}
