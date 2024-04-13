interface Props {
  value: string;
}

export const Joke = ({value}: Props) => {
  return <div>
    <div>{`${value}`}</div>
  </div>
}