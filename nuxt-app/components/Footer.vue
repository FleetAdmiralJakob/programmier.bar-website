<template>
  <footer
    class="lg:flex bg-gray-900 py-12 lg:pt-24 px-6 lg:px-8 space-y-6 lg:space-y-0 lg:space-x-8"
  >
    <!-- Logo -->
    <div class="lg:w-1/4">
      <NuxtLink class="inline-block" to="/" data-cursor-hover>
        <div class="h-6 lg:h-8" alt="programmier.bar Logo" v-html="brandLogo" />
      </NuxtLink>
    </div>

    <div class="lg:w-3/4 space-y-6 lg:space-y-10">
      <nav class="lg:space-y-10">
        <!-- Main menu -->
        <ul class="hidden lg:flex space-x-8">
          <li v-for="mainMenuItem in mainMenuItems" :key="mainMenuItem.href">
            <NuxtLink
              class="text-white hover:text-lime text-xl xl:text-2xl font-black whitespace-nowrap"
              data-cursor-hover
              :to="mainMenuItem.href"
            >
              {{ mainMenuItem.label }}
            </NuxtLink>
          </li>
        </ul>

        <div
          class="flex flex-col-reverse lg:flex-row lg:justify-between lg:items-baseline"
        >
          <!-- Sub menu -->
          <ul class="flex space-x-5 lg:space-x-8 mt-6 lg:mt-0">
            <li v-for="subMenuItem in subMenuItems" :key="subMenuItem.href">
              <NuxtLink
                class="text-white hover:text-lime hover:underline text-sm lg:text-xl"
                data-cursor-hover
                :to="subMenuItem.href"
                >{{ subMenuItem.label }}</NuxtLink
              >
            </li>
          </ul>

          <!-- Social networks -->
          <SocialNetworks class="h-8" />
        </div>
      </nav>

      <!-- Divider -->
      <hr />

      <!-- Copyright -->
      <div class="text-white font-light italic text-sm lg:text-xl">
        &copy; {{ fullYear }} Lotum media GmbH
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import brandLogo from '~/assets/images/brand-logo.svg?raw';
import SocialNetworks from './SocialNetworks.vue';

const mainMenuItems = [
  { label: 'Home', href: '/' },
  { label: 'Podcast', href: '/podcast' },
  { label: 'Meetup', href: '/meetup' },
  { label: 'Hall of Fame', href: '/hall-of-fame' },
  { label: 'Pick of the Day', href: '/pick-of-the-day' },
  { label: 'Über uns', href: '/ueber-uns' },
];
const subMenuItems = [
  { label: 'Kontakt', href: '/kontakt' },
  { label: 'Impressum', href: '/impressum' },
  { label: 'Datenschutz', href: '/datenschutz' },
];
const fullYear = new Date().getFullYear();
</script>
