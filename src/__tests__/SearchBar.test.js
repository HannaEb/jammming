import SearchBar from '../Components/SearchBar/SearchBar.js';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('SearchBar', () => {

    it('matches the snapshot', () => {
        const tree = renderer.create(<SearchBar />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe ('handleTermChange', () => {
        it('updates the state', () => {
            const wrapper = shallow(<SearchBar />);
            const input = wrapper.find('input');
            input.simulate('change', { target: { value: 'New Search'} });
            expect(wrapper.state().term).toEqual('New Search');
        })
    })
});
