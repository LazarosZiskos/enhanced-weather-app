import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  title: string;
};

export default function Card({ children, title }: Props) {
  return (
    <div className="p-4 bg-zinc-900 rounded-xl shadow-md flex flex-col gap-4">
      <h2 className="text-2xl font-semibold">{title}</h2>
      {children}
    </div>
  );
}
