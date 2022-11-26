import { ButtonHTMLAttributes, ReactNode } from "react";
import Container from "src/components/Container";

function Menu({ children }: { children: ReactNode }) {
	return <Container>{children}</Container>;
}

function Title({ children }: { children: string }) {
	return <div className="txt-subtitle">{children}</div>;
}

function LoadMore(props: ButtonHTMLAttributes<HTMLButtonElement>) {
	return (
		<button {...props} className="btn-cta-quarternary w-full">
			Load more
		</button>
	);
}

Menu.Title = Title;
Menu.LoadMore = LoadMore;

export default Menu;
