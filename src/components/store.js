import { reactive } from "vue";

export const store = reactive({
  allTextInStore: [
    {
      id: 1,
      title: "First Name from Store",
    },
  ],
});
