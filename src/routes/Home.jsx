import React from 'react';
import { Outlet } from 'react-router-dom';
import { categoryData } from '../service/data/getData';
import CategorySection from '../component/catrgory-section/CategorySection';

const Home = () => {
	return (
		<>
			<CategorySection data={categoryData} />
			<Outlet />
		</>
	);
};

export default Home;
