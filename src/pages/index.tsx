import { TodoItem } from "@/components/TodoItem";
import type { NextPage } from "next";

const Home: NextPage = () => (
  <div>
    <div>Home</div>
    <TodoItem
      onRemove={(id) => console.log(id)}
      todo={{ id: 1, text: "hello", done: true }}
    />
  </div>
);

export default Home;
