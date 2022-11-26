import Image from "src/assets/profile_pictures/large/xiuxian_98-large.jpg";
import Divider from "src/components/Divider";
// @ts-ignore
import { ReactComponent as VerifiedBadge } from "src/assets/svgs/verified-badge.svg";

export default function VerifiedUserLi() {
	return (
		<div>
			<Divider />
			<div className="flex gap-4 my-4">
				<img
					src={Image}
					width={100}
					height={100}
					className="rounded-md object-cover aspect-square h-full"
				/>
				<div className="flex flex-col gap-2 h-full">
					<div className="flex gap-2">
						<div className="txt-subtitle text-secondary">@flight4myway</div>
						<VerifiedBadge />
					</div>
					<div className="mt-auto txt-caption text-greyContent overflow-clip">
						Lorem ipsum dolor sit amet consectetur. Eu ipsum id egestas viverra
						vitae posuere netus. Nec suspendisse et sit dictum dui aliquet nulla
						quam. Tincidunt ut.
					</div>
				</div>
			</div>
		</div>
	);
}
