class ClipboardCopy {
  private str: string = '';

  /**
   * 复制方法
   */
  public async copy(text: string): Promise<Error | void> {
    this.str = text;
    try {
      await this.copyClipboardApi();
    } catch (err) {
      try {
        await this.copyExecCommand();
      } catch (error) {
        return Promise.reject(error || err || this.customError());
      }
    }
  }

  private copyClipboardApi() {
    if (!navigator.clipboard) throw this.customError();
    return navigator.clipboard.writeText(this.str);
  }

  private copyExecCommand() {
    const span = document.createElement('span');
    span.textContent = this.str;
    // 保留连续的空格和换行符
    span.style.whiteSpace = 'pre';
    span.style.webkitUserSelect = 'auto';
    span.style.userSelect = 'all';
    span.style.position = 'fixed';
    span.style.top = '-19999px';
    span.style.left = '-19999px';

    document.body.appendChild(span);

    const selection = window.getSelection();
    const range = window.document.createRange();
    selection?.removeAllRanges();
    range.selectNode(span);
    selection?.addRange(range);

    let success = false;
    try {
      success = window.document.execCommand('copy');
    } finally {
      selection?.removeAllRanges();
      document.body.removeChild(span);
    }
    if (!success) return Promise.reject(this.customError());
  }

  private customError() {
    return new DOMException('The request is not allowed', 'NotAllowedError');
  }
}

export default ClipboardCopy;
