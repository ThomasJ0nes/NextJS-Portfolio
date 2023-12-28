export default class TextScramble {
    private el: HTMLElement;
    private chars: string;
    private resolve!: () => void;
    private queue: {
      from: string;
      to: string;
      start: number;
      end: number;
      char?: string;
    }[];
    private frameRequest: number | undefined;
    private frame: number;
  
    constructor(el: HTMLElement) {
      this.el = el;
      this.chars = "!<>-_\\/[]{}—=+*^?#________";
      this.queue = [];
      this.frame = 0;
      this.update = this.update.bind(this);
    }
  
    setText(newText: string): Promise<void> {
      const oldText = this.el.innerText;
      const length = Math.max(oldText.length, newText.length);
      const promise = new Promise<void>((resolve) => (this.resolve = resolve));
      this.queue = [];
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || "";
        const to = newText[i] || "";
        const start = Math.floor(Math.random() * 40);
        const end = start + Math.floor(Math.random() * 40);
        this.queue.push({ from, to, start, end });
      }
      cancelAnimationFrame(this.frameRequest as number);
      this.frame = 0;
      this.update();
      return promise;
    }
  
    update(): void {
      let output = "";
      let complete = 0;
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i];
        if (this.frame >= end) {
          complete++;
          output += to;
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar();
            this.queue[i].char = char;
          }
          output += `<span class="dud">${char}</span>`;
        } else {
          output += from;
        }
      }
      this.el.innerHTML = output;
      if (complete === this.queue.length) {
        this.resolve();
      } else {
        this.frameRequest = requestAnimationFrame(this.update.bind(this));
        this.frame++;
      }
    }
  
    private randomChar(): string {
      return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
  }
  