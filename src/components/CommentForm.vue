<!-- CommentForm.vue -->
<template>
  <div class="flex align-items-start">
    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" class="mr-3" shape="circle"
     size="small" />
    <div class="flex-auto">
      <input type="text"   ref="commentInput" @focus="inputFocus = true" @blur="handleBlur" v-model.trim="comment" class="commentSearchBox"
        placeholder="Add a comments...">
      <!-- actions -->
      <div class="flex justify-content-end my-2" v-if="inputFocus">
        <Button label="Cancel" @click="cancel" severity="secondary" text rounded class="border-0 " /> &nbsp;
        <Button label="Comment" @click="submitComment" severity="secondary" :disabled="!comment" rounded
          class="border-0 " />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits, onMounted } from "vue";
import Avatar from "primevue/avatar";
import Button from "primevue/button";

const emit = defineEmits(['userComment','focusInputBox'])

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
}

const handleBlur = () => {
  if (!comment.value) {
    inputFocus.value = false
  }
};


onMounted(()=>{
  emit('focusInputBox', ()=>{
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
</style>