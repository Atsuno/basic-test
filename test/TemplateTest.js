 /* eslint-disable prefer-arrow-callback */

import { describe, it, beforeEach, afterEach } from 'mocha'
import { expect } from 'chai'
import sinon from 'sinon'

describe('Template', function () {

  let sandbox

  beforeEach(function () {
    sandbox = sinon.sandbox.create()
    this.sinon = sandbox
  })

  afterEach(function () {
    sandbox.restore()
  })

  describe('somfunction()', function () {
    it('should ...', function () {

      const stub = this.sinon.stub(Template.prototype, 'someFunction')
        .returns(true)

      return expect(Template.someFunction())
        .and.that.be.true
        .and.satisfy(() => (
          sinon.assert.calledOnce(stub)
        ) == null)
    })
  })
})
