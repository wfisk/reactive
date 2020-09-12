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

<div class="mb-3">
  <span>x</span>
  <input type="number" value={x} on:input={handleXInput} />
</div>

<div class="mb-3">
  <span>y</span>
  <input type="number" value={y} on:input={handleYInput} />
</div>

<p>z = {z}</p>
