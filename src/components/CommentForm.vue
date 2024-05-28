<!-- CommentForm.vue -->
<template>
  <div class="flex align-items-start">
    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" class="mr-2"
      :class="small ? 'small' : 'avatar'" shape="circle" />
    <div class="flex-auto">
      <input type="text" ref="commentInput" @focus="inputFocus = true" v-model.trim="comment" class="commentSearchBox"
        placeholder="Add a comments...">
      <!-- actions -->
      <div class="flex justify-content-end my-2" v-if="inputFocus">
        <Button label="Cancel" @click="cancel" size="small" severity="secondary" text rounded class="border-0 " />
        &nbsp;
        <Button label="Comment" @click="submitComment" size="small" :severity="comment ? 'info' : 'secondary'"
          :disabled="!comment" rounded class="border-0 " />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits, onMounted } from "vue";
import Avatar from "primevue/avatar";
import Button from "primevue/button";
const props = defineProps({
  small: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['userComment', 'focusInputBox', 'cancel'])

const comment = ref('');

const commentInput = ref(null);

const submitComment = () => {
  if (comment.value) {

    const newComment = {
      id: Date.now(),
      username: 'current User',
      avatar: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png',
      text: comment.value,
      timestamp: new Date().toLocaleString(),
      replies: []
    };
    emit('userComment', newComment);
    comment.value = '';
    inputFocus.value = false;

  }
};


const inputFocus = ref(false);

const cancel = () => {
  comment.value = '';
  inputFocus.value = false;
  emit('cancel')
}


onMounted(() => {
  emit('focusInputBox', () => {
    commentInput.value.focus();
  });
})


</script>

<style scoped>
.commentSearchBox {
  width: 100% !important;
  padding: 5px 0;
  outline: none;
  border: none;
  border-bottom: 1px solid #909090;
  font-size: 16px;
}

.commentSearchBox:focus {
  border-bottom: 2px solid black;
}

.avatar {
  width: 40px;
  height: 40px;
}

.small {
  width: 25px;
  height: 25px;
}
</style>