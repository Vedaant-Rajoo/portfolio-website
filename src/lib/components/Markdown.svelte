<script>
  import {Marked} from "marked";
  import hljs from "highlight.js";
  import "highlight.js/styles/atom-one-dark.css";
  
  export let markdown = '';
  export let marked = new Marked({
    // @ts-ignore
    highlight: function (code, lang) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    },
    breaks: true,
    gfm: true,
    xhtml: true,
  });
</script>
<div class="m-8">
  <article class="prose">
    {@html marked.parse(markdown)}
  </article>
</div>

