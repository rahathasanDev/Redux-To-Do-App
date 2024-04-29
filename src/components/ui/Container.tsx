import { ReactNode } from "react";

type TContainerProps = {
children : ReactNode;
}
const container = ({children}:TContainerProps) => {
  return (
    <div className="h-screen w-full max-w-7xl mx-auto bg-red-500">
      {
        children
      }
    </div>
  );
};

export default container;