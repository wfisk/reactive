<script>
	let x = 5;
  let y = 7;
  let z;
	updateZ();

	function handleXChange(event) {
    x = parseInt(event.target.value,10);
    updateZ();
  }

  function handleYChange(event) {
		y = parseInt(event.target.value,10);
    updateZ();
  }
  
  function updateZ(){
    z = x + y;
  }
</script>

<div class="container mt-5">
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
