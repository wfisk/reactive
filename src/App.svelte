<script>
  import xStore from "./xStore";
  import yStore from "./yStore";
  import Header from "./Header.svelte";

  let x;
  let y;
  $: z = x + y;

  xStore.subscribe((value) => {
    x = value;
  });
  yStore.subscribe((value) => {
    y = value;
  });

  function handleXInput(event) {
    let value = parseInt(event.target.value, 10);
    xStore.set(value);
  }

  function handleYInput(event) {
    let value = parseInt(event.target.value, 10);
    yStore.set(value);
  }
</script>

<Header />

<span>x</span>
<input type="number" value={x} on:input={handleXInput} />

<span>y</span>
<input type="number" value={y} on:input={handleYInput} />

<p>z = {z}</p>
