import Jasmine from 'jasmine'

let jasmine = new Jasmine()
jasmine.loadConfigFile('tests/support/jasmine.json')
jasmine.execute()