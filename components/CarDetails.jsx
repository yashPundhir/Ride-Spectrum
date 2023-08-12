"use client";

import Image from "next/image";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

const CarDetails = ({ isOpen, closeModal, car }) => {
	return (
		// <Transition appear show={isOpen} as={Fragment}>
		// 	<Dialog as="div" className="relative z-10" onClose={closeModal}>
		// 		<Transition.Child
		// 			as={Fragment}
		// 			enter="ease-out duration-300"
		// 			enterFrom="opacity-0"
		// 			enterTo="opacity-100"
		// 			leave="ease-in duration-200"
		// 			leaveFrom="opacity-100"
		// 			leaveTo="opacity-0"
		// 		>
		// 			<div className="fixed inset-0 bg-black bg-opacity-25" />
		// 		</Transition.Child>

		// 		<div className="fixed inset-0 overflow-y-auto">
		// 			<div className="flex min-h-full items-center justify-center p-4 text-center">
		// 				<Transition.Child
		// 					as={Fragment}
		// 					enter="ease-out duration-300"
		// 					enterFrom="opacity-0 scale-95"
		// 					enterTo="opacity-100 scale-100"
		// 					leave="ease-in duration-200"
		// 					leaveFrom="opacity-100 scale-100"
		// 					leaveTo="opacity-0 scale-95"
		// 				>
		// 					<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
		// 						<Dialog.Title
		// 							as="h3"
		// 							className="text-lg font-medium leading-6 text-gray-900"
		// 						>
		// 							Payment successful
		// 						</Dialog.Title>
		// 						<div className="mt-2">
		// 							<p className="text-sm text-gray-500">
		// 								Your payment has been successfully submitted. We’ve sent you
		// 								an email with all of the details of your order.
		// 							</p>
		// 						</div>

		// 						<div className="mt-4">
		// 							<button
		// 								type="button"
		// 								className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
		// 								onClick={closeModal}
		// 							>
		// 								Got it, thanks!
		// 							</button>
		// 						</div>
		// 					</Dialog.Panel>
		// 				</Transition.Child>
		// 			</div>
		// 		</div>
		// 	</Dialog>
		// </Transition>
		<>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter=" ease-in-out duration-500"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in-out duration-500"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed  inset-0 bg-black bg-opacity-30" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter=" ease-in-out duration-700"
								enterFrom="opacity-0 scale-80"
								enterTo="opacity-100 scale-100"
								leave="ease-in-out duration-700"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-80"
							>
								<Dialog.Panel className="relative w-full max-w-lg max-h-[90vh]  overflow-y-auto  transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5 ">
									<button
										type="button"
										className=" absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
										onClick={closeModal}
									>
										<Image
											src="/close.svg"
											alt="close button"
											width={20}
											height={20}
											className="object-contain"
										/>
									</button>

									<div className="flex-1 flex flex-col gap-3">
										<div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-xl">
											<Image
												src="/hero2.png"
												fill
												alt="car model"
												priority
												className="  object-contain"
											/>
										</div>

										<div className="flex gap-3 ">
											<div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-xl">
												<Image
													src="/hero2.png"
													fill
													alt="car model"
													priority
													className="  object-contain"
												/>
											</div>
											<div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-xl">
												<Image
													src="/hero2.png"
													fill
													alt="car model"
													priority
													className="  object-contain"
												/>
											</div>
											<div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-xl">
												<Image
													src="/hero2.png"
													fill
													alt="car model"
													priority
													className="  object-contain"
												/>
											</div>
										</div>
									</div>

									<div className="flex-1 flex flex-col gap-2">
										<h2 className="font-semibold text-4xl capitalize">
											{car.make} {car.model}
										</h2>

										<div className="mt-3 flex flex-wrap gap-4 text-lg">
											{Object.entries(car).map(([key, value]) => (
												<div
													className="flex justify-between gap-5 w-full text-right"
													key={key}
												>
													<h4 className="text-grey capitalize font-semibold">
														{key.split("_").join(" ")}
													</h4>
													<p className="text-black-100 font-semibold capitalize">
														{value}
													</p>
												</div>
											))}
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};

export default CarDetails;
