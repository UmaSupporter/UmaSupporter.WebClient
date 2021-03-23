import { Route } from "react-router"
import Play from "./Play"

const PlayPageRouter: React.FC = () => {
  return <Route exact path="/play" component={Play}/>
}

export default PlayPageRouter
