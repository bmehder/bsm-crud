<script>
  import { list, value, focus, selectedItem } from "./store";
  import { fade } from "svelte/transition";

  const removeFromList = (i) => {
    $list = $list.filter((_, arrIdx) => arrIdx !== i);
    $focus = true;
  };

  const clearAll = () => {
    const isConfirmed = confirm("Are you sure you want to remove all items?");
    isConfirmed && ($list = []);
    $focus = true;
  };

  const handleInput = (newSelection) => {
    if (newSelection >= 0) {
      $selectedItem = newSelection;
      $value = $list[$selectedItem];
      $focus = true;
    }
  };
</script>

{#if $list.length}
  <ul>
    {#each $list as item, i (i)}
      <div
        in:fade={{ delay: 100, duration: 100 }}
        out:fade={{ delay: 0, duration: 100 }}
      >
        <li on:click={() => handleInput(i)}>{item}</li>
        <span on:click={() => removeFromList(i)}>X</span>
      </div>
    {/each}
  </ul>

  <button on:click={() => clearAll()}> Clear All </button>
{/if}

<style>
  ul {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    margin: 1em 0;
  }
  li {
    overflow: hidden;
    word-wrap: break-word;
    padding-right: 2.5em;
    line-height: 1.5;
  }
  div {
    display: flex;
    justify-content: space-between;
    margin: 1em;
  }
  li,
  span,
  button {
    list-style: none;
    cursor: pointer;
  }
  ul span {
    position: absolute;
    right: 0;
    width: 1.5em;
    height: 1.5em;
    line-height: 1.5em;
    color: #ff8d1e;
    font-weight: bold;
    text-align: center;
    transition: transform 100ms ease-in-out;
    transform-origin: center;
  }
  ul span:hover {
    background-color: hsl(30, 100%, 56%);
    color: white;
    border-radius: 50%;
    transform: scale(1.5) rotate(90deg);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.24);
    cursor: pointer;
  }
  button {
    padding: 1em;
    background: #ff8d1e;
    border-radius: 8px;
    color: white;
    font-weight: bold;
    font-size: 1em;
    outline: none;
    border: none;
  }
  button:hover {
    background-image: linear-gradient(
      to bottom,
      transparent,
      rgba(0, 0, 0, 0.1)
    );
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.24);
  }
</style>
