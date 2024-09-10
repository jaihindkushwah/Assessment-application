"use client";
import Room from "@/components/Room";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSocket } from "@/contexts/Socket";
import React from "react";

function Page() {
  const [emailId, setEmailId] = React.useState<string>("");
  const [roomId, setRoomId] = React.useState<string>("");
  const [isConnected, setIsConnected] = React.useState<boolean>(false);
  const { socket } = useSocket();

  const handleRoomJoin = () => {
    console.log({ roomId, emailId });
    socket.emit("join-room", { roomId, emailId });
    setIsConnected(true);
  };

  return (
    <div className="w-full min-h-[500px] flex items-center justify-center flex-col gap-3">
      <h1>WebRTC</h1>
      {!isConnected ? (
        <section className="flex flex-col gap-3">
          <Input
            onChange={(e) => setEmailId(e.target.value)}
            placeholder="Enter your email"
          />
          <Input
            onChange={(e) => setRoomId(e.target.value)}
            placeholder="Enter room code"
          />
          <Button onClick={handleRoomJoin}>Enter Room</Button>
        </section>
      ) : (
        <Room roomId={roomId} />
      )}
    </div>
  );
}

export default Page;
