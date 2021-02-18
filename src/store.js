import { writable } from "svelte/store";

const list = writable([]);
const focus = writable(false);
const value = writable("");
const isUpdateMode = writable();
const selectedItem = writable(null);

export { list, focus, value, isUpdateMode, selectedItem };
