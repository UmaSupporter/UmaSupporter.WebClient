import { UriContext } from "../../../common";
import React, { useContext } from "react"
import "./Hero.scss";

type Props = {
  name: string,
  secondName: string,
  rareDegree:string
  image: string,
}

const Hero: React.FC<Props> = (props: Props) => {
  const { name, image, secondName,rareDegree} = props;
  const uri = useContext(UriContext);

  return <div className={`Hero`} >
    <div className={`heroImage ${rareDegree}`}>
      <img src={`${uri}/images/${image}`} alt={`${name} - ${secondName}`} className={"heroImageContent"}/>
    </div>
    <div className={"heroLabels"}>
      <div className={"name heroLabel"}>{name}</div>
      <div className={"secondName heroLabel"}>{secondName}</div>
    </div>
  </div>
}
export default Hero
