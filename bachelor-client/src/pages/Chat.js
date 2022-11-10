import React from "react";
import ChatToUser from "../components/ChatToUser";
import UserList from "../components/UserList";

const Chat = () => {
  return (
    <main className="flex flex-1 overflow-hidden">
      <section
        aria-labelledby="primary-heading"
        className="flex h-full min-w-0 flex-1 flex-col overflow-y-auto lg:order-last bg-indigo-300"
      >
        <ChatToUser />
      </section>

      {/* Secondary column (hidden on smaller screens) */}
      <aside className="hidden lg:order-first lg:block lg:flex-shrink-0">
        <div className="relative flex h-full w-96 flex-col overflow-y-auto border-r border-gray-200 bg-white bg-indigo-600">
          <UserList />
        </div>
      </aside>
    </main>
  );
};

export default Chat;
