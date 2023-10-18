interface WrapperProps {
  children: React.ReactNode;
}

function RootLayoutWrapper({children}: WrapperProps) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}

export default RootLayoutWrapper;
