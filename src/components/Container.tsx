import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
	return <div className="bg-white p-5 rounded-lg drop-shadow">{children}</div>;
}
