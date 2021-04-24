import Playlist from '../Components/Playlist/Playlist.js';
import renderer from 'react-test-renderer';

jest.mock('../Components/TrackList/TrackList.js', () => 'TrackList');

describe('Playlist', () => {
    it('matches the snapshot', () => {
        const tree = renderer.create(<Playlist />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
