console.log('dependency');

namespace dip1 {
  class Keyboard {
    getString(): string {
      return 'Keyboard Input';
    }
  }

  class Console {
    writeString(str: string): void {
      console.log(`writed ${str} to console.`);
    }
  }

  class Task {
    static copy(keyboard: Keyboard, console: Console) {
      console.writeString(keyboard.getString());
    }
  }

  const k = new Keyboard();
  const c = new Console();
  Task.copy(k, c);
}

namespace dip2 {
  interface Input {
    getString(): string;
  }

  interface Output {
    writeString(str: string): void;
  }

  class Task {
    static copy(input: Input, output: Output) {
      output.writeString(input.getString());
    }
  }

  class Keyboard implements Input {
    getString(): string {
      return 'Keyboard Input';
    }
  }

  class Console implements Output {
    writeString(str: string): void {
      console.log(`writed ${str} to console.`);
    }
  }

  const k = new Keyboard();
  const c = new Console();
  Task.copy(k, c);

  class File implements Input {
    getString(): string {
      return 'File Input';
    }
  }

  class Monitor implements Output {
    writeString(str: string): void {
      console.log(`writed ${str} to monitor.`);
    }
  }

  const f = new File();
  const m = new Monitor();
  Task.copy(f, m);
}
