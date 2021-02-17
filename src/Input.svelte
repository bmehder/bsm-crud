<script>
  import { onMount } from "svelte";
  import { value } from "./store";
  import { focus } from "./store";

  $value;

  $focus = false;

  let inputEl;
  const focusOnInput = () => inputEl.focus();

  $: $focus && focusOnInput();

  onMount(() => focusOnInput());
</script>

<input bind:this={inputEl} bind:value={$value} />

<style>
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
</style>
