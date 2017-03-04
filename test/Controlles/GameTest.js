/* eslint-disable prefer-arrow-callback */

import { describe, it, beforeEach, afterEach } from 'mocha'
import { expect } from 'chai'
import sinon from 'sinon'
import Hero from '../../src/Models/Hero'
import Game from '../../src/Controlles/Game'

describe('Game', function () {
  let sandbox

  beforeEach(function () {
    sandbox = sinon.sandbox.create()
    this.sinon = sandbox
  })

  afterEach(function () {
    sandbox.restore()
  })

  describe('chaneNameToKebabCase()', function () {
    it('should be New Hero myHero = myhero ', function () {
      this.sinon.stub(Hero.prototype, 'getName').returns('myHero')

      return expect(Game.chaneNameToKebabCase(new Hero()))
        .to.be.equal('myhero')
    })
    it('should be New Hero my second hero = my-second-hero ', function () {
      this.sinon.stub(Hero.prototype, 'getName').returns('my second hero')

      return expect(Game.chaneNameToKebabCase(new Hero()))
        .to.be.equal('my-second-hero')
    })
    it('should be New Hero mY tHirD heRo = my-third-hero ', function () {
      this.sinon.stub(Hero.prototype, 'getName').returns('  mY tHirD heRo  ')

      return expect(Game.chaneNameToKebabCase(new Hero()))
        .to.be.equal('my-third-hero')
    })
    it('should be New  ', function () {
      this.sinon.stub(Hero.prototype, 'getName').returns('')

      return expect(Game.chaneNameToKebabCase(new Hero()))
        .to.be.equal('')
    })
  })
  describe('countHeroWeak()', function () {
    it('should be status Weak false = 2 ', function () {
      this.sinon.stub(Hero.prototype, 'isWeak').returns([false, true, true])

      return expect(Game.countHeroWeak(new Hero()))
        .to.be.equal(2)
    })
    it('should be status Weak false = 2 ', function () {
      this.sinon.stub(Hero.prototype, 'isWeak').returns([true, true, true])

      return expect(Game.countHeroWeak(new Hero()))
        .to.be.equal(3)
    })
    it('should be status Weak false = 2 ', function () {
      this.sinon.stub(Hero.prototype, 'isWeak').returns([true, false, false])

      return expect(Game.countHeroWeak(new Hero()))
        .to.be.equal(1)
    })
  })
  describe('attackAllAndCountAlive()', function () {
    it('should be Hero Alive = 1', function () {
      this.sinon.stub(Hero.prototype, 'getHp').returns([500, 500, 200])
      this.sinon.stub(Hero.prototype, 'isWeak').returns([false, true, false])
      this.sinon.stub(Hero.prototype, 'getDamage').returns(300)

      return expect(Game.attackAllAndCountAlive(new Hero()))
        .to.be.equal(1)
    })
  })
  describe('attackAllAndCountTotalDamage()', function () {
    it('should be Total Damage = 1000', function () {
      this.sinon.stub(Hero.prototype, 'getHp').returns([500, 500, 200])
      this.sinon.stub(Hero.prototype, 'isWeak').returns([false, true, false])
      this.sinon.stub(Hero.prototype, 'getDamage').returns(300)

      return expect(Game.attackAllAndCountTotalDamage(new Hero()))
        .to.be.equal(1000)
    })
    it('should be Total Damage = 1200', function () {
      this.sinon.stub(Hero.prototype, 'getHp').returns([500, 500, 200])
      this.sinon.stub(Hero.prototype, 'isWeak').returns([true, true, true])
      this.sinon.stub(Hero.prototype, 'getDamage').returns(300)

      return expect(Game.attackAllAndCountTotalDamage(new Hero()))
        .to.be.equal(1200)
    })
    it('should be Total Damage = 1200', function () {
      this.sinon.stub(Hero.prototype, 'getHp').returns([500, 500, 200])
      this.sinon.stub(Hero.prototype, 'isWeak').returns([true, true, true])
      this.sinon.stub(Hero.prototype, 'getDamage').returns(-1)

      return expect(Game.attackAllAndCountTotalDamage(new Hero()))
        .to.be.equal(0)
    })
  })
})
