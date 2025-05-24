import { Link } from "react-router-dom";
const Section = ({ title, titleAlign, link, children }) => {
	if (titleAlign !== "center") {
		titleAlign = "left";
	}

	if (
		!(link && typeof link.href === "string" && typeof link.text === "string")
	) {
		link = null;
	}

	return (
		<section className="flex flex-col justify-center items-center w-full my-15">
			<div
				className={`flex items-center w-full mb-7 relative justify-${titleAlign === "center" ? "center" : "start"}`}
			>
				{/* esses md: e xl: são breakpoints para responsividade, com a fonte deve-se ter cuidado.
						o tamanho dos textos deve ser proporcional ao tamanho da tela e não ser fixo. */}
				<h3 className={`text-(--dark-gray-2) text-base md:text-xl x1:text-2xl`}>
					{title}
				</h3>
				{link ? (
					<Link
						to={link.href}
						className="text-(--primary) text-xs md:text-base x1:text-lg absolute right-0"
					>
						{link.text}
					</Link>
				) : null}
			</div>

			{children}
		</section>
	);
};

export default Section;
