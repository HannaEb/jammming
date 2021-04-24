import TrackList from '../Components/TrackList/TrackList.js';
import renderer from 'react-test-renderer';

jest.mock('../Components/Track/Track', () => 'Track');

describe('TrackList', () => {
    it('matches the snapshot', () => {
        const tracks = ['track1', 'track2', 'track3']
        const tree = renderer.create(<TrackList tracks={tracks} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
