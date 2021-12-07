<script>
    import forks from '$lib/forks';

    let downloads = 0;
    let members = `470+`; // # of Quill members

    const PAGE_TITLE = `Safari Wallet`;
    const CANONICAL_URL = `https://safariwallet.org`;
</script>

<svelte:head>
    <title>{PAGE_TITLE}</title>
    <meta property="og:title" content={PAGE_TITLE}>
    <meta name="twitter:title" content={PAGE_TITLE}>
    <link rel="canonical" href={CANONICAL_URL}>
    <meta property="og:url" content={CANONICAL_URL}>
    <meta name="twitter:url" content={CANONICAL_URL}>
</svelte:head>

<section class="py-12 bg-gray-50 sm:py-16">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
            <h1 class="px-6 text-lg text-gray-600 font-inter">A forkable EVM wallet for everyone</h1>
            <p class="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj">
                EVM protocol onboarding for
                <span class="relative inline-flex sm:inline">
                    <span class="bg-gradient-to-r from-from via-via to-to blur-xl opacity-50 w-full h-full absolute inset-0" style="filter: blur(24px);" />
                    <span class="relative">billions</span>
                </span>
            </p>
            <div class="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
                <a class="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" href="https://app.quill.chat/invite/8044475636632951887/868165620104815169/8110909347794257621/?openlink" rel="external noopener" target="_blank">
                    Join Community
                </a>
                <a class="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-gray-900 transition-all duration-200 border-2 border-gray-400 sm:w-auto sm:mt-0 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 focus:bg-gray-900 hover:text-white focus:text-white hover:border-gray-900 focus:border-gray-900" href="/forks/" sveltekit:prefetch>
                    Explore Forks
                    <svg class="w-5 h-5 ml-2 mt-1" viewBox="0 0 18 18" fill="none" stroke="currentColor">
                        <path d="M8.18003 13.4261C6.8586 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.8586 2.85821 8.18003 3.82387L12.5403 7.01022C13.6336 7.80916 13.6336 9.44084 12.5403 10.2398L8.18003 13.4261Z" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </a>
            </div>
            <p class="mt-8 text-base text-gray-500 font-inter">Open Source · Mainstream Ready · Mobile First</p>
        </div>
    </div>
</section>
<section class="py-10 bg-white sm:py-16 lg:py-24">
    <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Bringing Ethereum to Mobile</h2>
            <p class="mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">Ethereum should be just accessible in your pocket and on the go, not just on desktop devices.</p>
        </div>
        <div class="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
            <div>
                <h3 class="font-bold text-7xl">
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-from to-via">{forks.length}</span>
                </h3>
                <p class="mt-4 text-xl font-medium text-gray-900">Open-source forks</p>
            </div>
            <div>
                <h3 class="font-bold text-7xl">
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-from via-via to-to">{downloads}</span>
                </h3>
                <p class="mt-4 text-xl font-medium text-gray-900">Total downloads</p>
            </div>
            <div>
                <h3 class="font-bold text-7xl">
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-via to-to">{members}</span>
                </h3>
                <p class="mt-4 text-xl font-medium text-gray-900">Community members</p>
            </div>
        </div>
    </div>
</section>
<section class="py-10 bg-white sm:py-16 lg:py-24">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 text-center sm:grid-cols-2 gap-y-8 lg:grid-cols-4 sm:gap-12">
            <div>
                <div class="flex items-center justify-center w-20 h-20 mx-auto bg-blue-100 rounded-full">
                    <i class="text-blue-600 text-2xl fas fa-fingerprint" />
                </div>
                <h3 class="mt-8 text-lg font-semibold text-black">Secure & Isolated</h3>
                <p class="mt-4 text-sm text-gray-600">Private keys and mnemonic files are kept safe in a keystore isolated from the rest of the device.</p>
            </div>
            <div>
                <div class="flex items-center justify-center w-20 h-20 mx-auto bg-orange-100 rounded-full">
                    <i class="text-orange-600 text-2xl fas fa-bolt" />
                </div>
                <h3 class="mt-8 text-lg font-semibold text-black">Fast & Native</h3>
                <p class="mt-4 text-sm text-gray-600">Built using SwiftUI, Safari Wallet stays as Apple-native as possible, while making high performance a priority.</p>
            </div>
            <div>
                <div class="flex items-center justify-center w-20 h-20 mx-auto bg-green-100 rounded-full">
                    <i class="text-green-600 text-2xl fas fa-moon" />
                </div>
                <h3 class="mt-8 text-lg font-semibold text-black">Light & Dark Mode</h3>
                <p class="mt-4 text-sm text-gray-600">If your wallet doesn't have light mode and dark mode out-of-the-box, is it really even a wallet?</p>
            </div>
            <div>
                <div class="flex items-center justify-center w-20 h-20 mx-auto bg-red-100 rounded-full">
                    <i class="text-red-600 text-2xl fas fa-puzzle-piece" />
                </div>
                <h3 class="mt-8 text-lg font-semibold text-black">Non-Opinionated</h3>
                <p class="mt-4 text-sm text-gray-600">From DeFi-focused wallets to gaming-focused wallets, Safari Wallet is a fresh and non-opinionated starting point to fork.</p>
            </div>
        </div>
    </div>
