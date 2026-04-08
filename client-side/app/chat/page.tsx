"use client";

import { useState } from "react";
import { ConversationList } from "@/app/_components/chat/ConversationList";
import { AIWorkspace } from "@/app/_components/chat/AIWorkspace";
import { FriendsWorkspace } from "@/app/_components/chat/FriendsWorkspace";
import { GroupsWorkspace } from "@/app/_components/chat/GroupsWorkspace";
import { LeftSidebar } from "@/app/_components/chat/LeftSidebar";
import { MessagePanel } from "@/app/_components/chat/MessagePanel";
import { SettingsWorkspace } from "@/app/_components/chat/SettingsWorkspace";

export default function ChatRoute() {
  const [activeTab, setActiveTab] = useState("chat");
  const isFriendsTab = activeTab === "friends";
  const isGroupsTab = activeTab === "groups";
  const isAiTab = activeTab === "ai";
  const isSettingsTab = activeTab === "settings";

  return (
    <main className="mx-auto flex h-dvh min-h-0 w-full max-w-375 overflow-hidden box-border p-0 sm:p-2 lg:p-4">
      <div className="grid h-full min-h-0 w-full grid-cols-[72px_minmax(0,1fr)] overflow-hidden rounded-none border border-[#d0d8e3] bg-[#eef2f7] shadow-[0_14px_32px_rgba(29,46,71,0.12)] sm:rounded-3xl md:grid-cols-[80px_minmax(0,1fr)] lg:grid-cols-[220px_minmax(280px,340px)_minmax(0,1fr)]">
        <LeftSidebar activeTab={activeTab} onTabChange={setActiveTab} />

        {isFriendsTab ? (
          <FriendsWorkspace />
        ) : isGroupsTab ? (
          <GroupsWorkspace />
        ) : isAiTab ? (
          <AIWorkspace />
        ) : isSettingsTab ? (
          <SettingsWorkspace />
        ) : (
          <>
            <ConversationList />
            <MessagePanel />
          </>
        )}
      </div>
    </main>
  );
}
