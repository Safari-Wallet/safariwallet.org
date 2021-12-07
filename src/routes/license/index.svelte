<script>
    const PAGE_TITLE = `License - Safari Wallet`;
    const CANONICAL_URL = `https://safariwallet.org/license/`;
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
                License Things
            </h1>
        </div>
        <div class="mt-8 md:mt-20">
            <div>
                <p class="mt-4 text-lg text-gray-700">The Safari Wallet codebase is currently split into two repositories, <a class="text-indigo-600 hover:underline" href="https://github.com/Safari-Wallet/core" rel="external noopener" target="_blank">core</a> and <a class="text-indigo-600 hover:underline" href="https://github.com/Safari-Wallet/ui" rel="external noopener" target="_blank">ui</a>.</p>
                <p class="mt-4 text-lg text-gray-700">Both of these repositories are licensed under the <a class="text-indigo-600 hover:underline" href="https://www.gnu.org/licenses/gpl-3.0.en.html" rel="external noopener" target="_blank">GNU GPLv3 license</a>.</p>
                <p class="mt-4 text-lg text-gray-700">This website is also <a class="text-indigo-600 hover:underline" href="https://github.com/Safari-Wallet/safariwallet.org" rel="external noopener" target="_blank">open-sourced</a>, but it's instead licensed under the <a class="text-indigo-600 hover:underline" href="https://choosealicense.com/licenses/mit/" rel="external noopener" target="_blank">MIT license</a>.</p>
            </div>
        </div>
    </div>
</section>
