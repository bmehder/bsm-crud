<script>
  export let title = "";
  export let subTitle = "";
</script>

<h1>
  <span>{title}</span><br />{subTitle}
</h1>

<style>
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
</style>
