<script>
  import { value } from "./store";

  export let isUpdateMode = false;
  $value;
</script>

<button disabled={!$value} on:click>
  {isUpdateMode ? "Update Item" : "Add Item"}
</button>

<!-- <button disabled={!$value} on:click> -->
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
