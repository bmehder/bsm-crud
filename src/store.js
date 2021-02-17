import { writable } from "svelte/store";

const list = writable([]);
const focus = writable(false);
const value = writable("");

export { list, focus, value };
