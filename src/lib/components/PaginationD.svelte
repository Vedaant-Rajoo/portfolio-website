<script>
    const previous = () => {
      alert('Previous btn clicked. Make a call to your server to fetch data.');
    };
    const next = () => {
      alert('Next btn clicked. Make a call to your server to fetch data.');
    };
    /**
	 * @type {any}
	 */
	let className;
	export { className as class };
</script>

<div class="{className} fixed bottom-0 left-0 w-full flex justify-center space-x-4 py-2 bg-inherit">
    <button class="px-2 py-2 text-lg" on:click={previous}>
        <svg 
        width="24" 
        height="24" 
        xmlns="http://www.w3.org/2000/svg" 
        fill-rule="evenodd" 
        clip-rule="evenodd">
        <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-4.828 11.5l4.608 3.763-.679.737-6.101-5 6.112-5 .666.753-4.604 3.747h11.826v1h-11.828z"/></svg>
    </button>
    <button class="px-2 py-2 scale-110" on:click={next}>
        <svg width="24" 
            height="24" 
            xmlns="http://www.w3.org/2000/svg" 
            fill-rule="evenodd" 
            clip-rule="evenodd">
            <path d="M12 0c-6.623 0-12 5.377-12 12s5.377 12 12 12 12-5.377 12-12-5.377-12-12-12zm0 1c-6.071 0-11 4.929-11 11s4.929 11 11 11 11-4.929 11-11-4.929-11-11-11zm4.828 11.5l-4.608 3.763.679.737 6.101-5-6.112-5-.666.753 4.604 3.747h-11.826v1h11.828z"/></svg>
    </button>
</div>