<script>
	import Store from './Store';

	let x = new Store(5);
	let y = new Store(17);
	$: z = $x + $y;

	function incX() {
		$x++;
	}
	function incY() {
		$y++;
	}
</script>

<div class="container mt-5">
	<p>The value of x is {$x} <button on:click={incX}>Inc x</button></p>

	<p>The value of y is {$y} <button on:click={incY}>Inc y</button></p>

	<p>The value of z is {z}</p>
</div>

<style global type="text/scss">
	@import './styles/global.scss';
</style>
