const server = Bun.serve({
  hostname: "localhost",
  port: 3000,
  fetch: fetchHandler,
});

console.log(`Bun Todo running on ${server.hostname}:${server.port}`);

async function fetchHandler(request) {
  const url = new URL(request.url);

  // Serve the CSS file
  if (url.pathname.endsWith('/styles.css')) {
    return new Response(Bun.file("styles.css"), {'Content-Type': 'text/css'});
  }

  // Serve the JS file
    if (url.pathname.endsWith('/script.js')) {
        return new Response(Bun.file("script.js"), {'Content-Type': 'text/javascript'});
    }

  // Serve the HTML file
  return new Response(Bun.file("index.html"), {'Content-Type': 'text/html'});
}
