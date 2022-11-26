interface CircleAvatarProps {
	imageUrl: string;
}

export default function CircleAvatar({ imageUrl }: CircleAvatarProps) {
	return (
		<div className="border-[1px] p-[3px] border-green-500 rounded-full">
			<img
				src={imageUrl}
				width="60"
				height="60"
				className="object-cover aspect-square rounded-full"
				alt="Profile avatar"
			/>
		</div>
	);
}
