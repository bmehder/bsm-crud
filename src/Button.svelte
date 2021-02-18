<script>
  import { value, isUpdateMode, list, selectedItem, focus } from "./store";

  $: $isUpdateMode = $selectedItem !== null;

  const addToList = () => {
    $value &&
      ($isUpdateMode
        ? ($list[$selectedItem] = $value)
        : ($list = [...$list, $value]));
    $selectedItem = null;
    $value = "";
  };
</script>

<svelte:window
  on:keydown={(e) => e.code === "Enter" && $value && addToList($value)}
/>

<button
  disabled={!$value}
  on:click={() => {
    addToList($value);
  }}
>
  {$isUpdateMode ? "Update Item" : "Add Item"}
</button>

<style>
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
    background: #eee;
    color: #aaa;
    box-shadow: none;
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
