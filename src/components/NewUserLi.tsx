import Image from "src/assets/profile_pictures/large/xuixian_98-large.jpg";
import Divider from "src/components/Divider";

export default function NewUserLi() {
	return (
		<div>
			<Divider />
			<div className="flex gap-4 my-4">
				<img
					src={Image}
					width={60}
					height={60}
					className="rounded-md object-cover aspect-square h-full"
				/>
				<div className="flex flex-col gap-2">
					<div className="txt-subtitle text-secondaryYellow uppercase text-secondary">
						INFLUENCER
					</div>
					<div className="txt-caption text-greyContent">@gella_97</div>
					<div className="mt-auto txt-caption">Online 3 min ago</div>
				</div>
			</div>
		</div>
	);
}