</section>
<section class="py-10 bg-white sm:py-16 lg:py-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="max-w-2xl mx-auto text-center">
            <svg class="mx-auto w-14 h-14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
            </svg>
            <h2 class="mt-10 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Download via TestFlight</h2>
            <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Want to give the latest version of Safari Wallet a spin?<br>You've come to the right place.</p>
        </div>
        <div class="flex flex-col items-center justify-center mt-8 space-y-4 md:space-y-0 md:space-x-4 md:flex-row lg:mt-12">
            <a class="inline-flex items-center justify-center px-4 py-4 text-black transition-all duration-200 border-2 border-black rounded-md hover:bg-black hover:text-white focus:bg-black focus:text-white" href="#" on:click={() => alert(`Coming soon!`)}>
                <svg class="w-6 h-6 mr-2 -ml-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.665 16.811a10.316 10.316 0 0 1-1.021 1.837c-.537.767-.978 1.297-1.316 1.592-.525.482-1.089.73-1.692.744-.432 0-.954-.123-1.562-.373-.61-.249-1.17-.371-1.683-.371-.537 0-1.113.122-1.73.371-.616.25-1.114.381-1.495.393-.577.025-1.154-.229-1.729-.764-.367-.32-.826-.87-1.377-1.648-.59-.829-1.075-1.794-1.455-2.891-.407-1.187-.611-2.335-.611-3.447 0-1.273.275-2.372.826-3.292a4.857 4.857 0 0 1 1.73-1.751 4.65 4.65 0 0 1 2.34-.662c.46 0 1.063.142 1.81.422s1.227.422 1.436.422c.158 0 .689-.167 1.593-.498.853-.307 1.573-.434 2.163-.384 1.6.129 2.801.759 3.6 1.895-1.43.867-2.137 2.08-2.123 3.637.012 1.213.453 2.222 1.317 3.023a4.33 4.33 0 0 0 1.315.863c-.106.307-.218.6-.336.882zM15.998 2.38c0 .95-.348 1.838-1.039 2.659-.836.976-1.846 1.541-2.941 1.452a2.955 2.955 0 0 1-.021-.36c0-.913.396-1.889 1.103-2.688.352-.404.8-.741 1.343-1.009.542-.264 1.054-.41 1.536-.435.013.128.019.255.019.381z" />
                </svg>
                Download for iOS
            </a>
            <a class="inline-flex items-center justify-center px-4 py-4 text-black transition-all duration-200 border-2 border-black rounded-md hover:bg-black hover:text-white focus:bg-black focus:text-white" href="#" on:click={() => alert(`Coming soon!`)}>
                <svg class="w-6 h-6 mr-2 -ml-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.665 16.811a10.316 10.316 0 0 1-1.021 1.837c-.537.767-.978 1.297-1.316 1.592-.525.482-1.089.73-1.692.744-.432 0-.954-.123-1.562-.373-.61-.249-1.17-.371-1.683-.371-.537 0-1.113.122-1.73.371-.616.25-1.114.381-1.495.393-.577.025-1.154-.229-1.729-.764-.367-.32-.826-.87-1.377-1.648-.59-.829-1.075-1.794-1.455-2.891-.407-1.187-.611-2.335-.611-3.447 0-1.273.275-2.372.826-3.292a4.857 4.857 0 0 1 1.73-1.751 4.65 4.65 0 0 1 2.34-.662c.46 0 1.063.142 1.81.422s1.227.422 1.436.422c.158 0 .689-.167 1.593-.498.853-.307 1.573-.434 2.163-.384 1.6.129 2.801.759 3.6 1.895-1.43.867-2.137 2.08-2.123 3.637.012 1.213.453 2.222 1.317 3.023a4.33 4.33 0 0 0 1.315.863c-.106.307-.218.6-.336.882zM15.998 2.38c0 .95-.348 1.838-1.039 2.659-.836.976-1.846 1.541-2.941 1.452a2.955 2.955 0 0 1-.021-.36c0-.913.396-1.889 1.103-2.688.352-.404.8-.741 1.343-1.009.542-.264 1.054-.41 1.536-.435.013.128.019.255.019.381z" />
                </svg>
                Download for macOS
            </a>
        </div>
        <p class="mt-6 text-base text-center text-gray-600">Experience Ethereum on mobile like never before</p>
    </div>
</section>

<style>
    .text-transparent {
        color: transparent;
    }
</style>
