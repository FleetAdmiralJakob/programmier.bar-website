/* eslint-disable no-redeclare */
import { computed, Ref, unref, useStatic } from '@nuxtjs/composition-api';
import {
  StrapiAboutPage,
  StrapiContactPage,
  StrapiHallOfFamePage,
  StrapiHomePage,
  StrapiImprintPage,
  StrapiMeetup,
  StrapiMeetupPage,
  StrapiMember,
  StrapiPickOfTheDay,
  StrapiPickOfTheDayPage,
  StrapiPodcast,
  StrapiPodcastPage,
  StrapiPrivacyPage,
  StrapiSpeaker,
} from 'shared-code';
import { getHashCode } from '../helpers';

// Members
export function useStrapi(route: 'members'): Ref<StrapiMember[] | null>;
export function useStrapi(
  route: 'members',
  param?: Ref<`/${string}`>
): Ref<StrapiMember | null>;

// Speakers
export function useStrapi(
  route: 'speakers',
  param?: '?_limit=-1'
): Ref<StrapiSpeaker[] | null>;
export function useStrapi(
  route: 'speakers',
  param?: Ref<`/${string}`>
): Ref<StrapiSpeaker | null>;
export function useStrapi(
  route: 'speakers',
  param?: '/count'
): Ref<number | null>;

// Podcasts
export function useStrapi(
  route: 'podcasts',
  param?:
    | Ref<`?${string}&_sort=published_at:DESC` | `?_limit=${number}`>
    | '?_limit=-1'
): Ref<StrapiPodcast[] | null>;
export function useStrapi(
  route: 'podcasts',
  param: Ref<`/${string}`>
): Ref<StrapiPodcast | null>;
export function useStrapi(
  route: 'podcasts',
  param: '/count'
): Ref<number | null>;

// Meetups
export function useStrapi(
  route: 'meetups',
  param?: `?${string}`
): Ref<StrapiMeetup[] | null>;
export function useStrapi(
  route: 'meetups',
  param: Ref<`/${string}`>
): Ref<StrapiMeetup | null>;
export function useStrapi(
  route: 'meetups',
  param: '/count'
): Ref<number | null>;

// Picks of the Day
export function useStrapi(
  route: 'picks-of-the-day',
  param?: '?_limit=-1'
): Ref<StrapiPickOfTheDay[] | null>;
export function useStrapi(
  route: 'picks-of-the-day',
  param: '/count'
): Ref<number | null>;

// Pages
export function useStrapi(route: 'home-page'): Ref<StrapiHomePage | null>;
export function useStrapi(route: 'podcast-page'): Ref<StrapiPodcastPage | null>;
export function useStrapi(route: 'meetup-page'): Ref<StrapiMeetupPage | null>;
export function useStrapi(
  route: 'hall-of-fame-page'
): Ref<StrapiHallOfFamePage | null>;
export function useStrapi(
  route: 'pick-of-the-day-page'
): Ref<StrapiPickOfTheDayPage | null>;
export function useStrapi(route: 'about-page'): Ref<StrapiAboutPage | null>;
export function useStrapi(route: 'contact-page'): Ref<StrapiContactPage | null>;
export function useStrapi(route: 'imprint-page'): Ref<StrapiImprintPage | null>;
export function useStrapi(route: 'privacy-page'): Ref<StrapiPrivacyPage | null>;

/**
 * Composable to fetch the website data from our Strapi CMS.
 *
 * @param route The API route.
 * @param param The API parameter.
 *
 * @returns The requested data.
 */
export function useStrapi(route: string, param?: Ref<string> | string) {
  const hashCode = computed(() =>
    unref(param) ? `${getHashCode(unref(param))}` : 'list'
  );
  return useStatic(
    async () => {
      try {
        const response = await fetch(
          `${process.env.NUXT_ENV_STRAPI_CMS}/${route}${unref(param) || ''}`
        );
        const data = await response.json();
        if (process.env.NUXT_ENV_STRAPI_CMS?.includes('http://localhost')) {
          return JSON.parse(
            JSON.stringify(data).replace(
              /"url":"\/uploads\//g,
              `"url":"${process.env.NUXT_ENV_STRAPI_CMS}/uploads/`
            )
          );
        }
        return data;
      } catch {
        return null;
      }
    },
    hashCode,
    route
  );
}
