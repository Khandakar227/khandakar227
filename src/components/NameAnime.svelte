<script>
  export let name = "Khandakar Shakib";
</script>

<strong>
  {#each name as letter}
    <span>{letter}</span>
  {/each}
</strong>

<style>
  span {
    transition: 0.4s ease;
  }
  span:hover {
    color: var(--primary);
  }
</style>
