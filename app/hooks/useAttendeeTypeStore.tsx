import { create } from "zustand";
import { persist } from "zustand/middleware";

export enum ATTENDEE_TYPE {
  FRIEND = "Friend",
  FAMILY = "Family",
}

interface WeddingStore {
  attendeeType: ATTENDEE_TYPE | null;
  setAttendeeType: (attendeeType: ATTENDEE_TYPE | null) => void;
}

export const useWeddingStore = create<WeddingStore>()(
  persist(
    (set) => ({
      attendeeType: null,
      setAttendeeType: (attendeeType) => set({ attendeeType }),
    }),
    {
      name: "attendee-storage",
    }
  )
);
