<script>
    import forks from '$lib/forks';

    const PAGE_TITLE = `Forks - Safari Wallet`;
    const CANONICAL_URL = `https://safariwallet.org/forks/`;
</script>

<svelte:head>
    <title>{PAGE_TITLE}</title>
    <meta property="og:title" content={PAGE_TITLE}>
    <meta name="twitter:title" content={PAGE_TITLE}>
    <link rel="canonical" href={CANONICAL_URL}>
    <meta property="og:url" content={CANONICAL_URL}>
    <meta name="twitter:url" content={CANONICAL_URL}>
</svelte:head>

<section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Open-source Forks</h2>
            <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Anyone is welcome to fork and share Safari Wallet, so long as it follows the terms in our copyleft <a class="text-indigo-600 hover:underline" href="/license/" sveltekit:prefetch>license</a>. You can add your fork to this site <a class="text-indigo-600 hover:underline" href="https://github.com/Safari-Wallet/safariwallet.org/blob/master/src/lib/forks.json" rel="external noopener" target="_blank">here</a>.</p>
        </div>
        <div class="grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {#each forks as fork}
                <div class="overflow-hidden bg-white rounded shadow">
                    <div class="p-8">
                        <div class="flex items-center">
                            <img class="flex-shrink-0 w-12 h-auto bg-black" src={fork.logo} alt="{fork.name} Logo">
                            <div class="ml-5 mr-auto">
                                <p class="text-xl font-semibold text-black">{fork.name}</p>
                                <p class="mt-px text-sm text-gray-600">{fork.purpose}</p>
                            </div>
                            <svg class="block w-6 h-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                        <p class="text-base leading-relaxed text-gray-600 mt-7">{fork.description}</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
