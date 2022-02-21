import { ButtonWithTextAndIcon } from "components/atoms/ButtonWithTextAndIcon";
import { Loading } from "components/atoms/Loading";
import { Title } from "components/atoms/Title";
import { CustomDownDrop } from "components/molecules/CustomDownDrop";
import { useGetAllCategories } from "services/categories/hooks/useGetAllCategories";
import { area, block, category, standard } from "types/global";
import AddPic from "public/icons/AddPic.svg";
import { AddModal } from "components/molecules/AddModal";
import { useState } from "react";
import Portal from "HOC/Portal";
import { AddCategory } from "components/molecules/AddCategory";

export const EstandaresTemplate = () => {
	const { categories, isLoading, isError } = useGetAllCategories();
	const [showCategoryModal, setShowCategoryModal] = useState(false);
	const handleAddCategory = (category: category) => {
		setShowCategoryModal((prevState) => !prevState);
		category && console.log("se agrego: ", category);
	};
	return (
		<>
			<div className="estandaresContainer"></div>
			<div className="header">
				<Title>Maestro de Estandares</Title>
				<ButtonWithTextAndIcon src={AddPic} handleClick={handleAddCategory}>
					Agregar categoria
				</ButtonWithTextAndIcon>
			</div>
			<div className="body">
				{!isLoading ? (
					categories.map((category: category) => (
						<>
							<CustomDownDrop
								key={category._id}
								title={(
									category.abbreviation +
									". " +
									category.name
								).toUpperCase()}
								color="rgba(0, 0, 0, 0.2)"
							>
								<>
									{category.blocks.map((block: block) => (
										<CustomDownDrop
											key={block._id}
											title={
												block.code.toUpperCase() +
												". " +
												block.name.toUpperCase()
											}
											color="rgba(0, 0, 0, 0.1)"
										>
											<>
												{block.areas.map((area: area) => (
													<CustomDownDrop
														key={area._id}
														title={(area.code + ". " + area.name).toUpperCase()}
														color="rgba(0, 0, 0, 0.05)"
													>
														<>
															{area.standards.map((standard: standard) => (
																<CustomDownDrop
																	key={standard._id}
																	title={
																		standard.code.toUpperCase() +
																		". " +
																		standard.description
																			.charAt(0)
																			.toUpperCase() +
																		standard.description.slice(1)
																	}
																	color="rgba(0, 0, 0, 0.025)"
																	childrenContainer={false}
																></CustomDownDrop>
															))}
														</>
													</CustomDownDrop>
												))}
											</>
										</CustomDownDrop>
									))}
								</>
							</CustomDownDrop>
						</>
					))
				) : (
					<Loading />
				)}
				{showCategoryModal && (
					<Portal>
						<AddModal handleAddModal={handleAddCategory}>
							<AddCategory handleAddCategory={handleAddCategory}></AddCategory>
						</AddModal>
					</Portal>
				)}
			</div>

			<style jsx>{`
				.estandaresContainer {
					display: flex;
					flex-direction: column;
				}
				.header {
					display: flex;
					align-items: center;
					justify-content: space-between;
					gap: 1rem;
				}
				.body {
					width: 100%;
				}
			`}</style>
		</>
	);
};
