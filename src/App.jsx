import './App.css'
import JamCard from './JamCard.jsx'

function App() {
	return (
		<>
		<header>
			<h1> Jams 'R Us </h1>
		</header>

		<main>
			<h2> Explore our amazing jam collection! </h2>
			<div className="products">
				<JamCard text="Raspberry" />
				<JamCard text="Strawberry" />
				<JamCard text="Banana" />
				<JamCard text="Cherry" />
				<JamCard text="Cinnamon" />
				<JamCard text="Peppermint" />
				<JamCard text="Cardamon" />
				<JamCard text="Licorice" />
				<JamCard text="Garlic" />
				<JamCard text="Potato" />

			</div>

		</main>
		</>
	)
}

export default App
