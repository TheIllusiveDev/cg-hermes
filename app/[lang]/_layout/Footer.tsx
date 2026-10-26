/*
 * Copyright 2025 Carbophile Group and Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * 	https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * --------------------------------------------------------------------------
 *
 * THIRD-PARTY COMPONENT NOTICE
 *
 * This file contains proprietary user interface components provided by
 * Tailwind Labs Inc. (Tailwind Plus).
 *
 * Copyright 2025 Tailwind Labs Inc. All rights reserved.
 *
 * NOTICE: The Apache License 2.0 grant for this project DOES NOT apply to
 * the Tailwind Plus components contained within this file.
 *
 * These components are used under the Tailwind Plus License:
 *
 * 	https://tailwindcss.com/plus/license
 *
 * RESTRICTIONS:
 * You are granted the right to use, view, modify, and compile these
 * components solely as part of this project. You may not extract, modify,
 * or redistribute these components as standalone assets or for use in
 * other projects without a separate license from Tailwind Labs Inc.
 */

import type { Dictionary } from "@l10n/Dict";
import Link from "next/link";
import { FaLinkedin, FaReddit, FaTwitter } from "react-icons/fa";

interface FooterProps {
	dict: Dictionary;
}

const Footer = ({ dict }: FooterProps) => {
	const noticeUrl =
		"https://github.com/Carbophile/cg-hermes/blob/main/NOTICE.md";

	const socials = [
		{
			href: "https://www.linkedin.com/company/103351222",
			icon: FaLinkedin,
			name: dict.contact.linkedin,
		},
		{
			href: "https://www.reddit.com/user/CarbophileGroup",
			icon: FaReddit,
			name: dict.contact.reddit,
		},
		{
			href: "https://x.com/CarbophileGroup",
			icon: FaTwitter,
			name: dict.contact.twitter,
		},
	];

	return (
		<footer className="border-gray-900/8 border-t bg-brand-surface dark:border-white/10 dark:bg-gray-950">
			<div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
				<div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
					<div>
						<p className="font-semibold text-gray-900 dark:text-white">
							{dict.common.orgName}
						</p>
						<p className="mt-1 text-gray-600 text-sm dark:text-gray-400">
							{dict.common.orgDesc}
						</p>
					</div>
					<div className="flex justify-center gap-x-6 md:order-2">
						{socials.map((item) => (
							<Link
								className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
								href={item.href}
								key={item.href}
								rel="noopener"
								target="_blank"
							>
								<span className="sr-only">{item.name}</span>
								<item.icon aria-hidden="true" className="size-6" />
							</Link>
						))}
					</div>
				</div>
				<Link
					className="mt-10 block border-gray-900/8 border-t pt-6 text-gray-500 text-sm/6 hover:text-gray-800 dark:border-white/10 dark:text-gray-500 dark:hover:text-white"
					href={noticeUrl}
					rel="noopener"
					target="_blank"
				>
					{dict.common.copyright}
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
