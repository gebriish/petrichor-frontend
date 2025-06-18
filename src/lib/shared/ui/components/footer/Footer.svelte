<script>
    const GlobeIcon =   `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-6 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M2 12h20"></path>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                        </svg>`
</script>

<style>    
    @keyframes loopLeftToRight {
        0%, 100% {
            transform: translateX(-100%);
        }
        99.99% {
            transform: translateX(100vw);
        }
    }
    .scroll-item {
        position: absolute;
        white-space: nowrap;
        animation: loopLeftToRight 10s linear infinite;
    }
    
    .item-1 { animation-delay: 0s; }
    .item-2 { animation-delay: -2.5s; }
    .item-3 { animation-delay: -5s; }
    .item-4 { animation-delay: -7.5s; }

</style>

<footer class="bg-black text-white border-t border-b border-white">
    <div class="flex h-10 relative overflow-hidden w-full">
        {#each [1,2,3,4] as n}
            <div class="scroll-item item-{n} flex items-center self-center ">
                {@html GlobeIcon}
                <span class="text-lg ml-2 hidden sm:inline">PETRICHOR</span>
            </div>
        {/each}

    </div>
</footer>