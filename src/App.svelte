<script>
  let x = 5;
  let y = 7;
  let z;
  updateZ();

  function handleXInput(event) {
    x = parseInt(event.target.value, 10);
    updateZ();
  }

  function handleYInput(event) {
    y = parseInt(event.target.value, 10);
    updateZ();
  }

  function updateZ() {
    z = x + y;
  }
</script>

<h1>Reactive Statement (#1)</h1>
<span>x</span>
<input type="number" value={x} on:input={handleXInput} />

<span>y</span>
<input type="number" value={y} on:input={handleYInput} />

<p>z = {z}</p>
