import LargeProfilePicture from "src/assets/profile_pictures/large/xiuxian_98-large.jpg";
import { SlGraduation, SlBriefcase } from "react-icons/sl";
import Divider from "src/components/Divider";

export default function ProfileMain() {
	return (
		<div className="box">
			<img
				src={LargeProfilePicture}
				width="100%"
				className="aspect-square object-cover"
				alt="prof pic"
			/>
			<div className="flex gap-2 justify-center my-8">
				<div className="bg-red-600 rounded-full w-[10px] h-[10px]" />
				<div className="bg-gray-600 rounded-full w-[10px] h-[10px]" />
			</div>
			<div>Xiuxian, 22</div>
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
			<div>
				Gemini, Art student and tall.
				<br />
				<br />
				Coffee, cold showers and early morning walks!
			</div>
		</div>
	);
}
