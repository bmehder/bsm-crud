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
    return handleInput();
  };

  const removeFromList = (i) => {
    list = list.filter((_, arrIdx) => arrIdx !== i);
    return handleInput();
  };

  const clearAll = () => {
    const isConfirmed = confirm("Are you sure you want to remove all items?");
    isConfirmed && (list = []);
    return handleInput();
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
  <Header title="CRUD App+" subTitle="w/ Local Storage" />

  <Input bind:value {focus} />

  <Button on:click={addToList} {isUpdateMode} {value} />

  <List
    on:handleinput={(e) => handleInput(e.detail)}
    on:removeitem={(e) => removeFromList(e.detail)}
    on:clearall={(e) => clearAll()}
    {list}
  />
</main>
