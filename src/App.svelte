<script>
  import { onMount } from "svelte";
  import { afterUpdate } from "svelte";
  import { list, focus } from "./store";
  import Header from "./Header.svelte";
  import Input from "./Input.svelte";
  import Button from "./Button.svelte";
  import List from "./List.svelte";

  onMount(() => {
    $list =
      localStorage.getItem("list") !== null &&
      localStorage.getItem("list") !== ""
        ? localStorage.getItem("list").split(",")
        : [];
  });

  afterUpdate(() => {
    localStorage.setItem("list", $list);
    $focus = true;
  });
  $: console.log(list);
</script>

<main>
  <Header title="CRUD App+" subTitle="w/ Local Storage" />

  <Input />

  <Button />

  <List />
</main>
