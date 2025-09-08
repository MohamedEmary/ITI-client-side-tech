function Card({ cardData }) {
	return (
		<li>
			{cardData.title}
			<ul>
				<li>{cardData.country}</li>
				<li>
					<img src={cardData.img.src} alt={cardData.img.alt} />
				</li>
				<li>{cardData.dates}</li>
				<li>{cardData.text}</li>
			</ul>
		</li>
	);
}

export default Card;
