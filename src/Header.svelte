<script>
  export let title = "";
  export let subTitle = "";
</script>

<h1>
  <span>{title}</span><br />
  {subTitle}
</h1>

<style>
  h1 {
    margin: 1em 0;
    padding: 2em 0;
    background-image: linear-gradient(
      to bottom,
      transparent,
      rgba(204, 204, 204, 0.5)
    );
    color: #606060;
    font-size: 1em;
    font-weight: 300;
    line-height: 2em;
    text-align: center;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.24);
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  span {
    font-size: 2em;
    font-weight: normal;
    text-transform: uppercase;
    letter-spacing: 0.4em;
  }
</style>
