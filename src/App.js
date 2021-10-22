import Avatar from './lib/components/Avatar'
import Initials from './lib/components/Initials'
import Pixelcon from './lib/components/Pixelcon'
import Jdenticon from './lib/components/Jdenticon';

function App() {


  return (
    <div className="App">
        <Avatar />
        <Initials color="red" bg="#f48438" />
        <Pixelcon color="blue" />
        <Jdenticon seed="hallo" bg="green"/>
    </div>
  );
}

export default App;
