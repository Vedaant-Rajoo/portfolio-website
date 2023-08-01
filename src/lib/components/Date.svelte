<script>
    import {format, parseISO} from 'date-fns';
    export let dateString;
    let date = parseISO(dateString)
    $: formattedDate = format(new Date(date), 'LLLL d, yyyy');
</script>

<time datetime="{dateString}">{formattedDate}</time>


