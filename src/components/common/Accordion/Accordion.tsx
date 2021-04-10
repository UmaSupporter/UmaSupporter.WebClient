type Props = {
  children: JSX.Element;
};
const Accordion: React.FC<Props> = (props: Props) => {
  return <div>{props.children}</div>;
};

export default Accordion;
