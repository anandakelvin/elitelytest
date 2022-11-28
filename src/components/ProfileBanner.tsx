// @ts-ignore
import { ReactComponent as TodoIcon } from "src/assets/svgs/todo.svg";
// @ts-ignore
import { ReactComponent as VerifiedBadge } from "src/assets/svgs/verified-badge.svg";
import CircleAvatarPicture from "src/assets/profile_pictures/large/xiuxian_98-large.jpg";
import CircleAvatar from "src/components/CircleAvatar";

export default function ProfileBanner() {
	return (
		<div className="box m-0 rounded-none sm:box sm:rounded-t-none">
			<div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-10">
				<div className="flex flex-col gap-[11px] justify-beclassNameeen items-center">
					<div className="block sm:hidden">
						<CircleAvatar src={CircleAvatarPicture} />
					</div>
					<div className="hidden sm:block">
						<CircleAvatar src={CircleAvatarPicture} width="60" height="60" />
					</div>
					<div className="txt-captionSmall bg-green-50 text-green-500 border-[1px] border-green-500 rounded-xl py-[4px] px-[8px]">
						PERSONALITY
					</div>
				</div>
				<div className="flex-grow flex flex-col gap-[6px]">
					<div className="flex justify-between">
						<div>
							<div className="flex gap-2 items-center">
								<div className="txt-subtitleBig">@xiuxian_98</div>
								<VerifiedBadge />
							</div>
							<div className="flex gap-1 items-center">
								<div className="w-[8px] h-[8px] rounded-full bg-online-gradient" />
								<div className="txt-subtitleSmall">Online now</div>
							</div>
						</div>
						<div className="block sm:hidden">
							<TodoIcon />
						</div>
					</div>
					<div className="txt-caption text-greyContent">
						I'm your manic pixie dream girl
						<br />
						Design student and anime weeb. Coffee addict. Anime fan and games.
						Come say hi!
					</div>
				</div>
				<div className="hidden sm:block">
					<TodoIcon />
				</div>
			</div>
			<hr className="my-[16px]" />
			<div className="grid grid-cols-3 gap-3">
				<button className="btn-cta-secondary">Chat</button>
				<button className="btn-cta-secondary">Meet</button>
				<button className="btn-cta-primary">Follow</button>
			</div>
		</div>
	);
}
