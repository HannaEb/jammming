import App from '../Components/App/App.js';
import renderer from 'react-test-renderer';

jest.mock('../Components/SearchBar/SearchBar.js', () => 'SearchBar');
jest.mock('../Components/SearchResults/SearchResults.js', () => 'SearchResults');
jest.mock('../Components/Playlist/Playlist.js', () => 'Playlist');

describe('App', () => {
    it('matches the snapshot', () => {
        const tree = renderer.create(<App />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
