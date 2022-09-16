import {
	HomeIcon,
	RectangleStackIcon,
	PencilIcon,
	BoltIcon,
} from "@heroicons/react/24/outline";
import {
	cloneElement,
	PropsWithChildren,
	ReactElement,
	useEffect,
	useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

const useScrollPosition = () => {
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		const updatePosition = () => {
			setScrollPosition(window.pageYOffset);
		};
		window.addEventListener("scroll", updatePosition);
		updatePosition();
		return () => window.removeEventListener("scroll", updatePosition);
	}, []);

	return scrollPosition;
};

export function NavItem({
	icon,
	className,
	children,
	href,
}: {
	href: string;
	icon?: JSX.Element;
	className?: string;
	basePath?: boolean;
} & PropsWithChildren) {
	const router = useRouter();

	return (
		<Link href={href}>
			<div
				className={
					"group flex cursor-pointer select-none items-center px-6 py-4 font-medium text-gray-700 transition-all hover:bg-purple-50 dark:text-gray-200 dark:hover:bg-purple-900 dark:hover:bg-opacity-30 " +
					className +
					(router.pathname === href
						? " text-purple-600 dark:text-purple-500"
						: "")
				}
			>
				<div className="flex items-center transition-all group-active:scale-90">
					{cloneElement((icon as ReactElement) ?? null, {
						className: "mr-3 h-4 w-4",
					})}
					<span className="leading-none">{children}</span>
				</div>
			</div>
		</Link>
	);
}

export function NavPills({
	className,
}: PropsWithChildren & { className?: string }) {
	return (
		<AnimatePresence initial={false}>
			<motion.div
				key="nav"
				initial={{ opacity: 0, y: -5 }}
				animate={{ y: 0, opacity: 1 }}
				exit={{ y: -5, opacity: 0 }}
				transition={{ duration: 0.15 }}
				className={
					"inter interactable flex rounded-full border bg-white shadow-sm transition-all dark:border-gray-700 dark:bg-gray-800 " +
					className
				}
			>
				<NavItem
					href="/"
					icon={<HomeIcon />}
					className={"rounded-l-full"}
				>
					Home
				</NavItem>
				<NavItem href="/projects" icon={<RectangleStackIcon />}>
					Work
				</NavItem>
				<NavItem href="/posts" basePath icon={<PencilIcon />}>
					Posts
				</NavItem>
				<NavItem
					href="/more"
					icon={<BoltIcon />}
					className={"rounded-r-full"}
				>
					More
				</NavItem>
			</motion.div>
		</AnimatePresence>
	);
}

function HoveringNav() {
	const scrollPos = useScrollPosition();
	return (
		<>
			{scrollPos < 675 ? (
				<div
					className={
						"dark absolute top-12 z-30 flex w-full justify-center"
					}
				>
					<NavPills />
				</div>
			) : (
				<div className={"fixed top-6 z-30 flex w-full justify-center"}>
					<NavPills />
				</div>
			)}
			{scrollPos > 675 && (
				<div className="fixed top-0 left-0 z-20 h-24 w-full bg-white bg-opacity-75 backdrop-blur-xl"></div>
			)}
		</>
	);
}

function StaticNav() {
	return (
		<>
			<div className="fixed top-0 left-0 z-20 h-24 w-full bg-white bg-opacity-75 backdrop-blur-xl"></div>
			<div className="sticky top-6 z-30 my-12 flex w-full justify-center">
				<NavPills />
			</div>
		</>
	);
}

export default function Nav({ hovering = false }: { hovering?: boolean }) {
	if (hovering) {
		return <HoveringNav />;
	} else {
		return <StaticNav />;
	}
}
