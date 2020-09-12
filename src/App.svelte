<script>
  let x = 15;
  let y = 7;
  $: z = x + y;

  function handleXInput(event) {
    x = parseInt(event.target.value, 10);
  }

  function handleYInput(event) {
    y = parseInt(event.target.value, 10);
  }
</script>

<h1>Reactive Statement (#1)</h1>

<span>x</span>
<input type="number" value={x} on:input={handleXInput} />

<span>y</span>
<input type="number" value={y} on:input={handleYInput} />

<p>z = {z}</p>
