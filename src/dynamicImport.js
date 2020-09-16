dynamic import is pretty cool in svelte. you can do stuff like this:
```html
<script>
let showModal = false
</script>
{#if showModal}
 {#await import('/modules/mymodal.svelte') then comp}
   <svelte:component this={comp.default}/>
 {/await}
{/if}
<button on:click={() => showModal = true}>Show modal</button>
```

Envoyé depuis l'application Mail Orange