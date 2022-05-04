import MenuBar from "../components/organisms/MenuBar/MenuBar";
import Toolbars from "../components/organisms/Toolbars/Toolbars";
import { Wrapper } from "./App.styles";

const App: React.FC = () => {
  return (
    <Wrapper>
      <MenuBar />
      <Toolbars />
    </Wrapper>
  )
}


export default App;