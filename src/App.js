import './App.css';
import CategoryItem from './component/catrgory-section/CategoryItem.component';
import { categoryData } from './service/data/getData';

function App() {
	return (
		<div className="categories-sec">
			{categoryData.map((category) => (
				<CategoryItem key={category.id} category={category}/>
			))}
		</div>
	);
}

export default App;
