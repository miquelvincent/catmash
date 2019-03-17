import Adapter from 'enzyme-adapter-react-16'
import chai from 'chai'
import dirtyChai from 'dirty-chai'
import sinonChai from 'sinon-chai'
import { configure as configureEnzyme } from 'enzyme'
import createChaiEnzyme from 'chai-enzyme'
import createChaiJestDiff from 'chai-jest-diff'

chai
  .use(dirtyChai)
  .use(createChaiJestDiff())
  .use(createChaiEnzyme())
  .use(sinonChai)

configureEnzyme({ adapter: new Adapter() })
