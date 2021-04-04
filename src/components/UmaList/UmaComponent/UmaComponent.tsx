import { Uma } from "../../../types";
import { UriContext } from "../../../common";
import React, { useContext } from "react";
import "./UmaComponent.scss";

type Props = {
  uma: Uma
  clickItem: (uuid: number) => void
}

const UmaComponent: React.FC<Props> = (props: Props) => {
  const {uuid,umaImage,umaName,secondName} = props.uma
  const uri = useContext(UriContext);
  return <div className={"UmaComponent"} onClick={() => props.clickItem(uuid)}>
    <img className={"umaComponentImage"} src={`${uri}/images/${umaImage}`} alt={`${umaName} ${secondName}`}/>
  </div>
}

export default UmaComponent;
