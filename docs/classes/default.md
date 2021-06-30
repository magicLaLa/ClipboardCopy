[clipboardcopy](../README.md) / [Exports](../modules.md) / default

# Class: default

## Table of contents

### Constructors

- [constructor](default.md#constructor)

### Properties

- [str](default.md#str)

### Methods

- [copy](default.md#copy)
- [copyClipboardApi](default.md#copyclipboardapi)
- [copyExecCommand](default.md#copyexeccommand)
- [customError](default.md#customerror)
- [setText](default.md#settext)

## Constructors

### constructor

• **new default**(`text`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Defined in

[index.ts:2](https://github.com/magicLaLa/ClipboardCopy/blob/4b188b5/src/index.ts#L2)

## Properties

### str

• `Private` **str**: `string` = `''`

#### Defined in

[index.ts:2](https://github.com/magicLaLa/ClipboardCopy/blob/4b188b5/src/index.ts#L2)

## Methods

### copy

▸ **copy**(): `Promise`<`void` \| `Error`\>

复制方法

#### Returns

`Promise`<`void` \| `Error`\>

#### Defined in

[index.ts:21](https://github.com/magicLaLa/ClipboardCopy/blob/4b188b5/src/index.ts#L21)

___

### copyClipboardApi

▸ `Private` **copyClipboardApi**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[index.ts:33](https://github.com/magicLaLa/ClipboardCopy/blob/4b188b5/src/index.ts#L33)

___

### copyExecCommand

▸ `Private` **copyExecCommand**(): `Promise`<`never`\>

#### Returns

`Promise`<`never`\>

#### Defined in

[index.ts:38](https://github.com/magicLaLa/ClipboardCopy/blob/4b188b5/src/index.ts#L38)

___

### customError

▸ `Private` **customError**(): `DOMException`

#### Returns

`DOMException`

#### Defined in

[index.ts:67](https://github.com/magicLaLa/ClipboardCopy/blob/4b188b5/src/index.ts#L67)

___

### setText

▸ **setText**(`text`): [`default`](default.md)

设置文案

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | 文案内容 |

#### Returns

[`default`](default.md)

this 当前实例

#### Defined in

[index.ts:13](https://github.com/magicLaLa/ClipboardCopy/blob/4b188b5/src/index.ts#L13)
