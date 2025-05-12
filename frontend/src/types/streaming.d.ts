declare module 'simple-peer' {
  import { EventEmitter } from 'events';
  
  interface SimplePeerOptions {
    initiator?: boolean;
    stream?: MediaStream;
    trickle?: boolean;
    config?: RTCConfiguration;
  }

  class SimplePeer extends EventEmitter {
    constructor(opts?: SimplePeerOptions);
    signal(data: any): void;
    destroy(): void;
  }

  export = SimplePeer;
}

declare module 'socket.io-client' {
  import { EventEmitter } from 'events';
  
  interface Socket extends EventEmitter {
    connect(): Socket;
    disconnect(): Socket;
    emit(event: string, ...args: any[]): Socket;
    on(event: string, listener: (...args: any[]) => void): Socket;
    once(event: string, listener: (...args: any[]) => void): Socket;
  }

  export function io(url: string, opts?: any): Socket;
} 