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
})
