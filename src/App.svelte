<script>
  import x from './xStore';
  import y from './yStore';
  import Header from './Header.svelte';

  $: z = $x + $y;
  
</script>

<div class="container mt-5">
  <Header />
  <div class="mb-3">
    <span>x</span>
    <input type="number" bind:value={$x}  />
  </div>

  <div class="mb-3">
    <span>y</span>
    <input type="number" bind:value={$y}  />
  </div>

  <p>z = {z}</p>
</div>

<style global type="text/scss">
	@import './styles/global.scss';
</style>
