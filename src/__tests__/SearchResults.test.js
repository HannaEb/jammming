import SearchResults from '../Components/SearchResults/SearchResults.js';
import renderer from 'react-test-renderer';

jest.mock('../Components/TrackList/TrackList.js', () => 'TrackList');

describe('SearchResults', () => {
    it('matches the snapshot', () => {
        const tree = renderer.create(<SearchResults />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
