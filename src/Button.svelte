<script>
  export let isUpdateMode = false;
  export let value = "";
</script>

<button disabled={!value} on:click>
  {isUpdateMode ? "Update" : "Add"} Item
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
    background: #ccc;
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
