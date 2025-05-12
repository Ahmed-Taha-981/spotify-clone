import { create } from 'zustand';

interface StreamStore {
  isStreaming: boolean;
  streamId: string | null;
  setIsStreaming: (isStreaming: boolean) => void;
  setStreamId: (streamId: string | null) => void;
}

export const useStreamStore = create<StreamStore>((set) => ({
  isStreaming: false,
  streamId: null,
  setIsStreaming: (isStreaming) => set({ isStreaming }),
  setStreamId: (streamId) => set({ streamId }),
})); 