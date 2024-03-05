/*const Comp1 = () => ( <p> hej </p> )
const Comp2 = () => {
	// .....
	return (
		<p> hej </p>
	)
}*/

const JamCard = (props) => {
	let css = ''
	if( props.jars < 1 ) {
		css = 'out-of-stock'
	}
	// let css = (props.jars < 1) ? 'out-of-stock' : ''

	return (
		<section className="card">
			<div className="image"></div>
			<h3> {props.text} </h3>
			<span className={css}> {props.jars} jars left </span>
		</section>
	)
}

export default JamCard
