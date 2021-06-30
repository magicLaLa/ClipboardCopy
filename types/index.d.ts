declare class ClipboardCopy {
    private str;
    constructor(text: string);
    /**
     * 设置文案
     * @param text 文案内容
     * @returns this 当前实例
     */
    setText(text: string): this;
    /**
     * 复制方法
     */
    copy(): Promise<Error | void>;
    private copyClipboardApi;
    private copyExecCommand;
    private customError;
}

export default ClipboardCopy;
