import React from 'react'
import CategoryItem from './CategoryItem';

const CategorySection = (props) => {
    const {data} = props;
  return (
    <div className="categories-sec">
			{data.map((category) => (
				<CategoryItem key={category.id} category={category}/>
			))}
		</div>
  )
}

export default CategorySection