<template>
  <ul class="flex space-x-5">
    <li
      v-for="socialNetwork in socialNetworks"
      :key="socialNetwork.href"
      class="h-full"
    >
      <a
        class="h-full block text-white hover:text-lime"
        :href="socialNetwork.href"
        target="_blank"
        rel="noreferrer"
        data-cursor-hover
        @click="() => trackGoal(socialNetwork.eventId)"
        v-html="socialNetwork.icon"
      ></a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import twitterIcon from '~/assets/logos/twitter.svg?raw';
import githubIcon from '~/assets/logos/github.svg?raw';
import meetupIcon from '~/assets/logos/meetup.svg?raw';
import youtubeIcon from '~/assets/logos/youtube.svg?raw';
import instagramIcon from '~/assets/logos/instagram.svg?raw';
import {
  OPEN_GITHUB_EVENT_ID,
  OPEN_INSTAGRAM_EVENT_ID,
  OPEN_MEETUP_EVENT_ID,
  OPEN_TWITTER_EVENT_ID,
  OPEN_YOUTUBE_EVENT_ID,
} from '../config';
import { trackGoal } from '../helpers';

const socialNetworks = [
  {
    label: 'Twitter',
    icon: twitterIcon,
    href: 'https://twitter.com/programmierbar',
    eventId: OPEN_TWITTER_EVENT_ID,
  },
  {
    label: 'GitHub',
    icon: githubIcon,
    href: 'https://github.com/programmierbar',
    eventId: OPEN_GITHUB_EVENT_ID,
  },
  {
    label: 'Meetup',
    icon: meetupIcon,
    href: 'https://www.meetup.com/de-DE/programmierbar/',
    eventId: OPEN_MEETUP_EVENT_ID,
  },
  {
    label: 'YouTube',
    icon: youtubeIcon,
    href: 'https://www.youtube.com/channel/UCi9Odm-45QGUBRs5KiF1-HQ',
    eventId: OPEN_YOUTUBE_EVENT_ID,
  },
  {
    label: 'Instagram',
    icon: instagramIcon,
    href: 'https://www.instagram.com/programmier.bar',
    eventId: OPEN_INSTAGRAM_EVENT_ID,
  },
];
</script>
