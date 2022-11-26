import React from "react";
// @ts-ignore
import { ReactComponent as RecentUpdates } from "src/assets/svgs/profile-recent_updates.svg";

export default function ProfileMeetupsLarge() {
	return (
		<div className="mx-5 sm:mx-0">
			<div className="txt-subtitleBig">Meetups</div>
			<hr className="my-6" />
			<div className="flex flex-col gap-4">
				<div className="flex gap-4">
					<div className="bg-brandLight rounded-md w-[67px] h-[67px] p-[17.5px]">
						<RecentUpdates />
					</div>
					<div>
						<div className="txt-subtitle">Recent Updates</div>
						<div className="txt-caption text-greyContent mt-2">
							I’m free today 10:30 am - 3 pm, coming from West. Open to try any
							area and place!
						</div>
					</div>
				</div>
				<div className="flex gap-4">
					<div className="bg-brandLight rounded-md w-[67px] h-[67px] p-[17.5px]">
						<RecentUpdates />
					</div>
					<div>
						<div className="txt-subtitle">Recent Updates</div>
						<div className="txt-caption text-greyContent mt-2">
							I’m free today 10:30 am - 3 pm, coming from West. Open to try any
							area and place!
						</div>
					</div>
				</div>
				<div className="flex gap-4">
					<div className="bg-brandLight rounded-md w-[67px] h-[67px] p-[17.5px]">
						<RecentUpdates />
					</div>
					<div>
						<div className="txt-subtitle">Recent Updates</div>
						<div className="txt-caption text-greyContent mt-2">
							I’m free today 10:30 am - 3 pm, coming from West. Open to try any
							area and place!
						</div>
					</div>
				</div>
				<div className="flex gap-4">
					<div className="bg-brandLight rounded-md w-[67px] h-[67px] p-[17.5px]">
						<RecentUpdates />
					</div>
					<div>
						<div className="txt-subtitle">Recent Updates</div>
						<div className="txt-caption text-greyContent mt-2">
							I’m free today 10:30 am - 3 pm, coming from West. Open to try any
							area and place!
						</div>
					</div>
				</div>
				<div className="flex gap-4">
					<div className="bg-brandLight rounded-md w-[67px] h-[67px] p-[17.5px]">
						<RecentUpdates />
					</div>
					<div>
						<div className="txt-subtitle">Recent Updates</div>
						<div className="txt-caption text-greyContent mt-2">
							I’m free today 10:30 am - 3 pm, coming from West. Open to try any
							area and place!
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
