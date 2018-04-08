import { Icon } from '../../components'

describe('<Icon />', () => {
  const props = {
    name: 'plus'
  }

  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Icon {...props} />)
  })

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
  it('should have the right class name', () => {
    expect(wrapper.props().className).toEqual('fa fa-plus')
  })
})