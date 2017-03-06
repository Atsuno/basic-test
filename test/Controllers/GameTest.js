/* eslint-disable prefer-arrow-callback */

import { describe, it, beforeEach, afterEach } from 'mocha'
import { expect } from 'chai'
import sinon from 'sinon'
import Hero from '../../src/Models/Hero'
import Game from '../../src/Controllers/Game'

describe('Game', function () {
  let sandbox

  beforeEach(function () {
    sandbox = sinon.sandbox.create()
    this.sinon = sandbox
  })

  afterEach(function () {
    sandbox.restore()
  })

  describe('changeNameToKebabCase()', function () {
    it('should be New Hero "myHero" is myhero ', function () {
      const stubGetName = this.sinon.stub(Hero.prototype, 'getName').returns('myHero')

      return expect(Game.changeNameToKebabCase(new Hero()))
        .to.be.equal('myhero')
        .and.satisfy(() => (
          sinon.assert.calledOnce(stubGetName)
        ) == null)
    })

    it('should be New Hero "my second hero" is my-second-hero ', function () {
      const stubGetName = this.sinon.stub(Hero.prototype, 'getName').returns('my second hero')

      return expect(Game.changeNameToKebabCase(new Hero()))
        .to.be.equal('my-second-hero')
        .and.satisfy(() => (
          sinon.assert.calledOnce(stubGetName)
        ) == null)
    })

    it('should be New Hero " my third hero " is my-third-hero', function () {
      const stubGetName = this.sinon.stub(Hero.prototype, 'getName').returns(' my third hero ')

      return expect(Game.changeNameToKebabCase(new Hero()))
        .to.be.equal('my-third-hero')
        .and.satisfy(() => (
          sinon.assert.calledOnce(stubGetName)
        ) == null)
    })

    it('should be New Hero empty is empty', function () {
      const stubGetName = this.sinon.stub(Hero.prototype, 'getName').returns('    ')

      return expect(Game.changeNameToKebabCase(new Hero()))
        .to.be.equal('')
        .and.satisfy(() => (
          sinon.assert.calledOnce(stubGetName)
        ) == null)
    })
  })
  describe('countHeroWeak()', function () {
    it('should be hero weak 1 from 1', function () {
      const stubIsWeak = this.sinon.stub(Hero.prototype, 'isWeak')
        .returns(true)

      return expect(Game.countHeroWeak([new Hero()]))
        .to.have.length.equal(1)
        .and.satisfy(() => (
          sinon.assert.calledOnce(stubIsWeak)
        ) == null)
    })

    it('should be hero Weak 0 from 1 ', function () {
      const stubIsWeak = this.sinon.stub(Hero.prototype, 'isWeak').returns(false)

      return expect(Game.countHeroWeak([new Hero()]))
        .to.have.length.equal(0)
        .and.satisfy(() => (
          sinon.assert.calledOnce(stubIsWeak)
        ) == null)
    })

    it('should be hero Weak 1 from 3 ', function () {
      const stubGetWeak = this.sinon.stub(Hero.prototype, 'getHp')
      const stubIsWeak = this.sinon.stub(Hero.prototype, 'isWeak')

      stubGetWeak.onFirstCall().returns(600)
      stubIsWeak.onFirstCall().returns(false)

      stubGetWeak.onSecondCall().returns(600)
      stubIsWeak.onSecondCall().returns(true)

      stubGetWeak.onThirdCall().returns(400)
      stubGetWeak.onThirdCall().returns(false)

      return expect(Game.countHeroWeak([new Hero(), new Hero(), new Hero()]))
        .to.have.length.equal(1)
        .and.satisfy(() => (
          sinon.assert.calledThrice(stubIsWeak)
        ) == null)
    })
  })

  describe('attackAllAndCountAlive()', function () {
    it('should be hero alive 1 from 3', function () {
      const stubGetHp = this.sinon.stub(Hero.prototype, 'getHp')
      const stubIsWeak = this.sinon.stub(Hero.prototype, 'isWeak')

      stubGetHp.onFirstCall().returns(600)
      stubIsWeak.onFirstCall().returns(false)

      stubGetHp.onSecondCall().returns(600)
      stubIsWeak.onSecondCall().returns(true)

      stubGetHp.onThirdCall().returns(400)
      stubIsWeak.onThirdCall().returns(false)

      return expect(Game.attackAllAndCountAlive([new Hero(), new Hero(), new Hero()], 500))
        .to.equal(1)
        .and.satisfy(() => (
          sinon.assert.calledThrice(stubGetHp),
            sinon.assert.calledThrice(stubIsWeak)
        ) == null)
    })

    it('should be throw damage < 0', function () {
      return expect(function () {
        Game.attackAllAndCountAlive([new Hero(), new Hero(), new Hero()], -1)
      })
        .to.throw(/invalid damage/)
    })
  })

  describe('attackAllAndCountTotalDamage()', function () {
    it('should be totals damage is 1500', function () {
      const stubGetHp = this.sinon.stub(Hero.prototype, 'getHp')
      const stubIsWeak = this.sinon.stub(Hero.prototype, 'isWeak')

      stubGetHp.onFirstCall().returns(600)
      stubIsWeak.onFirstCall().returns(false)

      stubGetHp.onSecondCall().returns(600)
      stubIsWeak.onSecondCall().returns(true)

      stubGetHp.onThirdCall().returns(400)
      stubIsWeak.onThirdCall().returns(false)

      return expect(Game.attackAllAndCountTotalDamage([new Hero(), new Hero(), new Hero()], 500))
        .to.be.equal(1500)
        .and.satisfy(() => (
          sinon.assert.calledThrice(stubGetHp),
            sinon.assert.calledThrice(stubIsWeak)
        ) == null)
    })

    it('should be totals damage is 800', function () {
      const stubGetHp = this.sinon.stub(Hero.prototype, 'getHp')
      const stubIsWeak = this.sinon.stub(Hero.prototype, 'isWeak')

      stubGetHp.onFirstCall().returns(600)
      stubIsWeak.onFirstCall().returns(false)

      stubGetHp.onSecondCall().returns(600)
      stubIsWeak.onSecondCall().returns(true)

      stubGetHp.onThirdCall().returns(400)
      stubIsWeak.onThirdCall().returns(false)

      return expect(Game.attackAllAndCountTotalDamage([new Hero(), new Hero(), new Hero()], 200))
        .to.be.equal(800)
        .and.satisfy(() => (
          sinon.assert.calledThrice(stubGetHp),
            sinon.assert.calledThrice(stubIsWeak)
        ) == null)
    })

    it('should be totals damage is 1500', function () {
      const stubGetHp = this.sinon.stub(Hero.prototype, 'getHp')
      const stubIsWeak = this.sinon.stub(Hero.prototype, 'isWeak')

      stubGetHp.onFirstCall().returns(600)
      stubIsWeak.onFirstCall().returns(false)

      stubGetHp.onSecondCall().returns(600)
      stubIsWeak.onSecondCall().returns(true)

      stubGetHp.onThirdCall().returns(400)
      stubIsWeak.onThirdCall().returns(false)

      return expect(Game.attackAllAndCountTotalDamage([new Hero(), new Hero(), new Hero()], 2000))
        .to.be.equal(1600)
        .and.satisfy(() => (
          sinon.assert.calledThrice(stubGetHp),
            sinon.assert.calledThrice(stubIsWeak)
        ) == null)
    })

    it('should be totals damage is 1500', function () {
      const stubGetHp = this.sinon.stub(Hero.prototype, 'getHp')
      const stubIsWeak = this.sinon.stub(Hero.prototype, 'isWeak')

      stubGetHp.onFirstCall().returns(600)
      stubIsWeak.onFirstCall().returns(false)

      stubGetHp.onSecondCall().returns(600)
      stubIsWeak.onSecondCall().returns(true)

      stubGetHp.onThirdCall().returns(400)
      stubIsWeak.onThirdCall().returns(false)

      return expect(Game.attackAllAndCountTotalDamage([new Hero(), new Hero(), new Hero()], 0))
        .to.be.equal(0)
        .and.satisfy(() => (
          sinon.assert.calledThrice(stubGetHp),
            sinon.assert.calledThrice(stubIsWeak)
        ) == null)
    })

    it('should be throw damage < 0', function () {
      return expect(function () {
        Game.attackAllAndCountTotalDamage([new Hero(), new Hero(), new Hero()], -1)
      })
        .to.throw(/invalid damage/)
    })
  })
})

