import { ButtonWithTextAndIcon } from "components/atoms/ButtonWithTextAndIcon";
import { Loading } from "components/atoms/Loading";
import { Title } from "components/atoms/Title";
import { CustomDownDrop } from "components/molecules/CustomDownDrop";
import { useGetAllCategories } from "services/categories/hooks/useGetAllCategories";
import { area, block, category, standard, typeElement } from "types/global";
import AddPic from "public/icons/AddPic.svg";
import { AddModal } from "components/molecules/AddModal";
import { useState } from "react";
import Portal from "HOC/Portal";
import { AddCategory } from "components/molecules/AddCategory";
import { postCategory } from "services/categories/postCategory";
import { DeleteModal } from "components/molecules/DeleteModal";

export const EstandaresTemplate = () => {
	const { categories, isLoading, isError } = useGetAllCategories();
	const [showCategoryModal, setShowCategoryModal] = useState(false);
	const [showDeleteModal, setDeleteModal] = useState(false);
	const [elementSelected, setElement] = useState({});
	const [typeSelected, setType] = useState<typeElement>("category");

	const handleAddCategory = (e: React.ChangeEvent<HTMLFormElement>) => {
		if (e) {
			console.log(parseInt(e.target.valor.value));
			const newCategory: category = {
				abbreviation: e.target.abbreviation.value,
				idSecondary: parseInt(e.target.idSecondary.value),
				name: e.target.categoryname.value,
				value: parseInt(e.target.valor.value),
				blocks: [],
				isAgency: false,
			};
			return postCategory(newCategory)
				.then((res) => setShowCategoryModal((prevState) => !prevState))
				.catch((e) => Promise.reject(e));
		} else {
			setShowCategoryModal((prevState) => !prevState);
		}
	};

	const optionAddCategory = (idCategory: string) => {};
	const optionDeleteCategory = (element: any) => {
		setElement(element);
		setType("category");
		console.log("delete", element);
		setDeleteModal((prevState) => !prevState);
	};
	const optionEditCategory = (idCategory: string) => {};
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
						<CustomDownDrop
							key={category._id}
							element={category}
							optionAdd={optionDeleteCategory}
							optionEdit={optionEditCategory}
							optionDelete={optionDeleteCategory}
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
										element={block}
										title={
											block.code.toUpperCase() + ". " + block.name.toUpperCase()
										}
										color="rgba(0, 0, 0, 0.1)"
									>
										<>
											{block.areas.map((area: area) => (
												<CustomDownDrop
													key={area._id}
													element={area}
													title={(area.code + ". " + area.name).toUpperCase()}
													color="rgba(0, 0, 0, 0.05)"
												>
													<>
														{area.standards.map((standard: standard) => (
															<CustomDownDrop
																key={standard._id}
																element={standard}
																title={
																	standard.code.toUpperCase() +
																	". " +
																	standard.description.charAt(0).toUpperCase() +
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
					))
				) : (
					<Loading />
				)}
				{showCategoryModal && (
					<Portal>
						<AddModal
							handleAddModal={handleAddCategory}
							title="Creación de nueva categoría"
						>
							<AddCategory></AddCategory>
						</AddModal>
					</Portal>
				)}
				{showDeleteModal && (
					<Portal>
						<DeleteModal
							handleCancel={() => setDeleteModal(false)}
							type={typeSelected}
							element={elementSelected}
						></DeleteModal>
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
