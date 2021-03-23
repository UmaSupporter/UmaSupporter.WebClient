import React from "react";

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
  return (
    <img onClick={() => props.onClickItem(uuid)} alt={`${cardName}-${secondName}`} height="150px" src={`http://localhost:5000/images/${cardImage}`} />
  );
};

export default SupportCardComponent;
