import { express } from 'express';
import { Server } from 'http';
import { Socket } from 'socket.io';

class Main {
  private previousId: string;

  constructor(
    private io: Socket,
    private express: express,
    private http: Server,
  ) {
    this.run();
  }

  run() {
    console.log('This is a run test');

    this.io.on('connection', socket => {

      const safeJoin = (currentId: string) => {

        this.io.leave(this.previousId);
        socket.join(currentId);
        this.previousId = currentId;

      }

    });

    this.http.listen(80);

  }
}