import format from "date-fns/format";
import { BaseProps, Post } from "../types";
import readingTime from "reading-time";

// TODO
export default function PostTitle({
	post,
	className,
}: { post: Post } & BaseProps) {
	const readEstimate = readingTime(post.body);
	return (
		<div>
			<div
				className={`mx-auto mt-12 sm:max-w-[655px] md:mb-6 lg:mt-20 lg:mb-10 lg:max-w-[812px] ${className}`}
			>
				<div className="heading mb-2 text-gray-500">
					{format(new Date(post.createdAt), "MMM d, y")} ·{" "}
					{Math.ceil(readEstimate.minutes)} min read
				</div>
				<h1 className="mb-3 text-3xl font-bold tracking-tight lg:text-5xl">
					{post.title}
				</h1>
			</div>
		</div>
	);
}
