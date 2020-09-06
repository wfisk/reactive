<script>
  import xStore from './xStore';
  import yStore from './yStore';
  import Header from './Header.svelte';

	let x;
  let y;
  $: z = x + y;

  xStore.subscribe( value => { x = value });
  yStore.subscribe( value => { y = value });

	function handleXChange(event) {
    let value = parseInt(event.target.value,10);
    xStore.set( value );
  }

  function handleYChange(event) {
    let value = parseInt(event.target.value,10);
    yStore.set( value );
  }
  
</script>

<div class="container mt-5">
  <Header />
  <div class="mb-3">
    <span>x</span>
    <input type="number" value={x} on:input={handleXChange} />
  </div>

  <div class="mb-3">
    <span>y</span>
    <input type="number" value={y} on:input={handleYChange} />
  </div>

  <p>z = {z}</p>
</div>

<style global type="text/scss">
	@import './styles/global.scss';
</style>
