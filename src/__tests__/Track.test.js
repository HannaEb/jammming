import Track from '../Components/Track/Track.js';
import renderer from 'react-test-renderer';

describe('Track', () => {
    it('matches the snapshot', () => {
        const track = {name: 'Name', artist: 'Artist', album: 'Album'}
        const tree = renderer.create(<Track track={track} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
