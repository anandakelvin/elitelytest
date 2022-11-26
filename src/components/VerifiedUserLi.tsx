import Image from "src/assets/profile_pictures/large/xiuxian_98-large.jpg";
import Divider from "src/components/Divider";
// @ts-ignore
import { ReactComponent as VerifiedBadge } from "src/assets/svgs/verified-badge.svg";
import CircleAvatar from "src/components/CircleAvatar";

export default function VerifiedUserLi() {
	return (
		<div>
			<Divider />
			<div className="flex gap-4 my-4">
				<CircleAvatar src={Image} width="80" height="80" />
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
