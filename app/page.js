import { Hero, CustomFilter, SearchBar } from "@/components";

export default function Home() {
	return (
		<main className="overflow-hidden">
			<Hero />

			<div className="mt-12 padding-x padding-y max-width" id="discover">
				<div className="home__text-container">
					<h1 className="text-4xl font-extrabold">Car Catalogue</h1>
					<p className="text-lg mt-1 ml-0.5 font-medium text-gray-600">
						Explore the cars you might like
					</p>
				</div>

				<div className="home__filters">
					<SearchBar />

					<div className="home__filter-container">
						<CustomFilter title="fuel" />
						<CustomFilter title="year" />
					</div>
				</div>
			</div>
		</main>
		// <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
	);
}
