import { Title } from "components/atoms/Title";
import { CustomDownDrop } from "components/molecules/CustomDownDrop";
import { useGetAllAreas } from "services/areas/hooks/useGetAllAreas";
import { useGetAllBlocks } from "services/blocks/hooks/useGetAllBlocks";
import { useGetAllCategories } from "services/categories/hooks/useGetAllCategories";
import { useGetAllStandards } from "services/standards/hooks/useGetAllStandards";

export const EstandaresTemplate = () => {
	const { categories, isLoading, isError } = useGetAllCategories();
	const { blocks } = useGetAllBlocks();
	const { areas } = useGetAllAreas();
	const { standards } = useGetAllStandards();
	console.log(standards);
	return (
		<>
			<div className="estandaresContainer"></div>
			<div className="header">
				<Title>Maestro de Estandares</Title>
			</div>
			<div className="body">
				{categories.map((category) => (
					<>
						<CustomDownDrop
							title={(
								category.abbreviation +
								". " +
								category.name
							).toUpperCase()}
							color="rgba(0, 0, 0, 0.2)"
						></CustomDownDrop>
					</>
				))}
				<CustomDownDrop title="GR. General" color="rgba(0, 0, 0, 0.2)">
					<>
						<CustomDownDrop
							title="SA 1. Legal y financiero"
							color="rgba(0, 0, 0, 0.1)"
						>
							<>
								<CustomDownDrop title="AP 1. Legal" color="rgba(0, 0, 0, 0.05)">
									<>
										<CustomDownDrop
											title="GR.1.1.1.1"
											color="rgba(0, 0, 0, 0.025)"
											childrenContainer={false}
										></CustomDownDrop>
										<CustomDownDrop
											title="GR.1.1.1.2"
											color="rgba(0, 0, 0, 0.025)"
											childrenContainer={false}
										></CustomDownDrop>
										<CustomDownDrop
											title="GR.1.1.1.3"
											color="rgba(0, 0, 0, 0.025)"
											childrenContainer={false}
										></CustomDownDrop>
										<CustomDownDrop
											title="GR.1.1.1.4"
											color="rgba(0, 0, 0, 0.025)"
											childrenContainer={false}
										></CustomDownDrop>
									</>
								</CustomDownDrop>
								<CustomDownDrop
									title="AP 2. Financiero"
									color="rgba(0, 0, 0, 0.05)"
								></CustomDownDrop>
							</>
						</CustomDownDrop>
						<CustomDownDrop
							title="SA 2. Estandares comunes"
							color="rgba(0, 0, 0, 0.1)"
						></CustomDownDrop>
					</>
				</CustomDownDrop>
			</div>

			<style jsx>{`
				.estandaresContainer {
					display: flex;
					flex-direction: column;
				}
				.header {
					display: flex;
					align-items: center;
					justify-content: start;
					gap: 1rem;
				}
				.body {
					width: 100%;
				}
			`}</style>
		</>
	);
};
