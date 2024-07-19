<template>
    <div v-if="isOpen" class="modal-overlay">
        <div class="modal-content">
            <!-- 模态框内容 -->
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);
function openModal() {
    isOpen.value = true;
}
function closeModal() {
    isOpen.value = false;
}

// 暴露方法给父组件
defineExpose({
    openModal,
    closeModal
});
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
}

.modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    width: 300px;
    min-width: 300px;
}
</style>