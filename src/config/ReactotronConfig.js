import Reactotron, {
  openInEditor,
  asyncStorage,
  networking,
  trackGlobalErrors
} from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

const reactotron = Reactotron.configure({
  name: 'Ginjabox'
})
  .use(networking())
  .use(reactotronRedux())
  .use(asyncStorage())
  .use(openInEditor())
  .use(trackGlobalErrors())
  .useReactNative({})
  .connect(); // let's connect!

reactotron.clear();

export default reactotron;
