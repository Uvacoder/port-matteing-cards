import { formatShortDate } from "../lib/utils";
import { BaseProps, GhostPost } from "../types";

// TODO
export default function PostTitle({
	post,
	className,
}: { post: GhostPost } & BaseProps) {
	return (
		<div>
			<div
				className={`mx-auto mt-12 sm:max-w-[655px] md:mb-6 lg:mt-20 lg:mb-10 lg:max-w-[812px] ${className}`}
			>
				<small className="heading mb-2 block text-gray-500">
					{post.publishedAt
						? formatShortDate(post.publishedAt)
						: null}
				</small>
				<h1 className="mb-3">{post.title}</h1>
			</div>
		</div>
	);
}
