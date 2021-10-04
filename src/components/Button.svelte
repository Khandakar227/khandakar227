<script>
  export let type = "neon";
  export let href = "";
  export let style = "";
  export let download = '';
  export let alt = '';
</script>

{#if type === "neon"}
  {#if download}
    <a class="neon_button" {href} {style} {download} {alt}>
      <span />
      <span />
      <span />
      <span />
      <b><slot></slot></b>
    </a>
    {:else}
    <a class="neon_button" {href} {style}>
      <span />
      <span />
      <span />
      <span />
      <b><slot></slot></b>
    </a>
  {/if}
{/if}

<style>
  :root {
    --neon-button: rgb(255, 34, 34);
    --neon-button-2: rgb(0, 255, 213);
  }
  .neon_button {
    position: relative;
    display: inline-block;
    padding: 25px 30px;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.5s;
    letter-spacing: 4px;
    overflow: hidden;
    margin-top: 1rem;
  }
  .neon_button:hover {
    background: var(--neon-button);
    color: #050801;
    box-shadow: 0 0 5px var(--neon-button), 0 0 25px var(--neon-button),
      0 0 50px var(--neon-button), 0 0 200px var(--neon-button);
      fill: #050801;
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
  }
  .neon_button:nth-child(1) {
    filter: hue-rotate(270deg);
  }
  .neon_button:nth-child(2) {
    filter: hue-rotate(218deg);
  }
  .neon_button:hover span {
    opacity: 0;
  }
  .neon_button span {
    position: absolute;
    display: block;
  }
  .neon_button span:nth-child(1) {
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, white);
    animation: animate1 1s linear infinite;
  }

  .neon_button span:nth-child(2) {
    bottom: 0;
    right: 0;
    height: 100%;
    width: 2px;
    background: linear-gradient(270deg, transparent, #fff);
    animation: animate2 1s linear infinite;
    animation-delay: 0.25s;
  }
  .neon_button span:nth-child(3) {
    bottom: 0;
    right: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #fff);
    animation: animate3 1s linear infinite;
    animation-delay: 0.5s;
  }
  .neon_button span:nth-child(4) {
    bottom: 0;
    left: 0;
    height: 100%;
    width: 2px;
    background: linear-gradient(270deg, transparent, #fff);
    animation: animate4 1s linear infinite;
    animation-delay: 0.75s;
  }
  @keyframes animate1 {
    0% {
      left: -100%;
    }
    50%,
    100% {
      left: 100%;
    }
  }

  @keyframes animate2 {
    0% {
      top: -100%;
    }
    50%,
    100% {
      top: 100%;
    }
  }

  @keyframes animate3 {
    0% {
      right: -100%;
    }
    50%,
    100% {
      right: 100%;
    }
  }

  @keyframes animate4 {
    0% {
      bottom: -100%;
    }
    50%,
    100% {
      bottom: 100%;
    }
  }

</style>
