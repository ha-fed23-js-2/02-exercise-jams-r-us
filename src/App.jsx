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
				<JamCard text="Raspberry" jars={5} />
				<JamCard text="Strawberry" jars={1} />
				<JamCard text="Banana" jars={0} />
				<JamCard text="Cherry" jars={0} />
				<JamCard text="Cinnamon" jars={0} />
				<JamCard text="Peppermint" jars={2} />
				<JamCard text="Cardamon" jars={0} />
				<JamCard text="Licorice" jars={10} />
				<JamCard text="Garlic" jars={10} />
				<JamCard text="Potato" jars={8} />

			</div>

		</main>
		</>
	)
}

export default App
