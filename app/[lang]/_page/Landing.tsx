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
import type { Lang } from "@l10n/dict";
import { getAssetPath } from "@lib/assets";
import { getCloudflareImage } from "@lib/image-loader";
import Image from "next/image";
import Link from "next/link";
import { preload } from "react-dom";

interface LandingProps {
	dict: Dictionary;
	lang: Lang;
}

const Landing = ({ dict, lang }: LandingProps) => {
	const posterSrc = getCloudflareImage(getAssetPath("PIX-server-stock.webp"), {
		width: 1280,
	});
	preload(posterSrc, { as: "image", fetchPriority: "high" });

	return (
		<article className="relative isolate overflow-hidden bg-white py-20 sm:py-28 dark:bg-gray-950">
			<div
				aria-hidden="true"
				className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_at_top_right,rgba(109,93,252,0.16),transparent_58%)]"
			/>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
					<div className="lg:pt-4 lg:pr-4">
						<div className="lg:max-w-lg">
							<div className="inline-flex items-center gap-2 rounded-full border border-brand-primary/20 bg-brand-primary/5 px-3 py-1 font-semibold text-brand-primary text-xs uppercase tracking-[0.18em]">
								<span className="size-1.5 rounded-full bg-brand-primary" />
								{dict.common.orgDesc}
							</div>
							<h1 className="mt-6 text-pretty font-semibold text-5xl text-gray-950 tracking-[-0.04em] sm:text-6xl dark:text-white">
								<span className="bg-linear-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent">
									{dict.common.cybersecurity}
								</span>{" "}
								{dict.common.tagline}
							</h1>
							<p className="mt-7 max-w-xl text-gray-600 text-lg/8 dark:text-gray-300">
								{dict.landing.mission}
							</p>
							<div className="mt-9 flex flex-wrap items-center gap-4">
								<Link
									className="inline-flex items-center rounded-full bg-brand-primary px-5 py-3 font-semibold text-sm text-white shadow-lg shadow-brand-primary/20 transition-all hover:-translate-y-0.5 hover:bg-brand-primary-light hover:shadow-brand-primary/30"
									href={`/${lang}/blog`}
								>
									{dict.common.pages.blog}
									<span aria-hidden="true" className="ml-2">
										↗
									</span>
								</Link>
								<Link
									className="font-semibold text-gray-700 text-sm transition-colors hover:text-brand-primary dark:text-gray-200 dark:hover:text-brand-primary-light"
									href={`/${lang}/collaborate`}
								>
									{dict.common.pages.collaborate}
									<span aria-hidden="true" className="ml-2">
										→
									</span>
								</Link>
							</div>
							<figure className="mt-16 border-gray-200 border-l-2 pl-6 text-gray-600 dark:border-gray-700 dark:text-gray-300">
								<blockquote className="text-base/7">
									<p>“{dict.landing.foundingQuote}”</p>
								</blockquote>
								<figcaption className="mt-6 flex gap-x-4 text-sm/6">
									<Image
										alt=""
										className="size-6 flex-none rounded-full"
										height="24"
										quality="75"
										role="presentation"
										src={getAssetPath("headshots/CG-borna-punda.webp")}
										width="24"
									/>
									<div>
										<span className="font-semibold text-gray-900 dark:text-white">
											Borna Punda
										</span>{" "}
										—{" "}
										<span className="text-gray-600 dark:text-gray-400">
											{dict.common.cofounder}
										</span>
									</div>
								</figcaption>
							</figure>
						</div>
					</div>
					{/** biome-ignore lint/a11y/noInteractiveElementToNoninteractiveRole: <The video truly is non-interactive and serves no functional purpose> */}
					<video
						autoPlay
						className="w-3xl max-w-none rounded-3xl shadow-2xl shadow-brand-primary/10 ring-1 ring-gray-900/10 sm:w-228 md:-ml-4 lg:ml-0 dark:ring-white/10"
						loop
						muted
						playsInline
						poster={posterSrc}
						role="presentation"
						src={getAssetPath("PIX-server-stock.webm")}
						tabIndex={-1}
					/>
				</div>
			</div>
		</article>
	);
};

export default Landing;
