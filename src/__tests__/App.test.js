import App from '../Components/App/App.js';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

jest.mock('../Components/SearchBar/SearchBar.js', () => 'SearchBar');
jest.mock('../Components/SearchResults/SearchResults.js', () => 'SearchResults');
jest.mock('../Components/Playlist/Playlist.js', () => 'Playlist');

const wrapper = shallow(<App />);
const instance = wrapper.instance();

describe('App', () => {
    it('matches the snapshot', () => {
        const tree = renderer.create(<App />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('addTrack', () => {
        const track = 'New Track';

        it('does not update the state if track is already on playlist', () => {
            instance.addTrack(track);
            instance.addTrack(track);
            expect(wrapper.state().playlistTracks).toHaveLength(1);
        });

        it('updates the state if track is not yet on playlist', () => {
            instance.addTrack(track);
            expect(wrapper.state().playlistTracks).toContain('New Track');
        });
    });

    describe('removeTrack', () => {
        it('updates the state', () => {
            const track = 'New Track';
            instance.addTrack(track);
            instance.removeTrack(track);
            expect(wrapper.state().playlistTracks).not.toContain('New Track');
        });
    });

    describe('updatePlaylistName', () => {
        it('updates the state', () => {
            const name = 'New Name';
            instance.updatePlaylistName(name);
            expect(wrapper.state().playlistName).toEqual('New Name')
        });
    });
});
