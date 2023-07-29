<script>
  import MarkdownIt from "markdown-it";
  import hljs from "highlight.js";
  import "highlight.js/styles/github.css";
  
  export let markdown = '';
  const md = new MarkdownIt({
    // @ts-ignore
    highlight: function (str,lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(str, { language: lang }).value;
        } catch (e) {
            console.error(e);
        }
      }
      return ''; // use external default escaping
    },
  });
  const rendered = md.render(markdown);
</script>

<div>
    {@html rendered}
</div>
