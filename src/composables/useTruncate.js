import { computed } from "vue";
export  function useTruncate(text, maxLength = 20) {
    const truncateText = computed(() => {
        if (!text.value) return '';
        if (text.value.length > maxLength) {
            return text.value.substring(0, maxLength) + '...';
        }
        return text.value;
    });
    return {
        truncateText,
    };
}