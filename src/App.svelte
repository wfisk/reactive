<script>
  import x from "./xStore";
  import y from "./yStore";
  import Header from "./Header.svelte";

  $: z = $x + $y;

  function handleXInput(event) {
    let value = parseInt(event.target.value);
    $x = value;
  }

  function handleYInput(event) {
    let value = parseInt(event.target.value);
    $y = value;
  }
</script>

<Header />

<span>x</span>
<input type="number" value={$x} on:input={handleXInput} />

<span>y</span>
<input type="number" value={$y} on:input={handleYInput} />

<p>z = {z}</p>
