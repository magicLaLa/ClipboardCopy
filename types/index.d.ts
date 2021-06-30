declare class ClipboardCopy {
    private str;
    constructor(text: string);
    setText(text: string): this;
    copy(): Promise<Error | void>;
    private copyClipboardApi;
    private copyExecCommand;
    private customError;
}

export default ClipboardCopy;
