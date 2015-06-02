'use strict'

var test = require('tape')
var expandYear = require('./')

test(function (t) {
  t.equal(expandYear(15), 2015)
  t.equal(expandYear(1), 2001)
  t.equal(expandYear(0), 2000)
  t.equal(expandYear(95, new Date('1999-06-01')), 1995)

  // strings not documented but supported
  t.equal(expandYear('2'), 2002)
  t.equal(expandYear('02'), 2002)

  t.notOk(expandYear(''), undefined)
  t.notOk(expandYear('2.5'))

  t.end()
})
