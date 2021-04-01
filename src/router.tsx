import { Switch } from "react-router"
import MainPageRouter from "./pages/Main/router"
import PlayPageRouter from "./pages/Play/router"

const MainRouter: React.FC = () => {
  return (
    <>
      <Switch>
        <MainPageRouter />
        <PlayPageRouter />
      </Switch>
    </>
  )
}

export default MainRouter
