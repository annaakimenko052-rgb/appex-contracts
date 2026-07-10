declare module 'pizzip' {
  export default class PizZip {
    constructor(data?: string | ArrayBuffer | Uint8Array);
    getZip(): {
      generate(options: { type: 'nodebuffer'; compression?: string }): Buffer;
    };
  }
}
