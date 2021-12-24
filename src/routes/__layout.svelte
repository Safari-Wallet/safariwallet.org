<script context="module">
    import { browser, dev } from '$app/env';
    export const hydrate = dev;
    export const router = browser;
    export const prerender = true;
</script>

<script>
    import '../tailwind.css';
    import '@fortawesome/fontawesome-free/css/all.min.css';
    import '$lib/global.scss';

    let menuOpen = false;

    const toggleMenu = () => {
        menuOpen = !menuOpen;
    };
</script>

<div class="bg-gray-50">
    <header class="py-4 md:py-6">
        <div class="container px-4 mx-auto sm:px-6 lg:px-8">
            <div class="flex items-center justify-between">
                <div class="flex-shrink-0">
                    <a class="flex items-center transition-all text-base font-bold text-gray-900 duration-200 rounded focus:outline-none hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2" href="/" sveltekit:prefetch>
                        <img src="/appicon.png" class="w-12 h-12 mr-2" alt="Safari Wallet Logo">Safari Wallet</a>
                </div>
                <div class="flex lg:hidden">
                    <button class="text-gray-900" on:click={toggleMenu}>
                        <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
                <div class="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10 xl:space-x-16">
                    <a class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2" href="/forks/" sveltekit:prefetch>Forks</a>
                    <a class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2" href="/license/" sveltekit:prefetch>License</a>
                    <a class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2" href="/about/" sveltekit:prefetch>About</a>
                </div>
                <div class="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10">
                    <a class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2" href="https://github.com/Safari-Wallet" rel="external noopener" target="_blank"><i class="fab fa-github mr-2" />GitHub</a>
                    <a class="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" href="https://bit.ly/3H8wf9k" rel="external noopener" target="_blank">Join Community</a>
                </div>
            </div>
        </div>
    </header>
    {#if !!menuOpen}
        <div class="w-full bg-gray-50 flex flex-col items-center justify-center pb-8 lg:hidden">
            <a class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2" href="/forks/" sveltekit:prefetch>Forks</a>
            <a class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2" href="/license/" sveltekit:prefetch>License</a>
            <a class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2" href="/about/" sveltekit:prefetch>About</a>
            <a class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2" href="https://github.com/Safari-Wallet" rel="external noopener" target="_blank"><i class="fab fa-github mr-2" />GitHub</a>
            <a class="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" href="https://bit.ly/3H8wf9k" rel="external noopener" target="_blank">Join Community</a>
        </div>
    {/if}
    <slot />
</div>
