import { ReactNode } from "react";

export function BottomNavItem({ children }: { children: ReactNode }) {
	return <button className="flex justify-center p-3">{children}</button>;
}
