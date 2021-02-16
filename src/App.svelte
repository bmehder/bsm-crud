<script>
  import { onMount } from "svelte";
  import { afterUpdate } from "svelte";
  import Header from "./Header.svelte";
  import Input from "./Input.svelte";
  import Button from "./Button.svelte";
  import List from "./List.svelte";

  let value;
  let focus = false;
  let list = [];
  let selectedItem = null;

  $: isUpdateMode = selectedItem !== null;

  const addToList = () => {
    value &&
      (isUpdateMode ? (list[selectedItem] = value) : (list = [...list, value]));
    handleInput();
  };

  const removeFromList = (i) => {
    list = list.filter((_, arrIdx) => arrIdx !== i);
    handleInput();
  };

  const handleInput = (newSelection) => {
    if (newSelection >= 0) {
      selectedItem = newSelection;
      value = list[selectedItem];
    } else {
      selectedItem = null;
      value = "";
    }
    focus = true;
  };

  const clearAll = () => {
    const isConfirmed = confirm("Are you sure you want to remove all items?");
    isConfirmed && (list = []);
    handleInput();
  };

  onMount(() => {
    list =
      localStorage.getItem("list") !== null &&
      localStorage.getItem("list") !== ""
        ? localStorage.getItem("list").split(",")
        : [];
  });

  afterUpdate(() => {
    localStorage.setItem("list", list);
    focus = false;
  });
</script>

<svelte:window on:keydown={(e) => e.code === "Enter" && value && addToList()} />

<main>
  <Header title="CRUD App" subTitle="w/ Local Storage" />

  <Input {focus} bind:value />

  <Button {isUpdateMode} {value} on:click={addToList} />

  <List
    {list}
    on:handleinput={(e) => handleInput(e.detail)}
    on:removeitem={(e) => removeFromList(e.detail)}
    on:clearall={(e) => clearAll()}
  />
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
</style>
