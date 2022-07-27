import UseEffect01 from "./UseEffect01";
import UseEffectAxios from "./UseEffectAxios";
import UseEffectFetch from "./UseEffectFetch";
import UseEffectFetchError from "./UseEffectFetchError";
import UseEffectFetchTxt from "./UseEffectFetchTxt";
import Deneme from "./Deneme";

function App() {
  return (
    <div className="App">
      <Deneme />
      <UseEffect01 />
      {/* <UseEffectFetch /> */}
      <UseEffectFetchError />
      <UseEffectAxios />
      <UseEffectFetchTxt />
    </div>
  );
}
export default App;
