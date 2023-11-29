interface INotFoundProps {
  error?: Error;
}

function NotFound({error}: INotFoundProps) {
  return (
    <>
      <div>{error!.message}</div>
    </>
  );
}

export default NotFound;
