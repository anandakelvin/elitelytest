import { SlGraduation, SlBriefcase } from "react-icons/sl";
import Divider from "src/components/Divider";
// @ts-ignore
import { ReactComponent as FilledStar } from "src/assets/svgs/rating_star_filled.svg";
// @ts-ignore
import { ReactComponent as UnfilledStar } from "src/assets/svgs/rating_star_unfilled.svg";
import ProfileMeetupsLarge from "src/components/ProfileMeetupsLarge";
import ProfileMeetupsSmall from "src/components/ProfileMeetupsSmall";

export default function ProfileAbout() {
	return (
		<div className="flex flex-col gap-7">
			<div className="box">
				<h1 className="txt-subtitleBig">Xiuxian, 22</h1>
				<div className="flex gap-5 mt-2">
					<div className="flex gap-2">
						<div className="p-1 bg-gray-200 rounded-full">
							<SlGraduation />
						</div>
						<div>SIM-UOL</div>
					</div>
					<div className="flex gap-2">
						<div className="p-1 bg-gray-200 rounded-full">
							<SlBriefcase />
						</div>
						<div>Student at University</div>
					</div>
				</div>
				<Divider />
				<div className="my-5 flex flex-col gap-2">
					<div className="flex gap-2">
						<div className="w-[40%] txt-subtitle">Age</div>
						<div className="w-[60%] txt-body text-greyContent">22</div>
					</div>
					<div className="flex gap-2">
						<div className="w-[40%] txt-subtitle">Age</div>
						<div className="w-[60%] txt-body text-greyContent">Chinese</div>
					</div>
					<div className="flex gap-2">
						<div className="w-[40%] txt-subtitle">Languages</div>
						<div className="w-[60%] txt-body text-greyContent">
							English, Mandarin
						</div>
					</div>
					<div className="flex gap-2">
						<div className="w-[40%] txt-subtitle">Height</div>
						<div className="w-[60%] txt-body text-greyContent">158cm</div>
					</div>
					<div className="flex gap-2">
						<div className="w-[40%] txt-subtitle">Sexual Orientation</div>
						<div className="w-[60%] txt-body text-greyContent">
							Heterosexual
						</div>
					</div>
					<div className="flex gap-2">
						<div className="w-[40%] txt-subtitle">Meetups</div>
						<div className="w-[60%] txt-body text-greyContent">$200 / 2h</div>
					</div>
					<div className="flex gap-2">
						<div className="w-[40%] txt-subtitle">Responsiveness (chats)</div>
						<div className="w-[60%] txt-body text-greyContent">
							Usually responds in 30 minutes
						</div>
					</div>
				</div>
				<Divider />
				<div className="flex justify-between items-center">
					<div className="flex gap-2 items-center">
						<div className="txt-body">Rating</div>
						<div className="flex gap-1">
							<FilledStar />
							<FilledStar />
							<FilledStar />
							<FilledStar />
							<UnfilledStar />
						</div>
					</div>
					<div className="flex gap-5 items-center">
						<div className="txt-caption">4 of 193 reviews</div>
						<button className="btn-cta-quarternary">Reviews</button>
					</div>
				</div>
			</div>
			<div className="hidden sm:block">
				<ProfileMeetupsLarge />
			</div>
			<div className="block sm:hidden">
				<ProfileMeetupsSmall />
			</div>
		</div>
	);
}
