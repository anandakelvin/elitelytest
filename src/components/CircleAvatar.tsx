import { ImgHTMLAttributes } from "react";

export default function CircleAvatar(
	props: ImgHTMLAttributes<HTMLImageElement>
) {
	return (
		<img
			className="object-cover aspect-square h-full border-[1px] p-[3px] border-green-500 rounded-full"
			alt="Profile avatar"
			width="100"
			height="100"
			{...props}
		/>
	);
}
