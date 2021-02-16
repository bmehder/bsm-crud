<script>
  import { afterUpdate } from "svelte";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  let input, value;
  let list = [];
  let selectedItem = null;
  $: isUpdateMode = selectedItem !== null;

  const getListFromLocalStorage = () =>
    (list =
      localStorage.getItem("list") !== null &&
      localStorage.getItem("list") !== ""
        ? localStorage.getItem("list").split(",")
        : []);

  const saveToLocalStorage = () => localStorage.setItem("list", list);

  const addToList = () => {
    if (value) {
      isUpdateMode ? (list[selectedItem] = value) : (list = [...list, value]);
    }
    saveToLocalStorage();
    handleInput();
  };

  const removeFromList = (i) => {
    list = list.filter((item, arrIdx) => arrIdx !== i);
    saveToLocalStorage();
    handleInput();
  };

  const handleInput = (selected) => {
    if (selected >= 0) {
      selectedItem = selected;
      value = list[selectedItem];
    } else {
      selectedItem = null;
      value = "";
    }
  };

  const clearAll = () => {
    const isConfirmed = confirm("Are you sure you want to remove all items?");
    if (isConfirmed) list = [];
    saveToLocalStorage();
    // focusOnInput();
  };

  const focusOnInput = () => input.focus();

  onMount(() => getListFromLocalStorage());

  afterUpdate(() => focusOnInput());
</script>

<svelte:window on:keydown={(e) => e.code === "Enter" && value && addToList()} />

<main>
  <h1>
    <span>CRUD App</span><br />w/ Local Storage
  </h1>
  <input bind:this={input} bind:value />
  <button disabled={!value} on:click={addToList}>
    {isUpdateMode ? "Update" : "Add"} Item
  </button>

  {#if list.length}
    <ul>
      {#each list as item, i (i)}
        <div
          in:fade={{ delay: 100, duration: 100 }}
          out:fade={{ delay: 0, duration: 100 }}
        >
          <li on:click={() => handleInput(i)}>{item}</li>
          <span on:click={() => removeFromList(i)}>X</span>
        </div>
      {/each}
    </ul>

    <button class="clear-btn" on:click={clearAll}>Clear All</button>
  {/if}
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 80px auto 0;
    padding: 2em;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.24);
  }
  h1 {
    margin: 1em 0;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    color: #666;
  }
  h1 span {
    letter-spacing: 0.4em;
    text-transform: uppercase;
    font-size: 32px;
    color: #333;
    cursor: initial;
  }
  input {
    margin-bottom: 1em;
    padding: 1em;
    text-align: center;
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.24);
    border-radius: 8px;
    transition: box-shadow 100ms ease-in-out;
  }
  input:focus {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.24);
  }
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
    color: darkorange;
    font-weight: bold;
    text-align: center;
    transition: transform 100ms ease-in-out;
    transform-origin: center;
  }
  ul span:hover {
    background-color: darkorange;
    color: white;
    border-radius: 50%;
    transform: scale(1.5) rotate(90deg);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.24);
    cursor: pointer;
  }
  button {
    padding: 1em;
    background: dodgerblue;
    border-radius: 8px;
    color: white;
    font-weight: bold;
    font-size: 1em;
    outline: none;
    border: none;
  }
  button:disabled {
    cursor: not-allowed;
    background: #ccc;
    box-shadow: none;
  }
  button.clear-btn {
    background: darkorange;
  }
  button:hover {
    background-image: linear-gradient(
      to bottom,
      transparent,
      rgba(0, 0, 0, 0.1)
    );
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.24);
  }
  button:disabled:hover {
    background-image: none;
    box-shadow: none;
  }
</style>
