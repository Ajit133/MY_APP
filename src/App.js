import Emoji from "./Composition/emoji";
import Text from "./Composition/Test";
import Bracket from "./Composition/Bracket";

function App() {
  return <Emoji>
    {({ addEmoji }) => <Text addEmoji={addEmoji}/>}
  </Emoji>;
}

export default App;

// import Form from "./components/Form";
// const quentites = [1,2,3];
// import ClockList from "./components/ClockList";
{/* <ClockList quentites={quentites} /> */}