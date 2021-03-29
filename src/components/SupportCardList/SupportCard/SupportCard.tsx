import React, { useContext } from "react";
import { UriContext } from "../../../common";

export type SupportCard = {
  uuid: number
  cardName: string,
  secondName: string,
  rareDegree: string,
  cardImage: string,
  cardType: string,
}

type Props = SupportCard & {
  onClickItem: (uuid: number) => void
}

const SupportCardComponent: React.FC<Props> = (props: Props) => {
  const { uuid, cardName, secondName, cardImage } = props;
  const uri = useContext(UriContext);
  console.log(uri)
  return (
    <img onClick={() => props.onClickItem(uuid)} alt={`${cardName}-${secondName}`} height="150px" src={`${uri}/images/${cardImage}`} />
  );
};

export default SupportCardComponent;
