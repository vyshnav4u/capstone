import React from 'react';
import "./CategoryItem.scss"

const CategoryItem = (props) => {
	const {category}  =props;
	const getImageUrl = (url) => {
		return `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${url})`;
	};
	return (
				<div key={category.id} className="category-container">
					<div
						className="category-backgorund-img"
						style={{ backgroundImage: getImageUrl(category.imageUrl) }}
					></div>
					<div className="category-body-conatienr">
						<h2> {category.title} </h2>
						<p> Shop Now</p>
					</div>
				</div>
		
	);
};

export default CategoryItem;
