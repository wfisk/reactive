<script>
  import GameState from './GameState';
  
  let gameState = GameState.listen('default');

  $: z = $gameState ? $gameState.x + $gameState.y : 0;

  function handleXInput( event ){
    let value = parseInt( event.target.value );
    $gameState.update({ x: value });
  }

  function handleYInput( event ){
    let value = parseInt( event.target.value );
    $gameState.update({ y: value });
  }

</script>

<div class="container mt-5">

  {#if $gameState }
    <div class="mb-3">
      <span>x</span>
      <input type="number" value={$gameState.x}  on:input={handleXInput}/>
    </div>

    <div class="mb-3">
      <span>y</span>
      <input type="number" value={$gameState.y}  on:input={handleYInput}/>
    </div>

    <p>z = {z}</p>
   {/if} 
</div>

