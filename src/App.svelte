<script>
  import GameState from "./GameState";

  let gameState = GameState.listen("default");

  $: z = $gameState ? $gameState.x + $gameState.y : 0;

  function handleXInput(event) {
    let value = parseInt(event.target.value);
    $gameState.update({ x: value });
  }

  function handleYInput(event) {
    let value = parseInt(event.target.value);
    $gameState.update({ y: value });
  }
</script>

{#if $gameState}
  <span>x</span>
  <input type="number" value={$gameState.x} on:input={handleXInput} />

  <span>y</span>
  <input type="number" value={$gameState.y} on:input={handleYInput} />

  <p>z = {z}</p>
{/if}
