import { onMounted, ref } from '@nuxtjs/composition-api';

/**
 * Composable for secure access of the window object.
 *
 * @returns A reference to the window object.
 */
export function useWindow() {
  const _window = ref<Window>();

  onMounted(() => {
    _window.value = window;
  });

  return _window;
}
