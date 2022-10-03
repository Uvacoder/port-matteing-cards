import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { TwitterFollowButton } from "react-twitter-embed";

export default function FollowButton() {
	const [ready, setReady] = useState(false);
	return (
		<div className="relative h-[28px] w-[252px]">
			<AnimatePresence initial={false}>
				{!ready && (
					<m.div
						key="placeholder"
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="absolute top-0 left-0 h-full w-full bg-white"
					>
						<div className="flex animate-pulse items-center justify-center">
							<div className="mr-2 h-[27px] w-[152px] rounded-full bg-gray-100"></div>
							<div className="h-[27px] w-[90px] rounded-md bg-gray-100"></div>
						</div>
					</m.div>
				)}
				<TwitterFollowButton
					options={{ size: "large" }}
					screenName={"matteing"}
					onLoad={() => setTimeout(() => setReady(true), 200)}
				/>
			</AnimatePresence>
		</div>
	);
}