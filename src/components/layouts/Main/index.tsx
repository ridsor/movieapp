import Header from "./Header";

type Props = {
  children: React.ReactNode;
};

export default function Main({ children }: Props) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
