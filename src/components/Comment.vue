<!-- Comment.vue -->
<template>

  <div class="comment-wrapper  flex align-items-start my-2 ">

    <div>
      <Avatar :image="comment.avatar" class="mr-2" shape="circle" :class="small ? 'small' : 'avatar'" />
    </div>
    <div class="content w-full">
      <div class="font-medium">{{ comment.username }} <span class="font-light text-sm text-gray-500">{{
        comment.timestamp }}</span> </div>
      <div class="py-1">{{ comment.text }}</div>
      <div class="actions flex align-items-center">
        <!-- likes -->
        <Button class="" icon="pi pi-thumbs-up" severity="secondary" rounded text size="small" />
        <span class="text-gray-500">1k</span>
        <!-- dislikes -->
        <Button class="ml-2" icon="pi pi-thumbs-down" severity="secondary" rounded text size="small" />
        <span class="text-gray-500">12</span>
        <span @click="toggleReplyForm" class="ml-4 cursor-pointer">Reply</span>

      </div>
      <!-- commentForm -->
      <div v-if="showReplyForm">
        <CommentForm @userComment="addReply" @focusInputBox="setFocusHandler" @cancel="cancel" small />
      </div>

    </div>

  </div>
  <!-- replies -->
  <div class="">
    <Button v-if="comment.replies.length" :label="`${comment.replies.length} replies`"
      :icon="showReplies ? 'pi pi-angle-up' : 'pi pi-angle-down'" @click="showReplies = !showReplies" severity="info" text
      rounded class="border-0 " />
    <div v-if="showReplies">
      <Comment v-for="reply in comment.replies" :key="reply.id" :small="true" :comment="reply" />
    </div>
  </div>

</template>

<script setup>
import { onMounted, ref } from 'vue';
import Avatar from "primevue/avatar";
import Button from "primevue/button";
import CommentForm from './CommentForm.vue';

const props = defineProps({
  comment: {
    type: Object,
    default: {}
  },
  small: {
    type: Boolean,
    default: false
  }
})

const cancel = () => {
  showReplyForm.value = false;
}


const showReplyForm = ref(false);

const toggleReplyForm = () => {
  showReplyForm.value = !showReplyForm.value;

}

// add reply
const addReply = (reply) => {
  if (!props.comment.replies) {
    props.comment.replies = [];
  }
  props.comment.replies.unshift(reply);
  showReplyForm.value = false;
};

// focus input
const inputFocusHandler = ref(null);
const setFocusHandler = (focusHandler) => {
  inputFocusHandler.value = focusHandler();
}

const showReplies = ref(false)


</script>

<style scoped>
.avatar {
  width: 40px;
  height: 40px;
}
.small{
  width: 25px;
  height: 25px;
}
</style>