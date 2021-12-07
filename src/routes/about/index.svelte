<script>
    const PAGE_TITLE = `About - Safari Wallet`;
    const CANONICAL_URL = `https://safariwallet.org/about/`;
</script>

<svelte:head>
    <title>{PAGE_TITLE}</title>
    <meta property="og:title" content={PAGE_TITLE}>
    <meta name="twitter:title" content={PAGE_TITLE}>
    <link rel="canonical" href={CANONICAL_URL}>
    <meta property="og:url" content={CANONICAL_URL}>
    <meta name="twitter:url" content={CANONICAL_URL}>
</svelte:head>

<section class="py-10 bg-white sm:py-16 lg:py-24">
    <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div class="mx-auto text-left md:max-w-lg lg:max-w-2xl md:text-center">
            <h1 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
                With Safari Wallet, anyone can
                <span class="relative inline-block">
                    <span class="absolute inline-block w-full h-2 bg-green-300 bottom-1.5"></span>
                    <span class="relative">become an Etherean</span>
                </span>
            </h1>
        </div>
        <div class="mt-8 md:mt-20">
            <div>
                <h2 class="text-lg font-semibold text-gray-900">This page will be filled out shortly.</h2>
                <p class="mt-4 text-lg text-gray-700">Awkwardly, the time to do so has not come yet.</p>
            </div>
        </div>
    </div>
</section>

