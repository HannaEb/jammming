import SearchBar from '../Components/SearchBar/SearchBar.js';
import renderer from 'react-test-renderer';

describe('SearchBar', () => {
    it('matches the snapshot', () => {
        const tree = renderer.create(<SearchBar />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});