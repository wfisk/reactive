<script>
  import xStore from './xStore';

  let x;
  xStore.subscribe( value => { x = value;  });
</script>

<header class="bg-primary text-white mb-5 p-3">
  The value of X is {x}
</header>

