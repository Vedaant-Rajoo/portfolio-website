<script>
	import {Heading } from 'flowbite-svelte';
    /**
	 * @type {any}
	 */
	let className;
	export { className as class };
</script>
<Heading tag="h1" class="{className} ml-8 self-center">
    <div class="grid grid-cols-2 grid-flow-row gap-6">
        <div class="lineUp">
            <span class="underh">
                FULL-STACK DEVELOPER
            </span>
        </div>
        <div class="col-span-1 h-52 fade-in-image">
            <img src="https://ucarecdn.com/70929eda-3257-4ea3-ab7e-e1a9157e1eb0/-/preview/-/rasterize/" alt="dood" class="w-full h-full object-contain">
        </div>
        <div class="fade-in-image">
            <img src="https://ucarecdn.com/540f77aa-83be-45c4-871a-77945d1bfb88/vr.png" alt="">
        </div>
        <div class="pt-20 lineUp">
            <span class="underh">
                VEDAANT RAJOO
            </span>
        </div>  
    </div>
    
</Heading>


<style>
    .underh {
        padding: 0 5px;
        box-shadow: inset 0 -0.5em 0 0 #FDC890;
        transition: all 0.2s ease-in;
        font-size: 1.5em;
        font-weight: 400;
    }
    .underh:hover {
        transition: all 0.2s ease-in;
        box-shadow: inset 0 -0.8em 0 0 #FDC890;
    }
    .fade-in-image {
        animation: fadeIn ease 5s;
        -webkit-animation: fadeIn ease 5s;
        -moz-animation: fadeIn ease 5s;
        -o-animation: fadeIn ease 5s;
        -ms-animation: fadeIn ease 5s;
    }
    @keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
    }
    .lineUp {
    animation: 5s anim-lineUp ease-in forwards;
}
@keyframes anim-lineUp {
  0% {
    opacity: 0;
    transform: translateY(80%);
  }
  20% {
    opacity: 0;
  }
  50% {
    opacity: 1;
    transform: translateY(0%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
</style>
