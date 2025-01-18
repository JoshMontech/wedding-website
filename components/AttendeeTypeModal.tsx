"use client";
import React from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import {
  ATTENDEE_TYPE,
  useWeddingStore,
} from "@/app/hooks/useAttendeeTypeStore";

export const AttendeeTypeModal = () => {
  const { attendeeType, setAttendeeType } = useWeddingStore();
  const isOpen = attendeeType === null;
  return (
    <Dialog open={isOpen} onClose={() => {}} className="relative z-50">
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        {/* The actual dialog panel  */}
        <DialogPanel className="mx-auto max-w-sm rounded bg-white-primary min-w-[375px] p-4">
          <DialogTitle className="text-3xl mb-2">Are you a...</DialogTitle>
          <div className="w-full flex gap-2">
            <button
              className="flex-1 py-2 border border-gray-200 rounded"
              onClick={() => setAttendeeType(ATTENDEE_TYPE.FAMILY)}
            >
              Family Member
            </button>
            <button
              className="flex-1 py-2 border border-gray-200 rounded"
              onClick={() => setAttendeeType(ATTENDEE_TYPE.FRIEND)}
            >
              Friend
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};
